import { useContext } from "react";
import { SocketContext } from "../../context/socket";
function Setting() {
  const socket = useContext(SocketContext)

  function onFooEvent(value) {
  }
  socket.on("update_something", onFooEvent);
  return ( <h2>Setting Page !</h2> );
}

export default Setting;

