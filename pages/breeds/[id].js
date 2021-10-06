import Head from "next/head";
import Navbar from "../../components/Navbar";
import { VStack } from "@chakra-ui/react";
import Footer from "../../components/Footer";
import Image from "next/image";
import BreedContent from "../../components/BreedContent";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import React from "react";

function Breed({ breedInfo, other }) {
  const Router = useRouter();

  const { id } = Router.query;

  return (
    <VStack w="100vw" h="100vh" px="1em" overflowY="auto">
      <Head>
        <title>Bengal</title>
        <meta
          name="description"
          content="Gives a descriptive definition of the cat"
        />
        <link rel="icon" href="/devchallenges.png" />
      </Head>
      <Navbar />
      <BreedContent breedInfo={breedInfo} other={other} />
      <Footer />
    </VStack>
  );
}

export default Breed;

export async function getStaticPaths() {
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

  // Get the paths we want to pre-render based on posts
  const paths = res.map((post) => ({
    params: { id: post.id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const apiKey = process.env.api_key;
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await axios.get(
    ` https://api.thecatapi.com/v1/images/search?breed_ids=${params.id}`,
    {
      headers: { "x-api-key": apiKey },
    }
  );
  const response = await axios.get(
    ` https://api.thecatapi.com/v1/images/search?limit=6`,
    {
      headers: { "x-api-key": apiKey },
    }
  );
  const other = response.data;
  const breedInfo = res.data;

  return { props: { breedInfo, other } };
}
