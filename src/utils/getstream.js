import { createParser, ParsedEvent, ReconnectInterval } from "eventsource-parser";

export const OpenAIStream = async (bookName,passages, prompt, apiKey) => {
    const encoder = new TextEncoder();
    const decoder = new TextDecoder();
  
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      method: "POST",
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "system",
                content: `You are the most well read assistant on the book ${bookName}. You will answer my question relating very closely to the book. You have the following information from the book to supplement your answer and you must synthesise this information in about 150 words in your answer. The information is ` + passages
            },
            {
                role: "user",
                content: prompt
            }
        ],
        stream: true,
      }),
    });
    console.log(res)
    if (res.status !== 200) {
      throw new Error("OpenAI API returned an error");
    }
  
    const stream = new ReadableStream({
      async start(controller) {
        const onParse = (event) => {
          if (event.type === "event") {
            const data = event.data;
  
            if (data === "[DONE]") {
              controller.close();
              return;
            }
  
            try {
              const json = JSON.parse(data);
              const text = json.choices[0].delta.content;
              const queue = encoder.encode(text);
              controller.enqueue(queue);
            } catch (e) {
              controller.error(e);
            }
          }
        };
  
        const parser = createParser(onParse);
  
        for await (const chunk of res.body) {
          parser.feed(decoder.decode(chunk));
        }
      },
    });
  
    return stream;
  };
  