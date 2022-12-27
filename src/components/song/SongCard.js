import React from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
// import { BiTimeFive } from 'react-icons/bi';
import { AiOutlineDownload, AiFillCrown } from 'react-icons/ai';
import Divider from '../common/Divider';
import { generateUrl } from '../../helper/generateUrl';
import style from '../../../styles/home_page.module.scss';

const Build = ({ videos, router }) => {

    return (
        <Container className={`mt-5 ${style.home_card_container}`}>
            <Row>
                {videos?.slice(0, 15).map((video, index) => (
                    <Col lg={4} md={6} sm={12}
                        className={`${style.video_card}`}
                        key={index}
                    >
                        <Card className={`${style.card} shadow-sm p-3 my-3 bg-body rounded`}>
                            <Card.Img
                                className={style.card_image}
                                draggable="false"
                                variant="top"
                                src={video.thumbnail} />

                            <Card.Body>
                                <Card.Title className={`${style.card_title}`}>
                                    {video.title}
                                </Card.Title>
                                <Card.Text className={`${style.card_text}`}>
                                    {video.description}
                                </Card.Text>

                                <Divider />

                                <Row className={`${style.card_footer} text-muted justify-content-center`}>
                                    <Col className={`${style.channel_title} col-4 p-0`}>
                                        <AiFillCrown color='orange' />
                                        <span className={style.footer_span}>{video.channelTitle}</span>
                                    </Col>
                                    <Col className={`${style.card_col} col-1 px-1`}>
                                        <Divider type={1} />
                                    </Col>
                                    {/* <Col className={`${style.duration} col-3 p-0`}>
                                        <BiTimeFive />
                                        <span className={style.footer_span}>2min 50sec</span>
                                    </Col>
                                    <Col className={`${style.card_col} col-1 p-0`}>
                                        <Divider type={1} />
                                    </Col> */}
                                    <Col className={`${style.card_col} col-4 p-0`} onClick={() => router.push(`${generateUrl(video.title)}`)}>
                                        <AiOutlineDownload />
                                        <span className={style.footer_span}><b className={style.bold_download}>Download</b></span>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Build;
