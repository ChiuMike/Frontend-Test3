import React, {useRef} from 'react';
import "./../style/Game.css";
import  Pilots from './../images/logo1.png';
import  Dreamers from './../images/logo2.png';
import Loins from './../images/logo3.png';
import Braves from './../images/logo4.png';
import $ from "jquery";

const Game=(props)=>{
    const {result,days}=props;
    const clickRef=useRef(null);

    const handleScrollLeft=(e)=>{
        $(clickRef.current).animate({
            scrollLeft: "+=370px"
        }, "fast");
    }
    const handleScrollRight=(e)=>{
        $(clickRef.current).animate({
            scrollLeft: "-=370px"
        }, "fast");  
    }
    const handleSubmit=(item,days)=>{
        let r={
            gameId: item[2],
            date: `${days+1}月${item[3]}日`,
            time: '15:30',
        }
        console.table(r)
        window.alert('已建立訂單!!')
    }
    return(
    <div>
        <div id="navigation" ref={clickRef}>
            {result[1] && result[days].map((item)=>{
            return(
            <div className="card1" key={item[2]}>
                <div className="cardheader">
                    <h2>{days+1}月{item[3]}日 15:30</h2>
                    <h3>例行賽</h3>
                </div>
                <p style={{marginLeft:'10px',marginTop:'0px',fontSize:'18px'}}>{item[0].stadium}</p>
                <div className="team">
                    <div className="teamphoto">
                    {(item[0].logo==='Lions')&&<img src={Loins} alt=""/>}
                    {(item[0].logo==='Braves')&&<img src={Braves} alt=""/>}
                    {(item[0].logo==='Dreamers')&&<img src={Dreamers} alt=""/>}
                    {(item[0].logo==='Pilots')&&<img src={Pilots} alt=""/>}
                    </div>
                    <div className="teaminfo">
                        <div className="name">{item[0].team}</div>
                    </div>
                    <div className="score">0</div>
                </div>
                <div className="team">
                    <div className="teamphoto">
                        {(item[1].logo==='Lions')&&<img src={Loins} alt=""/>}
                        {(item[1].logo==='Braves')&&<img src={Braves} alt=""/>}
                        {(item[1].logo==='Dreamers')&&<img src={Dreamers} alt=""/>}
                        {(item[1].logo==='Pilots')&&<img src={Pilots} alt=""/>}
                    </div>
                    <div className="teaminfo">
                        <div className="name">{item[1].team}</div>
                    </div>
                    <div className="score">0</div>
                </div>
                <button type="button" className="info">查看詳情</button>
                <button type="button" className="ticket"
                 onClick={()=>handleSubmit(item,days)}>購票</button>
            </div>)})}
        </div>
        <div className="toggle">
            <i className="fas fa-chevron-left" onClick={(e)=>handleScrollRight(e)}></i>
            <i className="fas fa-chevron-right" style={{float:'right'}}
             onClick={(e)=>handleScrollLeft(e)}></i>
         </div>
    </div>
    )
}
export default Game;