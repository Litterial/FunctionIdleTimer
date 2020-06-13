import React, { useState,useRef} from 'react';
import Modal from 'react-modal'
import IdleTimer from "react-idle-timer";

function FunctionIdleTimer()
{  
    const[modal,setModal] = useState(false);
    const[seconds,setSeconds] = useState(0)
    const[minutes,setMinutes] = useState(2);
    const digits = (seconds<10)? `0${seconds}` : seconds;
    
    let {idleTimer,modalTimer} = useRef(null);
    
    
    let countDown = () => setInterval(changeClock,1000);    
    const toggleModal = () => setModal(prevState=>{return(prevState)? false:true;});
    const idleUser =() => {
      setModal(true);
      modalTimer.current = setTimeout( stopCountdown,2*60*1000)
    }
    const stopCountdown = () =>    {   
          countDown = () => clearInterval(changeClock);
          setModal(false);
      }
      
    const changeClock = ()  => { 
        if(!modal){
            setInterval(changeClock);
            return;
        }
        
       let remainder= ""
       let modulo =""
       setSeconds(prevState => {
           remainder = (prevState - 1) % 60;
           return modulo = (remainder >= 0)? remainder : remainder + 60;
        });
        setMinutes( prevState =>
        {
           return (modulo === 59)? prevState -1 : prevState;
  
        });
   }
  
    return (
      <div className="App">
        <IdleTimer ref={ref => {idleTimer = ref}} onIdle={idleUser} timeout={3*60*1000} >
          <Modal isOpen={modal} onAfterOpen={countDown}>
            <div>
            <h1>Modal is open</h1>
            <h1>{minutes}:{digits}</h1>
            <button onClick={stopCountdown}>Close Modal</button>
          </div>
          </Modal>
          <button onClick={toggleModal}>Open Modal</button>
        </IdleTimer>
      </div>
    );
    
    
}

export default FunctionIdleTimer