import React from "react";
import {
  Grid,
  Box,
  Flex,
  Progress,
  useBreakpointValue,
  Text,
  GridItem,
  VStack,
  Heading,
  Image,
} from "@chakra-ui/react";

//import Image from "next/image";

function BreedContent({ breedInfo, other }) {
  const [otherImages, setOtherImages] = React.useState([])
  React.useEffect(() =>{setOtherImages(other)},[other])

  console.log(breedInfo[0].breeds[0]);
  const variant = useBreakpointValue({
    base: "small",
    md: "medium",
    lg: "large",
  });
  const map = new Map(Object.entries(breedInfo[0].breeds[0]));
  const arr = Array.from(map);

  return (
    <VStack w="100%">
      <Flex
        my="1em"
        w="100%"
        direction={variant === "small" ? "column" : "row"}
        justifyContent="space-between"
      >
        <Image
          width="350px"
          height="400px"
          m="auto"
          borderRadius={10}
          src={breedInfo[0].url}
          alt="y"
          bg="red"
        />

        {breedInfo[0].breeds[0].name && (
          <Flex
            direction="column"
            ml="1em"
            w={variant === "small" ? "100%" : "60vw"}
          >
            <Heading
              fontFamily="Montserrat"
              fontWeight="600"
              fontSize={36}
              lineHeight="44px"
              color="#291507"
            >
              {breedInfo[0].breeds[0].name}
            </Heading>

            <Text
              fontFamily="Montserrat"
              fontWeight="500"
              fontSize={18}
              lineHeight="21px"
              color="#291507"
              my="0.5em"
            >
              {breedInfo[0].breeds[0].description}
            </Text>
            <Flex alignItems="baseline">
              <Text
                fontFamily="Montserrat"
                fontWeight="700"
                fontSize={16}
                lineHeight="19px"
                color="#291507"
                mr="1em"
                mt="0.4em"
              >
                Temparament
              </Text>
              <Text
                fontFamily="Montserrat"
                fontWeight="700"
                fontSize={16}
                lineHeight="16px"
                color="#291507"
                mr="1em"
                mt="0.4em"
              >
                {breedInfo[0].breeds[0].temperament}
              </Text>
            </Flex>
            <Flex alignItems="baseline">
              <Text
                fontFamily="Montserrat"
                fontWeight="700"
                fontSize={16}
                lineHeight="19px"
                color="#291507"
                mr="1em"
                mt="0.4em"
              >
                Origin
              </Text>
              <Text
                fontFamily="Montserrat"
                fontWeight="700"
                fontSize={16}
                lineHeight="16px"
                color="#291507"
                mr="1em"
                mt="0.4em"
              >
                {breedInfo[0].breeds[0].origin}
              </Text>
            </Flex>
            <Flex alignItems="baseline">
              <Text
                fontFamily="Montserrat"
                fontWeight="700"
                fontSize={16}
                lineHeight="19px"
                color="#291507"
                mr="1em"
                mt="0.4em"
              >
                Life Span
              </Text>
              <Text
                fontFamily="Montserrat"
                fontWeight="700"
                fontSize={16}
                lineHeight="16px"
                color="#291507"
                mr="1em"
                mt="0.4em"
              >
                {breedInfo[0].breeds[0].life_span}
              </Text>
            </Flex>

            <DataBar
              title={"Adaptation"}
              count={breedInfo[0].breeds[0].adaptation}
            />

            <DataBar
              title={"Affection Level"}
              count={breedInfo[0].breeds[0].affection_level}
            />
            <DataBar
              title={"Child Friendly"}
              count={breedInfo[0].breeds[0].child_friendly}
            />
            <DataBar
              title={"Grooming"}
              count={breedInfo[0].breeds[0].grooming}
            />
            <DataBar
              title={" Intelligence"}
              count={breedInfo[0].breeds[0].intelligence}
            />
            <DataBar
              title={"Health Issues"}
              count={breedInfo[0].breeds[0].health_issues}
            />
            <DataBar
              title={"Social needs"}
              count={breedInfo[0].breeds[0].social_needs}
            />
            <DataBar
              title={"Stranger Friendly"}
              count={breedInfo[0].breeds[0].stranger_friendly}
            />
          </Flex>
        )}
      </Flex>

      <Box w="100%" my="2em">
        <Heading
          fontFamily="Montserrat"
          fontWeight="600"
          fontSize={36}
          lineHeight="43px"
          color="#291507"
        >
          Other Photos
        </Heading>
        <Flex
          width="100%"
          color="black"
          wrap="wrap "
          mt="1em"
          justifyContent={"space-around"}
        >
          {otherImages.map((cat) => (
            <Image
              src={cat.url}
              alt="breed"
              width="250px"
              height="250px"
              bg="tomato"
              m="0.5em"
              borderRadius={10}
            />
          ))}
        </Flex>
      </Box>
    </VStack>
  );
}

export default BreedContent;

function DataBar({ title, count }) {
  console.log(count);

  function changeBackground(num) {
    if (num <= count) {
      return "#544439";
    } else {
      return "#E0E0E0";
    }
  }

  return (
    <>
      <Flex align="center" justifyContent="space-between">
        <Text
          fontFamily="Montserrat"
          fontWeight="700"
          fontSize={16}
          lineHeight="19px"
          color="#291507"
          mr="1em"
          mt="0.4em"
        >
          {title}
        </Text>
        <Flex mr="2em">
          <Box
            w="70px"
            borderRadius={10}
            mr="0.5em"
            h="13px"
            bg={changeBackground(1)}
          />
          <Box
            w="70px"
            borderRadius={10}
            mr="0.5em"
            h="13px"
            bg={changeBackground(2)}
          />
          <Box
            w="70px"
            borderRadius={10}
            mr="0.5em"
            h="13px"
            bg={changeBackground(3)}
          />
          <Box
            w="70px"
            borderRadius={10}
            mr="0.5em"
            h="13px"
            bg={changeBackground(4)}
          />
          <Box
            w="70px"
            borderRadius={10}
            mr="0.5em"
            h="13px"
            bg={changeBackground(5)}
          />
        </Flex>
      </Flex>
    </>
  );
}
