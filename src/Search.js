//import axios from "axios";

export default function Search() {


function generateWord(event) {
    event.preventDefault();
    console.log("generateWord triggered")
    
    
    //use axios to call the AI api
    //set status generated 
    //show new section with word (use state/effect)
}
    
return (
    <section>
        <form>
            <button onClick={generateWord}>Generate</button>
        </form>
    </section>
)
}

//add timer component