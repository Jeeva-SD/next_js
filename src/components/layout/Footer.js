import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className='footer'>
            <Row className='justify-content-center w-100 py-3'>
                <Col className='col-auto'>
                    <span>Copyright © 2022 Jee6</span>
                </Col>
            </Row>
        </footer>
    );
};

export default Footer;