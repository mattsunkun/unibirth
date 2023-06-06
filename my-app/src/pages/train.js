import {NavLink,useLocation} from "react-router-dom";

import React, { useState } from 'react';

import { useEffect, useCallback, memo} from "react";

 

  







export const Train = () => {
  //ページを変えても値を受け渡すやつ
  const search = useLocation().search;

  const query2 = new URLSearchParams(search)


  const Roulette = memo(() => {
    const [start, setStart] = useState(false);
    const [index, setIndex] = useState(0);
  
    const rouletteContents = [
      "ムラサキウニ",
      "ムラサキウニ",
      "ムラサキウニ",
      "ムラサキウニ",
      "キタムラサキウニ",
      "キタムラサキウニ",
      "キタムラサキウニ",
      "チリウニ",
      "チリウニ",
      "チリウニ",
      "チリウニ",
      "アカウニ",
      "アカウニ",
      "エゾバフンウニ",
      "ガンガゼ",
      "ガンガゼ",
      "オゾウニ",
      "カガミモチウニ",
      "ワニ"
    ];
  
  
  
    //ボタンの文言を変更する処理
    const startRoulette = useCallback(() => {
      setStart(!start);
    }, [start]);
    
    //ルーレットを回す処理
    useEffect(() => {
      if (start) {
        const interval = setInterval(() => {
          setIndex((oldIndex) => {
            if (oldIndex < rouletteContents.length - 1) return oldIndex + 1;
            return 0;
          });
        }, 50);//ルーレットの中身を切り替える速度
        return () => clearInterval(interval);
      } else if (!start) {
        return () => clearInterval();
      }
    }, [start]);

  
  
//所持金
let haveMoney = Number(query2.get('money'))


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

//   const totalPurchase = () => {

//     let intPurchaseTotal = 0;

// //     intPurchaseTotal += intCabbage * 

//   }

  const intCabbage = 600;
  const intTomato = 500;
  const intWaterMelon = 700;
  const intSeaWeed = 200;

  const handleBeautyChange = (event) => {
    const intMoneyBefore = haveMoney;
    console.warn(haveMoney, typeof(haveMoney), typeof(intCabbage));
    const intCabbageNow = intCabbage + 1;
    const intPurchasedTotal = (intCabbageNow*beauty) + (intTomato*agility) + (intWaterMelon*size) + (intSeaWeed*taste);
    haveMoney = intMoneyBefore - intPurchasedTotal;
    console.warn(haveMoney, event.target.value, intCabbage, "helloe");

    if(haveMoney < 0)
    {
      console.error("hello");
      event.target.value--;
    };
    console.warn(event.target.value);
    setBeauty(Number(event.target.value) );
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

 //背景画像指定
 const backImagePath = `${process.env.PUBLIC_URL}/buying.PNG`


 
 //表示するところ
  return (
    <div className="train"
     style = {
      { backgroundImage: `url(${backImagePath})`,backgroundRepeat: "no-repeat" ,paddingTop: 30}
      
     }>
      
      <button type="button" onClick={startRoulette}>
        {start ? "ストップ" : "スタート"}
      </button>
      <div style = {{fontSize: 30, backgroundColor: "white", display: "inline-block", paddingTop: 10, paddingBottom:10}}>所持金:  {haveMoney} 円</div>

      <h1> ウニを育成しよう</h1>
      
      <h2 style = {{fontSize: 40, color: '#FF570D', paddingLeft: 30, paddingBottom: 2 }}>エサ</h2>
      <label style = {{fontSize: 30}}>
        キャベツ：
        <input type="number" value={beauty} onChange={handleBeautyChange} />
      </label>
      <br />
      <label style = {{fontSize: 30}}>
        トマト：
        <input type="number" value={agility} onChange={handleAgilityChange} />
      </label>
      <br />
      <label style = {{fontSize: 30}}>
        スイカ：
        <input type="number" value={size} onChange={handleSizeChange} />
      </label>
      <br />
      <label style = {{fontSize: 30}}>
        昆布：
        <input type="number" value={taste} onChange={handleTasteChange} />
      </label>
      <br />
      <img src={`${process.env.PUBLIC_URL}/ozo-uni.PNG`} onClick={handleClick} id="hai" width="100"/>
      <p>ウニの評価金額は {evaluateUni()} 円です。</p>
      <p>今日のメニューは・・・</p>
      <p>{rouletteContents[index]}</p>
      <button type="button" onClick={startRoulette}>
        {start ? "ストップ" : "スタート"}
      </button>
      



    
    </div>
  );
}
