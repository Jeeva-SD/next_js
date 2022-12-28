import React from 'react';
import { useRouter } from 'next/router';
import { Col, Row } from 'react-bootstrap';
import { AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
    const router = useRouter();

    return (
        <footer className='footer'>
            <Row className='justify-content-center py-3 text-center'>
                <Col className='col-12 text-muted'>
                    <span>Copyright © 2023 Jee6</span>
                </Col>

                <Col className='col-10'>
                    <b className='mx-3 pointer anchor' onClick={() => router.push('/')}>Home</b>
                    <b className='mx-3 pointer anchor' onClick={() => router.push('/p/contact')}>Contact</b>
                    <b className='mx-3 pointer anchor' onClick={() => router.push('/p/privacy')}>Privacy policy</b>
                </Col>
            </Row>
        </footer>
    );
};

export default Footer;