
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function ThankYou() {

//---------------------REACT FUNCTIONS---------------------------------    
    const dispatch = useDispatch()
    const history = useHistory()
    
//---------------------RESET FUNCTIONS---------------------------------
    const resetSurvey = () => {

        dispatch({
            type: 'RESET',
            payload: ''
        })

    }

    return (
        <div>
            <p className="thanks">Thank You </p>
            <img className="penguins" src="/images/pngwing.com.png" alt="" /> <br />
            <p onClick={() => { history.push('/') }}><button onClick={resetSurvey} className="newSurvey">Take a new survey</button></p>
        </div>
    )
}

export default ThankYou;