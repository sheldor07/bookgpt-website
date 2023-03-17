
import { supabase,supabaseUrl} from "../../utils/supabase";

const similarity = require( 'compute-cosine-similarity' );
const {Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
export const config = {
  runtime: "edge",
};


const handler = async (req, res) => {
    if(req.method==='POST'){
        try {
            let body = await req.json();

            let query = body.question;
            const result = await supabase.from('psychology-of-money-embeddings').select("*")
            const data = result.data;
        
            const embed = await fetch("https://api.openai.com/v1/embeddings", {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${apiKey}`
              },
              method: "POST",
              body: JSON.stringify({
                model: "text-embedding-ada-002",
                input: query
              })
            });
            const json = await embed.json();
            const embedding = json.data[0].embedding;
            const similarities = data.map((row) => similarity(JSON.parse(row['Embedding Vector']), embedding));
            const results = data
              .map((row, index) => ({ ...row, similarity: similarities[index] }))
              .sort( (a, b) => b.similarity - a.similarity)
              .slice(0, 5);
            let rel_passages = ""
            let top_3_passages = results.slice(0,3)
            for (let i=0;i<results.length;i++){
              rel_passages = rel_passages + results[i]['Content']
            }
           let passage_response = {"all_passages": rel_passages, "top_3_passages": top_3_passages}
            passage_response=JSON.stringify(passage_response)
           return new Response(passage_response);
          } catch (error) {
            console.error('The Error is ',error);
            return new Response("Error", { status: 500 });
          }
    }
 
};

export default handler;
