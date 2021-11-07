import React from 'react';
import Date from './Date';
import Footer from './Footer';
import Game from './Game';
import "./../style/Home.css";
import { useState,useEffect} from 'react';
import findMatch from './../findMatch';
const Home=()=>{
    const [teams]=useState([
        {team:'新竹街口攻城獅',stadium:'新竹縣體育館',logo:'Lions'},
        {team:'彰化台新夢想家',stadium:'彰化縣立體育館',logo:'Dreamers'},
        {team:'臺北富邦勇士',stadium:'臺北和平籃球館',logo:'Braves'},
        {team:'桃園領航猿',stadium:'桃園市立綜合體育館',logo:'Pilots'}
    ])
    const [result,setResult] =useState({0:[[{team:'',stadium:'',logo:''},{team:'',stadium:'',logo:''}],0]})
    const [days,setDays]=useState(0);
    const changeDays=(d)=>{
        setDays(d);
    }
    useEffect(()=>{findMatch(teams,setResult)},[teams]);
    return(
        <div className="home">
            <div className="card">
                <div className="head">
                    <i className="fas fa-angle-left" style={{float: 'left',fontSize:'30px'}}></i>
                    新竹街口攻城獅
                </div>
                <Date changeDays={changeDays}/>
                <Game result={result} days={days}/>
                <Footer/>
            </div>
        </div>
    )
}
export default Home;