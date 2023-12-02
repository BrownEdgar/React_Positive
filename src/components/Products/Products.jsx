import { getAllProducts } from '../../features/products/productsSlice'
import './Products.css'
import { useSelector } from 'react-redux'

export default function Products() {
    const products = useSelector(getAllProducts)
   

  return (
    <div className='Products'>
        {
        products.map(elem => {
        return (
        <div key={elem.id}>
            <img src={elem.image}/>
            <div className='content'>
            <h2 className='title'>{elem.title}</h2>
             <div className='bottom'>
            <p>
            {elem.vendor}
            </p>
        </div>
       </div>
    </div>
                )
            })
        }

    </div>
  )
}
