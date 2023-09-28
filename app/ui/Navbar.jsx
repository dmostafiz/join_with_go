import {
  Flex,
  HStack,
  Img,
  Stack,
  Text,
  Image,
  Icon,
  Divider,
  Container,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

import React from "react";
import Link from "next/link";

const Navbar = () => {
  const navIcon = [
    {
      icon: "/icons/facebook.svg",
      url: "https://facebook.com",
    },
    {
      icon: "/icons/twitter.svg",
      url: "https://twitter.com",
    },
    {
      icon: "/icons/instra.svg",
      url: "https://instagram.com",
    },
  ];
  const navText = [
    // {
    //   text: "Home",
    // },
    // {
    //   text: "About",
    // },
    // {
    //   text: "Services",
    // },
    // {
    //   text: "Testimonial",
    // },
    // {
    //   text: "Contact",
    // },
  ];
  return (
    <Stack bg="#071c09" justify="space-evenly">
      <Container maxW="1180px">
        <HStack justify="space-between" h="94px">
          <Flex>
            <Text color="brand.600" fontSize="24px" fontWeight="bold">
              LOGO
            </Text>
          </Flex>
          <HStack spacing="12">
            {navText.map((nav) => (
              <Text
                color="white"
                cursor="pointer"
                fontSize="18px"
                lineHeight="80px"
                _hover={{
                  color: "brand.600",
                }}
                fontWeight="medium"
              >
                {nav.text}
              </Text>
            ))}
            {/* <Icon as={Search2Icon} color="white" /> */}
          </HStack>
        </HStack>
      </Container>
    </Stack>
  );
};

export default Navbar;
