
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useState, } from "react";

import { ThemeProvider,createTheme } from "@emotion/react";

function PageOne() {

    const [feelingInput, setFeelingInput] = useState('');

// const theme = createTheme({
//     pallete:{
//         primary:{
//             main:"#ccc"
//         }
//     }
// })

//---------------------REACT FUNCTIONS---------------------------------
    const dispatch = useDispatch()

    const history = useHistory()

//---------------------CONDITIONAL FUNCTIONS---------------------------------

const sendBack = ()=> {

    dispatch({
        type:'RESET_FEELING',
        payload:''
    })
}

    const onToNext = () => {
        if (feelingInput != '') {
            return (
                <div>
                     <p onClick={sendFeeling} className="nextContainer">
                    <button onClick={() => { history.push('/pageTwo') }} className="nextButton">NEXT ➡</button>
                   
                </p>
                <p className="pastButton" onClick={sendBack}> <button onClick={() => { history.push('/') }} className="pastButton" >⬅ PAST</button></p>
                </div>
               
            )
        }
        else {
            return (
                <p className="pastButton" onClick={sendBack}> <button onClick={() => { history.push('/') }} className="pastButton" >⬅ PAST</button></p>
            )
        }
    }

    const sendFeeling = () => {
        if (feelingInput != '') {
            dispatch({
                type: 'SEND_FEELING',
                payload: feelingInput
            })
        }
    }
//---------------------USE SELECTORS---------------------------------
    const feeling = useSelector((store) => store.feeling)
    const understanding = useSelector((store) => store.understanding)
    const comments = useSelector((store) => store.comments)
    const support = useSelector((store) => store.support)

    console.log(feelingInput);
    console.log(feeling, understanding, comments, support);


    return (

        <div className="pageOneContainer">
            <h3 className="pages">1 0f 4 Pages</h3>
            <p className="rectangle"></p>
            <div className="questionContainer">
                <div className="whiteBox">
                    <p className="questions">
                        How are you feeling today? <br />
                        on a scale of 1-5
                    </p>
                    <input
                        className="inputQuestions"
                        placeholder="required"
                        type="text" name=""
                        value={feelingInput}
                        onChange={(event) => { setFeelingInput(event.target.value) }}
                    /> <br />
                    {onToNext()}
                    
                </div>
            </div>

        </div>
    )
}

export default PageOne;