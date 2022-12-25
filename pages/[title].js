import React from 'react';
import { GET } from '../src/helper/api';
import { host } from '../src/constants/config';
import { generateDescription, generateTags, generateTitle, generateUrl } from '../src/helper/generateUrl';
import SongDetail from '../src/components/song/SongDetail';
import Head from 'next/head';

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
        const response = await GET(`${host}/api/youtube/video/list`);
        const data = response?.data.filter(video => generateUrl(video.title) === params.title);

        return {
            props: { data },
            revalidate: 600,
        };
    } catch (err) {
        console.error(err);
    }
};

const Post = ({ data }) => {
    const video = data && data.length > 0 ? data[0] : [{}];
    const title = generateTitle(video.title);
    const description = generateDescription({ ...video, title });
    const tags = generateTags({ ...video, title });

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={tags}></meta>
                <meta name="robots" content="index, follow" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Head>
            <SongDetail video={video} title={title} />
        </>
    );
};

export default Post;
