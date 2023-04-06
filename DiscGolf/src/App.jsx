import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import LoginOrRegister from "./Pages/LoginOrRegister/LoginOrRegister";
import Register  from "./Pages/Register/Register";
import Start from "./Pages/Start/Start";
import CreateScoreBoard  from "./Pages/CreateScoreboard/CreateScoreboard";
import ScoreboardPage from "./Pages/ScoreboardPage/Scoreboard";
import HolePages from "./Pages/HolePages/Hole";
import Profile from "./Pages/Profile/Profile";
import Results from "./Pages/Results/Results";
import NotFound from "./Pages/NotFound/Notfound";
import './App.css'

function App() {

  return (
    <div className="wrapper">
     <Routes>
     <Route path="/" element={<LoginOrRegister />} />
        <Route path="/register" element={<Register />} />
        <Route path="/start" element={<Start />} />
        <Route path="/createscoreBoard" element={<CreateScoreBoard />} />
        <Route path="/ScoreboardPage" element={<ScoreboardPage />} />
        <Route path="/HolePages" element={<HolePages />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Results" element={<Results />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
