import {NavLink,useLocation} from "react-router-dom";

import React, { useState } from 'react';



export const Train = () => {
  //ページを変えても値を受け渡すやつ
  const search = useLocation().search;

  const query2 = new URLSearchParams(search)

  //初期のお金設定
  const firstPrice = 1000

  //アイテムボタンを押したらアイテムが表示される
  
  
  


  //購入するアイテムの金額と種類
  

  //購入する物を選択してチェックがつくようにする
  

  

  //仮のウニのパラメーター　
  const agilityNum = 3
  const tasteNum = 3
  const sizeNum = 3
  const beautyNum = 3

  //moneyとagilityとsizeとbeautyとsizeをevaluateに渡すためのurlの下の部分
  const uri = "/evaluate?money="+firstPrice+"&agility="+agilityNum+"&size="+sizeNum+"&beauty="+beautyNum+"&taste="+tasteNum+""

  //クリックしたときにevaluateに飛ぶためのもの
  const handleClick = () => {
    window.location.href = uri;
  }


  //持ってるお金を定義
  const [agility, setAgility] = useState(0);
  const [beauty, setBeauty] = useState(0);
  const [size, setSize] = useState(0);
  const [taste, setTaste] = useState(0);

  // ウニの評価金額を計算する関数
  const evaluateUni = () => {
    const totalEvaluation = beauty + agility + size + taste;
    return totalEvaluation;
  };

  const handleBeautyChange = (event) => {
    setBeauty(Number(event.target.value));
  };

  const handleAgilityChange = (event) => {
    setAgility(Number(event.target.value));
  };

  const handleSizeChange = (event) => {
    setSize(Number(event.target.value));
  };

  const handleTasteChange = (event) => {
    setTaste(Number(event.target.value));
  };

  
  

  let haveMoney = () => {
      haveMoney = Number(Number(query2.get('money')) + 1000)
      return haveMoney
  }
  
  
 //背景画像指定
 const backImagePath = `${process.env.PUBLIC_URL}/buying.PNG`

 //表示するところ
  return (
    <div className="train"
     style = {
      { backgroundImage: `url(${backImagePath})` }
     }>
   
     

    

      <h1> ウニを育成しよう</h1>
      <div>持っているお金:  {haveMoney()} 円</div>
      <img src={`${process.env.PUBLIC_URL}/ozo-uni.PNG`} onClick={handleClick} id="hai" width="100"/>
      <h2>ウニ評価</h2>
      <label>
        美しさ：
        <input type="number" value={beauty} onChange={handleBeautyChange} />
      </label>
      <br />
      <label>
        素早さ：
        <input type="number" value={agility} onChange={handleAgilityChange} />
      </label>
      <br />
      <label>
        大きさ：
        <input type="number" value={size} onChange={handleSizeChange} />
      </label>
      <br />
      <label>
        美味しさ：
        <input type="number" value={taste} onChange={handleTasteChange} />
      </label>
      <br />
      <p>ウニの評価金額は {evaluateUni()} 円です。</p>
      



      
    </div>
  )
};