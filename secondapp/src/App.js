import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  let text1=' Hello Palestine'
  let text2='Hello World'
  const [text, setText]=useState();
  const changeText = () =>{
    if(text === text1){
      setText(text2);
    }
    else{
      setText(text1);
    }
  }
  return (
    <div> 
      <div onClick ={changeText}>
        {text}
      </div>
    </div>
  );
}

export default App;
