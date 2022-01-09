import { useQuery } from "@apollo/client";
import { VEHICLES } from "@graphql/queries/vehicle";
import { isBrowser } from "@utils/envUtils";

export interface Vehicle {
  id: string;
  modelName: string;
  brand: {
    id: string;
    name: string;
    image: string;
  };
  classification: {
    id: string;
    name: string;
  };
  image: string;
  price: string;
  remark: string;
}

const useVehicleQuery = () => {
  const { data, refetch, loading } = useQuery<{
    vehicles: Vehicle[];
  }>(VEHICLES, {
    skip: !isBrowser,
  });
  return {
    vehicles: data?.vehicles || [],
    refetchVehicles: refetch,
    loadingVehicles: isBrowser ? loading : true,
  };
};

export default useVehicleQuery;
