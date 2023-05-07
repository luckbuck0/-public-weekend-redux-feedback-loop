import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import { useSelector, useDispatch } from "react-redux";
import { useState, } from "react";


function Understanding() {


    const [scaleInput, setScale] = useState('');

//---------------------REACT FUNCTIONS---------------------------------
    const dispatch = useDispatch()

    const history = useHistory()

//---------------------CONDITIONAL FUNCTIONS---------------------------------
    const onToNext = () => {
        if (scaleInput != '') {
            return (
                <p onClick={sendScale} className="nextContainer">
                    <button onClick={() => { history.push('/pageThree') }} className="nextButton">NEXT ➡</button>
                </p>
            )
        }
    }

    const sendScale = () => {
        if (scaleInput != '') {
            dispatch({
                type: 'SEND_UNDERSTANDING',
                payload: scaleInput
            })
        }
    }

    const understanding = useSelector((store) => store.understanding)
    
    console.log(understanding);
    console.log(scaleInput);

    return (

        <div className="pageOneContainer">
            <h3 className="pages">2 0f 4 Pages</h3>
            <p className="rectangle"></p>
            <div className="questionContainer">
                <div className="whiteBox">
                    <p className="questions">
                        How well are you understanding the content? <br />
                        on a scale of 1-5
                    </p>
                    <input
                        className="inputQuestions"
                        placeholder="required"
                        type="text" name=""
                        value={scaleInput}
                        onChange={(event) => { setScale(event.target.value) }}
                    /> <br />
                    {onToNext()}
                </div>
            </div>

        </div>
    )
}

export default Understanding;