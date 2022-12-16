import React from 'react';
import { GET } from '../src/helper/api';
import { host } from '../src/constants/config';
import { generateUrl } from '../src/helper/generateUrl';
import SongDetail from '../src/components/song/SongDetail';

export const getStaticPaths = async () => {
    try {
        const songTitles = await GET(`${host}/api/youtube/videos`, { urls: 1 });
        const paths = songTitles?.map(title => ({ params: { title } }));

        return { paths, fallback: true };
    } catch (err) {
        console.error(err);
    }
};

export const getStaticProps = async ({ params }) => {
    try {
        const response = await GET(`${host}/api/youtube/videos`);
        const data = response?.filter(video => generateUrl(video.title) === params.title);

        return {
            props: { data }
        };
    } catch (err) {
        console.error(err);
    }
};

const Title = ({ data }) => {
    const video = data && data.length > 0 ? data[0] : [{}];

    return (
        <SongDetail video={video} />
    );
};

export default Title;
