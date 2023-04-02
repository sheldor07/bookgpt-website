
import { supabase,supabaseUrl} from "../../utils/supabase";
import { OpenAIStream } from "../../utils/getstream";

const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY
export const config = {
  api: {
    bodyParser: {
      sizeLimit:'10mb',
    }
  },
  runtime: "edge",
};

const handler = async (req, res) => {
  try {
    let query = await req.json();
    let rel_passages= query.passages;
    let bookName = query.bookName;
    query = query.question;
    const stream = await OpenAIStream(bookName,rel_passages, query, apiKey);
    return new Response(stream, { status: 200 });
  } catch (error) {
    return new Response("Error", { status: 500 });
  }
};

export default handler;

