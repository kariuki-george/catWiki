import { VStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Why from "../components/Why";
import Footer from "../components/Footer";
import axios from "axios";

export default function Home({ res }) {
  const [searchList, setSearchList] = useState([]);
  useEffect(() => {
    setSearchList(res);
  }, [res]);

  return (
    <VStack w="100vw" h="100vh" px="1em" overflowY="auto">
      <Head>
        <title>Cat wiki</title>
        <meta name="description" content="A cat blog created using next js" />
        <link rel="icon" href="/devchallenges.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Mystery+Quest&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Navbar />
      <Hero searchList={searchList} />
      <Why />
      <Footer />
    </VStack>
  );
}

export async function getStaticProps(context) {
  const apiKey = process.env.api_key;

  const response = await axios.get("https://api.thecatapi.com/v1/breeds/", {
    headers: { "x-api-key": apiKey },
  });
  let res = [];

  if (response.data) {
    res = response.data;
  } else {
    res = [];
  }

  return {
    props: { res },
  };
}
