import React, {createContext, useState, useRef, useEffect} from 'react';
import {io} from 'socket.io-client';
import Peer from 'simple-peer';

const SocketContet = createContext();

const socket = io("http://localhost:5000");

const ContextProvider = ({children}) => {
{/*setting up commands and configuration for the 
communication of 
socket.io from client to server 
via functions/hooks + effects: 
*/}

    useEffect(()=> {
        navigator.MediaDevices.getUserMedia({video: true, audio: true})
            .then(currentStream) => {
                
            }
    })

    const answerCall = () => {

    }

    const callUser = () => {

    }

    const leaveCall = () => {


    }
}