import React, {useState} from 'react'

export default function TextForm(props) {

const handleUpClick = () =>{
  //console.log('uppercase was clicked' + text);
  let textNew = text.toUpperCase();
  setText(textNew);
  props.showAlert('Text converted to uppercase successfully', 'success');
}

const handleLoClick = () =>{
  let newText = text.toLowerCase();
  setText(newText);
  props.showAlert('Text converted to lowercase successfully', 'success');
}

const handleClrClick = () =>{
  let noText = '';
  setText(noText);
  props.showAlert('Text cleared successfully', 'success');
}

const handleDownloadClick = () =>{
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', "DownloadText.txt");
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
  props.showAlert('Text downloded successfully', 'success');
}

const handleRemoveLinesClick = () =>{
  var wordInputVal = document.getElementById('inputWord').value;
  var lines = text.split("\n").filter( function(val){ 
    return val.indexOf( wordInputVal ) === -1;
  });

  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(lines.join( "\n" )));
  element.setAttribute('download', "DownloadText.txt");
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);

}

const handleOnChange = (event) =>{
 setText(event.target.value);
  //console.log('onchange content');
}



const [text, setText] = useState('');
var countWords = '<h4>there is '+ text.split(" ").length + ' word and '+ text.length +' caracter </h4><p>' + 0.08 * text.split(" ").length+ ' minutes to read</p>';
//var strippedHtml = countWords.replace(/\s+/g,' ').trim();
var strippedHtml = countWords.replace(/<[^>]+>/g, ''); 



  return (
    <>
    <div className="container my-3">
        <h3>{props.heading}</h3>
        <div className="mb-3">
        <h5 className='mt-3'>Enter Text</h5>
        <textarea className={`form-control bg-${props.mode === 'light'?'white':'dark'} text-${props.mode==='light'?'dark':'light'}`} id="myBox" onChange={handleOnChange} value={text} rows="8"></textarea>
        <h5 className='mt-3'>Enter Word</h5>
        <input type="text" className={`form-control mt-3 bg-${props.mode==='light'?'white':'dark'} text-${props.mode==='light'?'dark':'light'} `} id="inputWord" />
        <button className="btn btn-primary my-3 mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary my-3 mx-1" onClick={handleLoClick}>Convert to lowercase</button>
        <button className="btn btn-primary my-3 mx-1" onClick={handleClrClick}>Clear texttgit</button>
        <button className="btn btn-primary my-3 mx-1" onClick={handleDownloadClick}>Download text</button>
        <button className="btn btn-primary my-3 mx-1" onClick={handleRemoveLinesClick}>Remove contaning word lines</button>
        </div>   
    </div>

    <div className="container">
      <h3 className="my-3">Your text summery</h3>
      
     <h4>{text.length>0?strippedHtml:""}</h4>
      <p>{text.length>0?text:"Enter Your Text to Textarea for Preview Text"}</p>
    </div>
    </>
  )
}
