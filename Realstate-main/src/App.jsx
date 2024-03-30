import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from './Pages/Home';
import About from './Pages/About';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Profile from './Pages/Profile'
import Header from "./Components/Header";

export default function App() {
  return (
    
   <BrowserRouter>
   <Header />
   <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/about" element={<About />}></Route>
    <Route path="/sign-in" element={<SignIn />}></Route>
    <Route path="/sign-up" element={<SignUp />}></Route>
    <Route path="/Profile" element={<Profile />}></Route>

   </Routes>
   </BrowserRouter>
  )
}