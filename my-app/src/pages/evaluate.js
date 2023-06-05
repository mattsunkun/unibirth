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
      instrucrion: '淡泊であっさりした味.割とどこにでもいるウニバーサルなウニ.ウニといえばこのウニ！'
    },
    {
      type: '赤ウニ',
      size: 4,
      agility: 2,
      taste: 4,
      beauty: 4,
      image: `${process.env.PUBLIC_URL}/aka-uni.PNG`,
      instrucrion: '食通を魅了するガツンと甘いウニ.西日本に生息.西日本人に愛されてきたウニ'
    },
    {
      type: '北紫ウニ',
      size: 4,
      agility: 3,
      taste: 2,
      beauty: 4,
      image: `${process.env.PUBLIC_URL}/kitamurasaki-uni.PNG`,
      instrucrion: 'ボリューム感しっかりの寿司向きのウニ.北の方に生息.実は日本で一番流通しているウニ'
    },
    {
      type: '馬糞ウニ',
      size: 4,
      agility: 2,
      taste: 4,
      beauty: 4,
      image: `${process.env.PUBLIC_URL}/bafun-uni.PNG`,
      instrucrion: 'コクが濃厚まったりなウニ.日本海によくいるよ.みんなに愛されてます'
    },
    {
      type: '蝦夷馬糞ウニ',
      size: 5,
      agility: 1,
      taste: 5,
      beauty: 5,
      image: `${process.env.PUBLIC_URL}/ezobafun-uni.PNG`,
      instrucrion: 'とろける最高級ウニ.北海道より北によくいるよ.加工して出荷されがちな最高級ウニ'
    },
    {
      type: 'チリウニ',
      size: 1,
      agility: 5,
      taste: 2,
      beauty: 2,
      image: `${process.env.PUBLIC_URL}/chile-uni.PNG`,
      instrucrion: 'まずくは無い.チリとかの南米にいるよ.全世界のウニの漁獲量の半分を占めるウニバーサルすぎるウニ'
    },
    {
      type: 'ガンガゼ',
      size: 1,
      agility: 5,
      taste: 0,
      beauty: 1,
      image: `${process.env.PUBLIC_URL}/gangaze(1).PNG`,
      instrucrion: '味が無い.漁場荒らしのツッパリウニ.見た目は肉食系だが草食系である'
    },
    {
      type: 'おぞうに',
      size: 5,
      agility: 0,
      taste: 5,
      beauty: 5,
      image: `${process.env.PUBLIC_URL}/ozo-uni.PNG`,
      instrucrion: 'みんな大好き正月に大量発生したウニ.きっとウニ'
    },
    {
      type: 'かがみもちうに',
      size: 1,
      agility: 5,
      taste: 1,
      beauty: 2,
      image: `${process.env.PUBLIC_URL}/wani.PNG`,
      instrucrion: '深海にいるメンヘラウニ.下のメスを束縛してるよ'
    },
    {
      type: 'ワニ',
      size: 5,
      agility: 5000,
      taste: 0,
      beauty: 0,
      image: `${process.env.PUBLIC_URL}/ezobafun-uni.PNG`,
      instrucrion:'どういうわけかウニの棒がとれてワニになってしまった.お財布に大打撃'
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

    //bgm設定
    const [playBgm] = useSound(`${process.env.PUBLIC_URL}/MusMus-BGM-033.mp3`)

    //↓表示されるところ
  return (
    <div className='priceEvaluate'
     style={
      { backgroundImage: `url(${backImagePath})` }
    }>
      <h1 style={{ color: 'black', fontSize: 40 }}>育てたウニの評価は？</h1>
      <p>美しさ: {query2.get('beauty')}</p>
      <p>素早さ: {query2.get('agility')}</p>
      <p>大きさ: {query2.get('size')}</p>
      <p>美味しさ: {query2.get('taste')}</p>
      <p>あなたのうに : {uniInstruction} </p>
      
      {/*ウニの画像貼り付ける */}
      <img src={ uniImage } alt="" width="150"/>
      <p style={{ color: 'black', fontSize: 30,}}>
        ウニの評価金額 {Uniprice()} 円
      </p>
      <p style={{ color: 'black', fontSize: 30 }}>所持金 {UnitotalPrice} 円</p>
      <button onClick={() => playBgm()}>再生</button>
      <br/>
      {/*画像をボタンにした */}   
      <img src={`${process.env.PUBLIC_URL}/start.png`} alt="" width="100" onClick={handleClick1} id="hai" /> 
      <img src={`${process.env.PUBLIC_URL}/continue.png`} alt="" width="100" onClick={handleClick2} id="hai" />
      <br/>
    </div>
  );
}

