import mysql from 'mysql2';
import { credentials } from '../constants/database';

let pool = null;
const createConnection = () => mysql.createPool(credentials).promise();

export const getConnection = async () => {
    if (!pool) pool = createConnection();
    return pool;
};