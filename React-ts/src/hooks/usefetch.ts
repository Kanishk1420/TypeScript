import { useState } from "react";

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}
export function useFetch<T>(): FetchState<T> {
  const [State, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });
  return State;
}
