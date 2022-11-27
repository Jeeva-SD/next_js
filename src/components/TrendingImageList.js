import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { trendingData } from '../constants/trendingData';

function Example() {
    const data = trendingData.trendingVideos;
    const [index, setIndex] = useState(0);

    return (
        <Carousel
            height={'300px'}
            // width={'300px'}
            animation={'slide'}
            // animation={'fade'}
            duration={1000}
            changeOnFirstRender={true}
            navButtonsAlwaysVisible={false}
            fullHeightHover={true}
            next={(e) => {
                if (e > data?.length) setIndex(0);
                else setIndex(e);
                console.log(e);
            }}
            indicators={false}>
            {data.map((item, i, data) => <Item key={i} index={index} item={item} data={data} />)}
            {/* <Item data={data} index={index} /> */}
        </Carousel>
    );
}

function Item({ index, data }) {
    const imgStyle = { width: '20%', margin: '3px' };

    console.log("indexx", index);

    const len = data?.length;

    const imageOne = data[index] ? data[index] : data[index - len];
    const imageTwo = data[index + 1] ? data[index + 1] : data[index + 1 - len];
    const imageThree = data[index + 2] ? data[index + 2] : data[index + 2 - len];
    const imageFour = data[index + 3] ? data[index + 3] : data[index + 3 - len];

    return (
        <Paper style={{ textAlign: 'center', width: 'auto' }}>
            {/* <h2>{item.name}</h2> */}
            <picture>
                <img
                    style={imgStyle}
                    src={imageOne.thumbnail}
                    alt={imageOne.title}
                    loading="lazy"
                />
                <img
                    style={imgStyle}
                    src={imageTwo?.thumbnail}
                    alt={imageTwo.title}
                    loading="lazy"
                />
                <img
                    style={imgStyle}
                    src={imageThree.thumbnail}
                    alt={imageThree.title}
                    loading="lazy"
                />
                <img
                    style={imgStyle}
                    src={imageFour?.thumbnail}
                    alt={imageFour.title}
                    loading="lazy"
                />
            </picture>
        </Paper>
    );
}

export default Example;