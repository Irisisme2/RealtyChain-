import React from "react";

// Chakra imports
import { Button, Flex, Link, Text } from "@chakra-ui/react";

// Assets
import banner from "assets/img/properties/Banner.png";  // Ensure this path is correct

export default function Banner() {
  return (
    <Flex
      direction='column'
      bgImage={`url(${banner})`}
      bgSize='cover'
      bgPosition='center'
      py={{ base: "30px", md: "56px" }}
      px={{ base: "30px", md: "64px" }}
      borderRadius='30px'
      align='center'
      justify='center'
      textAlign='center'>
      <Text
        fontSize={{ base: "24px", md: "34px" }}
        color='white'
        mb='14px'
        maxW='100%'
        fontWeight='700'
        lineHeight={{ base: "32px", md: "42px" }}>
        Discover, invest in stunning estates
      </Text>
      <Flex align='center'>
        <Button
          bg='white'
          color='black'
          _hover={{ bg: "whiteAlpha.900" }}
          _active={{ bg: "white" }}
          _focus={{ bg: "white" }}
          fontWeight='500'
          fontSize='14px'
          py='20px'
          px='27px'
          me='38px'>
          Discover now
        </Button>
        <Link>
          {/* Add any link here if necessary */}
        </Link>
      </Flex>
    </Flex>
  );
}
