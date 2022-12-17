import { env } from '../../next.config';

// const prod = false;
// const stage = false;
// export const host = prod ? 'https://jee6.vercel.app' : (stage ? 'https://startling-fairy-195a44.netlify.app' : 'http://localhost:3000');

export const host = env.HOST;