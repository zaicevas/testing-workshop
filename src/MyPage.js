import { getTitle } from "./data/api/title";
import { useEffect, useState } from "react";

const MyPage = () => {
  const [title, setTitle] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchTitle = async () => {
      const response = await getTitle();

      if (!response) {
        setIsError(true);
        return;
      }

      setTitle(response.title);
      setIsLoading(false);
      getTitle();
    };

    fetchTitle();
  }, []);

  return (
    <>
      {isLoading && "Loading..."}
      {isError && "Error"}
      {title}
    </>
  );
};

export default MyPage;
