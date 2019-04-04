import React from "react"

class MemeGenerator extends React.Component{
    
    constructor(){
        super()
        this.state = {
            topText:"",
            bottomText:"",
            randomImg:"https://i.ebayimg.com/images/g/FnQAAOSwEeFVEPB~/s-l640.jpg",
            allMemeImages:[]
        }
    }
    

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response =>{
            const {memes} = response.data
            console.log(memes[0])
            this.setState({ allMemeImages:memes })
        } )

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    

    handleChange(event){
        const {name , value } = event.target
        this.setState({
            [name]:value
        })

    }

    handleSubmit(event){
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImages.length)
        const randMemeImg = this.state.allMemeImages[randNum].url
        this.setState({ randomImg :randMemeImg })
        console.log("Dfgdf")

    }
    
   render(){ return(
        <div>
           <form className="meme-form" onSubmit={this.handleSubmit}>

           <input type="text"
            placeholder="Top text"
            name="topText"
            value={this.state.topText}
            onChange={this.handleChange}
            />

            <input type="text"
            placeholder="Buttom text"
            name="ButtomText"
            value={this.state.ButtomText}
            onChange={this.handleChange}
            />

           <button>Gen</button>

           </form>

           <div className="meme">
           <img src={this.state.randomImg} alt=""/>
           <h2 className="top">{ this.state.topText }</h2>
           <h2 className="bottom">{ this.state.ButtomText }</h2>
           </div>
        </div>
    )
   }
}


export default MemeGenerator