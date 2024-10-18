import useSWRImmutable from "swr/immutable";
import { AnsatteList } from "../types/Ansatte";
import { BASE_API_URL, axiosFetcher } from "./apiConfig";

const swrConfig = {
  fetcher: <T>(url: string) => axiosFetcher<T>(BASE_API_URL, url),
  suspense: true,
  revalidateOnFocus: false,
  refreshInterval: 120000,
};

export function useGetAnsatte() {
  return useSWRImmutable<AnsatteList>(`/ansatte`, swrConfig);
}
