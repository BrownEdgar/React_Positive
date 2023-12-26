import UseRandomNumber from "./UseRandomNumber"

export default function App() {

const [data] = UseRandomNumber({
  type:'number',
  count:10,
  max:4800,
  min:4000
})
  return (
    <div>
<h1>{JSON.stringify(data,1,null)}</h1>
    </div>
  )
}
