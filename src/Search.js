import React, { useState } from "react";
import axios from "axios";
import CountdownTimer from "./CountdownTimer";
import "./Search.css"


export default function Search() {
 const [ wordGenerated, setWordGenerated ] = useState ("")

 function handleResponse(response) {

    setWordGenerated(response.data[0])  
}


function generateWord(event) {
    event.preventDefault();
    
    let apiUrl = "https://random-word-api.vercel.app/api?words=1" 

    axios.get(apiUrl).then(handleResponse)
    
}

if (wordGenerated) {
    return (
        <section>
            <form>
                <button onClick={generateWord} className="generate-button">Generate</button>
                <h3 className="word-generated">{wordGenerated}</h3>
                <section>
                    <CountdownTimer />
                    
                </section>
            </form>
        </section>
    )

} else 

return (
    <section>
        <form>
            <button onClick={generateWord} className="generate-button">Generate</button>
        </form>
    </section>
)

}
