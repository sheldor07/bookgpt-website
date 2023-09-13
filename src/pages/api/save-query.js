import clientPromise from "../../utils/mongodb";

export default async (req, res) => {
  if (req.method === "POST") {
    const bearerAuth = req.headers.authorization; // Extract the token
    const authToken = bearerAuth.split(" ")[1];
    console.log("this is from client", authToken);
    
    console.log("this is on the sverer", process.env.NEXT_PUBLIC_MONGODB_TOKEN);
    if (authToken !== process.env.NEXT_PUBLIC_MONGODB_TOKEN)
      return res.status(401).json({ error: "Unauthorized" });
    const { query, bookName } = req.body;
    // Validate the query and bookName
    if (!query || !bookName) {
      return res.status(400).json({ error: "Missing query or bookName" });
    }

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
