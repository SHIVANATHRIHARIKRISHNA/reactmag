import React,{Component} from 'react'
import {Link} from 'react-router-dom'

const fun={
    marginTop:'50px',
    backgroundColor:'pink',
    fontSize:'20px',
    marginBottom:'50px'
}
const tbl={
    width:"100%",
     height:"500px",
}
const td1h1={
    
        fontSize:'50px',
      color:'blue'
}
const td1p={
   
    color:'blue',
    marginBottom:'30px'
}
const temp={
    paddingLeft:"10%"
}

const btn1={
    borderRadius:'30px',
      backgroundColor:'blue',
      width:'40%',
      padding:'10px',
      color:'white'
}

class Seconddiv extends Component{

    render(){
      return(
          <div style={fun}>
              <table style={tbl}>
                  <tr>
                      <td width='60%' style={temp} >
                         <h1 style={td1h1}>
                           About Pankhuri
                         </h1>
                         <p style={td1p}>
                            Pankhuri is one-stop for all ur bridal needs.We aim to make the planning process as stress-free
                            as possible for soon-to-wed brides by recommending classical bridal trousseau,providing fashion
                            advice to the bridal brigade along with handpicked vendors and ideas to make your dream wedding a reality
                         </p>
                         <Link to={{pathname:'https://pankhuri.co/'}} target='_blank'>
                         <button style={btn1}>Ask Pankhuri</button>
                         </Link>
                      </td>
                      <td width='7%'>

                      </td>
                      <td width='15%'>
                      <img src={process.env.PUBLIC_URL + "/images/pitch_a_story.png"}></img>
                      </td>
                      <td width='15%'>
                        <img src={process.env.PUBLIC_URL + "/images/get_featured.png"}></img>
                      
                      </td>
                  </tr>
              </table>
          </div>
      )
    }
}

export default Seconddiv;