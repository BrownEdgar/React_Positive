
export default function Child({handleClick}) {

    console.log("child render");



  return (
    <div onClick={handleClick}>
        <h1>Child component</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam magnam iusto ipsa. Sint eum perspiciatis et quia doloribus minus quo asperiores dignissimos nihil tempore, aliquid delectus unde quod laborum quae!

        </p>
    </div>
    
  )
}

