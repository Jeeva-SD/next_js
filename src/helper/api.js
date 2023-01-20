import axios from 'axios';

export const GET = async (url, params) => {
    try {
        const response = await axios.get(url, { headers: { 'Accept-Encoding': '*' }, params });

        if (response && response.data) return response.data;
        else return [];
    } catch (err) {
        console.error(err);
    }
};