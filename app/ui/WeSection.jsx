import {
  Flex,
  Stack,
  Img,
  Box,
  Text,
  HStack,
  Divider,
  Grid,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const WeSection = () => {
  const WeText = [
    {
      text: (
        <>
          We <br /> stock the products
        </>
      ),
      icon: "/icons/we1.svg",
      color: "#f8f8f8",
    },
    {
      text: (
        <>
          We <br /> ship the products
        </>
      ),
      icon: "/icons/we2.svg",
      color: "#eafdec",
    },
    {
      text: (
        <>
          We handle <br /> all customer service
        </>
      ),
      icon: "/icons/we3.svg",
      color: "#f8f8f8",
    },
    {
      text: (
        <>
          You <br /> get paid!
        </>
      ),
      icon: "/icons/we4.svg",
      color: "#eafdec",
    },
  ];

  return (
    <VStack>
      <Grid templateColumns="repeat(4,1fr)" maxW="1180px">
        {WeText.map((we, index) => (
          <HStack
            px="10"
            py="12"
            bg={index % 2 === 0 ? "#f8f8f8" : "#eafdec"}
            minH="115px"
            key="index"
          >
            <Img src={we.icon} alt={we.text} />

            <HStack>
              <Text
                fontSize="16px"
                lineHeight="22px"
                fontWeight="semibold"
                color="#494949"
              >
                {we.text}
              </Text>
            </HStack>
          </HStack>
        ))}
      </Grid>
    </VStack>
  );
};

export default WeSection;
