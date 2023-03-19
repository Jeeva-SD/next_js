import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BiTimeFive } from 'react-icons/bi';
import { AiOutlineDownload, AiFillCrown } from 'react-icons/ai';
import { FiUploadCloud } from 'react-icons/fi';

import { getPlayTime } from '../../helper/getPlayTime';
import { getPublishedTime } from '../../helper/generateUrl';
import { host } from '../../constants/config';
import TitleText from '../common/TitleText';

// import { AiFillYoutube } from 'react-icons/ai';
// import { MdHighQuality } from 'react-icons/md';
// import { GiLoveSong } from 'react-icons/gi';
// import noImage from '../../assets/images/no_image.png';

const VideoCard = ({ video, title, keywords }) => {

    const [adSenseCode, setAdsenseCode] = useState(null);
    const tags = useMemo(() => [...keywords, ...video?.tags], [keywords, video?.tags]);
    const handleDownload = useCallback((videoId) => window.open(`${host}/api/download/youtube?id=${videoId}&format=audio`, '_self'), []);

    useEffect(() => {
        setAdsenseCode(
            `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6663847551285629"
            crossorigin="anonymous"></script>
            <!-- Jee6 Display Ads Square -->
            <ins class="adsbygoogle"
                style="display:block"
                data-ad-client="ca-pub-6663847551285629"
                data-ad-slot="2054475167"
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>
            <script>
                (adsbygoogle = window.adsbygoogle || []).push({});
            </script>`
        );
    }, []);

    return (
        <Container style={{ borderRadius: '5px' }} className='mt-5 m-0 p-0 border shadow-sm'>
            <Row className='pt-3 justify-content-center'>
                <Col className='col-10'>
                    <article>
                        <h1>{title}</h1>
                    </article>
                </Col>
            </Row>

            <Row className='w-100 justify-content-center m-0 p-0'>
                <Col xl={8} lg={8} md={8} sm={12} xs={12} className='mt-3 text-center'>
                    {/* <Image draggable="false"
                        width={500}
                        height={200}
                        alt={video.title}
                        src={video.thumbnail}
                        className='shadow img-fluid'
                    /> */}

                    <TitleText title={title} />
                </Col>
            </Row>

            <Row className='justify-content-center m-0 mt-4'>
                <Col className='col-auto border shadow-sm rounded p-2 my-2' style={{ display: 'flex', alignItems: 'center' }}>
                    <AiFillCrown color='orange' style={{ marginRight: '5px' }} />
                    {video.channelTitle}
                </Col>
                <Col className='col-auto border rounded shadow-sm p-2 mx-3 my-2' style={{ display: 'flex', alignItems: 'center' }}>
                    <BiTimeFive color='brown' style={{ marginRight: '5px' }} /> {getPlayTime(video.duration)}
                </Col>
                <Col className='col-auto border rounded shadow-sm p-2 my-2' style={{ display: 'flex', alignItems: 'center' }}>
                    <FiUploadCloud color='green' style={{ marginRight: '5px' }} /> {getPublishedTime(video.publishedAt)}
                </Col>
            </Row>

            <Row className='justify-content-center'>
                <Col className='col-auto text-center'>
                    <div dangerouslySetInnerHTML={{ __html: adSenseCode }}></div>
                </Col>
            </Row>

            <Row className='justify-content-center mt-4 mb-5'>
                <Col className='col-auto'
                    onClick={() => handleDownload(video.videoId)}
                    style={{ display: 'flex', alignItems: 'center', color: 'blue', fontSize: '30px', cursor: 'pointer' }}
                >
                    <AiOutlineDownload />
                    <b className='download_button'>Download (mp3)</b>
                </Col>
            </Row>

            {/* <Row className='justify-content-center mt-5'>
                <Col xl={10} lg={10} md={10} sm={11} xs={11}>
                    <div className='text-center pointer' onClick={() => window.open('/', '_self')}>
                        <MdHighQuality fontSize={'80px'} color={'blue'} />
                    </div>
                    <b>HIGHEST QUALITY AS POSSIBLE</b>
                    <p>
                        Our commitment is to provide you with the highest quality content possible.
                        We understand the importance of clear, accurate, and informative content and strive to deliver it to you every time.
                        Trust us to deliver exceptional content that meets your needs and exceeds your expectations.
                    </p>
                </Col>
            </Row>

            <Row className='justify-content-center'>
                <Col xl={10} lg={10} md={10} sm={11} xs={11}>
                    <div className='text-center pointer' onClick={() => window.open('https://www.youtube.com/@jee__6334')}>
                        <AiFillYoutube color={'red'} fontSize={'80px'} />
                    </div>
                    <b>FOLLOW US ON YOUTUBE</b>
                    <p>
                        Stay up to date on the latest and hottest ringtones by following our YouTube channel.
                        We regularly upload new and exclusive ringtones for our subscribers to enjoy.
                        From pop to hip-hop, we have got a wide selection of ringtones to choose from.
                        Dont miss out on the fun, hit the subscribe button and join our community of ringtone enthusiasts today!
                    </p>
                </Col>
            </Row> */}

            <Row className='justify-content-center'>
                <Col xl={10} lg={10} md={10} sm={11} xs={11}>
                    {/* <div className='text-center pointer' onClick={() => window.open('https://www.youtube.com/@jee__6334')}>
                        <GiLoveSong color={'orange'} fontSize={'80px'} />
                    </div> */}
                    <h2><b>{title.toUpperCase()}</b></h2>

                    <div>
                        <article>
                            {tags && tags?.length > 0 && tags.map((e, i) => <li key={i}>{e}</li>)}
                        </article>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default memo(VideoCard);