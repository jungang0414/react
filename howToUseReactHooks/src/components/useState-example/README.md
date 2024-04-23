# useState hooks

React.useState 可以讓我們為元件新增狀態變數, 以下為呼叫方式及初始設定,宣告狀態變數

#### useState傳回一個包含以下兩項的陣列
1. 此狀態變數目前的狀態, 也就是一開始設定的init初始值
2. set函數可以讓我們將其變更為任何值
```
//在元件頂部呼叫useState
import { useState } from 'react';

//宣告狀態變數的格式 const [something, setSomething] = useState(init)
const [age, setAge] = useState(50);
const [name, setName] = useState('Taylor');

//物件和陣列也可以放入狀態, 在react中, 狀態是唯讀的, 所以應該要建立一個新物件而不是直接改變處於React狀態中的物件.
const [form, setForm] = useState({
    firstName: 'prevdate',
});
//不應該直接改變物件的元素, form.firstName = 'updata";
//若是要改變表單內資料
setForm({
    ...form,
    firstName: 'update'
});

//使用useState製作簡易todolist. 使用props

//利用useState狀態更改, React為重新渲染的機制, 實作reset功能

//useState 儲存先前渲染的資訊
```


參考文件
[useState](https://react.dev/reference/react/useState#usage)
[狀態快照](https://react.dev/learn/state-as-a-snapshot)
[將狀態邏輯提取到Reducer](https://react.dev/learn/extracting-state-logic-into-a-reducer)
[更新狀態中的物件](https://react.dev/learn/updating-objects-in-state)
[更新狀態中的陣列](https://react.dev/learn/updating-arrays-in-state)
[保持和重置狀態](https://react.dev/learn/preserving-and-resetting-state)