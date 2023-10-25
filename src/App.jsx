import Navbar from "./components/Navbar";
import News from "./components/News";

export default function App() {
  return (
    <main className="relative">
        <Navbar/>
        <section className="mt-10">
          <News/>
        </section>
    </main>
  )
}