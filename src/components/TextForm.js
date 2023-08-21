import React, {useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = ()=>{
    let newText= text.toUpperCase();
    setText(newText)
    props.showalert("Converted to Uppercase","success");
  }
  
  const handledownclick = ()=>{
    let newText2= text.toLowerCase();
    setText(newText2)
    props.showalert("Converted to Lowercase","success");
  }
  
  const handlecopy = ()=>{
    var text= document.getElementById("mybox");
    text.select()
    navigator.clipboard.writeText(text);
    props.showalert("Text Copied","success");
  }


  const handleOnChange=(event)=>{
    setText(event.target.value)
  }

  const [text,setText] = useState("");
  return (
    <>
    <div className="container" style={{color:props.theme==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>

        <div className="mb-3" padding="10px">
            <textarea className="form-control" style={{backgroundColor:props.theme==='dark'?'grey':'white',color:props.theme==='dark'?'white':'black'}} value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
        </div>

        <div className="container">
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handledownclick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handlecopy}>Copy the Text</button>
        
        </div>
    </div>

    <div className="container my-3" style={{color:props.theme==='dark'?'white':'black'}}>
      <h2>Your Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>You can read complete paragraph in {0.008 * text.split(" ").length} minutes</p>

      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter some text to preview here"}</p>
    </div>
    </>
  )
}
