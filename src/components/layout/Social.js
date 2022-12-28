import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Underline from '../common/Underline';
import { socialProfiles } from '../../constants/social';

const Social = () => {

    return (
        <Container className='mt-5'>
            <Row className='justify-content-evenly pt-3'>
                <Col className='col-12 text-center'>
                    <h3>Social</h3>
                    <Underline />
                </Col>

                {socialProfiles?.map((profile, index) => (
                    <Col className='text-center my-1' key={index}>
                        <Card className='social_card'>
                            <Card.Body>
                                <Card.Text
                                    title={profile.name}
                                    className='pointer'
                                    onClick={() => window.open(profile.url)}>
                                    {profile.icon}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Social;
