import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import {
  VStack,
  Flex,
  Text,
  Heading,
  Image,
  Spacer,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import Head from "next/head";

function MostSearched({ response }) {
  const [list, setList] = useState([]);
  const variant = useBreakpointValue({
    base: "small",
    md: "medium",
    lg: "large",
  });
  useEffect(() => {
    setList(response.slice(0, 5));
  }, [response]);
  const handlePage = (id) => {
    if (id === 1) {
      setList(response.slice(0, 5));
    } else {
      setList(response.slice(5, 10));
    }
  };

  return (
    <VStack w="100vw" h="100vh" px="1em" overflowY="auto">
      <Head>
        <title>most searched cats</title>
        <meta
          name="description"
          content="Gives a list of the most searched cats"
        />
        <link rel="icon" href="/devchallenges.png" />
      </Head>
      <Navbar />
      <Heading
        fontFamily="Montserrat"
        fontWeight="700"
        fontSize={36}
        lineHeight="44px"
        color="#291507"
      >
        Top 10 most searched breeds
      </Heading>
      <Flex w="100%" direction="column">
        {list.map((breed) => (
          <Flex key={breed.id}
            my="1em"
            direction={variant === "small" ? "column" : "row"}
            alignItems="center"
            justifyContent="space-around"
          >
            <Image
              borderRadius={10}
              w={variant === "small" ? "300px" : "250px"}
              h={variant === "small" ? "350px" : "250px"}
              alt="image"
              src={breed.image.url}
            />
            <Flex w="60vw" direction="column" m="1em">
              <Heading
                fontFamily="Montserrat"
                fontWeight="600"
                fontSize={36}
                lineHeight="43px"
                color="#291507"
              >
                {[breed.name]}
              </Heading>
              <Text
                fontFamily="Montserrat"
                fontWeight="500"
                fontSize={18}
                lineHeight="21px"
                color="#291507"
              >
                {breed.description}{" "}
              </Text>
            </Flex>
          </Flex>
        ))}
      </Flex>
      <Flex>
        <Button
          onClick={() => {
            handlePage(1);
          }}
        >
          1
        </Button>
        <Spacer w="10px" />
        <Button
          onClick={() => {
            handlePage(2);
          }}
        >
          2
        </Button>
      </Flex>
      <Footer />
    </VStack>
  );
}

export default MostSearched;

export async function getStaticProps(context) {
  const API_KEY = process.env.api_key;
  let response = [];
  const res = await axios.get(`https://api.thecatapi.com/v1/breeds/`, {
    headers: {
      "x-api-key": API_KEY,
    },
  });

  let secondList = [];
  if (res.data) {
    console.log(res.data.length);
    while (secondList.length < 10) {
      const random = Math.floor(Math.random() * res.data.length);

      secondList.push(res.data[random]);
    }
    response = secondList;
    secondList = [];
  } else {
    response = [];
  }

  return { props: { response } };
}
