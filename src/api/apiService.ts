import useSWRImmutable from "swr/immutable";
import { AnsatteList } from "../types/Ansatte";
import { axiosFetcher } from "./config/apiConfig";

const BASE_URI = {
  VENTEREGISTER: "/oppdrag-api/api/v1/venteregister",
};

function swrConfig<T>(fetcher: (uri: string) => Promise<T>) {
  return {
    fetcher,
    suspense: true,
    revalidateOnFocus: false,
    refreshInterval: 600000,
  };
}

export default function useGetAnsatte() {
  const { data, error, isValidating } = useSWRImmutable<AnsatteList>(
    `/ansatte`,
    swrConfig<AnsatteList>((url) =>
      axiosFetcher<AnsatteList>(BASE_URI.VENTEREGISTER, url),
    ),
  );
  const isLoading = (!error && !data) || isValidating;

  return { data, error, isLoading };
}
