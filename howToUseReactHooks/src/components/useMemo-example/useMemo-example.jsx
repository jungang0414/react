import { useMemo, useState } from "react";

function UseMemoExample() {
  const [count, setCount] = useState(10); //初始值設為10

  //儲存在useMemo
  const expensive = useMemo(() => {
    return count;
  }, []); // 依賴數組, 依賴數組若是改變則會重新計算函數, 否則會返回相同值. 這裡沒有的話就一直會顯示 10

  //增加函數
  const handleClick = () => {
    setCount((prev) => prev + 1);
    console.log(count);
  };

  return (
    <>
      <div>{expensive}</div>
      <button onClick={handleClick}>Click on</button>
    </>
  );
}

export default UseMemoExample;
