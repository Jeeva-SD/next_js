import React, { memo } from 'react';
import Head from 'next/head';

import SongDetail from '../src/components/song/SongDetail';
import { GET } from '../src/helper/api';
import { host } from '../src/constants/config';
import { generateTitle, generateUrl } from '../src/helper/generateUrl';

export const getStaticPaths = async () => {
    try {
        const songTitles = await GET(`${host}/api/youtube/video/url`);
        const paths = songTitles?.map(title => ({ params: { title } }));

        return { paths, fallback: 'blocking' };
    } catch (err) {
        console.error(err);
    }
};

export const getStaticProps = async ({ params }) => {
    try {
        const videoList = await GET(`${host}/api/youtube/video/list`, { description: 0 });
        const data = videoList?.data.filter(video => generateUrl(video.title) === params.title);
        const video = data && data.length > 0 ? data[0] : {};

        // Title
        const generatedTitle = generateTitle(video.title);
        const title = generatedTitle?.trim().length > 0 ? generatedTitle : video.title;

        // Route
        const routeUrl = generateUrl(video?.title);

        // Tag
        let gTags = await GET(`${host}/api/youtube/video/tag?q=${title}&type=Google`);
        let highToolTags = await GET(`https://tags.jee6.in/youtube/tags?q=${title}`);

        highToolTags = highToolTags && highToolTags.hasOwnProperty('data') ? highToolTags.data : [];
        gTags = gTags && gTags.hasOwnProperty('data') ? gTags.data : [];

        const keywords = [...highToolTags, ...gTags];

        return {
            props: { video, title, routeUrl, keywords },
            revalidate: 600,
        };
    } catch (err) {
        console.error(err);
    }
};


const Post = ({ video, title, routeUrl, keywords }) => {

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={keywords} />
                <meta name="keywords" content={keywords} />

                <link rel="canonical" href={`https://www.jee6.in/${routeUrl}`} />
            </Head>

            <SongDetail video={video} title={title} keywords={keywords} />
        </>
    );
};

export default memo(Post);

    // const description = generateDescription({ ...video, title });
    // const tags = generateTags({ ...video, title });