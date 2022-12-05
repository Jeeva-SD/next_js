import React from 'react';
import { useRouter } from 'next/router';
import { host } from '../../src/constants/navigation';
import { generateUrl } from '../../src/helper.js/generateUrl';
import Image from 'next/image';

export const getStaticPaths = async () => {
    const response = await fetch(`${host}/api/youtube/videos?urls=1`);
    const urls = await response.json();
    const paths = urls.map(url => ({ params: { title: url } }));

    return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
    const response = await fetch(`${host}/api/youtube/videos`);
    const videos = await response.json();
    const videoData = videos?.filter(video => generateUrl(video.title) === params.title);

    return {
        props: { data: videoData }
    };
};

const Title = ({ data }) => {
    const router = useRouter();
    const video = data && data.length > 0 ? data[0] : [{}];

    return (
        <div style={{ width: '80%', overflowWrap: 'break-word' }}>
            {/* <Image src={video.thumbnail} alt={video.title} /> */}
            <div>Router {router.query.title}</div>
            <div>Title: {video.title}</div>
            <pre style={{ overflowWrap: 'break-word' }}>
                {video.description}
            </pre>
        </div>
    );
};

export default Title;
