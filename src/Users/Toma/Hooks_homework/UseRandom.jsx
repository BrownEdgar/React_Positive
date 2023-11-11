import { useState, useEffect } from 'react';

export default function useRandom(options) {
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    setNumbers(
      Array.from({ length: options.count }, () => Math.floor(Math.random() * (options.max - options.min)) + options.min)
    )
  }, [options.count, options.min, options.max]);

  return [numbers]
}






