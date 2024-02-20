import { useState, useEffect } from "react";
import apiClient from "../services/apiClient";

interface Genre {
  id: number;
  name: string;
}

interface FetchGenresResponse {
  count: number;
  result: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchGenresResponse>("/games", { signal: controller.signal })
      .then((res) => {
        setLoading(false);
        setGenres(res.data.result);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          setError("Request aborted");
          setLoading(false);
        } else {
          setError(err.message);
          setLoading(false);
        }
      });
    return () => controller.abort();
  }, []);
  return { genres, error, isLoading };
};

export default useGenres;
