import {NavLink,Rocation,useParams,useLocation} from "react-router-dom";
import React, { useState } from 'react' 


export const Evaluate = () => { 
  //ページを変えても値を受け渡すやつ
  const search = useLocation().search;

  const query2 = new URLSearchParams(search);

  return (
    <div className="evaluate">
      <img src={`${process.env.PUBLIC_URL}/evaluate/dummy.png`} alt="evaluate"/>
      <button
        img src={`${process.env.PUBLIC_URL}/ozo-uni.PNG`}
        component={NavLink} 
        to="/start">
        
      </button>
      <br/>
      <NavLink to="/">ホームに戻る</NavLink>
      
    </div>
  );
};

//ウニの状態を変化可能なものにする
export const UniEvaluation = () => {



  const [beauty, setBeauty] = useState(0);//美しさ
  const [agility, setAgility] = useState(0);//素早さ
  const [size, setSize] = useState(0);//大きさ
  const [taste, setTaste] = useState(0);//美味しさ

  // ウニの評価金額を計算する関数
  const Uniprice = () => {
    const price = Number(Number(beauty)*500) - Number(Number(agility)*3000) + Number(Number(size)*5000) + Number(Number(taste)*10000);
    console.log(beauty);
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
  //ページを変えても値を受け渡すやつ
  const search = useLocation().search;

  const query2 = new URLSearchParams(search);

  //お金設定
  const money = query2.get('money')
  const UnitotalPrice = Number(money) + Number((Uniprice()))
  const uri = "/train?money="+UnitotalPrice

  const handleClick1 = () => {
    window.location.href = "/start";
  }

  const handleClick2 = () => {
    window.location.href = uri;
  }

  return (
    <div className='priceEvaluate'
     style={{backgroundImage: `${process.env.PUBLIC_URL}/evaluate/dummy.png`} }>
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
      <div>money: {query2.get('money')}</div>
      <div>tomato: {query2.get('tomato')}</div>
      <div>cabbage: {query2.get('cabbage')}</div>
      <div>watermelon: {query2.get('watermelon')}</div>
      <img src={`${process.env.PUBLIC_URL}/evaluate/dummy.png`} alt="evaluate"/>
      <NavLink to={uri}>もう一度</NavLink>
      <br/>
      <NavLink to="/start">ホームに戻る</NavLink>
      
      //ボタン
      <img src={`${process.env.PUBLIC_URL}/ozo-uni.PNG`} onClick={handleClick1} id="hai" />
      <img src={`${process.env.PUBLIC_URL}/ozo-uni.PNG`} onClick={handleClick2} id="hai" />
    </div>
  );
};

