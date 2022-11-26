import React from 'react';
import { Container } from 'react-bootstrap';

const Fake = () => {
    const s = () => {
        handler();
    };
    return (
        <Container>
            Fake
            {s()}
        </Container>
    );
};

export default Fake;