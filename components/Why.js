import React from "react";
import Link from "next/link";
// import Image from "next/image";
import {
  Flex,
  Divider,
  Heading,
  Image,
  Text,
  Box,
  Grid,
  GridItem,
  useBreakpointValue,
} from "@chakra-ui/react";
function Why() {
  const variant = useBreakpointValue({
    base: "small",
    md: "medium",
    lg: "large",
  });
  return (
    <Flex direction={variant === "small" ? "column" : "row"} w="100%">
      <Flex
        justifyContent="center"
        direction="column"
        w={variant !== "small" && "40vw"}
      >
        <Box width="150px" height="3px " bg="#291507" />
        <Heading
          fontFamily="Montserrat"
          color="#291507"
          fontWeight="700"
          lineHeight="48px"
        >
          Why should you have a cat?
        </Heading>
        <Text
          fontFamily="Montserrat"
          fontSize=" 18px"
          fontWeight="500"
          lineHeight="21px"
          color="#291507
                  "
        >
          Having a cat around you can actually trigger the release of calming
          chemicals in your body which lower your stress and anxiety levels
        </Text>
        <Link href="/">
          <Text fontWeight="700" fontFamily="Montserrat" color="#29150799">
            Read more
          </Text>
        </Link>
      </Flex>

      <Box
        position="relative"
        width={variant === "small" ? "fitContent" : "70%"}
        my="1em"
        height={
          variant === "small"
            ? "500px"
            : variant === "medium"
            ? "520px"
            : "600px"
        }
      >
        <Image
          position="absolute"
          top="0"
          left="0"
          src="/image 2.png"
          alt="cat images"
          width={variant === "small" ? "60%" : "50%"}
          height={
            variant === "small"
              ? "180px"
              : variant === "medium"
              ? "200px"
              : "250px"
          }
        />

        <Image
          top="0"
          right="0"
          position="absolute"
          src="/image 3.png"
          alt="cat images"
          width={variant === "small" ? "30%" : "40%"}
          height={
            variant === "small"
              ? "250px"
              : variant === "medium"
              ? "320px"
              : "420px"
          }
          bg="papayawhip"
        />

        <Image
          position="absolute"
          bottom={"-0.7em"}
          left="40px"
          src="/image 1.png"
          alt="cat images"
          width={
            variant === "small"
              ? "190px"
              : variant === "medium"
              ? "220px"
              : "250px"
          }
          height={
            variant === "small"
              ? "290px"
              : variant === "medium"
              ? "300px"
              : "340px"
          }
        />
      </Box>
    </Flex>
  );
}

export default Why;
