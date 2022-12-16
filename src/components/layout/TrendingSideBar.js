import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import { GET } from '../../../src/helper/api';
import { host } from '../../../src/constants/config';
import { useRouter } from 'next/router';
import { FiUploadCloud } from 'react-icons/fi';
import { generateTitle, generateUrl, getPublishedTime } from '../../helper/generateUrl';
import Underline from '../common/Underline';
import Spinner from '../common/Spinner';
import style from '../../../styles/trendingSidebar.module.css';
// import { trendingData } from '../../constants/trendingData';

const TrendingSideBar = () => {
    const router = useRouter();
    const [trendingVideos, setTrendingVideos] = useState([]);

    useEffect(() => {
        GET(`${host}/api/youtube/videos`, { trending: 1, count: 15 })
            .then(data => setTrendingVideos(data));
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
                {trendingVideos?.trendingVideos?.map((e, index) => {
                    const title = generateTitle(e.title);
                    return (
                        <Col className={`${style.trending_card}  col-12 my-2`} key={index} onClick={() => router.push(generateUrl(e.title))}>
                            <Row className='justify-content-evenly'>
                                <Col xl={5} lg={5} md={5} sm={5} xs={5} className='pr-0'>
                                    <Image variant="bottom" src={e.thumbnail} className='img-fluid py-2' alt={title} />
                                </Col>
                                <Col xl={7} lg={7} md={7} sm={7} xs={7} className='p-0'>
                                    <Row className={style.card_body}>
                                        <Col className={`${style.title} col-11`}>
                                            <h6>{title}</h6>
                                        </Col>
                                        <Col className='col-11'>
                                            <span className='text-muted published_date'><FiUploadCloud /> {getPublishedTime(e.publishedAt)}</span>
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