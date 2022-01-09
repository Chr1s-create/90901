import {
  Center,
  Flex,
  Spinner,
  SimpleGrid,
  Heading,
  Box,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { GetStaticProps } from "next";
import Layout from "@components/Layout";
import { DYNAMIC_PATHS } from "@constants/paths";
import { VEHICLES } from "@graphql/queries/vehicle";
import { filter } from "lodash";
import { Vehicle } from "@hooks/queries/useVehicleQuery";
import ProductCard from "@components/ProductCard";

import { client } from "../_app";

type Props = {
  listing: string;
  slug: string;
  vehicles: Vehicle[];
};

const VehicleListing = ({ listing, slug, vehicles }: Props) => {
  const router = useRouter();

  //using isFallback from next router instead of suspense component for educational purposes :D
  if (router.isFallback) {
    return (
      <Flex h="100vh" w="full" justifyContent="center" alignItems="center">
        <Spinner />
      </Flex>
    );
  }

  const filteredVehicle = filter(vehicles, ["classification.name", slug]);

  return (
    <>
      <Layout title={`${listing} listing | ${slug}`}>
        <Box>
          <Heading p={4} mt={2} textTransform="capitalize">
            {listing} {`${slug}s`}
          </Heading>
          <Center w="100%" h="100%" p={10}>
            <SimpleGrid spacing={10} columns={{ base: 4 }}>
              {filteredVehicle.map((vehicle) => (
                <ProductCard key={vehicle.id} vehicle={vehicle} />
              ))}
            </SimpleGrid>
          </Center>
        </Box>
      </Layout>
    </>
  );
};

// static rendering / data fetching

export const getStaticPaths = () => {
  const paths = DYNAMIC_PATHS.map((path) => ({
    params: { listing: path.listing, slug: path.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { listing, slug } = params || {};

  const { data } = await client.query({
    query: VEHICLES,
  });

  const vehicles = filter(data?.vehicles, ["remark", listing]);

  return {
    props: { listing, slug, vehicles },
    revalidate: 10,
  };
};

export default VehicleListing;
