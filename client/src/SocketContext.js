import React, {createContext, useState, useRef, useEffect} from 'react';
import {io} from 'socket.io-client';
import Peer from 'simple-peer';

const SocketContet = createContext();

const socket = io("http://localhost:5000");

const ContextProvider = ({children}) => {

    useEffect(()=> {
        
    })

    const answerCall = () => {

    }

    const callUser = () => {

    }

    const leaveCall = () => {


    }
}