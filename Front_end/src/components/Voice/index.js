import React, { useEffect, useState } from 'react';
import classNames from "classnames/bind";
import styles from "./voice.module.scss";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophone
} from "@fortawesome/free-solid-svg-icons";
import { turnOnDevice, turnOffDevice} from './command';
const cx = classNames.bind(styles);
function Voice(){
    const commands = [
        {
            command:'turn on *',
            callback: (device)=>turnOnDevice(device)
        },
        {
            command:'turn off *',
            callback: (device)=>turnOffDevice(device)
        }
    ]

    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition({commands});
    
    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }
    
    return (
        <div>
            <FontAwesomeIcon
            className={cx("icon")}
            icon={faMicrophone}
            style={listening?{ color: "#4979D1" }: {color:"#000000"}}/>
            <p>Microphone: {listening ? 'on' : 'off'}</p>
            {listening?
            <button onClick={SpeechRecognition.stopListening}>Stop</button>:
            <button onClick={SpeechRecognition.startListening}>Start</button>
            }
            <p>{transcript}</p>
            
        </div>
    );
}

export default Voice;
