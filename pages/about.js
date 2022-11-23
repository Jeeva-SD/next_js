import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

const about = () => {
    return (
        <Container>
            <Row>
                <Col className='col-12'>
                    Hello
                </Col>
                <Col className='col-12'>
                    Hello
                </Col>
                <Button variant='primary'>submit</Button>
            </Row>
        </Container>
    );
};

export default about;