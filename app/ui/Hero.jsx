import {
  Flex,
  Stack,
  Img,
  Text,
  Button,
  Container,
  Box,
} from "@chakra-ui/react";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const firstContent = () => (
    <Flex w="full" h="690px" gap="20" mx="auto" justify="center">
      <Stack flex="1" justify="center" maxW="600px" spacing="0">
        <Flex fontSize="48px" fontWeight="bold" lineHeight="53px">
          Your own
          <Text as="span" color="brand.600" ml="1">
            business
          </Text>
          .
        </Flex>
        <Flex fontSize="48px" fontWeight="bold" lineHeight="53px">
          Your own
          <Text as="span" color="brand.600" ml="1">
            hours.
          </Text>
        </Flex>
        <Flex fontSize="48px" fontWeight="bold" lineHeight="53px">
          Work from
          <Text as="span" color="brand.600" ml="1">
            anywhere
          </Text>
        </Flex>
        <Flex
          fontSize="24px"
          lineHeight="33px"
          fontWeight="medium"
          color="#333333"
          my="8"
        >
          <Text as="span" fontFamily="default">
            (
          </Text>
          with a internet connection
          <Text as="span" fontFamily="default">
            )
          </Text>
        </Flex>
        <Text
          color="#474747"
          lineHeight="33px"
          fontSize="18px"
          fontWeight="medium"
        >
          Essential oils are a
          <Text as="span" fontFamily="default" mx="1">
            $
          </Text>
          22 Billion dollar industry projected to DOUBLE in the next 6 years and
          you are just 2 steps away from potentially life changing income.
        </Text>
        <Button
          h="58px"
          lineHeight="30px"
          colorScheme="orange"
          bg="brand.500"
          type="submit"
          maxW="204px"
          mt="10"
          borderRadius="29px"
          display="flex"
          justifyContent="space-between"
          pl="9"
        >
          <Text fontSize="16px">Start today</Text>
          <Img src="/icons/button.svg" alt="Right Icon" w="9" h="9" />
        </Button>
      </Stack>
      <Stack flex="1" color="white" maxW="590px" justify="center">
        <Img src="/img/about1.jpg" minH="510px" />
      </Stack>
    </Flex>
  );

  const sliderData = [firstContent(), firstContent(), firstContent()];

  return (
    <Container
      maxW="1180px"
      sx={{
        ".slick-dots": {
          bottom: "60px",
          left: "-540px",
          li: {
            width: "12px",
            height: "12px",
            bg: "#686868",
            borderRadius: "50%",
            "button::before": {
              content: '""',
            },
          },
          ".slick-active ": {
            bg: "brand.600",
          },
        },
      }}
    >
      <Slider {...settings}>
        {sliderData.map((slide, index) => (
          <Box key={index}>{slide}</Box>
        ))}
      </Slider>
    </Container>
  );
};

export default Hero;
