import LobbyScreen from "./screens/Lobby";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import RoomPage from "./screens/Room";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LobbyScreen />}></Route>
      <Route path="/room/:roomID" element={<RoomPage/>}></Route>
    </Routes>
  );
}

export default App;
