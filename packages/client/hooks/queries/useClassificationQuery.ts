import { useQuery } from "@apollo/client";
import { CLASSIFICATION } from "@graphql/queries/classification";
import { isBrowser } from "@utils/envUtils";

export interface Classification {
  id: string;
  name: string;
  image: string;
}

const useClassificationQuery = () => {
  const { data, refetch, loading } = useQuery<{
    classifications: Classification[];
  }>(CLASSIFICATION, {
    skip: !isBrowser,
  });
  return {
    classifications: data?.classifications || [],
    refetchClassifications: refetch,
    loadingClassifications: isBrowser ? loading : true,
  };
};

export default useClassificationQuery;
