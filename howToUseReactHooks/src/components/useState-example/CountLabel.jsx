import { useState } from "react";

function CountLabel({ counted }) {
  //儲存先前渲染的資訊
  const [prevCount, SetPrevCount] = useState(counted);
  const [trend, setTrend] = useState(null);
  //比較prevCount和counted
  if (prevCount !== counted) {
    SetPrevCount(counted);
    //若大於等於為加, 反之為減
    setTrend(counted > prevCount ? "increment" : "decrement");
  }
  return (
    <>
      <h1>{counted}</h1>
      {trend && <p>The count is {trend}</p>}
    </>
  );
}

export default CountLabel;
