import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { puplicRoutes } from "./routes";
import DefaultLayout from "./Layouts";
import { socket, SocketContext } from "./context/socket";
import { useEffect } from "react";
import pushNotify from "./utils/notify";

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
  return (
    <SocketContext.Provider value={socket}>
      <Router>
        <div className="App">
          <Routes>
            {puplicRoutes.map((route, index) => {
              const Page = route.component;
              let Layout = DefaultLayout;

              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout title={route.title}>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
          </Routes>
        </div>
      </Router>
    </SocketContext.Provider>
  );
}

export default App;
