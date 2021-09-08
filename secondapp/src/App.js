import './App.css';
import {useState} from 'react';

function App() {
    let text1 = ' Hello Palestine'
    let text2 = 'Hello World'
    const [text, setText] = useState(text2);
    const changeText = () => {
        if (text === text1) {
            setText(text2);
        } else {
            setText(text1);
        }
    }

    let newEmail = "";
    let newUserName = "";
    const [userName, setUserName] = useState(newUserName);
    const [email, setEmail] = useState(newEmail);
    const saveEmail = (event) => {
        if (event.target.value.trim("") != "") {
            setEmail(event.target.value);
        }
        if (event.target.value.trim("") == "") {
            setEmail("");
        }
    }
    const saveUserName = (event) => {
        if (event.target.value.trim("") != "") {
            setUserName(event.target.value);
        }
        if (event.target.value.trim("") == "") {
            setUserName("");
        }

    }
    const randomArray = [
        '	He struck a match.',
        '	I have got to leave here early tomorrow morning.',
        'Ill have a glass of water pleas',
        'Dont let your feelings show.',
        'This book contains many pictures.	',
        'Ill come by 10.	',
        'She might come.	',
        'He is sick.	',
        'Are you ready?	,',
        'I want to climb Mt. Fuji again.	',
        'Its easy.	',
        'Did you buy anything?	',
        'What are you going to have?	',
        'She lives with him in a small apartment.	'
    ];
    const [randomSentence, setrandomSentence] = useState("Change Sentence");
    const changeSentence = () => {
        let number = Math.floor(Math.random() * 100);
        while (number > randomArray.length || number < 0) {
            number = Math.floor(Math.random() * 10);
        }
        setrandomSentence(randomArray[number])

    }
    return (
        <div>
            <div onClick ={changeText}>
                <br></br>
                {text} </div>
            <hr></hr>
            <div>
                <label>User Name : {userName} </label>
                <br></br>
                <input type="text" placeholder="User Name"
                    onChange={saveUserName}></input>
                <br></br>
                <label>Email : {email} </label>
                <br></br>
                <input type="email" placeholder="Email"
                    onChange={saveEmail}></input>
                <br></br>
                <br></br>
                <hr></hr>
            </div>
            <div>
                <br></br>
                <button onClick={changeSentence}>
                    {randomSentence}</button>
            </div>
        </div>
    );
}

export default App;
