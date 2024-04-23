//呼叫useEffect
import { useEffect, useRef, useState } from "react";

function UseEffectExample() {
  //useEffect
  useEffect(() => {
    //此處的程式碼會在每一次渲染後執行
  });

  const [show, setShow] = useState(false);

  return (
    <>
      <div>
        <Playing />
      </div>
      <hr />
      <div>
        <ChatRoom />
      </div>
      <hr />
      <button onClick={() => setShow(!show)}>
        {show ? "Unmount" : "Mount"} the component
      </button>
      {show && <hr />}
      {show && <Playground />}
    </>
  );
}

export default UseEffectExample;

function Playing() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [value, setValue] = useState("");
  return (
    <>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? "Pause" : "Play"}
      </button>
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </>
  );
}

function VideoPlayer({ isPlaying, src }) {
  const ref = useRef(null);

  //透過使用useEffect包裝, 讓渲染先進行, 直到結束後才執行useEffect中的程式碼
  useEffect(() => {
    //這邊依賴isPlaying屬性來決定需要做什麼
    if (isPlaying) {
      console.log("play");
      ref.current.play();
    } else {
      console.log("pause");
      ref.current.pause();
    }
    //新增一個空陣列並添加依賴項目 isPlaying,
    //當畫面因為其他狀態(如input)重新渲染時, 當isPlaying與前一次渲染時相同則會跳過useEffect運行
  }, [isPlaying]);

  return (
    <video width={100} height={100} ref={ref} src={src} loop playsInline />
  );
}

// chatRoom實現 useEffect cleanup
function createConnection() {
  return {
    connect() {
      console.log("Connecting");
    },
    disconnect() {
      console.log("Disconnected");
    },
  };
}

function ChatRoom() {
  //當用戶進到聊天室 渲染完成後會執行useEffect,運行連結程式碼
  //然而當用戶跳轉至其他頁面後再重新進入聊天室, 這會導致進行第二次連結,
  //但第一次的連結並沒有結束, 這會導致連線不斷累積.
  useEffect(() => {
    const connection = createConnection();
    connection.connect();
    //要解決這個問題需要在這裡返回一個清理函數
    //這個清理函數會在ChatRoom組件卸載時被調用, 從而關閉連線.
    return () => {
      connection.disconnect();
    };
  }, []);

  return <h1>Welcome to the chat!</h1>;
}

//觀察useEffect在實際執行的工作原理
function Playground() {
  const [text, setText] = useState("a");

  //useEffect
  useEffect(() => {
    function onTimeout() {
      console.log("⏰" + text);
    }

    console.log('Schedule "' + text + '" log');
    //設置定時器 在3秒後執行 onTimeout函數
    const timeoutId = setTimeout(onTimeout, 3000);

    //返回清除函數 在
    return () => {
      console.log('Cancel "' + text + '"log');
      clearTimeout(timeoutId);
    };
    //添加依賴數組 此useEffect會在第一次或是依賴數組改變時運作
  }, [text]);

  return (
    <>
      <label>
        log <input value={text} onChange={(e) => setText(e.target.value)} />
      </label>
      <h1>{text}</h1>
    </>
  );
}
