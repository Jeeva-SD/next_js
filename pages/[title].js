import React, { useEffect, useCallback, useState } from 'react';
import Head from 'next/head';
import SongDetail from '../src/components/song/SongDetail';
import { GET } from '../src/helper/api';
import { host } from '../src/constants/config';
import { generateDescription, generateTags, generateTitle, generateUrl } from '../src/helper/generateUrl';

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
        const response = await GET(`${host}/api/youtube/video/list`, { description: 0 });
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

    const getTags = useCallback(async () => {
        const response = await GET(`${host}/api/youtube/video/tag?q=${title}&type=Google`);
        setKeyWords([title, ...response]);
        return response;
    }, [title]);

    useEffect(() => {
        getTags();
    }, [title, getTags]);

    const [keywords, setKeyWords] = useState([]);

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={keywords.length > 0 ? keywords?.slice(0, 10) : description} />
                <meta name="keywords" content={tags}></meta>
                <meta name="robots" content="index, follow" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Head>
            <SongDetail video={video} title={title} keywords={keywords} />
        </>
    );
};

export default Post;
