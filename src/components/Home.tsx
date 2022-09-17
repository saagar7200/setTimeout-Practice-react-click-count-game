import React, { FC, useState } from 'react';

import Button from "./Button"
import ShowScore from './ShowScore';
import "./style.css"

interface Props  {

};

const Home:FC = (props: Props) => {
    let timer:number = 6

 let interval_id:any;








 let [countDown ,setCountDown]=useState<number>(5)
 
 let [count,setCount]=useState<number>(0);
 const[timer_on,setTimer_on]=useState<boolean>(false);
 const[timer_out,setTimer_out]=useState<boolean>(true);
 const [highScore,setHighScore]=useState<number>(0);
 const [time,setTime] = useState(new Date().toLocaleDateString())
 const [date,setDate] = useState(new Date().toLocaleDateString())


 console.log(countDown)


 
  


 const startHandler =():void => {

    if(!timer_on){
    setTimer_on(true);

     setTimeout(stop,timer*1000);
    setTimer_out(false);
     interval_id = setInterval<any>(updateCountDown,1000);

    }

 setCount(count+1);   

}




  const updateCountDown =() :void =>{

    console.log('update count')
    if( countDown > 0){
    countDown = countDown-1
    setCountDown( countDown);  
    } 
  
   
};

  
    const stop =() :void=>{
        setTimer_out(true)
        clearInterval(interval_id)
        
    }



const play =():void=>{

    count = count +1;
    setCount(count)

    console.log(count)

}
const reset=():void=>{

 
    setCount(0)
    setTimer_out(true)
    setTimer_on(false)
    setCountDown(timer)
    clearInterval(interval_id)
    
    
  

}



if(timer_out && timer_on && count > highScore){
    setHighScore(count)

}




const updateTime = () => {
    let time = new Date().toLocaleTimeString();
    let date = new Date().toDateString()
    setTime(time)
}

setInterval(updateTime,1000)

  return (
    <div className='home-main'>
        <div className='home-container'>
            <div>
           
            <p> <span>{time}</span></p>
            <span>{date}</span>
           </div>
            <div className='click-counter'>
                <p className='show-count'><span>{timer_on && !timer_out ?count:"" }</span> </p>

            </div>
            

           {   timer_on && ! timer_out && <div>
              <p> Time: <span>00 <span> :  </span>    {countDown > 9 ?  countDown  :  "0" + countDown }  secods</span> </p>
            </div>}

    

         

            <div>

                { !timer_on   && timer_out&& <Button clickHandler={startHandler} disabled={timer_on} text={"start"}/>}



                { !timer_out && timer_on && <Button clickHandler={play} disabled={timer_out} text={"click here"}/>}

            </div>


            <div>

                {  timer_on && timer_out && <ShowScore score={count}  highScore={highScore} />}

            </div>

        <div>
            { timer_on  && timer_out&& <Button clickHandler={reset}  text={   "Play again" }/>}

        </div>







    </div>


    </div>
  )
}

export default Home;