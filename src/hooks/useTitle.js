import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - SAM Kitchen`;
  }, [title]);
};

export default useTitle;
