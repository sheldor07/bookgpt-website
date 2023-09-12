import clientPromise from "../../utils/mongodb";

export default async (req, res) => {
  if (req.method === "POST") {
    const { query, bookName } = req.body;

    try {
      const client = await clientPromise;
      const db = client.db();

      // Insert the query into the collection 'queries'
      await db.collection("queries").insertOne({ bookName, query });

      return res.status(200).json({ success: true });
    } catch (error) {
      return res.status(500).json({ error: "Server error" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
};
