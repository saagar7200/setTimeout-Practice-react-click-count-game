import React, { FC } from 'react'

type Props = {
    score:number,
    highScore:number
}

const ShowScore:FC<Props> = ({score,highScore}) => {

    let isHighScore = score=== highScore;
    console.log(isHighScore)


  return (
    <div className='show-score'>
        

        
        {!isHighScore ? (<div className='score'>

            <p  className='sore-p' style={{fontWeight:500}}>Time's UP!!!</p>
            <p className='sore-p'>Your score: <span>{" " + score}</span>  </p> 

            <p className='sore-p'>  High Score: <span>{" " + highScore}</span>  restart again?  </p>
            
            </div>
            ):(
            <div className='high-score'>
            <p  className='sore-p' style={{fontWeight:500}}>Time's UP!!!</p>

                <p> Congratulations!!! New HighScore:<span> {" " + highScore}</span>  <p> restart again?</p>  </p>
            </div>
        )} 
        
        
    
    

    </div>
  )
}

export default ShowScore