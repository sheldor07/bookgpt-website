import { Pinecone } from "@pinecone-database/pinecone";
import bodyParser from "body-parser";
import { NextResponse } from "next/server";

const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
const pineconeApiKey = process.env.NEXT_PUBLIC_PINECONE_API_KEY;
export const config = {
  api: {
    bodyParser: true,
  },
};

const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      let body = req.body;
      console.log("Body", body);
      let query = body.question;
      let bookName = body.bookName;
      const pinecone = new Pinecone({
        apiKey: pineconeApiKey,
      });
      const indexName = "gptbookclub";
      const namespace = bookName;
      // console.log("embeddings",data);
      const embed = await fetch("https://api.openai.com/v1/embeddings", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        method: "POST",
        body: JSON.stringify({
          model: "text-embedding-ada-002",
          input: query,
        }),
      });

      const json = await embed.json();
      const embedding = json.data[0].embedding;

      const index = pinecone.index(indexName);
      const results = await index.namespace(namespace).query({
        vector: embedding,
        topK: 5,
        includeMetadata: true,
      });
      console.log("Results", results);
      const passages = results.matches.map((match) => ({
        content: match.metadata["Content"],
        score: match.score,
      }));
      let rel_passages = "";
      let top_3_passages = passages.slice(0, 3);
      console.log("Top 3 Passages", top_3_passages);
      for (let i = 0; i < passages.length; i++) {
        rel_passages = rel_passages + passages[i].content;
      }

      let passage_response = {
        all_passages: rel_passages,
        top_3_passages: top_3_passages,
      };
      passage_response = JSON.stringify(passage_response);
      // console.log("Passage Response", passage_response);
      res.status(200).json(passage_response);
    } catch (error) {
      console.error("The Error is ", error);
      res.status(500).json({ error: error.message });
    }
  }
};

export default handler;
