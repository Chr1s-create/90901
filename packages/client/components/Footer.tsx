import { Text, Flex } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      w="full"
      h="48px"
      bg="black"
      alignItems="center"
      justifyContent="center"
      position="fixed"
      bottom="0"
    >
      <Text fontSize="lg" color="white" fontWeight="hairline">
        This is for demo purposes only. All Right Reserve 2022
      </Text>
    </Flex>
  );
};

export default Footer;
