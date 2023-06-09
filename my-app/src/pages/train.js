import {NavLink,useLocation} from "react-router-dom";
import React, { useState, useEffect, useCallback, memo } from 'react';
//import React, { useEffect, useCallback, memo} from "react";
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
      ]
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
let haveMoney = Number(query2.get('money'));
  //moneyとagilityとsizeとbeautyとsizeをevaluateに渡すためのurlの下の部分
  // const uri = "/evaluate/?money=1000&agility=3&size=3&beauty=3&taste=3"
  //クリックしたときにevaluateに飛ぶためのもの
  const handleClick = () => {
let uri;
      //仮のウニのパラメーター　
  let dictStatus = {
    intAgility: 0,
    intTaste: 0,
    intSize: 0,
    intBeauty: 0
  }
    // 紫うに
    if(
      (dictFood.cabbageNamePriceAmount[2] <= 2)
      )
    {
      console.warn("hello")
    dictStatus.intSize = 3
    dictStatus.intAgility = 3
    dictStatus.intTaste = 3
    dictStatus.intBeauty = 3
    }
    // チリうに
    else if(
      (dictFood.tomatoNamePriceAmount[2] <= 2)
      )
    {
      dictStatus.intSize = 1
      dictStatus.intAgility = 5
      dictStatus.intTaste = 2
      dictStatus.intBeauty = 2
    }
    // 北紫うに
    else if(
      (dictFood.cabbageNamePriceAmount[2] >= 4)||(dictFood.seaWeedNamePriceAmount[2] >= 3)
    )
    {
      dictStatus.intSize = 4
      dictStatus.intAgility = 3
      dictStatus.intTaste = 2
      dictStatus.intBeauty = 4
    }
    // ガンガゼ
    else if(
     (dictFood.cabbageNamePriceAmount[2] == 1)||(dictFood.tomatoNamePriceAmount[2] == 1)
    )
    {
      dictStatus.intSize = 1
      dictStatus.intAgility = 5
      dictStatus.intTaste = 0
      dictStatus.intBeauty = 1
    }
    // アカウに
    else if(
     ((dictFood.tomatoNamePriceAmount[2] == 3)||(dictFood.tomatoNamePriceAmount[2] == 4))&&((dictFood.waterMelonNamePriceAmount[2] == 3)||(dictFood.waterMelonNamePriceAmount[2] == 4))
    )
    {
      dictStatus.intSize = 4
      dictStatus.intAgility = 2
      dictStatus.intTaste = 5
      dictStatus.intBeauty = 4
    }
    // 馬糞
    else if(
      (dictFood.waterMelonNamePriceAmount[2] == 4)||(dictFood.seaWeedNamePriceAmount[2] == 4)
    )
    {
      dictStatus.intSize = 4
      dictStatus.intAgility = 2
      dictStatus.intTaste = 4
      dictStatus.intBeauty = 4
    }
    // 蝦夷ばふん
    else if(
      (dictFood.waterMelonNamePriceAmount[2] >= 4)&&(dictFood.seaWeedNamePriceAmount[2] >= 4)
    )
    {
      dictStatus.intSize = 5
      dictStatus.intAgility = 1
      dictStatus.intTaste = 5
      dictStatus.intBeauty = 5
    }
    // お雑煮
    else if(
      (dictFood.seaWeedNamePriceAmount[2] == 5)
    )
    {
      dictStatus.intSize = 5
      dictStatus.intAgility = 0
      dictStatus.intTaste = 5
      dictStatus.intBeauty = 5
    }
    // 鏡餅うに
    else if(
      (dictFood.seaWeedNamePriceAmount[2] == 4)&&(dictFood.tomatoNamePriceAmount[2] ==4)
    )
    {
      dictStatus.intSize = 1
      dictStatus.intAgility = 5
      dictStatus.intTaste = 1
      dictStatus.intBeauty = 2
    }
    // ワニ
    else
    {
      dictStatus.intSize = 5
      dictStatus.intAgility = 5000
      dictStatus.intTaste = 0
      dictStatus.intBeauty = 0
    }
    // dictStatus.intAgility = dictFood.cabbageNamePriceAmount[2]
    uri = "/evaluate/?money="+haveMoney.toString()+"&agility="+dictStatus.intAgility.toString()+"&size="+dictStatus.intSize.toString()+"&beauty="+dictStatus.intBeauty.toString()+"&taste="+dictStatus.intTaste.toString()+""
    console.warn(uri)
    window.location.href = uri;
  };
  let dictFood = {
    cabbageNamePriceAmount: ["cabbage", 200, 0],
    tomatoNamePriceAmount: ["tomato", 300, 0],
    waterMelonNamePriceAmount: ["watermelon", 700, 0],
    seaWeedNamePriceAmount: ["seaweed", 1000, 0],
  };
  // 購入を司る
  const buyIt = (listFood, intAmount) => {
    // どんなお金になるかを計算
    const intMoneyWillBe = haveMoney - (listFood[1]*intAmount);
    // 全部でどんなけ買うようになるかを確認する
    const intAmountWillBe = listFood[2]+ intAmount
    // 適切な範囲内の時に値を更新する．
    console.warn(intMoneyWillBe, intAmountWillBe)
    if((intMoneyWillBe >= 0) && (intAmountWillBe >= 0))
    {
      switch(listFood[1])
      {
        case dictFood.cabbageNamePriceAmount[1]:
          dictFood.cabbageNamePriceAmount[2] += intAmount
          break;
        case dictFood.tomatoNamePriceAmount[1]:
          dictFood.tomatoNamePriceAmount[2] += intAmount
          break;
        case dictFood.waterMelonNamePriceAmount[1]:
          dictFood.waterMelonNamePriceAmount[2] += intAmount
          break;
        case dictFood.seaWeedNamePriceAmount[1]:
          dictFood.seaWeedNamePriceAmount[2] += intAmount
          break;
      }
      // listFood[2] += intAmount
      haveMoney -= (listFood[1]*intAmount)
    }
    document.getElementById(listFood[0]).textContent = listFood[2];
    document.getElementById("money").textContent = haveMoney;
  };
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
  const handleBeautyChange = (event) => {
    const intMoneyBefore = haveMoney;
    const intCabbageNow = 0// dictBuyAmount.strCabbage + 1;
    const intPurchasedTotal = 0//(intCabbageNow*beauty) + (intTomato*agility) + (intWaterMelon*size) + (intSeaWeed*taste);
    haveMoney = intMoneyBefore - intPurchasedTotal;
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
 //アイテムメニュー
 //表示するところ
  return (
    <div className="train"
     style = {
      { backgroundImage: `url(${backImagePath})`,backgroundRepeat: "no-repeat" ,paddingTop: 30}
     }>
      <img src={`${process.env.PUBLIC_URL}/items4.PNG`} width="100"/>
      <div id="money" style = {{fontSize: 30, backgroundColor: "white", display: "inline-block", paddingTop: 10, paddingBottom:10}}>所持金:  {haveMoney} 円</div>
      <h1> ウニを育成しよう</h1>
      <h2 style = {{fontSize: 40, color: '#FF570D', paddingLeft: 30, paddingBottom: 2 }}>エサ</h2>
      <label style = {{fontSize: 30}}>
        <div id={dictFood.cabbageNamePriceAmount[0]}>0</div>
        <img src={`${process.env.PUBLIC_URL}/cabbage.PNG`} width="100"/>
        <img src={`${process.env.PUBLIC_URL}/logo192.png`} onClick={() => buyIt(dictFood.cabbageNamePriceAmount, 1)} width="100"/>
        <img src={`${process.env.PUBLIC_URL}/ozo-uni.PNG`} onClick={() =>buyIt(dictFood.cabbageNamePriceAmount, -1)} width="100"/>
      </label>
      <br />
      <label style = {{fontSize: 30}}>
        トマト：
        <div id={dictFood.tomatoNamePriceAmount[0]}>0</div>
        <img src={`${process.env.PUBLIC_URL}/tomato.PNG`} width="100"/>
        <img src={`${process.env.PUBLIC_URL}/logo192.png`} onClick={() =>buyIt(dictFood.tomatoNamePriceAmount, 1)} width="100"/>
        <img src={`${process.env.PUBLIC_URL}/ozo-uni.PNG`} onClick={() =>buyIt(dictFood.tomatoNamePriceAmount, -1)} width="100"/>
      </label>
      <br />
      <label style = {{fontSize: 30}}>
        スイカ：
        <div id={dictFood.waterMelonNamePriceAmount[0]}>0</div>
        <img src={`${process.env.PUBLIC_URL}/watermelon.PNG`} width="100"/>
        <img src={`${process.env.PUBLIC_URL}/logo192.png`} onClick={() =>buyIt(dictFood.waterMelonNamePriceAmount, 1)} width="100"/>
        <img src={`${process.env.PUBLIC_URL}/ozo-uni.PNG`} onClick={() =>buyIt(dictFood.waterMelonNamePriceAmount, -1)} width="100"/>
      </label>
      <br />
      <label style = {{fontSize: 30}}>
        昆布：
        <div id={dictFood.seaWeedNamePriceAmount[0]}>0</div>
        <img src={`${process.env.PUBLIC_URL}/kombu.PNG`} width="100"/>
        <img src={`${process.env.PUBLIC_URL}/logo192.png`} onClick={() =>buyIt(dictFood.seaWeedNamePriceAmount, 1)} width="100"/>
        <img src={`${process.env.PUBLIC_URL}/ozo-uni.PNG`} onClick={() =>buyIt(dictFood.seaWeedNamePriceAmount, -1)} width="100"/>
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
});
return <Roulette></Roulette>
}