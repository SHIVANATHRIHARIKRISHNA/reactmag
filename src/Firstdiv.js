import React,{Component} from 'react';
import './Mag_Cover.png';
import './Firstdiv.css';
import {Link,BrowserRouter as Router,Route} from 'react-router-dom';

const func1={
    color:'red',
    fontSize:'45px'
   
}
const func={
    textAlign: 'right'
};
const func2={
    fontSize:'20px'
}

const func3={
    borderRadius:'30px',
    backgroundColor:'red',
    fontSize:'20px',
    float:'left',
    marginLeft:'10px',
    marginTop:'20px',
    padding:'10px',
    width:'45%',
    color:'white'
}

const func4={
    borderRadius:'30px',
    backgroundColor:'red',
    fontSize:'20px',
    float:'right',
    marginTop:'20px',
    padding:'10px',
    width:'45%',
    color:'white'
}

const fun={
    textAlign:'top'
}

const imgs={
    marginLeft:'10px'
}
class Firstdiv extends Component{
    render()
    {
        return(
            <div>
               <table width="100%" height="500px">
                   <tr >
                       <td width="20%">
                       </td>
                       <td width="35%" style={fun} >
                           <h1 style={func1}>
                                 Live the fantasy world of wedding fashion
                            </h1>
                           <p style={func2}>
                                Our magazine is an eclectic blend of modernity and traditions-the complete package of coontemporary couples
                                to plan and execute a wedding of their dreams.Our magazine focuses of how to make your wedding day your most
                                memorable event.From bridal musings and a curated list of beauty essentials to expert advice on wedding planning,
                                we cover it all
                           </p>
                           <Link to={{pathname: 'https://pankhuri.co/indian-wedding-magazines/pankhuri-vol-1.pdf'}} target='_blank'>
                           <button style={func3}>Read</button>
                           </Link>
                           <button style={func4}>Subscribe</button>
                       </td>
                       <td width="3%">

                       </td>
                       <td  width="22%" >
                           <img src={process.env.PUBLIC_URL + "/images/Mag_Cover.png"} width="125%" ></img>
                       </td>
                       <td width="20%" style={func}>
                          {/*<button>Hii</button>*/}
                       </td>
                   </tr>
               </table>
            </div>
        )
    }
}

export default Firstdiv;

