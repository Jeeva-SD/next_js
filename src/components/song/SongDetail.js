import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { BiTimeFive } from 'react-icons/bi';
import { AiOutlineDownload, AiFillCrown } from 'react-icons/ai';
import { getPlayTime } from '../../helper/getPlayTime';

const VideoCard = ({ video }) => {
    return (
        <Container className='mt-5 m-0 p-0'>
            <Row className='pt-3 justify-content-center'>
                <Col className='col-10'><h1>{video.title}</h1></Col>
            </Row>

            <Row style={{ fontSize: '20px' }} className='justify-content-center m-0 mt-5'>
                <Col className='col-auto' style={{ display: 'flex', alignItems: 'center' }}>
                    <AiFillCrown color='orange' />
                    <span>{video.channelTitle}</span>
                </Col>
                <Col className='col-auto' style={{ display: 'flex', alignItems: 'center' }}>
                    <BiTimeFive color='brown' />
                    <span>{getPlayTime(video.duration)}</span>
                </Col>
            </Row>

            <Row className='w-100 justify-content-center m-0 p-0'>
                <Col xl={8} lg={8} md={8} sm={12} xs={12} className='mt-3'>
                    <Image rounded={true} className='shadow img-fluid' src={video.thumbnail} alt={video.title} />
                </Col>
            </Row>

            <Row className='justify-content-center mt-5 m-0 p-0'>
                <Col xl={'auto'} lg={3} md={3} sm={4} xs={'auto'}>
                    <AiOutlineDownload color='blue' />
                    <b style={{ color: 'blue', fontSize: '20px', cursor: 'pointer' }}>Download</b>
                </Col>
            </Row>

            <Row className='justify-content-center mt-5 m-0 p-0'>
                <Col xl={10} lg={10} md={10} sm={11} xs={'auto'}>
                    <pre style={{
                        overflowX: 'auto',
                        wordWrap: 'break-word',
                        whiteSpace: 'pre-wrap'
                    }}>
                        {video.description}
                    </pre>
                </Col>
            </Row>
        </Container>
    );
};

export default VideoCard;