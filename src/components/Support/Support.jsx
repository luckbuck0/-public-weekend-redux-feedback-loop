import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import { useSelector, useDispatch } from "react-redux";
import { useState, } from "react";


function Support (){

    const [scaleInput,setScale]=useState('');
    
//---------------------REACT FUNCTIONS---------------------------------
    const dispatch = useDispatch()

    const history =useHistory()
    
//---------------------CONDITIONAL FUNCTIONS---------------------------------

    // const onToNext = () =>{
    //     if (scaleInput!=''){
    //         return (
    //                 <p onClick={sendScale} className="nextContainer"> 
    //                     <button onClick={()=>{history.push('/pageFour')}}  className="nextButton">NEXT ➡</button>
    //                 </p>
    //         )
    //     }
    // } 

    const sendBack = ()=> {

        dispatch({
            type:'RESET_UNDERSTANDING',
            payload:''
        })
    }
    
        const onToNext = () => {
            if (scaleInput != '') {
                return (
                    <div>
                          <p onClick={sendScale} className="nextContainer"> 
    //                     <button onClick={()=>{history.push('/pageFour')}}  className="nextButton">NEXT ➡</button>
    //                 </p>
                    
                    <p className="pastButton" onClick={sendBack}> <button onClick={() => { history.push('/pageTwo') }} className="pastButton" >⬅ PAST</button></p>
                    </div>
                   
                )
            }
            else {
                return (
                    <p className="pastButton" onClick={sendBack}> <button onClick={() => { history.push('/pageTwo') }} className="pastButton" >⬅ PAST</button></p>
                )
            }
        }


    const sendScale= ()=>{
        if (scaleInput!=''){
            dispatch({
                type: 'SEND_SUPPORT',
                payload: scaleInput
            })
        }
    }

//---------------------USE SELECTORS---------------------------------
    const support =useSelector((store)=> store.support)
    console.log(support);
    console.log(scaleInput);

    return(

        <div className="pageOneContainer">
                <h3 className="pages">3 0f 4 Pages</h3>
                <p className="rectangle"></p>
            <div className="questionContainer">
                <div className="whiteBox">
                <p className="questions">
                    How well are you being supported? <br />
                    on a scale of 1-5
                </p>
                <input
                className="inputQuestions" 
                placeholder="required" 
                type="text" name="" 
                value={scaleInput} 
                onChange={(event)=>{setScale(event.target.value)}}
                /> <br /> 
                {onToNext()}
                </div>
            </div>
            
        </div>
    )
}

export default Support;