import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import { GET } from '../../../src/helper/api';
import { host } from '../../../src/constants/config';
import { useRouter } from 'next/router';
import { FiUploadCloud } from 'react-icons/fi';
import { generateTitle, generateUrl, getPublishedTime } from '../../helper/generateUrl';
import Underline from '../common/Underline';
import Spinner from '../common/Spinner';
import style from '../../../styles/trendingSidebar.module.css';
import LetterAvatar from '../common/LetterAvatar';
import { BiTimeFive } from 'react-icons/bi';
import { getPlayTime } from '../../helper/getPlayTime';
import { AiFillCrown } from 'react-icons/ai';
import TitleText from '../common/TitleText';
// import { trendingData } from '../../constants/trendingData';

const TrendingSideBar = () => {
    const router = useRouter();
    const [trendingVideos, setTrendingVideos] = useState([]);

    useEffect(() => {
        GET(`${host}/api/youtube/video/trending`, { trending: 1, count: 10 })
            .then(response => setTrendingVideos(response.data));
    }, []);

    return (
        <Container className='mt-5'>
            <Row className='justify-content-center'>
                <Col className='col-10 text-center'>
                    <h3>Trending</h3>
                    <Underline />
                </Col>
            </Row>

            <Row className='justify-content-center'>
                {trendingVideos?.trendingVideos?.filter((e, i) => i <= 10).map((e, index) => {
                    const title = generateTitle(e.title);
                    return (
                        <Col className={`${style.trending_card} col-12 my-2`} key={index} onClick={() => router.push(`/${generateUrl(e.title)}`)}>
                            <Row className='justify-content-center p-2'>
                                <Col className='col-4 p-0'>
                                    {/* <AiFillCrown color='orange' fontSize={50} style={{ marginRight: '5px' }} /> */}
                                    <TitleText title={e.title} height={'100px'} wordCount={2} fontSize={10} />
                                </Col>
                                <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className='col-8 text-center'>
                                    <Row>
                                        <Col className='col-12'>
                                            <span className='trending-title'>{title}</span>
                                        </Col>
                                        <Col>
                                            <><BiTimeFive color='brown' style={{ marginRight: '5px' }} /> {getPlayTime(e.duration)}</>

                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    );
                })}
            </Row>

            <Row className='justify-content-center my-5'>
                <Col className='col-auto'>
                    {trendingVideos?.length === 0 && <Spinner />}
                </Col>
            </Row>
        </Container>
    );
};

export default TrendingSideBar;


{/* <Col xl={2} lg={2} md={2} sm={2} xs={2} className='pr-0 mx-2'> */ }
{/* <Image
        src={e.thumbnail}
        className='img-fluid py-2'
        alt={title}
        width={350}
        height={200}
    /> */}
{/* <LetterAvatar char={title.charAt(0)} /> */ }
{/* </Col> */ }