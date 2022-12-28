import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AiFillInstagram } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { BsFacebook } from 'react-icons/bs';

const contact = () => {
    const contacts = [{
        name: 'Instagram',
        path: 'https://www.instagram.com/jeeva_b06',
        icon: <AiFillInstagram color='#bc2a8d' fontSize={'100px'} />
    },
    {
        name: 'Email',
        path: 'mailto:jeetamil01@gmail.com',
        icon: <a href="mailto:jeetamil01@gmail.com"><MdEmail color='brown' fontSize={'100px'} /></a>
    },
    {
        name: 'Facebook',
        path: 'https://www.facebook.com/people/Jeeva-B/100010571169792',
        icon: <BsFacebook color='blue' fontSize={'100px'} />
    }];

    return (
        <Container className='mt-5 pt-5 text-center'>
            <Row className='justify-content-center mb-5'>
                <Col className='col-auto'>
                    <h4>Contact Jee6!</h4>
                </Col>
            </Row>

            <Row className='justify-content-center'>
                {contacts?.map((contact, index) => <Col xl={3} lg={3} md={3} sm={8} xs={8} key={index}>
                    <Card>
                        <Card.Body>
                            <Card.Title>{contact.name}</Card.Title>
                            <Card.Text className='pointer' onClick={() => window.open(contact.path)}>
                                {contact.icon}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>)}
            </Row>

        </Container>
    );
};

export default contact;
