import { BrowserRouter,Route,Routes } from "react-router";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home"
import MicroDramaDetails from "./pages/drama-details";
const App = () => {
  return (
<BrowserRouter>
 <div className="min-h-screen bg-cream text-ink">
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/micro-drama/:slug" element={<MicroDramaDetails />}/>
      </Routes>
      <Footer />
    </div>
</BrowserRouter>
   
  )
}

export default App;