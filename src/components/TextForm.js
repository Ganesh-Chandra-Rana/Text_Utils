import React,{useState} from 'react'

export default function TextForm(props) {
    const[text,setText]=useState("Enter Text"); //syntax of useState hook used for set variable state & update with settext
    // settext("UPDATED");
    const handleUpClick=()=>{
        console.log("Uppercase clicked");
        const newtext=text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted Uppercase","success");
    }

    const handleLowClick=()=>{
      console.log("lowercase clicked");
      const newtext=text.toLowerCase();
      setText(newtext);
      props.showAlert("Converted Lowercase","success");

  }

  const handleCapClick=()=>{
    console.log("capitalize clicked");
    const newtext=()=>{
      let finalArr=[];
      let strArr=text.split(" ");
      //console.log(strArr);
      strArr.forEach(element=>{
        finalArr.push(element.charAt(0).toUpperCase() + element.slice(1));
      });
      //console.log(finalArr);
      props.showAlert("Converted Capitalize","success");

let finalStr=finalArr.join(" ");
return finalStr;
    }
    setText(newtext);
}

const handleRemoveSpaceClick=()=>{
  console.log("extra space clicked");
  // const newtext=text.split(/\s+/);
  // setText(newtext.join(" "));
  const newText=text.replace(/\s+/g, ' ');
  setText(newText);
  props.showAlert("Removed Extraspace","success");

}
const handleCopyClick=()=>{
  console.log('copied');
  var text=document.getElementById("TextArea");
 navigator.clipboard.writeText(text.value);
 //  document.getSelection().removeAllRanges();


console.log("extra space clicked");
// const newtext=text.split(/\s+/);
// setText(newtext.join(" "));
const newText=text.replace(/\s+/g, ' ');
setText(newText);
props.showAlert("Removed Extraspace","success");

}
const handleClear=()=>{
  
  setText("");
//  document.getSelection().removeAllRanges();
}
    const handleOnChange=(event)=>{
        console.log("onchanged clicked"); //When we try to enter ito text area that time it will call this onChange.
        setText(event.target.value); //used to change by entering into text area.
    }
  return (
    <>

<div  className="mb-3 container"style={{color:props.mode==="dark"?"white":"black"}} >
  <label htmlFor="exampleFormControlTextarea1" className="form-label "><h1>{props.heading}</h1></label>
  <textarea className="form-control" id="TextArea" style={{backgroundColor:props.mode==="dark"?"#008effe8":"white",color:props.mode==="dark"?"white":"black"}} value={text} rows="7" onChange={handleOnChange}></textarea>
</div>
<div className="container">
<button disabled={text.length===0}  className="btn btn-primary mx-3  my-3" onClick={handleUpClick}>Convert to Uppercase </button>
<button disabled={text.length===0} className="btn  btn-primary mx-3 my-3" onClick={handleLowClick}>Convert to Lowercase </button>
<button disabled={text.length===0} className="btn  btn-primary mx-3 my-3" onClick={handleCapClick}>Capitalize </button>

<button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={handleRemoveSpaceClick}>Remove Extra Spaces </button>
<button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={handleCopyClick}>Copy</button>
<button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={handleClear}>Clear</button>

</div>


<div className="container my-3" style={{color:props.mode==="dark"?"white":"black"}}   >
  <h1>Your Text Summary</h1>
  <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words And {text.length} Characters</p>
  <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>  {/*as per google for reading 125 words takes 1 minutes then 1 word = 1/125 :0.008min */}
  <h2>
   * Preview *
  </h2>
  <p className='container'>{text.length===0?"Nothing to preview":text}</p>

</div>
</>                                                                                       
    
  )
  }
