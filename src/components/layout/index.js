import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from './Header';
import Social from './Social';
import TrendingSideBar from '../layout/TrendingSideBar';
import Footer from './Footer';

const Layout = ({ children }) => {

    return (
        <Container fluid className='p-0'>
            <Row className='w-100 m-0 p-0'>
                <Header />
            </Row>
            <Row className='w-100 m-0 p-0'>
                <Col lg={8} md={8} sm={10}>
                    {children}
                </Col>
                <Col lg={4} md={4} sm={12}>
                    <Social />
                    <TrendingSideBar />
                </Col>
            </Row>
            <Row className='w-100 m-0 p-0'>
                <Footer />
            </Row>
        </Container>
    );
};

export default Layout;