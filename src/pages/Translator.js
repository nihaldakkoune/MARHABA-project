import { useState } from "react";
import { AiOutlineClose } from 'react-icons/ai';
import Menu from "./Menu";
import Footer from "./Footer";
import React, { Fragment } from "react";


const Translator = () => {

    const[inputText,setInputText] = useState('');
    const[outputLang, setOutputLang] = useState('ar');
    const[outputText, setOutputText] = useState('');
    const[isTranslated, setIsTranslated] = useState();

    const translate = () =>{
        console.log(outputLang);
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': process.env.REACT_APP_RapidAPI_Key,
                'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
            },
            body: `[{"Text":"${inputText}"}]`
        };
        
        fetch(`${process.env.REACT_APP_Base_URL}${outputLang}${process.env.REACT_APP_Query_Params}`, options)
            .then(response => {
                if(response.status !== 200){
                    setIsTranslated(false);
                    console.log("There's an error");
                    return;
                }
                setIsTranslated(true);
                response.json()
                .then(response => {
                const translatedText = response[0].translations[0].text;
                setOutputText(translatedText);
                console.log(translatedText);
                })
                })
            .catch(err => {
                setIsTranslated(false);
                console.error(err)
            });
    }

    const clearInput = () =>{
        setInputText('');
        setOutputText('');
        setIsTranslated();
    }

    return(
        
        <section className="translator">
            <Menu/>
            <h1 className="struggling">Struggling in Qatar ? Let me help you !</h1>
            <div className="row-wrapper">
            
                <div className="translator-container input-lang">
                    <div className="top-row1">
                   
                        <button 
                        className="btn btn-primary btn-translate1 "
                        id = "Traduction"
                        onClick={translate}
                        >
                            Translate
                        </button>
                    </div>    
                    <form className="input-form">
                        <textarea
                        className="text-box"
                        placeholder="Marhaba! Enter your text(Automatic detection is included)"
                        onChange={e =>setInputText(e.target.value)}
                        value={inputText}
                        >
                        </textarea>
                        {
                            inputText !== "" &&
                            <AiOutlineClose
                            className="icon-btn close-btn"
                            onClick={clearInput}
                            />
                        }
                    </form>
                </div>
                <div className="translator-container output-lang">
                    <div className="top-row">
                    </div>
                        <p className="text-box output-box">
                            {
                                isTranslated === false ?
                                <span className="output-placeholder translation-error">Translation failed</span>
                                :
                                outputText === "" ?
                                    <span className="output-placeholder">Translate to Arabic</span>
                                    :
                                    outputText
                            }
                        </p>
                </div>
            </div>
         <div className="footTrans">
            <div className="footer3">
            <Footer/>
            </div>
            </div>
        </section>
       
        
    );
    
}
export default Translator;