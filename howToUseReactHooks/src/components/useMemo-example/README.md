# useMemo Hooks

[useMemo](https://react.dev/reference/react/useMemo)
紀錄 object value 減少大量且不必要的元件重新渲染週期

1. calculateValue: 需要緩存值的計算函數, 應為沒有任何參數的純函數, 且可返回任意類型.
2. dependencies: 所有在 calculateValue 函數中使用的響應式變數組成的數組. 包含props、state和所有在元件中定義的變數和函數.

當元件重新渲染時,可避免複雜的程式被重複執行. useMemo會緩存計算的結果
React會在元件第一次渲染時調用函數,在之後的渲染中, dependencies沒有發生變化的話, React則會直接返回相同值,否則,會再次調用calculateValue函數返回最新結果, 並緩存該結果以便下次重複使用.

###### React 會使用 Object.is() 來確認兩個值是否為相同值

## 呼叫useMemo

```
import { useMemo } from 'react';

// useMemo(calculateValue, dependencies)

export default function example() {
    const [count, setCount] = useState(10);  //初始值設為10

    //儲存在useMemo
    const expensive = useMemo(() => {
        return count;
    }, []) // 依賴數組, 依賴數組若是改變則會重新計算函數, 否則會返回相同值. 這裡沒有放的話就一直會顯示 10
    
    return (
        <>
        <!-- 因為沒有放依賴數組所以就算render count 還是初始值 10 -->
        <div>{example}</div>
        <button onClick{() => setCount(count + 1)}>Click on</button>
        </>
    )
}
```