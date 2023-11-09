import useFetchData from './UseFetchData'


export default function App() {
  const [data] = useRandom({
    type: 'string',
    count: 10,
  })
  return (
    <div>
      <pre>
        {JSON.stringify(data, null, 1)}
      </pre>

    </div>
  )
}
