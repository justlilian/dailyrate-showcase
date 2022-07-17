import mongo from "../../utils/db";

export default async function handler (req, res) {
  const client = await mongo;
  const db = client.db('dailyrate');
  const { email } = req.body;
	
	if (!email) {
	  return res.status(400).json({ error: 'Email is required' });
	}
  await db.collection("emails").insertOne({ email });

  return res.status(201).json({ error: '' });
}