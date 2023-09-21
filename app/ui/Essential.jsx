import { Flex, Stack, Img, Text, Button, Container } from "@chakra-ui/react";
import React from "react";

const Essential = () => {
  return (
    <Flex
      bgImage="url('/img/bg.jpg')"
      bgRepeat="no-repeat"
      bgPosition="center"
      bgSize="cover"
      h="707px"
    >
      <Container maxW="1180px">
        <Flex mx="auto" justify="center" align="center" gap="20" w="full">
          <Stack flex="1" color="white" maxW="541px" justify="center" mt="-8">
            <Img src="/img/about11.png" h="full" />
          </Stack>
          <Stack flex="1" justify="center" maxW="600px">
            <Text
              color="white"
              fontSize="48px"
              fontWeight="bold"
              lineHeight="68px"
            >
              <Text as="span" color="brand.600" mr="1">
                Essential oils
              </Text>
              are a <br />
              <Text as="span" fontFamily="default" mx-1>
                $
              </Text>
              22 Billion dollar <br />
              industry
            </Text>

            <Text lineHeight="33px" fontSize="18px" color="white">
              Work from ANYWHERE
              <Text as="span" fontFamily="default" mx-1>
                !
              </Text>
              Start your own business today for
              <br /> under
              <Text as="span" fontFamily="default" mx="1" color="brand.600">
                $ 20
              </Text>
              a month
              <Text as="span" fontFamily="default" mx="1">
                !
              </Text>
            </Text>
            <Button
              h="58px"
              lineHeight="30px"
              colorScheme="orange"
              bg="brand.500"
              type="submit"
              maxW="204px"
              mt="8"
              borderRadius="29px"
              display="flex"
              justifyContent="space-between"
              pl="9"
            >
              <Text fontSize="16px">Start today</Text>
              <Img src="/icons/button.svg" alt="Right Icon" w="9" h="9" />
            </Button>
          </Stack>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Essential;
