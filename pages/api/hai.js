
export default async function handler(req, res) {
    const conn = await getConnection();

    const result = await conn.query('select * from postDetails');
    res.status(200).json(result[0]);
}