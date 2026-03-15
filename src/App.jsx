import { BrowserRouter, Routes, Route } from "react-router-dom";
import CharacterSelect from "./pages/CharacterSelect.jsx";
import Chat from "./pages/Chat.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CharacterSelect />} />
                <Route path="/chat/:id" element={<Chat />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;