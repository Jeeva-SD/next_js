import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from './Header';
import Social from '../social';
import SideBar from '../Sidebar';
import Footer from './Footer';

const index = ({ children }) => {

    return (
        <Container fluid className='p-0'>
            <Row className='w-100 m-0 p-0'>
                <Header />
            </Row>
            <Row className='mt-4 mb-5 w-100 justify-content-center'>
                <Col lg={8} md={8} sm={10}>
                    {children}
                </Col>
                <Col lg={4} md={4} sm={12}>
                    <Social />
                    <SideBar />
                </Col>
            </Row>
            {/* <Row> */}
            <Footer />
            {/* </Row> */}
        </Container>
    );
};

export default index;