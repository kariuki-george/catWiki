import React from "react";
import Image from "next/image";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
function Navbar() {
  return (
    <Box w="100%" px="1em">
      <Link href="/">
        <Image width="140px" height="90px" alt="logo" src="/CatwikiLogo.svg" />
      </Link>
    </Box>
  );
}

export default Navbar;
