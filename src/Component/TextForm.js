import React, {useState} from 'react'

export default function TextForm(props) {
   const handleUpClick = ()=>{
    // console.log("Uppercase button clicked " + text);
    let newText = text.toUpperCase();
    setText(newText)
   
   }
   

   const handleLoClick = ()=>{
    // console.log("Uppercase button clicked " + text);
    let newText = text.toLowerCase();
    setText(newText)
    
   }

   const handleDel = ()=>{
    // console.log("Uppercase button clicked " + text);
    let newText = ("");
    setText(newText)
   }

   const handleOnChange = (event)=>{
    // console.log("On Change");
    setText(event.target.value);
   }
    const [text, setText] = useState('Enter Text Here');
  return (
    <>
    <div className='container'>
        <div className="mb-3">
            <h1>{props.heading}</h1>
            <textarea className="form-control" value = {text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-outline-success mx-2" onClick={handleUpClick}>UpperCase</button>
        <button className="btn btn-outline-success mx-2" onClick={handleLoClick}>LowerCase</button>
        <button className="btn btn-outline-danger mx-2" onClick={handleDel}>Clear</button>
    </div>
    <div className="container my-3">
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} character</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
