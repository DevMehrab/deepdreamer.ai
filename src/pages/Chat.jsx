import React from "react";
import { Container } from "../utils/Container";
import { Input } from "../components/chat/Input";
import { Messages } from "../components/chat/Messages";
import { ChatProvider } from "../provider/ChatProvider";

export const Chat = () => {
  return (
    <>
      <ChatProvider>
        <Container>
          <div className="">
            <Messages />
            <Input />
          </div>
        </Container>
      </ChatProvider>
    </>
  );
};
