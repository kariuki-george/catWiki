import React from "react";
import { Flex, Box, Text, Image, useBreakpointValue } from "@chakra-ui/react";
function Footer() {
  const variant = useBreakpointValue({
    base: "small",
    md: "medium",
    lg: "large",
  });
  return (
    <Flex
      direction={variant === "small" ? "column" : "row"}
      py="0.7em"
      px="1em"
      borderTopRadius={20}
      w="100%"
      mx="1em"
      color="white"
      bg="black"
      align="center"
      justify="center"
      // position="absolute"
      // bottom="1px"
    >
      <Image
        width="100px"
        height="70px"
        mr="1em"
        alt="logo"
        src="/CatwikiLogo.svg"
      />
      <Box>
        <Text>
          &#169; created by <a href="/https://devChallenges/">kariuki george</a>{" "}
          -devChallenges.io 2021
        </Text>
      </Box>
    </Flex>
  );
}

export default Footer;
