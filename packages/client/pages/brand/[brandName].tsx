import {
  Box,
  Center,
  Flex,
  Heading,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import ProductCard from "@components/ProductCard";
import React, { lazy, Suspense } from "react";
import { gql, useQuery } from "@apollo/client";
import { Vehicle } from "@hooks/queries/useVehicleQuery";

const Layout = lazy(() => import("@components/Layout"));

// on component query, for educational purposes
const getAllVehiclesByBrand = gql`
  query VehicleByBrand($brandName: String!) {
    vehiclesByBrand(brandName: $brandName) {
      id
      modelName
      image
      price
      remark
    }
  }
`;

const VehicleByBrand = () => {
  const router = useRouter();

  const brandName = router.query.brandName;

  const { data } = useQuery(getAllVehiclesByBrand, {
    fetchPolicy: "cache-and-network",
    variables: {
      brandName,
    },
  });

  return (
    <>
      <Suspense
        fallback={
          <Flex h="100vh" w="full" justifyContent="center" alignItems="center">
            <Spinner />
          </Flex>
        }
      >
        <Layout title="kamote">
          <Box>
            <Heading p={4} mt={2} textTransform="capitalize">
              {brandName}
            </Heading>
            <Center w="100%" h="100%" p={10}>
              <SimpleGrid spacing={10} columns={{ base: 4 }}>
                {data?.vehiclesByBrand?.map((vehicle: Vehicle) => (
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

export default VehicleByBrand;
