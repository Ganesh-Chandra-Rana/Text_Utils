import React from 'react'

function dismissed_Alert(props) {
    //capitialize function
    const capitalize = (word)=>{
        let str = word.toLowerCase();
        return str.charAt(0).toUpperCase()+str.slice(1);
    }
    
  return (
<div style={{height:'80px'}}>
   {props.alert && <div className ={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert"> {/*if props.alert true then div executes*/}
    <strong>{capitalize(props.alert.type)}</strong> :{props.alert.msg}
    
      {/* <span aria-hidden="true">&times;</span> */}
    
  </div>}
  </div>
    
  )
}

export default dismissed_Alert