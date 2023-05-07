

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import { useSelector, useDispatch } from "react-redux";
import { useState, } from "react";


function Comments() {

    const [scaleInput, setScaleInput] = useState('');

//---------------------REACT FUNCTIONS---------------------------------
    const dispatch = useDispatch()

    const history = useHistory()



//---------------------CONDITIONAL FUNCTIONS---------------------------------

const sendBack = ()=> {

    dispatch({
        type:'RESET_SUPPORT',
        payload:''
    })
}

    const onToNext = () => {
        if (scaleInput != '') {
            return (
                <div>
                     <p onClick={sendFeeling} >
                        <button onClick={() => { history.push('/pageFive') }} className="nextButton">NEXT ➡</button>
                    </p>
                
                <p className="pastButton" onClick={sendBack}> <button onClick={() => { history.push('/pageThree') }} className="pastButton" >⬅ PAST</button></p>
                </div>
               
            )
        }
        else {
            return (
                <p className="pastButton" onClick={sendBack}> <button onClick={() => { history.push('/pageThree') }} className="pastButton" >⬅ PAST</button></p>
            )
        }
    }

    const sendFeeling = () => {

        dispatch({
            type: 'SEND_COMMENTS',
            payload: scaleInput
        })

    }

    const comments = useSelector((store) => store.comments)
    console.log(comments);
    console.log(scaleInput);

    return (

        <div className="pageOneContainer">
            <h3 className="pages">4 0f 4 Pages</h3>
            <p className="rectangle"></p>
            <div className="questionContainer">
                <div className="whiteBox">
                    <p className="questions">
                        Any comments you want to leave? <br />
                        on a scale of 1-5
                    </p>
                    <textarea className="textarea" cols="30" rows="5"
                        value={scaleInput}
                        onChange={(event) => { setScaleInput(event.target.value) }}
                    >
                    </textarea>
                   {onToNext()}

                </div>
            </div>

        </div>
    )
}

export default Comments;