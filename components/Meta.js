import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta property="og:image" content="alien.png" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Cows Vs Aliens NFT Mint",
  keywords: " NFTs, erc721, crypto",
  description: "🚨 Pre-sale is LIVE! 🚨\n🏷️Pre-sale info:\r▶️Price: 0.01ETH\r▶️Supply: 300 NFTs\r▶️Limit: 5 Nfts per wallet\r▶️Do not follow other links\rThank you for your support and patience!",
};

export default Meta;
