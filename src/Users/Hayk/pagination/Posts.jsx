import classNames from "classnames";

export default function Posts({perPage,totalPage,changePage,page}) {
    const arr = []
    let total = Math.ceil(totalPage / perPage)
    for(let i = 1; i <= total; i++){
        arr.push(i)
    }


   
  return (
    <div className="Posts">
        <ul>
        {
        arr.map(elem=>{
            return <li 
            key={elem} 
            onClick={()=>changePage(elem)}
            className={classNames({
                active: elem === page
            })}
            >{elem}</li>
        })
     }
        </ul>
   
    </div>
  )
}
