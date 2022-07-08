import React from "react";
import Chat from "./Chat";

export default function Body(props) {
  const chats = props.chatList.map((chat,index) => {
    const isleft = "recived" === chat.type
    return (
      <Chat
        isleft={isleft}
        gravatar={
            isleft ? props.gravatar.user2 : props.gravatar.user1
        }
        message={chat.message}
        time={chat.time}
        key={index}
      />
    );
  });
  return (
    <div className="panel-body">
      <div className="chats">
        {chats}
      </div>
    </div>
  );
}
