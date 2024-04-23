# useEffect hooks

React.useEffect , 可以使元件與外部系統同步
如: 使用React狀態控制非React元件、設定伺服器連線等, Effect可以在頁面渲染後執行自訂的程式碼, 以便將元件與React外的系統同步。

## 呼叫Effcet
在元件頂端呼叫useEffect來設置Effect
```
import { useEffect } from "react";

//Effect格式
useEffect(setup, dependencies?)
```

## 預備知識

- Rendering code(渲染程式碼): 

- Event handlers(事件處理程序):

## 撰寫Effect

1. 呼叫Effect. 預設情況是當渲染後effect才會執行, 換句話說就是Effect延遲了一段程式碼的執行,直到渲染反映在頁面上.
```
import { useEffect } from "react"
```
2. 指定Effect的依賴項目. Effect應該在需要執行時才會執行, 而不是每次渲染都執行. 例如: 淡入動畫應該僅在元件出現時執行. 
```
const [count, setCount] = useState(0);

useEffect(() => {
    setCount( count + 1);
});
```
以上程式碼
頁面渲染後會執行useEffect中的程式碼
這邊改變了count的狀態, 從而重新渲染頁面
而我們知道useEffect中的程式碼會在渲染後執行, 這就導致了無限迴圈.

而為了避免在每一次渲染時執行useEffect, 可以指定傳入useEffect的第二個參數"依賴數組", 從而告訴React跳過不必要的useEffect運行. 沒有依賴數組與有空[]的依賴數組的行為是不一樣的.
```
useEffect(() => {
    //在每一次渲染後執行
});

useEffect(() => {
    //只在元件出現的第一次執行
}, []);

useEffect(() => {
    //在元件出現的第一次執行或者是依賴數組a, b與上一次的渲染不同時
}, [a, b]);

```

3. 在需要時添加Effect清理. 某些Effect需要指定如何清理、撤銷或斷開正在執行的操作. 例如: "連結"需要"斷開連結", fetch需要"取消"或"忽略". 透果返回清理函數.
```
//Fetch data 
//當我們使用useEffect取得了某些內容, 則清理函式應該終止fetch或是忽略其結果

useEffect(() => {
    //未連線
    const isFetch = false;
    //建立非同步連線
    async function startFetching() {
        const json = await fetchTodos(userId);
        if (!isFetch) {
            setTodos(json);
        }
    }
    
    //執行非同步函數
    startFetching();

    return () => {
        ignore = true;
    };
    
}, [userId]);

```
4. 當不需要與外部系統同步, 而只是需要根據其他狀態來調整狀態時, 不需要使用Effect.(因為可能會造成無限循環)


參考文件
[保持元件純淨](https://react.dev/learn/keeping-components-pure)
[增加互動性](https://react.dev/learn/adding-interactivity)