import { useRef, useState } from "react";
import "./style.css";
function UseRefExample() {
  const ref = useRef(0);
  //當使用button點擊時 ref的值會+1
  function handleClick() {
    ref.current = ref.current + 1;
    alert("Value is " + ref.current);
  }

  //碼錶
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);
  //開始
  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }
  //停止
  function handleStop() {
    clearInterval(intervalRef.current);
  }
  //起始
  let passed = 0;
  if (startTime != null && now !== null) {
    passed = (now - startTime) / 1000;
  }

  //ref vs state
  const [countState, setCountState] = useState(0);
  const countRef = useRef(0);
  // state
  function handleState() {
    setCountState(countState + 1);
  }
  //ref
  function handleRef() {
    countRef.current = countRef.current + 1;
  }

  //fix chat sent (這裡會有問題, 當按下Send送出資料時, )
  const [text, setText] = useState("");
  const [isSending, setIsSending] = useState(false);
  let timeoutID = null;
  //傳送
  function handleSend() {
    setIsSending(true);
    timeoutID = setTimeout(() => {
      alert("sent!");
      setIsSending(false);
    }, 3000);
  }

  //取消傳送
  function handleUndo() {
    setIsSending(false);
    clearTimeout(timeoutID);
  }

  //改成使用ref儲存起來
  const [textRef, setTextRef] = useState("");
  const [isSendingRef, setIsSendingRef] = useState(false);
  const timeoutIdRef = useRef(null);

  //更新後得傳送函數
  function handleSendRef() {
    setIsSendingRef(true);
    timeoutIdRef.current = setTimeout(() => {
      alert("sent!!");
      setIsSendingRef(false);
    }, 3000);
  }
  //更新後的取消函數
  function handleUndoRef() {
    setIsSendingRef(false);
    clearTimeout(timeoutIdRef.current);
  }

  return (
    <>
      <div>
        <button onClick={handleClick}>Click !</button>
      </div>
      <hr />
      <div>
        <h2>Time: {passed.toFixed(3)}</h2>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
      </div>
      <hr />
      <div>
        <button onClick={handleState}>State count: {countState}</button>
        <button onClick={handleRef}>Ref count: {countRef.current}</button>
      </div>
      <hr />
      <div className="send">
        <p>
          在這裡實作了, 送信時取消送信, <br />
          但是當我們按下Send後立即在按下Undo, <br />
          會發現過了3秒後還是顯示了alert提示視窗
        </p>
        <p className="ans">
          這是因為當我們按下Uudo按鈕,
          所執行的函數中使用了set函數改變了isSending的狀態,React會重新渲染,
          導致timeoutID又被初始化為null,clearTimeout函數在執行時無法找到要取消的計時器.
          <br />
          所以alert還是會執行.
        </p>
        <input
          disabled={isSending}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button disabled={isSending} onClick={handleSend}>
          {isSending ? "sending" : "send"}
        </button>
        {isSending && <button onClick={handleUndo}>Undo</button>}
        <br />
        <br />
        <p>
          這邊我們將setTimeout儲存在useRef, 即時追蹤目前的值, <br />
          所以當我們按下Send後立即按下Udno取消函數, <br />{" "}
          setTimeout會立即將值改變為false並且清除setTimeout.所以就不會跳出alert提示視窗。
        </p>
        <input
          disabled={isSendingRef}
          value={textRef}
          onChange={(e) => setTextRef(e.target.value)}
        />
        <button disabled={isSendingRef} onClick={handleSendRef}>
          {isSendingRef ? "sending" : "send"}
        </button>
        {isSendingRef && <button onClick={handleUndoRef}>Undo</button>}
      </div>
    </>
  );
}

export default UseRefExample;
