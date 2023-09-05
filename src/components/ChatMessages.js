import react, { useEffect, useState } from "react";
import LiveChat from "./LiveChat";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomNames, generateString } from "../utils/helper";
import { OFF_SET_LIVE_CHAT } from "../utils/constants";

const ChatMessages = ()=>{

const [liveMessage , setLiveMessage] = useState('')

const dispatch = useDispatch();

const chats = useSelector(store=>store.chat.messages);

useEffect(()=>{
  const i =  setInterval(()=>{ 
    // console.log("API Polling")
    dispatch(addMessage({
        name:generateRandomNames(),
        message:`${generateString(OFF_SET_LIVE_CHAT)} 🎯`,
    }))
  } , 500);

  return ()=> clearInterval(i);

} , []);


    return (
        <div>
        <div className="border border-slate-300 ml-2 w-96  h-[460px] overflow-y-scroll scroll flex flex-col-reverse ">
            {
                chats.map((c , i)=>{
                    return(
                        <LiveChat name={c.name} message={c.message}/>
                    )
                })
            }
        </div>
        <div className="bg-green-100 ml-2 border border-blue-300 " 
              onSubmit={(e)=>{e.preventDefault()}}
        >
              <input 
                className=" m-2 w-[308px] px-2 decoration-green-500 "
                value={liveMessage}
                onChange={(e)=>{setLiveMessage(e.target.value)}}
                >
              </input>
              <button 
                className="bg-green-500 px-2 text-white rounded-md"
                onClick={()=>{dispatch(addMessage({
                    name : "Ayush Tiwari",
                    message : liveMessage
                }))
                  setLiveMessage("");
                }}
              >
                Send
              </button>
        </div>
        </div>
    )
}
export default ChatMessages;