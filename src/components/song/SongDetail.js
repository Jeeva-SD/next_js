import React from 'react';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import { BiTimeFive } from 'react-icons/bi';
import { AiOutlineDownload, AiFillCrown } from 'react-icons/ai';
import { FiUploadCloud } from 'react-icons/fi';
// import noImage from '../../assets/images/no_image.png';
import { getPlayTime } from '../../helper/getPlayTime';
import { getPublishedTime } from '../../helper/generateUrl';
import { host } from '../../constants/config';

const VideoCard = ({ video, title }) => {

    const handleDownload = videoId => window.open(`${host}/api/download/youtube?id=${videoId}&format=audio`, '_self');

    return (
        <Container className='mt-5 m-0 p-0'>
            <Row className='pt-3 justify-content-center'>
                <Col className='col-10'><h1>{title}</h1></Col>
            </Row>

            <Row className='w-100 justify-content-center m-0 p-0'>
                <Col xl={8} lg={8} md={8} sm={12} xs={12} className='mt-3 text-center'>
                    <Image draggable="false"
                        width={500}
                        height={200}
                        alt={video.title}
                        src={video.thumbnail}
                        className='shadow img-fluid'
                    />
                </Col>
            </Row>

            <Row className='justify-content-center m-0 mt-3'>
                <Col className='col-auto border shadow-sm rounded p-2 my-2' style={{ display: 'flex', alignItems: 'center' }}>
                    <AiFillCrown color='orange' style={{ marginRight: '5px' }} />
                    {video.channelTitle}
                </Col>
                <Col className='col-auto border rounded shadow-sm p-2 mx-3 my-2' style={{ display: 'flex', alignItems: 'center' }}>

                    <><BiTimeFive color='brown' style={{ marginRight: '5px' }} /> {getPlayTime(video.duration)}</>
                </Col>
                <Col className='col-auto border rounded shadow-sm p-2 my-2' style={{ display: 'flex', alignItems: 'center' }}>
                    <FiUploadCloud color='green' style={{ marginRight: '5px' }} /> {getPublishedTime(video.publishedAt)}
                </Col>
            </Row>

            <Row className='justify-content-center mt-5 mb-5'>
                <Col className='col-auto'
                    onClick={() => handleDownload(video.videoId)}
                    style={{ display: 'flex', alignItems: 'center', color: 'blue', fontSize: '30px', cursor: 'pointer' }}
                >
                    <AiOutlineDownload />
                    <b className='download_button'>Download (mp3)</b>
                </Col>
            </Row>

            <Row className='justify-content-center'>
                <Col xl={10} lg={10} md={10} sm={11} xs={'auto'}>
                    <p>
                        <ul>{video.tags.map((e, i) => <span key={i}> {i > 0 && <span className='mx-2'> ∙ </span>} {e}</span>)}</ul>
                    </p>
                </Col>
            </Row>

            <Row className='justify-content-center mt-5 pt-3 m-0 p-0'>
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
