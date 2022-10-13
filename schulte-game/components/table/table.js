import React,{useEffect, useState,useRef} from 'react'
import styled from 'styled-components';
import Tile from '../tile/tile';

const Board = styled.div`
 width:450px;
 height:450px;
 display:flex;
 flex-wrap:wrap;
 color:black;
 padding-bottom:10%;
 margin:0;
 h1{
    font-size:54px;
    
  }
  
`
const Content = styled.div`

    display:flex;
    flex-direction:column;
    .timer{
        display:flex;
        justify-content:center;
    }
  .Button{
    display:flex;
    height: 20px;
    background: linear-gradient(to right,#19ca2e ,#1cc106);
    background-color: #19ca2e;
    color: white;
    font-family: Trebuchet MS;
    font-size: 18px;
    font-weight: 800;
    padding: 14px 15px;
    border: 0px solid #000;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
   }
   .Button:hover{
    background: linear-gradient(to right,#54d05c ,#55c851);
    background-color: #54d05c;
    cursor:pointer;
   }
  .game-content{
      display:flex;
      justify-content:space-around;
      flex-direction:row-reverse;
      align-items:center;
  }
  .lost{
    margin:auto;
    text-align:center;
    color:white;
  }
`

export default function Table() {
    const numbersList = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25"];
    const [numbers,setNumbers] = useState([]);
    const [count,setCount] = useState(1);
    // const [timeLeft,setTimeLeft] = useState('');
    const timeLeft = useRef('');

    const [reset,setReset] = useState(false);
    const [start,setStart] = useState(false);

    const [win,setWin] = useState(false);
    const [lose,setLose] = useState(false);

    const [timer, setTimer] = useState('00:30');

    const Ref = useRef(null);
    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        return {
            total, minutes, seconds
        };
    }
    const startTimer = (e) => {
        let { total,minutes, seconds } = getTimeRemaining(e);
        if (total >= 0) {
            setTimer( (minutes > 9 ? minutes : '0' + minutes) + ':' + (seconds > 9 ? seconds : '0' + seconds)
            )
        }
        if(total<=0){
            setLose(true);
        }
    }
    const clearTimer = (e) => {    
        setTimer('00:30');
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);

        }, 1000)
        Ref.current = id;
    }
  
    const getDeadTime = () => {
        let deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + 30);
        return deadline;
    }
    const onClickStart = () => {
        setCount(1)
        setNumbers(shuffleNumbers(numbersList));
        setReset(true);
        setWin(false);
        setLose(false);
        setStart(true);
        setLose(false);
        clearTimer(getDeadTime());   
    }

    const shuffleNumbers = (array) =>{
            let currentIndex = array.length,  randomIndex;
            while (currentIndex != 0) {
              randomIndex = Math.floor(Math.random() * currentIndex);
              currentIndex--;
              [array[currentIndex], array[randomIndex]] = [ array[randomIndex], array[currentIndex]];
            }
            return array;
          
    }
    useEffect(() => {
        setReset(false);
        if( start && (count>25)  && (timer != '00:00')){
            setWin(true);
            timeLeft.current=timer;
            setReset(false);
            clearTimer();
        }
        console.log(timeLeft)
      },[reset,count,timer,win]);

      useEffect(()=>{
        setNumbers(shuffleNumbers(numbersList));
      },[])

    return (
        <>
        <Content>
            <div className='game-content'>
                <div className='timer'>
                    <h1>{timer}</h1>
                </div>
                <div className='Button' onClick={onClickStart}><span>Start</span></div>

            </div>
        
            {win?(
                <div>
                    <h1>Nice you did it!</h1>
                    <h2 style={{textAlign:'center'}}>with {timeLeft.current.replace("00:",'')} seconds to spare</h2>
                </div>

            ):lose?(
                <div className='lost'>
                    <h1>YOU LOST</h1>
                    <p>try again</p>

                </div>
            ):(
                <Board>
                    {numbers.map(number=>(
                        <Tile number={number} key={number} timer={timer} setCount={setCount} count={count}/>
                    ))}
                </Board>
                )

            }
           
            
        </Content>
        </>
        
    )
  }