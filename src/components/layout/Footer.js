import React from 'react';
import { Col, Row } from 'react-bootstrap';


// position: absolute;
// bottom: 0;
// width: 100 %;
// height: 2.5rem;

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: '#DCDCDC',
            position: 'inherit',
            bottom: 0,
            width: '100%',
            // marginTop: '20px'
        }}>
            <Row className='justify-content-center w-100 py-3'>
                <Col className='col-auto'>
                    <span>Copyright © 2022 Jee6</span>
                </Col>
            </Row>
        </footer>
    );
};

export default Footer;