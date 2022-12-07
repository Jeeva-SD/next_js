import { AiTwotoneFire, AiFillHome } from 'react-icons/ai';
import { BsFillTelephoneFill, BsFillPersonFill } from 'react-icons/bs';

const prod = false;
export const host = prod ? 'https://jee6.vercel.app' : 'http://localhost:3000';

export const homeTabs = [
    {
        id: 'loaxsa',
        title: 'Home',
        path: '/',
        icon: <AiFillHome />
    },
    {
        id: 'loaxsa',
        title: 'Trending',
        path: '/trending',
        icon: <AiTwotoneFire />
    },
    {
        id: 'sedssa',
        title: 'About',
        path: '/p/about',
        icon: <BsFillPersonFill />
    },
    {
        id: 'assaa',
        title: 'Contact',
        path: '/p/contact',
        icon: <BsFillTelephoneFill />
    }
];