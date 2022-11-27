import { getConnection } from "./connection";

export const execute = async (query, params) => {
    const conn = await getConnection();
    const result = await conn.query(query, params);
    return Array.isArray(result) ? result[0] : [];
};