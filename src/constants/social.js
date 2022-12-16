import { AiFillInstagram, AiFillYoutube } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';

export const socialProfiles = [
    {
        name: 'jeeva_b06',
        url: 'https://www.instagram.com/jeeva_b06',
        icon: <AiFillInstagram color={'#8a3ab9'} fontSize={'50px'} />,
        color: '#8a3ab9',
        social: 'Instagram'
    },
    {
        name: 'jee__6',
        url: 'https://www.facebook.com/people/Jeeva-B/100010571169792',
        icon: <BsFacebook color={'blue'} fontSize={'50px'} />,
        color: 'blue',
        social: 'Facebook'
    },
    {
        name: 'Jeeva B',
        url: 'https://www.youtube.com/@jee__6334',
        icon: <AiFillYoutube color={'red'} fontSize={'50px'} />,
        color: 'red',
        social: 'Youtube'
    }
];


// let time = a.replace("PT", "");
//      time = time.replace("M", "min ");
//      time = time.replace("S", "sec ");