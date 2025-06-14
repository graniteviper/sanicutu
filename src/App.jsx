import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import Models from "./components/model"
// import Model from "./components/model"
import Features from "./components/Features"
import Chip from './components/Chip'



export default function App() {
  return (
    <main className="bg-black">
      <Navbar/>
      <Hero/>
      <Highlights/>
      <Models/>
      <Features/>
      <Chip/>
    </main>
  )
}

