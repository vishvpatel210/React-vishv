import { useState,useEffect } from "react";

export const Clock = (props) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <>
      <h1 style={{color:props.color}}>{time}</h1>
    </>
  );
};
