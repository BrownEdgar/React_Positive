import { memo } from 'react'

import './child.scss'

export default function Child({ value }) {
    const [numbers, setNumbers] = useState([])

    useEffect(() => {
        const arr = new Array(1e4)
        .fill()
        .map(() => Math.ceil(Math.random() * 20000))
        .map((elem, index) => <li key ={index}>{elem}</li>);
        setNumbers(arr)

    }, [])          
return (
    <ul>
        {
            
            new Array(1e4)
            .fill()
            .map(() => Math.ceil(Math))
            .map((elem, index) => <li key={index}>{elem}</li>)
        }
    </ul>
)
}
