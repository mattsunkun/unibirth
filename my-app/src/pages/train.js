import {NavLink,useLocation} from "react-router-dom";

export const Train = () => {
  //ページを変えても値を受け渡すやつ
  const search = useLocation().search;

  const query2 = new URLSearchParams(search)

  //初期のお金設定
  const firstPrice = 1000

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
  let haveMoney = () => {
      haveMoney = Number(Number(query2.get('money')) + 1000)
      return haveMoney
  }
  
  

 //表示するところ
  return (
    <div className="train">
      <img src={`${process.env.PUBLIC_URL}/train/dummy.png`} alt="train"/>
     
      <h1>育成</h1>
      <div>持っているお金:  {haveMoney()} 円</div>
      <img src={`${process.env.PUBLIC_URL}/ozo-uni.PNG`} onClick={handleClick} id="hai" width="100"/>
      
    </div>
  )
};