import axios from "axios";
import { useLoaderData } from "react-router-dom";

export default function Comments() {
  const comments = useLoaderData();

  return (
    <div>
      <pre>{JSON.stringify(comments, null, 1)}</pre>
    </div>
  );
}

const commentsLoader = () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.data);
};

// eslint-disable-next-line react-refresh/only-export-components
export { commentsLoader };
