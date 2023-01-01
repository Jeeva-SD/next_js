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

                <Col xl={'auto'} lg={'auto'} md={'auto'} sm={12} xs={12} className='mt-2'><b className='mx-3 pointer anchor' onClick={() => router.push('/')}>Home</b></Col>
                <Col xl={'auto'} lg={'auto'} md={'auto'} sm={12} xs={12} className='mt-2'><b className='mx-3 pointer anchor' onClick={() => router.push('/p/privacy')}>Privacy Policy</b></Col>
                <Col xl={'auto'} lg={'auto'} md={'auto'} sm={12} xs={12} className='mt-2'><b className='mx-3 pointer anchor' onClick={() => router.push('/p/terms-condition')}>Terms & Conditions</b></Col>
                <Col xl={'auto'} lg={'auto'} md={'auto'} sm={12} xs={12} className='mt-2'><b className='mx-3 pointer anchor' onClick={() => router.push('/p/disclaimer')}>Disclaimer</b></Col>
            </Row>
        </footer>
    );
};

export default Footer;