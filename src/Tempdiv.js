import React, { Component } from 'react'
import './Tempdiv.css'

class Tempdiv extends Component{
    render(){
        return(
            <div class="container">
                    <img src={process.env.PUBLIC_URL + "/images/pitch_a_story.png"} alt="Snow" ></img>
                <button class="btn">Button</button>
                 </div>
        )
    }
}

export default Tempdiv;