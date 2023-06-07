import {NavLink,Rocation,useParams,useLocation} from "react-router-dom";
import React, { useState, useEffect} from 'react' 
import useSound from 'use-sound';


export const UniEvaluation = () => {

  //ページを変えても値を受け渡すやつ
  const search = useLocation().search;

  const query2 = new URLSearchParams(search);

  //ウニのデータの設定
  const uniData = [
    {
      type: '紫ウニ',
      size: 3,
      agility: 3,
      taste: 3,
      beauty: 3,
      image: `${process.env.PUBLIC_URL}/murasaki-uni.PNG`,
      instruction: `${process.env.PUBLIC_URL}/murasaki-uni_info.png`,
      chart: `${process.env.PUBLIC_URL}/evaluate-chart-murasaki.png`
    },
    {
      type: '赤ウニ',
      size: 4,
      agility: 2,
      taste: 4,
      beauty: 4,
      image: `${process.env.PUBLIC_URL}/aka-uni.PNG`,
      instruction: `${process.env.PUBLIC_URL}/aka-uni_info.png`,
      chart: `${process.env.PUBLIC_URL}/evaluate-chart-aka.png`
    },
    {
      type: '北紫ウニ',
      size: 4,
      agility: 3,
      taste: 2,
      beauty: 4,
      image: `${process.env.PUBLIC_URL}/kitamurasaki-uni.PNG`,
      instruction: `${process.env.PUBLIC_URL}/kitamurasaki-uni_info.png`,
      chart: `${process.env.PUBLIC_URL}/evaluate-chart-kitamurasaki.png`
    },
    {
      type: '馬糞ウニ',
      size: 4,
      agility: 2,
      taste: 4,
      beauty: 4,
      image: `${process.env.PUBLIC_URL}/bafun-uni.PNG`,
      instruction: `${process.env.PUBLIC_URL}/bafun-uni_info.png`,
      chart: `${process.env.PUBLIC_URL}/evaluate-chart-bafun.png`
    },
    {
      type: '蝦夷馬糞ウニ',
      size: 5,
      agility: 1,
      taste: 5,
      beauty: 5,
      image: `${process.env.PUBLIC_URL}/ezobafun-uni.PNG`,
      instruction: `${process.env.PUBLIC_URL}/ezobafun-uni_info.png`,
      chart: `${process.env.PUBLIC_URL}/evaluate-chart-ezobafun.png`

    },
    {
      type: 'チリウニ',
      size: 1,
      agility: 5,
      taste: 2,
      beauty: 2,
      image: `${process.env.PUBLIC_URL}/chile-uni.PNG`,
      instruction: `${process.env.PUBLIC_URL}/chile-uni.png`,
      chart: `${process.env.PUBLIC_URL}/evaluate-chart-chiri.png`
    },
    {
      type: 'ガンガゼ',
      size: 1,
      agility: 5,
      taste: 0,
      beauty: 1,
      image: `${process.env.PUBLIC_URL}/gangaze(1).PNG`,
      instruction: `${process.env.PUBLIC_URL}/gangaze_info.png`,
      chart: `${process.env.PUBLIC_URL}/evaluate-chart-gangaze.png`
      
    },
    {
      type: 'おぞうに',
      size: 5,
      agility: 0,
      taste: 5,
      beauty: 5,
      image: `${process.env.PUBLIC_URL}/ozo-uni.PNG`,
      instruction: `${process.env.PUBLIC_URL}/ozo-uni_info.png`,
      chart: `${process.env.PUBLIC_URL}/evaluate-chart-ozouni.png`
    },
    {
      type: 'かがみもちうに',
      size: 1,
      agility: 5,
      taste: 1,
      beauty: 2,
      image: `${process.env.PUBLIC_URL}/kagamimpchi-uni.PNG`,
      instruction: `${process.env.PUBLIC_URL}/kagamimpchi-uni_info.png`,
      chart: `${process.env.PUBLIC_URL}/evaluate-chart-kagamimochi.png`

    },
    {
      type: 'ワニ',
      size: 5,
      agility: 5000,
      taste: 0,
      beauty: 0,
      image: `${process.env.PUBLIC_URL}/wani.PNG`,
      instruction:`${process.env.PUBLIC_URL}/wani_info.png.`,
      chart: `${process.env.PUBLIC_URL}/evaluate-chart-wani.png`
    }
  ];

  //trainから来るウニのパラメーターをinput○○と名前をつける
  const inputSize = query2.get('size')
  const inputAgility = query2.get('agility')
  const inputTaste = query2.get('taste')
  const inputBeauty = query2.get('beauty')

  //trainから入ってきたウニのデータと各ウニに成長した時のウニのデータを変化可能なものにする
  const [inputData, setInputData] = useState({});
  const [grownUni, setGrownUni] = useState({});


  //growUniで受け取ったデータを各ウニのデータにあてはめて返す？
  const growUni = (data) => {
    const newGrownUni = uniData.find(uni => {
      return (
        uni.size === Number(data.size) &&
        uni.agility === Number(data.agility) &&
        uni.taste === Number(data.taste) &&
        uni.beauty === Number(data.beauty)
      );
      
    });

    //trainから入ってきたウニのデータと各ウニに成長した時のウニのデータをあてはめて入れる？
    setInputData(data);
    setGrownUni(newGrownUni);
  }

  useEffect(() => {
    // データの受け取り
    const receivedData = {
      size: inputSize,
      agility: inputAgility,
      taste: inputTaste,
      beauty: inputBeauty
    };
    growUni(receivedData);

  }, []);
  
  // ウニの評価金額を計算する関数
  const Uniprice = () => {
      const price = grownUni.agility *1000 + grownUni.size * 3000 + grownUni.taste * 10000+ grownUni.beauty * 1000;
    return price
  }

  //お金設定
  const money = query2.get('money')
  const UnitotalPrice = Number(money) + Number((Uniprice()))

  //育成へもどるときのお金
  const uri = "/train?money="+UnitotalPrice

  //クリックして別の場所に移るためのもの
  const handleClick1 = () => {
    window.location.href = "/start";
  }
  const handleClick2 = () => {
    window.location.href = uri;
  }
  let uniChart = null
  let uniInstruction = null
  let uniImage = null
  if (grownUni) {
    switch (grownUni.type) {
      case '紫ウニ':
        uniImage = grownUni.image;
        uniInstruction = grownUni.instruction;
        uniChart = grownUni.chart;
        break;
      case '赤ウニ':
        uniImage = grownUni.image;
        uniInstruction = grownUni.instruction;
        uniChart = grownUni.chart;
        break;
      case '蝦夷馬糞ウニ':
        uniImage = grownUni.image;
        uniInstruction = grownUni.instruction;
        uniChart = grownUni.chart;
        break;
      case 'チリウニ':
        uniImage = grownUni.image;
        uniInstruction = grownUni.instruction;
        uniChart = grownUni.chart;
        break;
      case '北紫ウニ':
        uniImage = grownUni.image;
        uniInstruction = grownUni.instruction;
        uniChart = grownUni.chart;
        break;
      case 'ガンガゼ':
        uniImage = grownUni.image;
        uniInstruction = grownUni.instruction;
        uniChart = grownUni.chart;
        break;
      case 'おぞうに':
        uniImage = grownUni.image;
        uniInstruction = grownUni.instruction;
        uniChart = grownUni.chart;
        break;
      case 'かがみもちうに':
        uniImage = grownUni.image;
        uniInstruction = grownUni.instruction;
        uniChart = grownUni.chart;
        break;
      case 'ワニ':
        uniImage = grownUni.image;
        uniInstruction = grownUni.instruction;
        uniChart = grownUni.chart;
        break;           
      default:
        uniImage = '';
        uniInstruction = '';
        uniChart = '';
        break;
    }
  }
    //背景画像指定
    const backImagePath = `${process.env.PUBLIC_URL}/evaluateBackGround.PNG`

    //bgm設定
    const [playBgm,{pause}] = useSound(`${process.env.PUBLIC_URL}/MusMus-BGM-033.mp3`)

    //クリック音設定
    const [ClickSound] = useSound(`${process.env.PUBLIC_URL}/clickSound.mp3`)

    //↓表示されるところ
  return (
    <div className='priceEvaluate'
         style={
        { backgroundImage: `url(${backImagePath})`,
          backgroundSize: "contain" ,
          backgroundRepeat: 'no-repeat'}
         }>
      
        {/* 評価 */}
        <div style={
          {display: "flex"}
         }>
          <div style={{
            margin: "0px 0 0 60%" ,
            backgroundColor: "white" ,
            borderStyle: "solid" ,
            borderRadius: "8px" ,
            borderWidth: 'bold' ,
            borderColor: 'black', 
            padding: "10px" ,
            }}>
            <h1 style={{ color: 'black',  }}>あなたが育てたウニは・・・</h1>
            <img src={ uniChart }  width="350" style={{margin: "0 0 0 8%"}} />
            <h1 style={{ color: 'black', fontSize: 30,margin: "0 0 0 120px",}}><span style={{color: "red", fontSize: 50 ,}} >{Uniprice()}</span>円</h1>
          </div>
        </div>
      
        
     
      {/*ウニの画像貼り付ける */}
       <img src={ uniImage } alt="" width="150"/>
       <img src={ uniInstruction }  width="300"/>
       {/* 所持金 */}
      <div style={{margin: "15px 140px 0 0" , float: "right" ,
      backgroundColor: "white" ,borderStyle: "solid" ,borderRadius: "8px" ,borderWidth: 'bold' ,borderColor: 'black', }}><p style={{ color: 'black', fontSize: 40 }}>所持金 {UnitotalPrice} 円</p></div>
     
      
        
      

      
         
      <div style={{
        margin: "0 auto 0 70%" ,
      }}>
        {/*bgm再生 */}
      <img src={`${process.env.PUBLIC_URL}/Sound (1).png`} alt="" width="50" onClick={() => playBgm()} id="hai" />
      <img src={`${process.env.PUBLIC_URL}/SoundStop.png`} alt="" width="50" onClick={() => pause()} id="hai" />
      {/*画像をボタンにした 効果音も追加したよ～*/}
      <img src={`${process.env.PUBLIC_URL}/start.png`} alt="" width="100" onClick={() => {ClickSound(); handleClick1()}} id="hai" /> 
      <img src={`${process.env.PUBLIC_URL}/continue.png`} alt="" width="100" onClick={() => {ClickSound(); handleClick2()}} id="hai" />
      </div>
      
      <br/>
    </div>
  );
}