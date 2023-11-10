import { useState, useEffect } from 'react';


<<<<<<< HEAD
export default function useRandom (options)  {
    const [numbers, setNumbers] = useState([]);
    
useEffect(() => {
    setNumbers(
    Array.from({ length: options.count }, () => Math.floor(Math.random() * (options.max - options.min)) + options.min)
)
}, [options.count, options.min, options.max]);

    return [numbers]
};

  
=======
export default function useRandom(options) {
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    setNumbers(
      Array.from({ length: options.count }, () => Math.floor(Math.random() * (options.max - options.min)) + options.min)
    )
  }, [options.count, options.min, options.max]);

  return [numbers]
}


>>>>>>> e6fe679fbb36b3f23fdc87c963f9c09cd93eb85f




