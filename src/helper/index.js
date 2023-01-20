import { colorArr } from '../constants';

export const getRandomColor = () => {
    const colorIndex = Number((Math.random() * (colorArr.length - 1)).toFixed(0));
    return colorArr[colorIndex];
}