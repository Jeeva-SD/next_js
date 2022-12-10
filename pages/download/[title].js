import React from 'react';
import { host } from '../../src/constants/navigation';
import { GET } from '../../src/helper/api';
import { generateUrl } from '../../src/helper/generateUrl';
import VideoDetail from '../../src/components/download/VideoDetail';

export const getStaticPaths = async () => {
    try {
        let paths = {};
        const response = await GET(`${host}/api/youtube/videos`, { urls: 1 });
        paths = response?.splice(1, 5).map(url => ({ params: { title: url } }));

        return { paths, fallback: false };
    } catch (err) {
        console.error(err);
    }
};

export const getStaticProps = async ({ params }) => {
    try {
        let data = [];
        const response = await GET(`${host}/api/youtube/videos`);
        data = response?.filter(video => generateUrl(video.title) === params.title);

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
        <VideoDetail video={video} />
    );
};

export default Title;
