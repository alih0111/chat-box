import React, { Component } from "react";
import Heading from "./Heading";
import Body from "./Body";
import Footer from "./Footer";

export default class CleanChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Chat",
      chatList: [
        {
          type: "sent",
          message: "Good morning, sir. What can i do for you",
          time: "11:37:08 am",
        },
        {
          type: "recived",
          message: "Well, i am jusset looking around",
          time: "03:37:08 am",
        },
        {
          type: "sent",
          message: "if necessary, please tell me",
          time: "24:37:08 am",
        },
      ],
      gravatar: {
        user1: "https://bootdey.com/img/Content/avatar/avatar2.png",
        user2: "https://bootdey.com/img/Content/avatar/avatar1.png",
      },
    };
  }

  handelSubmit(message) {
    this.setState((state) => {
      return {
        ...state,
        chatList: [
          ...state.chatList,
          { type: "sent", message, time: new Date().toLocaleTimeString() },
        ],
      };
    });
  }

  render() {
    return (
      <div className="container bootstrap snippets bootdeys">
        <div className="col-md-7 col-xs-12 col-md-offset-2">
          <div className="panel" id="chat">
            <Heading title={this.state.title} />
            <Body
              chatList={this.state.chatList}
              gravatar={this.state.gravatar}
            />
            <Footer handelSubmit={(e) => this.handelSubmit(e)} />
          </div>
        </div>
      </div>
    );
  }
}
