import "./App.scss";
import useAxiosData from "./UseAxiosData";
import useRandonArray from "./UseRandomArray";

export default function App() {
  const [array, { createArrayRandom }] = useRandonArray({
    type: "number",
    count: 10,
    max: 4800,
    min: 4000,
  });
  const [data] = useAxiosData({
    basURL: "https://jsonplaceholder.typicode.com/",
    url: "users",
    limit: 5,
    start: 5,
  });
  return (
    <div>
      <pre>{JSON.stringify(data, null, 1)}</pre>
      <pre>{JSON.stringify(array)}</pre>
      <button onClick={createArrayRandom}>createArrayRandom</button>
    </div>
  );
}
