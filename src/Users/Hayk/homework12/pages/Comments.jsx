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

const commentsLoader = async () => {
  const res = await axios
    .get("https://jsonplaceholder.typicode.com/comments");
  return res.data;
};

// eslint-disable-next-line react-refresh/only-export-components
export { commentsLoader };
