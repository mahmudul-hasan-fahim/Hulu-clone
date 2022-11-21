import Head from "next/head";
import { useEffect } from "react";
import { Header, Nav, Movie } from "../components";

import req from "../utils/req";

export default function Home({ results }) {
  useEffect(() => {});
  return (
    <div>
      <Head>
        <title>Hulu clone 2.0</title>
        <meta name="description" content="Hulu movie sharing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Nav />
      <Movie results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const request = await fetch(
    `https://api.themoviedb.org/3${req[genre]?.url || req.fetchTrending.url}`
  ).then((res) => res.json());

  return {
    props: {
      results: request.results,
    },
  };
}
