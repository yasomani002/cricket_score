import React, { useState } from 'react'
import '../styles/Home.css'

function Home() {
    const [teamA, setTeamA] = useState({
        run: 0,
        ball: 0,
        wicket: 0,
        lastBallData: null
    })
    const overs = Math.floor(teamA.ball / 6);
    const balls = teamA.ball % 6;
    const overDisplay = `${overs}.${balls}`;

    const handleClick = (run, ball, ballType) => {
        handleTeamAscore(run, ball, ballType)
    }
    const handleTeamAscore = (run, ball, ballType) => {
        setTeamA(pre => {
            const newRun = pre.run + run
            const newBall = pre.ball + ball
            const newWicket = ballType === 'Wicket' ? pre.wicket + 1 : pre.wicket
            const newLastBall = ballType
            return {
                run: newRun,
                ball: newBall,
                wicket: newWicket,
                lastBallData: newLastBall
            }
        })
    }
    const ballArray = [
        {
            run: 1,
            ball: 1,
            ballType: 'run'
        },
        {
            run: 2,
            ball: 1,
            ballType: 'run'
        },
        {
            run: 3,
            ball: 1,
            ballType: 'run'
        },
        {
            run: 4,
            ball: 1,
            ballType: 'run'
        },
        {
            run: 5,
            ball: 1,
            ballType: 'run'
        },
        {
            run: 6,
            ball: 1,
            ballType: 'run'
        }
    ]
    const otherBallArray = [
        {
            run: 0,
            ball: 1,
            ballType: 'Dot ball'
        },
        {
            run: 1,
            ball: 0,
            ballType: 'Wide ball'
        },
        {
            run: 0,
            ball: 1,
            ballType: 'Wicket'
        }
    ]
    return (
        <>
            <div>
                <div className='score_div'>
                    <h1>Score : {teamA.run}/{teamA.wicket} </h1>
                    <h2>Over : {overDisplay}</h2>
                </div>
                <div className='button_div'>
                    <div>
                        {ballArray?.map((item, index) => {
                            return (

                                <button key={index} className='button' onClick={() => handleClick(item.run, item.ball, item.ballType)}>{item.run}</button>

                            )
                        })}
                    </div>
                    <div>
                        {otherBallArray?.map((item, index) => {
                            return (
                                <button key={index} className='squre_button' onClick={() => handleClick(item.run, item.ball, item.ballType)}>{item.ballType}</button>
                            )
                        })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home