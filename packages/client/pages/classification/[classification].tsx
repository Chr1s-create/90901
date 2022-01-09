import {
  Center,
  Flex,
  Spinner,
  SimpleGrid,
  Box,
  Heading,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FC, Suspense, lazy } from "react";
import { useVehicleQuery } from "@hooks/queries";
import { filter } from "lodash";
import ProductCard from "@components/ProductCard";

const Layout = lazy(() => import("@components/Layout"));

const AllVehiclesByClass: FC = () => {
  // client side
  const router = useRouter();
  const vehicleClass = router.query.classification;

  const { vehicles } = useVehicleQuery();
  const filteredVehicles = filter(vehicles, [
    "classification.name",
    vehicleClass,
  ]);

  return (
    <>
      <Suspense
        fallback={
          <Flex h="100vh" w="full" justifyContent="center" alignItems="center">
            <Spinner />
          </Flex>
        }
      >
        <Layout title={`${vehicleClass}`}>
          <Box>
            <Heading p={4} mt={2} textTransform="capitalize">
              {vehicleClass}
            </Heading>
            <Center w="100%" h="100%" p={10}>
              <SimpleGrid spacing={10} columns={{ base: 4 }}>
                {filteredVehicles.map((vehicle) => (
                  <ProductCard key={vehicle.id} vehicle={vehicle} />
                ))}
              </SimpleGrid>
            </Center>
          </Box>
        </Layout>
      </Suspense>
    </>
  );
};

export default AllVehiclesByClass;
