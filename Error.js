import { useRouteError } from "react-router-dom";

const Error = function(){
    const err = useRouteError();
    console.log(err)
    //const[status, statusText] = err.keys(obj);
    return(
        <>
            <h1>Ooooooooops!!!</h1>
            <h2>Something went wrong</h2>
            <h2>{err.status + " " + err.statusText} </h2>
            {/* <h2>{err}</h2> */}
        </>
    )
}

export default Error;