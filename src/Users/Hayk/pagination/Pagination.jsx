export default function Pagination({users}) {
  return (
    <ul>
        {
            users.map(elem=>{
                return <li key={elem.id}>
                    {elem.title}
                    <span>{elem.id}</span>
                </li>
            })
        }
    </ul>
  )
}
