import React from 'react';
import "./../style/Date.css";
import {useRef} from 'react';
import $ from "jquery";

const Date=(props)=>{
    const {changeDays}=props;
    const DayRef=useRef(null);
    const handleScrollLeft=(e)=>{
        $(DayRef.current).animate({
            scrollLeft: "+=370px"
        }, "slow");
    }
    const handleScrollRight=(e)=>{
        $(DayRef.current).animate({
            scrollLeft: "-=370px"
        }, "slow");  
    }
    return(
        <div className="Date" >
            <div className="infol" >賽程表</div>
            <div className="infor">
                聯盟戰況<i className="fas fa-chevron-circle-right" style={{marginLeft:'10px'}}></i></div>
            <div style={{clear: 'both'}}></div>
            <div id="navigation" ref={DayRef}>
                <button type="button" id="b1" className="dayBtn"
                 onClick={()=>changeDays(0)}>2021年1月</button>
                <button type="button" id="b2" className="dayBtn"
                 onClick={()=>changeDays(1)}>2021年2月</button>
                <button type="button" id="b3" className="dayBtn"
                 onClick={()=>changeDays(2)}>2021年3月</button>
                <button type="button" id="b4" className="dayBtn"
                 onClick={()=>changeDays(3)}>2021年4月</button>
                <button type="button" id="b5" className="dayBtn"
                 onClick={()=>changeDays(4)}>2021年5月</button>
            </div>
            <div className="toggleDate">
                <i className="fas fa-chevron-left" onClick={(e)=>handleScrollRight(e)}></i>
                <i className="fas fa-chevron-right" style={{float:'right'}}
                 onClick={(e)=>handleScrollLeft(e)}></i>
             </div>
        </div>
    )
}
export default Date;