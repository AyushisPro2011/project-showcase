import React, { useState } from "react";
import Navbar from "../../components/navbar";
import './password.css';

const PasswordGen = () => {
    const [charlimit, setcharlimit] = useState(6);
    const [option, setoption] = useState(1);

    const pass1 = "12345678910";
    const pass2 = "abcdefghijklmnopqrstuvwxyz";
    const pass3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const pass4 = "abcdefghijklmnopwrtuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const pass5 = "abcdefghijklmnopwrtuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    const pass6 = "abcdefghijklmnopwrtuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+-={}[]|\\:;\"'<>,.?/";

    const changeopt = (event) => {
        setoption(parseInt(event.target.value));
    };

    const display = (arg) => {
        document.getElementById('final').innerHTML = arg
    }
    const setchar = (event) => {
        const value = parseInt(event.target.value);
        if (value === '') {
            setcharlimit(6);
        } else if (value <= 20) {
            setcharlimit(value);
        }
    };

    const setpassword = (level) => {
        let h = "";
        let i;
        const selectedPass = level === 1 ? pass1 :
                            level === 2 ? pass2 :
                            level === 3 ? pass3 :
                            level === 4 ? pass4 :
                            level === 5 ? pass5 : pass6;

        for (i = 0; i < charlimit; i++){
            h += selectedPass[Math.floor(Math.random() * selectedPass.length)];
        }

        return h;
    };

    return (
        <body>
            <div id="gradient">
                <Navbar Text={"Password Generator"} />
                <p id="title">THE PASSWORD GENERATOR</p>
                <div id="options">
                    <select id="option" onChange={changeopt}>
                        <option value={1}>Pin(Only numbers)</option>
                        <option value={2}>Alphabet Lower Case</option>
                        <option value={3}>Alphabet Upper Case</option>
                        <option value={4}>Alphabet Both cases</option>
                        <option value={5}>Alphabets both cases and Numbers</option>
                        <option value={6}>Alphabets, Numbers and Symbols</option>
                    </select>
                    <input type="number" placeholder="Characters(Max-20)" id="chars" onChange={setchar}></input>
                    <p style={{ position: "absolute", left: "60%", top: "35%", color: "whitesmoke", fontSize: "90%", background: "orange"  , width : "auto"}}>only numbers till 19 will be accepted <br/> After it , the first digits will be accepted</p>
                    <button id="execute" onClick={() => display(setpassword(option))}>Generate the password</button>
                    <p id="final">Press the button</p>
                </div>
            </div>
        </body>
    );
};

export default PasswordGen;
