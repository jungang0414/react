# useRef Hooks

[useRef](https://react.dev/reference/react/useRef)

React.useRef是一個讓你可以記住渲染不需要的值
例如form表單輸入, 我們需要記住使用者的輸入, 
但是又不想要使用者每一次的修改都會造成渲染，就可以使用useRef。

## 呼叫useRef

```
import { useRef } from "react";

//傳遞想要要引用的初始值作為唯一的參數, 初始值可以是任意值。 這裡引用的初始值為0
const ref = useRef(0);

//useRef傳回具有單一屬性的對象
{
    current: 0  // 代表傳遞給useRef的值為 0 
}

//useRef的值是可變的, 代表可以存取跟改變.
console.log(ref.current);
```

## refs vs state

1. refs改變不會觸發重新渲染, state則會重新渲染。
2. refs(可變)可以在渲染過程之外更改目前的值, state(不可變)必須使用set函數改變
3. 當使用state更新狀態，React會重新渲染組件。而Ref的改變, React不會重新渲染組件, 代表可以直接讀取更新的ref。
4. 當元件需要儲存一些值, 但不影響渲染邏輯的話, 請使用refs.
5. 在渲染期間不要使用ref.current,這會讓你的元件很難以預測