import { useQuery } from "@apollo/client";
import { BRANDS } from "@graphql/queries/brand";
import { isBrowser } from "@utils/envUtils";

export interface Brand {
  id: string;
  name: string;
  image: string;
}

const useClassificationQuery = () => {
  const { data, refetch, loading } = useQuery<{
    brands: Brand[];
  }>(BRANDS, {
    skip: !isBrowser,
  });
  return {
    brands: data?.brands || [],
    refetchBrands: refetch,
    loadingBrands: isBrowser ? loading : true,
  };
};

export default useClassificationQuery;
