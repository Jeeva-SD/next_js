import React from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import { BiTimeFive } from 'react-icons/bi';
import { AiOutlineDownload, AiFillCrown } from 'react-icons/ai';
import { BsPersonCircle } from 'react-icons/bs';
import style from '../../../styles/download_content.module.scss';

const Build = ({ video }) => {

    return (
        <Container className='mt-5 home_card_container'>
            <Row>
                <Col lg={4} md={6} sm={12} className='video_card'>
                    <Card className='shadow-sm p-3 my-3 bg-body rounded card'>
                        <Card.Img draggable="false" variant="top" src={video.thumbnail} />
                        <Card.Body>
                            <Card.Title className='card_title'>{video.title}</Card.Title>
                            <Card.Text className='card_text'>
                                Some quick example text to build on the card title and make up the
                                bulk of the card content.
                            </Card.Text>
                            <hr />
                            <Row className='card_footer text-muted justify-content-evenly'>
                                <Col>
                                    <AiFillCrown color='yellow' />
                                    T-series
                                    <span style={{ height: '100%' }}>
                                        <span className="vr mx-2"></span>
                                    </span>
                                </Col>
                                <Col><BiTimeFive />
                                    2min 50sec
                                    <span style={{ height: '100%' }}>
                                        <span className="vr mx-2"></span>
                                    </span>
                                </Col>
                                <Col>
                                    <AiOutlineDownload />
                                    <b className='bold_download'>Download</b>
                                    {/* <Button variant="primary">Download</Button> */}
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Build;