import {NavLink} from "react-router-dom";
import React, { useState } from 'react' 

export const Evaluate = () => {
  return (
    <div className="evaluate">
      <img src={`${process.env.PUBLIC_URL}/evaluate/dummy.png`} alt="evaluate"/>
      <NavLink to="/start">もう一度</NavLink>
      <br/>
      <NavLink to="/">ホームに戻る</NavLink>
      <h1>評価</h1>
    </div>
  );
};

// ウニの評価を行う関数
const evaluateUni = (uniData) => {
  //unidataを定義する
  const { size, beauty, agility, taste} = uniData;
  // 金額を定義する(金額は適当)
  const price = size * 1000 + beauty * 500 + agility * 100 + taste * 5000;
  //値として金額を返す（あとで金額を表示させたい）
  return price;
};

//なんもないときのウニのデータ
const NomalUniData = () => {
  const [uniData, setUniData] = useState({
    size: 0,
    beauty: 0,
    agility: 0, //素早さ
    taste: 0,
  });
}

//ウニのデータを更新（後で考える）


//ウニ単体のお金を表示する
export const DisplayPrice = () => {
  return(
    <div className="evaluate">
      <h1>
        {evaluateUni}円Get!
      </h1>
    </div>
  );
};