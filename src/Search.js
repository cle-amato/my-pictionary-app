import React, { useState } from "react";
import axios from "axios";
import GameStartedView from "./GameStartedView";
import CountdownTimer from "./CountdownTimer";


export default function Search() {
 const [ wordGenerated, setWordGenerated ] = useState ("")

 function handleResponse(response) {
    console.log(response)
    console.log(`word generated:${(response.data[0])}`)
   
    setWordGenerated(response.data[0])  
}





function generateWord(event) {
    event.preventDefault();
    console.log("generateWord triggered")
    
    let apiUrl = "https://random-word-api.vercel.app/api?words=1" 

    axios.get(apiUrl).then(handleResponse)
    
}

if (wordGenerated) {
    return (
        <section>
            <form>
                <button onClick={generateWord}>Generate</button>
                <h3>{wordGenerated}</h3>
                <section>
                    <GameStartedView />
                    <CountdownTimer />
                </section>
            </form>
        </section>
    )

} else 

return (
    <section>
        <form>
            <button onClick={generateWord}>Generate</button>
        </form>
    </section>
)

}

//add timer component