import {NavLink,useLocation} from "react-router-dom";
import useSound from 'use-sound';

export const Pnf = () => {
  //クリック音設定
  const [ClickSound] = useSound(`${process.env.PUBLIC_URL}/clickSound.mp3`)
  
  //page移動
  const handleClick1 = () => {
    window.location.href = "/start";
  }

  const backImagePath = `${process.env.PUBLIC_URL}/404-uni.jpg`
  return (
    <div className="pnf"
    style={
      { backgroundImage: `url(${backImagePath})`,
        backgroundRepeat: 'no-repeat',
        height: '1020px',
        width: '1440px'
        }
    }>

     
      <img src={`${process.env.PUBLIC_URL}/start.png`} alt="" width="100" onClick={() => {ClickSound(); handleClick1()}} id="hai" /> 

    </div>
  );
};