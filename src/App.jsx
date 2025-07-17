import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Image } from "./pages/Image";
import { Chat } from "./pages/Chat";
import { Text } from "./pages/Text";
import { ImageProvider } from "./provider/ImageProvider";
import { Archive } from "./pages/Archive";

function App() {
  return (
    <>
      <div className="fixed bg-sky-400 h-96 w-96 rounded-full blur-[500px] backdrop-blur-3xl scale-200 -z-50 opacity-10">
        {" "}
      </div>
      <div className="fixed bg-rose-400 h-96 w-96 rounded-full blur-[500px] backdrop-blur-3xl scale-200 -z-50 opacity-10 top-full right-0">
        {" "}
      </div>
      <Header />
      <ImageProvider>
        <Routes>
          <Route path="/" element={<Image />} />
          <Route path="/image" element={<Image />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/text" element={<Text />} />
          <Route path="/archive" element={<Archive />} />
        </Routes>
      </ImageProvider>
    </>
  );
}

export default App;
