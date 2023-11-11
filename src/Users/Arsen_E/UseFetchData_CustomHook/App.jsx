import UseFetchData from "./UseFetchData";
export default function App() {
  const [data] = UseFetchData({
    fetchUrl: "https://jsonplaceholder.typicode.com/todos/",
    limit: 8,
    start: 8,
  });

  return (
    <div>
      <pre>{JSON.stringify(data, null, 1)}</pre>
    </div>
  );
}
