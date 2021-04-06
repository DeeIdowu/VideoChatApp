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
    const [stream, setStream] = useState(null);
    const [me, setMe] = useState('');
    const [call, setCall] = useState({});
    const [callAccepted, setCallAccepted] = useState(false); 
    const [callEnded, setCallEnded] = useState(false); 

    const myVideo = useRef();
    const userVideo = useRef();

    useEffect(()=> {
        navigator.MediaDevices.getUserMedia({video: true, audio: true})
            .then((currentStream) => {
                setStream(currentStream);

                myVideo.current.srcObject = currentStream;
            });

            socket.on('me', (id)=> setMe(id));

            socket.on('callUser', ({from, name: callerName, signal})=> {
                setCall({isReceivedCall: true, from, name: callerName, signal})

            });
    }, []);

    const answerCall = () => {
        setCallAccepted(true);

        const peer = new Peer({initiator: false, trickle: false, stream});

        peer.on('signal', (data)=> {
            socket.emit('answerCall', {signal: data, to: call.from})
        });

        peer.on('stream', (currentStream)=> {
            userVideo.current.srcObject = currentStream;
        });
    }

    const callUser = () => {

    }

    const leaveCall = () => {


    }
}