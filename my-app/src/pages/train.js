import {NavLink,useLocation} from "react-router-dom";

export const Train = () => {

  const search = useLocation().search;

  const query2 = new URLSearchParams(search)

  const handleClick = () => {
    window.location.href = uri;
  }

  const firstPrice = 1000
  const tomatoNum = 9
  const cabbageNum = 8
  const watermelonNum = 7
  const uri = "/evaluate?money="+firstPrice+"&tomato="+tomatoNum+"&watermelon="+watermelonNum+"&cabbage="+cabbageNum+""
  return (
      <div className="train">
      <img src={`${process.env.PUBLIC_URL}/train/dummy.png`} alt="train"/>
     
      <h1>育成</h1>
      <div>持っているお金: {query2.get('money')}円</div>
      <img src={`${process.env.PUBLIC_URL}/ozo-uni.PNG`} onClick={handleClick} id="hai" />
      
    </div>
  )
};