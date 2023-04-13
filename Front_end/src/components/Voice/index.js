import React, { useEffect, useState } from 'react';
import classNames from "classnames/bind";
import styles from "./voice.module.scss";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
const cx = classNames.bind(styles);
function Voice(){
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();
    
    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }
    
    return (
        <div>
            <p>Microphone: {listening ? 'on' : 'off'}</p>
            <button onClick={SpeechRecognition.startListening}>Start</button>
            <p>{transcript}</p>
            
        </div>
    );
}

export default Voice;
