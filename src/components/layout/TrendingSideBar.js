import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import { GET } from '../../../src/helper/api';
import { host } from '../../../src/constants/config';
import style from '../../../styles/trendingSidebar.module.css';
import { useRouter } from 'next/router';
import { generateUrl } from '../../helper/generateUrl';
import Underline from '../common/Underline';
import Spinner from '../common/Spinner';

const TrendingSideBar = () => {
    const router = useRouter();
    const [trendingVideos, setTrendingVideos] = useState([]);

    useEffect(() => {
        GET(`${host}/api/youtube/videos`, { trending: 1, count: 15 })
            .then(data => setTrendingVideos(data));
    }, []);

    return (
        <Container className={`mt-5 pt-2 ${style.home_card_container}`}>
            <Row className='justify-content-center'>
                <Col className='col-10 text-center'>
                    <h3>Trending Songs</h3>
                    <Underline />
                </Col>
            </Row>

            {trendingVideos?.trendingVideos?.map((e, index) => {
                return <Row className={`justify-content-center mt-2 ${style.sidebar_row} p-2`} key={index} onClick={() => router.push(generateUrl(e.title))}>
                    <Col xl={5} lg={5} md={4} sm={6} xs={6} className={`shadow p-2`}>
                        <Image className='img-fluid' src={e.thumbnail} alt={e.title} />
                    </Col>
                    <Col xl={7} lg={7} md={6} sm={6} xs={6} className={`shadow ${style.trending_title}`}>
                        <h6 className={style.h5}>{e.title}</h6>
                    </Col>
                </Row>;
            })}

            <Row className='justify-content-center my-5'>
                <Col className='col-auto'>
                    {trendingVideos?.length === 0 && <Spinner />}
                </Col>
            </Row>
        </Container>
    );
};

export default TrendingSideBar;