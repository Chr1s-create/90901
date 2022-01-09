import {
  Flex,
  useColorModeValue,
  Image,
  Heading,
  Text,
  Box,
} from "@chakra-ui/react";
import React, { FC } from "react";
import { Vehicle } from "@hooks/queries/useVehicleQuery";
import {
  IoPricetagsOutline,
  IoLocationOutline,
  IoCarSportOutline,
  IoMailOpenOutline,
} from "react-icons/io5";

type Props = {
  vehicle: Vehicle;
};

const ProductCard: FC<Props> = ({ vehicle }) => {
  return (
    <Flex
      mx="auto"
      bg={useColorModeValue("white", "gray.800")}
      shadow="lg"
      rounded="lg"
      w="320px"
      direction="column"
    >
      <Image
        roundedTopRight="lg"
        roundedTopLeft="lg"
        pb={3}
        h={48}
        w="full"
        fit="cover"
        src="https://listings-prod.tcimg.net/listings/6570/80/56/3GNKBHR44MS585680/ZTIFHMKL2AG3NRC67ETL4M4JA4-318.jpg"
        alt="kamote"
      />
      <Flex direction="column" p={4}>
        <Heading borderBottom="1px solid #E2E8F0" fontSize="lg" pb={4}>
          {vehicle.modelName}
        </Heading>
        <Flex
          direction="column"
          borderBottom="1px solid #E2E8F0"
          d="flex"
          py={5}
        >
          <Text>MSRP</Text>
          <Text fontSize="xl" fontWeight="bold">
            ${vehicle.price}
          </Text>
        </Flex>
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="start"
          pt={4}
        >
          <Box d="flex" alignItems="center">
            <IoPricetagsOutline style={style} />
            <Text ml={2}>Lorem, ipsum.</Text>
          </Box>
          <Box d="flex" alignItems="center">
            <IoLocationOutline style={{ fontSize: "20px" }} />
            <Text ml={2}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, a..
            </Text>
          </Box>
          <Box d="flex" alignItems="center">
            <IoCarSportOutline style={style} />
            <Text ml={2}>Lorem ipsum dolor sit amet.</Text>
          </Box>
          <Box d="flex" alignItems="center">
            <IoMailOpenOutline style={style} />
            <Text ml={2}>Lorem ipsum dolor sit.</Text>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export const style = {
  fontSize: "16px",
};

export default ProductCard;
