import { useEffect, useState } from 'react';
export const useDebouce = (inputSearch, timeout) => {
  const [debounceInput, setDebounceInput] = useState(inputSearch);
  useEffect(() => {
    const handle = setTimeout(() => {
      setDebounceInput(inputSearch);
    }, timeout);
    return () => {
      clearTimeout(handle);
    };
  }, [inputSearch,timeout]);
  return debounceInput;
};
