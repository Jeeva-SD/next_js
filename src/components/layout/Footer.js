import React from 'react';
import { useRouter } from 'next/router';
import { Col, Row } from 'react-bootstrap';

const Footer = () => {
    const router = useRouter();

    return (
        <footer className='footer mt-5'>
            <Row className='justify-content-center py-3 text-center'>
                <Col className='col-12 mt-2 pb-2'>
                    <span>Copyright © 2023 Jee6</span>
                </Col>

                <Col className='col-10 mt-2'>
                    <b className='mx-3 pointer anchor' onClick={() => router.push('/')}>Home</b>
                    <b className='mx-3 pointer anchor' onClick={() => router.push('/p/privacy')}>Privacy Policy</b>
                    <b className='mx-3 pointer anchor' onClick={() => router.push('/p/terms-condition')}>Terms & Conditions</b>
                    <b className='mx-3 pointer anchor' onClick={() => router.push('/p/disclaimer')}>Disclaimer</b>
                </Col>
            </Row>
        </footer>
    );
};

export default Footer;