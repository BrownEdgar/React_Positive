export default function Pagination({users}) {
  return (
    <ul>
        {
            users.map(elem=>{
                return <li key={elem.id}>
                    <a href="https://www.youtube.com/watch?v=Hfur04EhwK8"><video controls  className="video" src={elem.video}></video></a>
                    {elem.title}
                    <span>{elem.id}</span>
                </li>
            })
        }
    </ul>
  )
}
