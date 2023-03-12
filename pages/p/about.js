import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AiFillYoutube } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdHighQuality } from 'react-icons/md';

const about = () => {
    return (
        <Container className='mt-5 pt-5 border rounded'>
            <Row className='justify-content-center'>
                <Col className='col-auto'>
                    <h4>About Jee6!</h4>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col xl={8} lg={8} md={10} sm={10} xs={10}>
                    <div className='text-center pointer' onClick={() => window.open('https://www.instagram.com/jeeva_b06')}>
                        <BsFillPersonFill fontSize={'80px'} color={'orange'} />
                    </div>
                    <p>Hi Guys, This is Jee6.</p>
                    <p>
                        Jee6 allows you to get the latest and trending songs in India.
                        We only post the trending and quality content across India which you love the most.
                    </p>
                </Col>
            </Row>

            <Row className='justify-content-center'>
                <Col className='col-auto'>
                    <h4>Why Jee6?</h4>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col xl={8} lg={8} md={10} sm={10} xs={10}>
                    <div className='text-center pointer' onClick={() => window.open('/', '_self')}>
                        <MdHighQuality fontSize={'80px'} color={'blue'} />
                    </div>
                    <p>We offers you the songs you need with highest quality as possibe.</p>
                    <p>
                        Jee6 provides you the trending songs with download option with which you can download the songs directly
                        to your gallery without any third party plugins
                    </p>
                    <p>
                        And unlike other sites, We do not push you with tons of ads such as pop up ads. So you can easily download your
                        interested songs with your simle on face.
                    </p>
                </Col>
            </Row>

            <Row className='justify-content-center'>
                <Col className='col-auto'>
                    <h4>A Bit More</h4>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col xl={8} lg={8} md={10} sm={10} xs={10}>
                    <div className='text-center pointer' onClick={() => window.open('https://www.youtube.com/@jee__6334')}>
                        <AiFillYoutube color={'red'} fontSize={'80px'} />
                    </div>
                    <p>
                        As the quality content on website, we are also posting ringtones in youtube.
                        So if you are interested in ringtones too, then feel free to follow us on youtube.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default about;

// Mulish,sans-serif