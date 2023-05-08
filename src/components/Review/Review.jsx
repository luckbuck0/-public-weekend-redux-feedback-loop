
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import { useSelector,useDispatch } from "react-redux";
import { useState, } from "react";
import axios from "axios";

function Review() {


    const [scaleInput, setScaleInput] = useState('');

//---------------------REACT FUNCTIONS---------------------------------
    const dispatch = useDispatch()
    const history = useHistory()

//---------------------USE SELECTORS---------------------------------
    const feeling = useSelector((store) => store.feeling)
    const understanding = useSelector((store) => store.understanding)
    const comments = useSelector((store) => store.comments)
    const support = useSelector((store) => store.support)

    const sendBack = ()=> {

        dispatch({
            type:'RESET_COMMENTS',
            payload:''
        })
    }
    
        const onToNext = () => {
           
                return (
                    <div>
                         <p onClick={sendFeeling} >
                        <button onClick={() => { history.push('/pageSix') }} className="nextButton">Submit ➡</button>
                    </p>
                    
                    <p className="pastButton" onClick={sendBack}> 
                    <button onClick={() => { history.push('/pageFour') }}  className="pastButton" >⬅ PAST</button>
                    </p>
                    </div>
                   
                )
            
        }
        
    

//---------------------POST FUNCTIONS---------------------------------
    const sendFeeling = () => {

        axios({
            method: 'POST',
            url: '/feedback',
            data: {
                feeling: Number(feeling),
                understanding: Number(understanding),
                support: Number(support),
                comments: comments,
                flagged: false
            }
        }).then((response) => {
            console.log('it worked', response);
        }).catch((error) => {
            console.log('whoopsie daisy gotta stay crazy', error);
        })
    }


    console.log(comments);
    console.log(scaleInput);

    return (

        <div className="pageOneContainer">
            <h3 className="pages">Review</h3>
            <p className="rectangle"></p>
            <div className="questionContainer">
                <div className="whiteBox">
                    <p className="questions">
                        RESULTS
                    </p>
                    <p>Feeling:{feeling}</p>
                    <p>understanding:{understanding}</p>
                    <p>Support:{support}</p>
                    <p>Comments:{comments}</p>
                    {onToNext()}

                </div>
            </div>

        </div>
    )
}

export default Review;