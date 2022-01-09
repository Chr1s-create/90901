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
import { filter } from "lodash";
import { VEHICLES } from "@graphql/queries/vehicle";
import { GetServerSideProps } from "next";
import { Vehicle } from "@hooks/queries/useVehicleQuery";
import ProductCard from "@components/ProductCard";

import { client } from "../_app";

const Layout = lazy(() => import("@components/Layout"));

type Props = {
  vehicles: Vehicle[];
};

const AllVehiclesByRemark: FC<Props> = ({ vehicles }) => {
  // client side
  const router = useRouter();
  const { query } = router;

  const vehicleRemark = query.remark;

  return (
    <>
      <Suspense
        fallback={
          <Flex h="100vh" w="full" justifyContent="center" alignItems="center">
            <Spinner />
          </Flex>
        }
      >
        <Layout title={`${vehicleRemark} vehicles`}>
          <Box>
            <Heading p={4} mt={2} textTransform="capitalize">
              {`${vehicleRemark} vehicles`}
            </Heading>
            <Center w="100%" h="100%" p={10}>
              <SimpleGrid spacing={10} columns={{ base: 4 }}>
                {vehicles.map((vehicle) => (
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

// for educational purposes :D
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { remark } = params || {};

  const { data } = await client.query({
    query: VEHICLES,
  });

  const vehicles = filter(data?.vehicles, ["remark", remark]);

  return {
    props: {
      vehicles,
    },
  };
};

export default AllVehiclesByRemark;
