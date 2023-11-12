import { useState } from "react";

export default function useRandonArray(arrayRandom) {
  const [array, setArray] = useState([]);
  const createArrayRandom = () => setArray(arrayRandomNumber);

  const arrayRandomNumber = Array.from({ length: arrayRandom.count }, () =>
    Math.floor(
      Math.random() * (arrayRandom.max - arrayRandom.min) + arrayRandom.min
    )
  );
  return [array, { createArrayRandom }];
}
