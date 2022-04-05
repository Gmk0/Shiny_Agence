import { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../index";

export function useFetch(url) {
  const [data, setData] = useState({});
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setisLoading(true);
      try {
        const response = await fetch(url);
        const data = await response.json();

        setData(data);
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        setisLoading(false);
      }
    }
    fetchData();
  }, [url]);
  return { isLoading, data, error };
}

export function useTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return { theme, toggleTheme };
}
