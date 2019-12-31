import { useState } from "react";

export const SelectDateHooks = () => {
  const [time, setTime] = useState(new Date());

  return {
    time
  };
}