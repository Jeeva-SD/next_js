import React, { useMemo } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import style from '../../../styles/title_text.module.css';
import { colorArr } from '../../constants';
import { generateTitle } from '../../helper/generateUrl';

const TitleText = ({ title, height, wordCount, fontSize = 20 }) => {

    const titleColor = colorArr;

    const { text, color } = useMemo(() => {
        const titleArr = title.split(' ');

        let titleText = generateTitle(title).replace('Song Download', '');
        titleText = titleText.trim().length > 0 ? titleText : titleArr.length > 0 ? titleArr[0] : '';

        const colorIndex = Number((Math.random() * (titleColor.length - 1)).toFixed(0));
        const color = titleColor[colorIndex];

        if (wordCount) {
            titleText = titleText.split(' ').filter((e, i) => i < wordCount).join(' ')
        }

        return { text: titleText, color }
    }, [title, titleColor, wordCount]);

    return (
        <Container className={style.container} style={{ color: color, height, minHeight: height }}>
            <Row>
                <Col className={style.title_text} style={{ fontSize }}>
                    {text.toUpperCase()}
                </Col>
            </Row>
        </Container>
    )
}

export default TitleText