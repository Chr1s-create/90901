import React from "react";
import {
  chakra,
  Flex,
  useColorModeValue,
  HStack,
  Button,
  Avatar,
  Tooltip,
  Heading,
} from "@chakra-ui/react";
import DropdownLink from "@components/DropdownLink";
import { filter } from "lodash";
import { useVehicleQuery } from "@hooks/queries";
import Link from "next/link";

const AppNavbar = () => {
  const bg = useColorModeValue("white", "gray.800");

  const { vehicles } = useVehicleQuery();
  const newVehicles = filter(vehicles, ["remark", "new"]);
  const usedVehicles = filter(vehicles, ["remark", "used"]);

  return (
    <>
      <chakra.header
        bg={bg}
        w="full"
        px={4}
        py={4}
        alignSelf="center"
        position="sticky"
        top="0"
      >
        <Flex
          alignItems="center"
          justifyContent="space-between"
          mx="auto"
          maxW="1366px"
        >
          <Flex alignItems="center">
            <Link href="/" passHref>
              <Heading
                fontSize="3xl"
                fontWeight="medium"
                ml="4"
                _hover={{ cursor: "pointer" }}
              >
                RideGrab
              </Heading>
            </Link>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack spacing={1} mr={1}>
              <DropdownLink data={newVehicles} title="new" />
              <DropdownLink data={usedVehicles} title="used" />
              <Tooltip label="Coming Soon">
                <Button style={{ cursor: "not-allowed" }} variant="ghost">
                  Sell Your Car
                </Button>
              </Tooltip>
            </HStack>
            <Avatar
              _hover={{
                cursor: "pointer",
              }}
              bg="white"
              size="md"
              name="ridegrab"
              src="https://avatars.dicebear.com/api/croodles/ridegrab.svg"
            />
          </HStack>
        </Flex>
      </chakra.header>
    </>
  );
};

export default AppNavbar;
