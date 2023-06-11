import {NavLink,useLocation} from "react-router-dom";
import React, { useState, useEffect, useCallback, memo } from 'react';
//import React, { useEffect, useCallback, memo} from "react";

export const Train = () => {
  //ページを変えても値を受け渡すやつ
  const search = useLocation().search;
  const query2 = new URLSearchParams(search)
  
  

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
      (dictFood.cabbageNamePriceAmount[2] <= 1)||(dictFood.tomatoNamePriceAmount[2] <= 1)
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
      (dictFood.tomatoNamePriceAmount[2] <= 2)||(dictFood.seaWeedNamePriceAmount[2] <= 2)
      )
    {
      dictStatus.intSize = 1
      dictStatus.intAgility = 5
      dictStatus.intTaste = 2
      dictStatus.intBeauty = 2
    }
    // 北紫うに
    else if(
      (dictFood.cabbageNamePriceAmount[2] <= 3)||(dictFood.seaWeedNamePriceAmount[2] <= 3)
    )
    {
      dictStatus.intSize = 4
      dictStatus.intAgility = 3
      dictStatus.intTaste = 2
      dictStatus.intBeauty = 4
    }
    // ガンガゼ
    else if(
     (dictFood.cabbageNamePriceAmount[2] <= 4)||(dictFood.tomatoNamePriceAmount[2] <= 4)
    )
    {
      dictStatus.intSize = 1
      dictStatus.intAgility = 5
      dictStatus.intTaste = 0
      dictStatus.intBeauty = 1
    }
    // アカウに
    else if(
     (dictFood.tomatoNamePriceAmount[2] <= 5)||((dictFood.waterMelonNamePriceAmount[2] <= 4))
    )
    {
      dictStatus.intSize = 4
      dictStatus.intAgility = 2
      dictStatus.intTaste = 4
      dictStatus.intBeauty = 4
    }
    // 馬糞
    else if(
      (dictFood.waterMelonNamePriceAmount[2] <= 5)||(dictFood.seaWeedNamePriceAmount[2] <= 4)
    )
    {
      dictStatus.intSize = 4
      dictStatus.intAgility = 2
      dictStatus.intTaste = 5
      dictStatus.intBeauty = 4
    }
    // 蝦夷ばふん
    else if(
      ((dictFood.waterMelonNamePriceAmount[2] <= 6)||(dictFood.seaWeedNamePriceAmount[2] <= 5))||(dictFood.garigariNamePriceAmount[2] <= 4)
    )
    {
      dictStatus.intSize = 5
      dictStatus.intAgility = 1
      dictStatus.intTaste = 5
      dictStatus.intBeauty = 5
    }
    // お雑煮
    else if(
      (dictFood.seaWeedNamePriceAmount[2] <= 6)||(dictFood.riceNamePriceAmount[2] <= 4)
    )
    {
      dictStatus.intSize = 5
      dictStatus.intAgility = 0
      dictStatus.intTaste = 5
      dictStatus.intBeauty = 5
    }
    // 鏡餅うに
    else if(
      (dictFood.seaWeedNamePriceAmount[2] <= 7)||(dictFood.riceNamePriceAmount[2] <= 5)
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
    riceNamePriceAmount: ["rice",3000,0],
    garigariNamePriceAmount: ["garigari",100,0]
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
        case dictFood.riceNamePriceAmount[1]:
            dictFood.riceNamePriceAmount[2] += intAmount
          break;
        case dictFood.garigariNamePriceAmount[1]:
            dictFood.garigariNamePriceAmount[2] += intAmount
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
 const backImagePath = `${process.env.PUBLIC_URL}/sea.png`
 


const intImageSize = 60;
const intBottonSize = 70;

 //表示するところ
  return (
    <div className="train"
     style = {
      { backgroundImage: `url(${backImagePath})`,backgroundRepeat: "no-repeat" ,paddingTop: 30}
     }>

  <div style={{float:"right",marginRight:30}}>
      <img src={`${process.env.PUBLIC_URL}/items6.png`} width="310" style = {{ paddingBottom:30, flexDirection: "row"}}/>
  </div>

  <div id="money" style = {{fontSize: 50, display: "inline-block", paddingTop: "", paddingBottom:"", color:"white"}}>所持金:  {haveMoney} 円</div>
      <h1 style={{flexDirection: "column", color:"white"}}> ウニを育成しよう</h1>
      
      {/* ボタン隊 */}
    <div  style={{float: "left"}}>
      <div>
        
      
      <div style={{ width: "870px" , display: "flex",alignItems:"flex-start",flexWrap:"wrap"}}>
      
      キャベツ　　
      <label style = {{fontSize: 30, display: "flex"}}>
        <img src={`${process.env.PUBLIC_URL}/cabbage.PNG`} width={intImageSize} height={intImageSize} />
        <div id={dictFood.cabbageNamePriceAmount[0]} style={{fontSize: 50, paddingLeft: 20}} >0</div>
        <img src={`${process.env.PUBLIC_URL}/minus-removebg-preview (1).png`} onClick={() =>buyIt(dictFood.cabbageNamePriceAmount, -1)}  height = {intBottonSize}/>
        <img src={`${process.env.PUBLIC_URL}/plus-removebg-preview (1).png`} onClick={() => buyIt(dictFood.cabbageNamePriceAmount, 1)} height = {intBottonSize}/>
      </label>
      <br />
      トマト　　
      <label style = {{fontSize: 30,display: "flex"}}>
        <img src={`${process.env.PUBLIC_URL}/tomato.PNG`} width={intImageSize} height={intImageSize}/>
        <div id={dictFood.tomatoNamePriceAmount[0]} style={{fontSize: 50, paddingLeft: 20}}>0</div>
        <img src={`${process.env.PUBLIC_URL}/minus-removebg-preview (1).png`} onClick={() =>buyIt(dictFood.tomatoNamePriceAmount, -1)}  height = {intBottonSize}/>
        <img src={`${process.env.PUBLIC_URL}/plus-removebg-preview (1).png`} onClick={() =>buyIt(dictFood.tomatoNamePriceAmount, 1)}  height = {intBottonSize}/>
      </label>
      <br />
      スイカ　　
      <label style = {{fontSize: 30,display: "flex"}}>
        <img src={`${process.env.PUBLIC_URL}/watermelon.PNG`} width={intImageSize} height={intImageSize}/>
        <div id={dictFood.waterMelonNamePriceAmount[0]} style={{fontSize: 50, paddingLeft: 20}}>0</div>
        <img src={`${process.env.PUBLIC_URL}/minus-removebg-preview (1).png`} onClick={() =>buyIt(dictFood.waterMelonNamePriceAmount, -1)}  height = {intBottonSize}/>
        <img src={`${process.env.PUBLIC_URL}/plus-removebg-preview (1).png`} onClick={() =>buyIt(dictFood.waterMelonNamePriceAmount, 1)}  height = {intBottonSize}/>
      </label>
      <br />
      昆布　　　
      <label style = {{fontSize: 30,display: "flex"}}>
        <img src={`${process.env.PUBLIC_URL}/kombu.PNG`} width={intImageSize} height={intImageSize}/>
        <div id={dictFood.seaWeedNamePriceAmount[0]} style={{fontSize: 50, paddingLeft: 20}}>0</div>
        <img src={`${process.env.PUBLIC_URL}/minus-removebg-preview (1).png`} onClick={() =>buyIt(dictFood.seaWeedNamePriceAmount, -1)}height = {intBottonSize}/>
        <img src={`${process.env.PUBLIC_URL}/plus-removebg-preview (1).png`} onClick={() =>buyIt(dictFood.seaWeedNamePriceAmount, 1)}  height = {intBottonSize}/>
      </label>
      <br />
      
      米　　　　
            <label style = {{fontSize: 30,display: "flex"}}>
        <img src={`${process.env.PUBLIC_URL}/kome.PNG`} width={intImageSize} height={intImageSize}/>
        <div id={dictFood.riceNamePriceAmount[0]} style={{fontSize: 50, paddingLeft: 20}}>0</div>
        <img src={`${process.env.PUBLIC_URL}/minus-removebg-preview (1).png`} onClick={() =>buyIt(dictFood.riceNamePriceAmount, -1)} height = {intBottonSize}/>
        <img src={`${process.env.PUBLIC_URL}/plus-removebg-preview (1).png`} onClick={() =>buyIt(dictFood.riceNamePriceAmount, 1)}  height = {intBottonSize}/>
      </label>
      <br />
      ガリガリ君
      <label style = {{fontSize: 30,display: "flex"}}>
        <img src={`${process.env.PUBLIC_URL}/garigarikun.PNG`} width={intImageSize} height={intImageSize}/>
        <div id={dictFood.garigariNamePriceAmount[0]} style={{fontSize: 50, paddingLeft: 20}}>0</div>
        <img src={`${process.env.PUBLIC_URL}/minus-removebg-preview (1).png`} onClick={() =>buyIt(dictFood.garigariNamePriceAmount, -1)} height = {intBottonSize}/>
        <img src={`${process.env.PUBLIC_URL}/plus-removebg-preview (1).png`} onClick={() =>buyIt(dictFood.garigariNamePriceAmount, 1)} height = {intBottonSize}/>
      </label>
      </div>
      
      <br />

      <img src={`${process.env.PUBLIC_URL}/IMG_0204.PNG`} onClick={handleClick} id="hai" width="300"/>
      </div>
      
      
      
      </div>
      <p style={{marginTop: "1000px"}}>　</p>
    </div>
  );
};

