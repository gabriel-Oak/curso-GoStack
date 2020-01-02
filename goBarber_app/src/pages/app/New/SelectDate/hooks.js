import { useState } from "react";

export const SelectDateHooks = () => {
  const [time, setTime] = useState(new Date());
  const [visible, setVisible] = useState(false);

  const changeDate = ({ nativeEvent: { timestamp } }, date) => {
    setVisible(false);
    if (!date) {
      return;
    }
    setTime(new Date(timestamp));
  }

  return {
    datePicker: {
      time,
      changeDate,
      visible,
      setVisible
    }
  };
}