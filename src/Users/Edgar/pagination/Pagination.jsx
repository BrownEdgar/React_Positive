import classNames from 'classnames';

export default function Pagination({ totalPosts, perpage, changePage, page }) {
  const arr = [];
  const total = Math.ceil(totalPosts / perpage)
  for (let i = 1; i <= total; i++) {
    arr.push(i)
  }

  return (
    <ul className='pagination'>
      {arr.map(number => {
        return <li
          key={number}
          onClick={() => changePage(number)}
          className={classNames({
            active: number === page
          })}
        >{number}</li>
      })}
    </ul>
  )
}
