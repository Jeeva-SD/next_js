import React from 'react';
import { useRouter } from 'next/router';
import { Col, Row } from 'react-bootstrap';

const Footer = () => {
    const router = useRouter();

    return (
        <footer className='footer'>
            <Row className='justify-content-center py-3'>
                <Col className='col-2 m-0 p-0 text-center'>
                    <span>Copyright © 2022 Jee6</span>
                </Col>
                <Col className='col-1 m-0 p-0'> | </Col>
                <Col className='col-2 m-0 p-0 text-start' onClick={() => router.push('/privacy')}>
                    <span>Privacy policy</span>
                </Col>
            </Row>
        </footer>
    );
};

export default Footer;