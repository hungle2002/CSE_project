import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { puplicRoutes } from "./routes";
import DefaultLayout from "./Layouts";
import { socket, SocketContext } from "./context/socket";
import { useEffect } from "react";
import pushNotify from "./utils/notify";
import Login from "./pages/Login";
import Error from "./pages/Error";

function App() {
  // handle socket io connections
  useEffect(() => {
    function onConnect() {
      console.log("Connect to socket successfully!");
    }

    function onDisconnect() {
      console.log("Disconnect to socket successfully!");
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    
    // listen for new notifications
    socket.on("notification", (content) => {
      pushNotify(content)
    });

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      // socket.off("update_something", onFooEvent);
    };
  }, []);

  const getUsername = () => {
    const username = document.cookie.substring(document.cookie.indexOf("=") + 1)
    console.log("username", username)
    if (username.length) return username;
    return ""
  }
  
  const user = {
    username: getUsername()
  }

  return (
    <SocketContext.Provider value={socket}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={user.username.length ? <Navigate to="/home" /> : <Login />} />
            {puplicRoutes.map((route, index) => {
              const Page = route.component;
              let Layout = DefaultLayout;

              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    user.username.length ? <Layout title={route.title}>
                      <Page />
                    </Layout> : <Navigate to="/" />
                  }
                />
              );
            })}
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </Router>
    </SocketContext.Provider>
  );
}

export default App;
