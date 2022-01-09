import {
  Box,
  Button,
  Flex,
  Heading,
  Spinner,
  TabList,
  TabPanels,
  TabPanel,
  Tabs,
  Tab,
  Image,
  useColorModeValue,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { Suspense, lazy, FC } from "react";
import { Vehicle } from "@hooks/queries/useVehicleQuery";
import { filter, uniqBy } from "lodash";
import { useVehicleQuery } from "@hooks/queries";
import { useClassificationQuery } from "@hooks/queries";

const Layout = lazy(() => import("@components/Layout"));

const remarks = [
  {
    value: "new",
    label: "New",
  },
  {
    value: "used",
    label: "Used",
  },
];

const Home: FC = () => {
  const bg = useColorModeValue("white", "gray.800");

  // client side data fetching / rendering using custom hooks query
  const { vehicles } = useVehicleQuery();
  const { classifications } = useClassificationQuery();

  return (
    <Suspense
      fallback={
        <Flex h="100vh" w="full" justifyContent="center" alignItems="center">
          <Spinner />
        </Flex>
      }
    >
      <Layout title="RideGrab | New and Used Cars | For Sale">
        <Box
          h="full"
          d="flex"
          flexDir="column"
          alignItems="center"
          justifyContent="start"
          p={10}
        >
          <Heading as="h1" size="2xl" mb={3}>
            Find the Car You Want, Your Way
          </Heading>
          <Heading as="h2" size="lg">
            Then, build your deal to fit your needs.
          </Heading>
          <Flex flexDir="column" mt={8}>
            <Flex justifyContent="space-between" w="100%" mb={2}>
              {remarks?.map((remark, index) => (
                <Link key={index} href={`/vehicles/${remark.value}`} passHref>
                  <Button
                    borderRadius="24px"
                    colorScheme="teal"
                    variant="outline"
                    size="lg"
                    mr={4}
                  >
                    Shop {remark.label}
                  </Button>
                </Link>
              ))}
            </Flex>
          </Flex>
        </Box>

        <Box
          h="40vh"
          bgGradient={`linear-gradient(to-t, ${useColorModeValue(
            "#F9FAFB",
            "gray.600"
          )}, white)`}
        >
          <Image
            py={2}
            h="100%"
            w="100%"
            src="https://consumer.tcimg.net/assets/_next/static/images/timeline-hero-mobile-redesign-422d1d28a6d2c1b733712f17902bb084.svg"
            alt="kamote"
          />
        </Box>

        <Flex
          h="full"
          w="full"
          justifyContent="start"
          alignItems="center"
          py={10}
          direction="column"
        >
          <Heading p={4}>Browse by Brand</Heading>
          <Box pb={10}>{browseByBrand(vehicles)}</Box>
        </Flex>

        <Flex
          bg={useColorModeValue("#F9FAFB", "gray.600")}
          h="full"
          w="full"
          justifyContent="start"
          alignItems="center"
          py={10}
          paddingBottom="100px"
          direction="column"
        >
          <Heading px={4} paddingBottom={6}>
            Your Guide to the Top Vehicles
          </Heading>
          <SimpleGrid spacingY={10} spacingX={10} columns={{ base: 3 }}>
            {classifications.map((classification) => (
              <Link
                key={classification.id}
                href={`/classification/${classification.name}`}
                passHref
              >
                <Box
                  _hover={{ cursor: "pointer" }}
                  px={4}
                  pt={3}
                  w="200px"
                  rounded="lg"
                  shadow="lg"
                  bg={bg}
                >
                  <Flex direction="column" alignItems="center" p={4}>
                    <Image
                      h="100%"
                      w="100%"
                      src={classification.image}
                      alt="kamote"
                    />
                    <Text fontSize="xl">Best {classification.name}</Text>
                  </Flex>
                </Box>
              </Link>
            ))}
          </SimpleGrid>
        </Flex>
      </Layout>
    </Suspense>
  );
};

export const browseByBrand = (vehicles: Vehicle[]) => {
  const newVehicles = filter(vehicles, ["remark", "new"]);
  const usedVehicles = filter(vehicles, ["remark", "used"]);

  const uniqBrandByNew = uniqBy(newVehicles, "brand.name");
  const uniqBrandByUsed = uniqBy(usedVehicles, "brand.name");

  console.log(newVehicles);

  const BrowseByBrand = ({ data }: any) => {
    return (
      <Tabs isFitted colorScheme="teal" size="lg">
        <TabList>
          {data.map((tab: Record<string, any>, index: number) => (
            <Tab key={index}>{tab.label}</Tab>
          ))}
        </TabList>
        <TabPanels>
          {data.map((tab: Record<string, any>, index: number) => (
            <TabPanel p={4} key={index}>
              <SimpleGrid spacingY={10} spacingX={10} columns={{ base: 3 }}>
                {tab.content.map((item: Record<string, any>) => (
                  <Link
                    href={`/brand/${item.brand.name}`}
                    key={item.brand.id}
                    passHref
                  >
                    <Flex
                      alignItems="center"
                      justifyContent="space-between"
                      _hover={{ cursor: "pointer" }}
                    >
                      <Image
                        boxSize="48px"
                        objectFit="cover"
                        src={item.brand.image}
                        alt="kamote"
                        mr={2}
                      />
                      <Text textTransform="capitalize" fontSize="xl">
                        {item.brand.name}
                      </Text>
                    </Flex>
                  </Link>
                ))}
              </SimpleGrid>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    );
  };

  const tabData = [
    {
      label: "New",
      content: uniqBrandByNew,
    },
    {
      label: "Used",
      content: uniqBrandByUsed,
    },
  ];

  return <BrowseByBrand data={tabData} />;
};

export default Home;
