import { useEffect } from "react";
import { useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}
interface Games {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface Fetchgames {
  count: number;
  result: Games[];
}

const useGames = () => {
  const [games, setGames] = useState<Games[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<Fetchgames>("/games", { signal: controller.signal })
      .then((res) => {
        setLoading(false);
        setGames(res.data.result);
      })
      .catch((err) => {
        if (err instanceof CanceledError) {
          setError(err.message);
          setLoading(false);
        }
      });
    return () => controller.abort();
  }, []);
  return { games, error, isLoading };
};
export default useGames;
