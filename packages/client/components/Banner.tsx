import { Center, Text } from "@chakra-ui/react";

const Banner = () => {
  return (
    <>
      <Center
        w="100%"
        h="48px"
        backgroundImage="url(https://image.freepik.com/free-vector/happy-family-travelling-by-car-with-camping-equipment-top_74855-10751.jpg)"
        backgroundPosition="center"
        // backgroundRepeat="no-repeat"
        backgroundSize="auto"
      >
        <Text>
          Build Your Deal: Create a personalized deal, customize your payment,
          and evaluate your trade-in – all online. (This is for demo purposes
          only)
        </Text>
      </Center>
    </>
  );
};

export default Banner;
