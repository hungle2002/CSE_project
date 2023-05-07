import React, { useEffect, useState } from 'react';
import classNames from "classnames/bind";
import styles from "./voice.module.scss";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophone
} from "@fortawesome/free-solid-svg-icons";
import { turnOnDevice, turnOffDevice} from './command';
import Button from '../deviceTable/Button';
const cx = classNames.bind(styles);
function Voice( {closeModel}){
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
        <div className={cx("wrapper")}>
        <p className={cx("close-button")} onClick={() => closeModel(0)}>X</p>
            <div className={cx("micro")}>                    
                <FontAwesomeIcon
                        className={cx("icon")}
                        icon={faMicrophone}
                        style={listening?{ color: "#4979D1"}: {color:"#000000"}}/></div>
            <p className={cx("header")}>Microphone {listening ? 'on' : 'off'}</p>

            {transcript? <p className={cx("content")}>{transcript}</p> : <p className={cx("content")}>Say something ...</p>}

            {listening?
                <Button title='Stop' small danger onClick={SpeechRecognition.stopListening}/>:
            <Button title='Start' small primary onClick={SpeechRecognition.startListening}/>
            }
            
        </div>
    );
}

export default Voice;
