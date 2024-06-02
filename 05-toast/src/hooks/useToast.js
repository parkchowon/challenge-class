import { useState } from "react";

const useToast = (init) => {
  const [value, setValue] = useState(init);

  const handleInput = (text) => {
    setValue(text);
  };

  return [value, handleInput];
};

export default useToast;
