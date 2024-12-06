import React from 'react'
import Header from './Header'
function GnB(){
  const menuData=['home',"project","work",'about']
  return(
    <div>
      <ul>
        
        {menuData.map((item,i)=>{
          return(
            <li key={i}>{item}</li>
          )
        })
        }
      </ul>
    </div>
  )
}
export default GnB;