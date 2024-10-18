import useSWRImmutable from "swr/immutable";
import { BASE_URI, axiosFetcher, swrConfig } from "../api/config/apiConfig";
import { Ansatte } from "../types/Ansatte";

export default function useGetAnsatte() {
  const { data, error, isValidating } = useSWRImmutable<Ansatte[]>(
    `/ansatte`,
    swrConfig<Ansatte[]>((url) =>
      axiosFetcher<Ansatte[]>(BASE_URI.VENTEREGISTER, url),
    ),
  );
  const isLoading = (!error && !data) || isValidating;

  return { data, error, isLoading };
}
