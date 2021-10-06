import {
  VStack,
  Image as Img,
  Heading,
  Text,
  Flex,
  useDisclosure,
  Modal,
  ModalBody,
  Menu,
  ModalHeader,
  useBreakpointValue,
  Box,
  ModalOverlay,
  ModalCloseButton,
  ModalContent,
  InputGroup,
  Input,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

import Link from "next/link";
import { SearchIcon } from "@chakra-ui/icons";

function Hero({ searchList }) {
  const [searchText, setSearchText] = useState("");
  const { onOpen, isOpen, onClose } = useDisclosure();
  const [searchArray, setSearchArray] = useState([]);
  const [suggestedArray, setSuggestedArray] = useState([]);
  const [urlList, setUrlList] = useState([]);
  const variant = useBreakpointValue({
    base: "small",
    md: "medium",
    lg: "large",
  });
  const list = [1, 2, 3, 4];
  useEffect(() => {
    setSearchArray(searchList);
    setUrlList(searchList.slice(0, 4));
  }, [searchList]);

  useEffect(() => {
    let list = [];

    if (searchArray.length > 1) {
      suggestedArray > 1
        ? suggestedArray
        : searchArray.map((item) => {
            if (
              item.name.toLowerCase().slice(0, searchText.length) ===
              searchText.toLowerCase()
            ) {
              list.push(item);
            }
          });
    }

    setSuggestedArray(list);
    list = [];
  }, [searchText]);

  return (
    <VStack w="100%" margin="1em" borderRadius="20px" bg="#E3E1DC">
      <Box w="100%" position="relative" color="white">
        <Img
          src={
            variant === "small"
              ? "/HeroImagesm.png"
              : variant === "medium"
              ? "/HeroImagemd.png"
              : "/HeroImagelg.png"
          }
          width="100%"
          height={
            variant === "small"
              ? "270px"
              : variant === "medium"
              ? "410px"
              : "538px"
          }
          borderTopRadius="20px"
          alt="hero image"
          zIndex="-1"
        />
        <Flex
          p="1em"
          w="40%"
          direction="column"
          zIndex="1"
          position="absolute"
          left="1em"
          top="1em"
          justifyContent="space-evenly"
        >
          <Img
            my="-1em"
            mt="-1.5em"
            src="/CatwikiLogo.svg"
            width={
              variant === "small"
                ? "110px"
                : variant === "medium"
                ? "120px"
                : "140px"
            }
            height={
              variant === "small"
                ? "55px"
                : variant === "medium"
                ? "70px"
                : "80px"
            }
            alt="hero image"
          />
          <Heading
            fontFamily="Mystery Quest"
            fontWeight="400"
            fontSize={
              variant === "small"
                ? "26px"
                : variant === "medium"
                ? "40px"
                : "58px"
            }
            lineHeight="70px"
            color="white"
          >
            CatWiki
          </Heading>
          <Text
            my={variant !== "small" && "2em"}
            fontFamily="Montserrat"
            fontWeight="500"
            fontSize={
              variant === "small"
                ? "12px"
                : variant === "medium"
                ? "20px"
                : "22px"
            }
            lineHeight="29px"
            color="white"
          >
            Get to know more about your cat breed
          </Text>
          <InputGroup
            my={variant !== "small" && "2em"}
            border={variant === "small" ? "1px solid white" : "0px"}
          >
            <InputRightElement
              color="gray.300"
              fontSize="1.2em"
              children={<SearchIcon />}
            />

            <Input
              minWidth="100px"
              type="text"
              onClick={onOpen}
              position="relative"
              value={searchText}
              color="white"
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
              placeholder="search"
              border={variant === "small" ? "0px" : "1px solid white"}
            />
            {suggestedArray.length !== 0 &&
              searchText !== "" &&
              variant !== "small" && (
                <Flex
                  width="200px"
                  zIndex="10"
                  borderRadius={10}
                  m="auto"
                  position="absolute"
                  top="50px"
                  bg="white"
                  direction="column"
                  color="black"
                  overflowY="auto"
                >
                  {suggestedArray.map((breed) => (
                    <Link href={`/breeds/${breed.id}`}>
                      <a>
                        <Text m="0.5em">{breed.name}</Text>
                      </a>
                    </Link>
                  ))}
                </Flex>
              )}

            {variant === "small" && (
              <Box m="auto" position="sticky" top="20px">
                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />

                  <ModalContent>
                    <ModalHeader>
                      {" "}
                      <ModalCloseButton />
                    </ModalHeader>
                    <ModalBody>
                      <InputGroup mt={2}>
                        <InputRightElement
                          pointerEvents="none"
                          color="gray.300"
                          fontSize="1.2em"
                          children={<SearchIcon />}
                        />

                        <Input
                          borderRadius={20}
                          border="1px solid black"
                          type="text"
                          placeholder="search"
                          value={searchText}
                          onChange={(e) => {
                            setSearchText(e.target.value);
                          }}
                        />
                      </InputGroup>
                      <Menu overflowY="scroll">
                        {suggestedArray.map((breed) => (
                          <Link href={`/${breed.id}`}>
                            <a>
                              <Text m="0.5em">{breed.name}</Text>
                            </a>
                          </Link>
                        ))}
                      </Menu>
                    </ModalBody>
                  </ModalContent>
                </Modal>
              </Box>
            )}
          </InputGroup>
        </Flex>
      </Box>

      <Flex direction="column" w="100%" p="1em">
        <Flex direction="column">
          <Heading
            fontFamily="Montserrat"
            fontWeight="500"
            fontSize={18}
            lineHeight="22px"
            color="#291507"
          >
            Most Searched Breeds
          </Heading>
          <Box width="100px" height="3px " m="0.5em" bg="#291507" />
          <Flex justifyContent="space-between">
            <Heading
              fontFamily="Montserrat"
              fontWeight="700"
              fontSize={
                variant === "small"
                  ? "30px"
                  : variant === "medium"
                  ? "40px"
                  : "48px"
              }
              lineHeight="58px"
              color="#291507"
            >
              66+ Breeds For you to discover
            </Heading>
            <Link href="/mostSearched">
              <Text
                _hover={{ cursor: "pointer" }}
                fontFamily="Montserrat"
                fontWeight="700"
                fontSize={16}
                lineHeight="21px"
                color="#291507"
              >
                SEE MORE
              </Text>
            </Link>
          </Flex>
        </Flex>

        <Flex wrap="wrap" justifyContent="space-around">
          {urlList.map((cat) => (
            <Link href={`/breeds/${cat.id}`}>
              <Flex direction="column" m="0.2em" _hover={{ cursor: "pointer" }}>
                <Img
                  src={cat.image.url}
                  height="190px"
                  width="180px"
                  borderRadius={5}
                />
                <Text my="0.5em" fontWeight="bold">
                  {cat.name}
                </Text>
              </Flex>
            </Link>
          ))}
        </Flex>
      </Flex>
    </VStack>
  );
}

export default Hero;
