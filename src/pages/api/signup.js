import clientPromise from "../../utils/mongodb";

export default async (req, res) => {
  if (req.method === "POST") {
    const { email } = req.body;

    // Ensure email is provided
    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    try {
      const client = await clientPromise;
      const db = client.db();

      // Insert the email into the collection (e.g., 'signups')
      await db.collection("signups").insertOne({ email });

      return res.status(200).json({ success: true });
    } catch (error) {
      return res.status(500).json({ error: "Server error" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
};
