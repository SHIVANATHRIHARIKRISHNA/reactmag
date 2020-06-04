import React,{Component} from 'react'
import Tempdiv from './Tempdiv.js'

const fun={
    width:'100%',
    height:'800px',
}

const tex={
    fontSize:'30px',
    color:'blue'
}

class Thirddiv extends Component{
    render()
    {
        return(
            <div style={fun}>
                <table>
                   <tr>
                       <td width='20%'>
                           
                       </td>
                       <td width='60%'>
                         <table>
                           <tr>
                             <h1 style={tex}>
                                 Previous Issues
                             </h1>
                           </tr>
                           <tr >
                               <td>
                                    <Tempdiv/>
                               </td>
                               <td>
                               <Tempdiv/>
                               </td>
                               <td>
                               <Tempdiv/>
                               </td>
                           </tr>
                           <tr>
                              <td>
                                 <Tempdiv/>
                               </td>
                               <td>
                                  <Tempdiv/>  
                               </td>
                               <td>
                               <Tempdiv/>
                               </td>
                           </tr>
                         </table>
                       </td >
                       <td width='20%'>

                       </td>
                   </tr>
                </table>
            </div>
        )
    }
}

export default Thirddiv;
