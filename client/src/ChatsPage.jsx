import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from "react-chat-engine-advanced"

const ChatsPage = (props) => {

  const chatProps = useMultiChatLogic("b01ac02e-966f-4c05-bb49-608f10d73b4b",
  props.user.username,
  props.user.secret
  );

    return (
    <div style={{height: "100vh"}}>
      <MultiChatSocket {...chatProps}/>
      <MultiChatWindow {...chatProps} style={{height: "100%"}}/>
    </div>
    )
  };
  export default ChatsPage;