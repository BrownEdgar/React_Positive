import useFetchData from './UseFetchData'


export default function App() {
  const [data] = useRandom({
    type: 'number',
    count: 10,
    max: 4800,
    min: 4000
  })
  return (
    <div>
      <pre>
        {JSON.stringify(data, null, 1)}
      </pre>

    </div>
  )
}
