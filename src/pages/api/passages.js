import { Pinecone } from "@pinecone-database/pinecone";

const similarity = require("compute-cosine-similarity");

const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
const pineconeApiKey = process.env.NEXT_PUBLIC_PINECONE_API_KEY;

const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      let body = await req.json();
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

      const index = await pinecone.index(indexName);
      const results = await index.query({
        vector: embedding,
        topK: 5,
        namespace: namespace,
        includeMetadata: true,
      });
      // console.log("Results", results);
      const passages = results.matches.map((match) => ({
        content: match.metadata["Content"],
        score: match.score,
      }));
      let rel_passages = "";
      let top_3_passages = passages.slice(0, 3);
      for (let i = 0; i < passages.length; i++) {
        rel_passages = rel_passages + passages[i].content;
      }

      let passage_response = {
        all_passages: rel_passages,
        top_3_passages: top_3_passages,
      };
      passage_response = JSON.stringify(passage_response);
      // console.log("Passage Response", passage_response);
      return new Response(passage_response);
    } catch (error) {
      console.error("The Error is ", error);
      return new Response({ error: error }, { status: 500 });
    }
  }
};

export default handler;
