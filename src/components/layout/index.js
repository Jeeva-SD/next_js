import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';

const index = ({ children }) => {
    return (
        <Container fluid>
            <Header />
            {children}
            <Footer />
        </Container>
    );
};

export default index;