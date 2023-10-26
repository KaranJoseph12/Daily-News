import { Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="relative bg-yellow-50">
        <Navbar/>
        <section className="mt-10">
          <Routes>
            <Route exact path="/business" element={<News key = "business"  category="business" country="in"/>}></Route>
            <Route exact path="/entertainment" element={<News key = "entertainment" category="entertainment" country="in"/>}></Route>
            <Route exact path="/general" element={<News key = "general" category="general" country="in"/>}></Route>
            <Route exact path="/health" element={<News key = "health" category="health" country="in"/>}></Route>
            <Route exact path="/science" element={<News key = "science" category="science" country="in"/>}></Route>
            <Route exact path="/sports" element={<News key = "sports" category="sports" country="in"/>}></Route>
            <Route exact path="/technology" element={<News key = "technology" category="technology" country="in"/>}></Route>
          </Routes>
        </section>
        <section>
          <Footer/>
        </section>
    </main>
  )
}