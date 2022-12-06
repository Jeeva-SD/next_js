import React from 'react';
import { useRouter } from 'next/router';
import { host } from '../../src/constants/navigation';
import { generateUrl } from '../../src/helper.js/generateUrl';
import axios from 'axios';

export const getStaticPaths = async () => {
    try {
        let paths = {};
        const url = `${process.env.HOST}/api/youtube/videos?urls=1`;

        const resp = await axios.get(url, { headers: { 'Accept-Encoding': 'application/json' } });
        paths = resp?.data.map(url => ({ params: { title: url } }));

        return { paths, fallback: false };
    } catch (err) {
        console.error(err);
    }
};

export const getStaticProps = async ({ params }) => {
    try {
        let data = [];
        const url = `${process.env.HOST}/api/youtube/videos`;

        const resp = await axios.get(url, { headers: { 'Accept-Encoding': 'application/json' } });
        data = resp?.data.filter(video => generateUrl(video.title) === params.title);

        return {
            props: { data }
        };
    } catch (err) {
        console.error(err);
    }
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
