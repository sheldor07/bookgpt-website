import Head from 'next/head';

const BookSeo = ({ bookName, summary, ogImageUrl, twitterImageUrl }) => {
  const title = `${bookName} | Interactive AI-Powered Book Summary - GPT Book Club`;
  const description = `Discover insights from ${bookName} with AI-driven summaries and answers at GPT Book Club. Find chapter summaries, top quotes and more.`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://gptbook.club/${bookName}`} />
      <meta property="og:image" content={ogImageUrl} />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={twitterImageUrl} />
      <meta name="twitter:card" content="summary_large_image" />

      <meta name="keywords" content={`AI, ${bookName}, Book Summaries, Book Quotes, Notion Book Template`} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
};

export default BookSeo;