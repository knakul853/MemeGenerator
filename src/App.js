import React from "react"
import Header from "./Header"
import MemeGenerator from "./MemeGenerator"
import "./index.css"
import Main from "./Main"

function App(){
    return(
        <div>
            <Header />
            <MemeGenerator />
            <Main />
        </div>
    )
}


export default App