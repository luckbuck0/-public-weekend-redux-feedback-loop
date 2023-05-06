
import { useSelector } from "react-redux";


function PageOne(){

    const feeling=useSelector((store)=> store.feeling)

    console.log(feeling);

    return(
        <div>
            Hello
        </div>
    )
}

export default PageOne;