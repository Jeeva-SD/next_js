export const getPlayTime = playTime => {
    let duration = playTime.replace('PT', '');
    duration = duration.replace('M', 'min ');
    duration = duration.replace('S', 'sec');
    return duration;
};