import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from './Header';
import Social from '../social';
import SideBar from '../Sidebar';
import Footer from './Footer';

const index = ({ children }) => {

    return (
        <Container fluid className='p-0'>
            <Header />
            <Row className='mt-4 w-100'>
                <Col className='col-8'>
                    {children}
                </Col>
                <Col className='col-4'>
                    <Social />
                    <SideBar />
                </Col>
            </Row>
            <Footer />
        </Container>
    );
};

export default index;