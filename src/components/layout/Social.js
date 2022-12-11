import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { socialProfiles } from '../../constants/social';
import style from '../../../styles/social.module.css';

const Social = () => {
    return (
        <Container className='mt-5'>
            <Row className='d-flex justify-content-evenly pt-3 w-100 '>
                <Col className='col-12 text-center'>
                    <h3>SOCIAL</h3>
                </Col>
                <Col className={`${style.social_icon} text-center`}>
                    {socialProfiles?.map((profile, index) => (
                        <span
                            key={index}
                            className={style[profile.social]}
                            title={profile.name}
                            onClick={() => window.open(profile.url)}
                        >
                            {profile.icon}
                        </span>
                    ))}
                </Col>
            </Row>
        </Container>
    );
};

export default Social;