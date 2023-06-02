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

//ウニの状態を変化可能なものにする
const UniEvaluation = () => {
  const [beauty, setBeauty] = useState(0);//美しさ
  const [agility, setAgility] = useState(0);//素早さ
  const [size, setSize] = useState(0);//大きさ
  const [taste, setTaste] = useState(0);//美味しさ

  // ウニの評価金額を計算する関数
  const Uniprice = () => {
    const price = beauty + agility + size + taste;
    return price;
  };
  
  // 初期評価値の設定(仮)
  useState(() => {
    setBeauty(5);
    setAgility(4);
    setSize(3);
    setTaste(5);
  }, []);
  
  //なんかイベントが起こった時にウニの評価項目の値を変更する
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

  return (
    <div>
      <h1>育てたウニの評価は？</h1>
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
      <p>ウニの評価金額は {Uniprice()} 円です。</p>
    </div>
  );
};

export default UniEvaluation