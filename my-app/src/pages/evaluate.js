import {NavLink,Rocation,useParams,useLocation} from "react-router-dom";
import React, { useState, useEffect} from 'react' 
import useSound from 'use-sound';

export const UniEvaluation = () => {
//bgm設定
  const [playBgm,{pause}] = useSound(`${process.env.PUBLIC_URL}/MusMus-BGM-033.mp3`)
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
      image: `${process.env.PUBLIC_URL}/murasaki-uni.PNG` ,
      instruction: `${process.env.PUBLIC_URL}/murasaki-uni_info.png` ,
      

    },
    {
      type: '赤ウニ',
      size: 4,
      agility: 2,
      taste: 4,
      beauty: 4,
      image: `${process.env.PUBLIC_URL}/aka-uni.PNG` ,
      instruction: `${process.env.PUBLIC_URL}/aka-uni_info.png` ,
      
    },
    {
      type: '北紫ウニ',
      size: 4,
      agility: 3,
      taste: 2,
      beauty: 4,
      image: `${process.env.PUBLIC_URL}/kitamurasaki-uni.PNG` ,
      instruction: `${process.env.PUBLIC_URL}/kitamurasaki-uni_info.png` ,
      
    },
    {
      type: '馬糞ウニ',
      size: 4,
      agility: 2,
      taste: 4,
      beauty: 4,
      image: `${process.env.PUBLIC_URL}/bafun-uni.PNG` ,
      instruction: `${process.env.PUBLIC_URL}/bafun-uni_info.png` ,
      
    },
    {
      type: '蝦夷馬糞ウニ',
      size: 5,
      agility: 1,
      taste: 5,
      beauty: 5,
      image: `${process.env.PUBLIC_URL}/ezobafun-uni.PNG` ,
      instruction: `${process.env.PUBLIC_URL}/ezobafun-uni_info.png` ,
      
    },
    {
      type: 'チリウニ',
      size: 1,
      agility: 5,
      taste: 2,
      beauty: 2,
      image: `${process.env.PUBLIC_URL}/chile-uni.PNG` ,
      instruction: `${process.env.PUBLIC_URL}/chile-uni.png` ,
      
    },
    {
      type: 'ガンガゼ',
      size: 1,
      agility: 5,
      taste: 0,
      beauty: 1,
      image: `${process.env.PUBLIC_URL}/gangaze(1).PNG` ,
      instruction: `${process.env.PUBLIC_URL}/gangaze_info.png` ,
      
    },
    {
      type: 'おぞうに',
      size: 5,
      agility: 0,
      taste: 5,
      beauty: 5,
      image: `${process.env.PUBLIC_URL}/ozo-uni.PNG` ,
      instruction: `${process.env.PUBLIC_URL}/ozo-uni_info.png` ,
      
    },
    {
      type: 'かがみもちうに',
      size: 1,
      agility: 5,
      taste: 1,
      beauty: 2,
      image: `${process.env.PUBLIC_URL}/wani.PNG` ,
      instruction: `${process.env.PUBLIC_URL}/kagamimpchi-uni_info.png` ,
      
    },
    {
      type: 'ワニ',
      size: 5,
      agility: 5000,
      taste: 0,
      beauty: 0,
      image: `${process.env.PUBLIC_URL}/ezobafun-uni.PNG` ,
      instruction:`${process.env.PUBLIC_URL}/wani_info.png.` ,
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
  
  let uniInstruction = null
  let uniImage = null

  if (grownUni) {
    switch (grownUni.type) {
      case '紫ウニ':
        uniImage = grownUni.image;
        uniInstruction = grownUni.instruction;
        break;
      case '赤ウニ':
        uniImage = grownUni.image;
        uniInstruction = grownUni.instruction;
        break;
      case '蝦夷馬糞ウニ':
        uniImage = grownUni.image;
        uniInstruction = grownUni.instruction;
        break;
      case 'チリウニ':
        uniImage = grownUni.image;
        uniInstruction = grownUni.instruction;
        break;
      case '北紫ウニ':
        uniImage = grownUni.image;
        uniInstruction = grownUni.instruction;
        break;
      case 'ガンガゼ':
        uniImage = grownUni.image;
        uniInstruction = grownUni.instruction;
        break;
      case 'おぞうに':
        uniImage = grownUni.image;
        uniInstruction = grownUni.instruction;
        break;
      case 'かがみもちうに':
        uniImage = grownUni.image;
        uniInstruction = grownUni.instruction;
        break;
      case 'ワニ':
        uniImage = grownUni.image;
        uniInstruction = grownUni.instruction;
        break;           
      default:
        uniImage = '';
        uniInstruction = '';
        break;
    }
  }
    //背景画像指定
    const backImagePath = `${process.env.PUBLIC_URL}/evaluateBackGround.PNG`
    //↓表示されるところ
  return (
    <div className='priceEvaluate'
     style={
      { backgroundImage: `url(${backImagePath})` }
    }>
      <h1 style={{ color: 'black', fontSize: 40 }}>育てたウニの評価は？</h1>
      
      {/* ↓ステータス表示する枠  */}
      
      <div style={{ 
          backgroundColor: "white" ,
          height: "10%" ,
          width: "500px" ,
          borderStyle: "solid" ,
          borderWidth: 'bold' ,
          borderColor: 'black', 
          position: 'relative' ,
        }}>

        {/* ↓レーダーチャート */}

          <div 
            style={{backgroundImage: "url(/evaluate-reader_back.png)" ,
            backgroundColor: "white" ,
            display: "table" ,
            height: "300px" ,
            width: "400px" ,
            position: "relative" ,
            backgroundPosition: "center" ,
            backgroundRepeat: "no-repeat" ,
            backgroundSize: "contain" ,
          }}
          >
            <div style={{

             
              display: "table-cell" ,
	            verticalAlign: "middle" ,
            margin: "auto 0 auto 90px" ,
            position: "absolute" ,	/*top,bottomが0の時左右の中央揃えになります*/
	          top: "0" ,
	          bottom: "0" ,
            width: "216px" ,
            height: "216px" ,
            clipPath: "polygon(10% 50%, 50% 0%, 100% 50%, 50% 100%)" ,
            background: "rgba(3, 169, 244, 0.4)" ,
            }}
             ></div>
          </div>
          
      <p>美しさ: {query2.get('beauty')}</p>
      <p>素早さ: {query2.get('agility')}</p>
      <p>大きさ: {query2.get('size')}</p>
      <p>美味しさ: {query2.get('taste')}</p>
        </div>
        


      <img src={ uniImage } alt="" width="150"/>
      <img src={ uniInstruction }  width="300"/>
      <p>ウニの評価金額は {Uniprice()} 円</p>
      <p>所持金 {UnitotalPrice} 円</p>=
      <br/>   
      {/*bgm再生 */}
      <img src={`${process.env.PUBLIC_URL}/Sound (1).png`} alt="" width="50" onClick={() => playBgm()} id="hai" />
      <img src={`${process.env.PUBLIC_URL}/SoundStop.png`} alt="" width="50" onClick={() => pause()} id="hai" />
      <br/>
      <img src={`${process.env.PUBLIC_URL}/start.png`} alt="" width="100" onClick={handleClick1} id="hai" /> 
      <img src={`${process.env.PUBLIC_URL}/continue.png`} alt="" width="100" onClick={handleClick2} id="hai" />
      <br/>
    </div>
  );
}

