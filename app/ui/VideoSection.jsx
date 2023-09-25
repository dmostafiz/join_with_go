import {
  Flex,
  Stack,
  Img,
  Box,
  Text,
  HStack,
  Divider,
  Container,
} from "@chakra-ui/react";
import React from "react";
import WeSection from "./WeSection";

const VideoSection = () => {
  const videoText = [
    { text: "Free to join and only $ 12.95 to upgrade and start earning" },
    { text: "Global opportunity with $ 5.95 worldwide flat shipping" },
    { text: "Get paid 3% per level and on all Member orders" },
    { text: "Everyone that joins after you is automatically placed below you" },
  ];

  return (
    <Stack>
      <WeSection />
      <Container maxW="1180px">
        <Flex direction={{ base: 'column', md: 'row' }} w="full" h="690px" gap="20" mx="auto" justify="center">
          <Stack flex="1" color="white" maxW="541px" justify="center">
            <Img src="./img/video.jpg" />
          </Stack>
          <Stack flex="1" justify="center" maxW="600px">
            <HStack color="brand.600">
              <Flex fontSize="lg" color="brand.600" fontWeight="semibold">
                We Make Winning EASIER{" "}
                <Text as="span" fontFamily="default">
                  !
                </Text>
              </Flex>
              <Divider
                maxW="250px"
                borderWidth="1px"
                borderColor="brand.600"
                opacity="1"
              />
            </HStack>
            <Text fontSize="3xl" color="black.500" fontWeight="medium">
              Why join the
              <Text as="span" color="brand.600" mx="1">
                FASTEST growing team
              </Text>
              in this explosive global opportunity?
            </Text>
            <Box>
              {videoText.map((about, index) => (
                <Flex
                  key={index}
                  alignItems="center"
                  justify="flex-start"
                  spacing="2.5"
                  mb="3"
                  gap="2"
                >
                  <Img src="./img/check-circle.png" />
                  <Text fontSize="lg">{about.text}</Text>
                </Flex>
              ))}
            </Box>
          </Stack>
        </Flex>
      </Container>
    </Stack>
  );
};

export default VideoSection;
