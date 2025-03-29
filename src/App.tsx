import { ReactNode, useRef, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import { Button } from "@/components/ui/button.tsx" // shadcn

function App_Header() {
  const [count, setCount] = useState(0);
  const elemental = useRef<ReactNode>(undefined);
  if (count > 9) {
    elemental.current = (<p className="pl-2 self-center">Stop Clicking Me!!</p>)
  }
  return (
    <header className="bg-pink-500 h-[100px] flex place-content-center shadow-lg shadow-pink-500/50">
      <h1 className="text-4xl font-serif self-center text-stone-50 pr-2">Tailwind Css Powered with</h1>
      <Button className="font-bold self-center cursor-pointer animate-bounce direction-normal" variant="ghost" onClick={() => setCount((count) => count + 1)}>Shadcn</Button>
      {elemental.current}
    </header>
  )
}

function App_Footer() {
  return (
    <footer>
      <p>Copyrights</p>
    </footer>
  )
}

function Index() {
  return (
    <p>
    Index Page
    </p>
  )
}

function Home() {
  return (
    <p>
    This is Home
    </p>
  )
}

function App() {

  return (
    <BrowserRouter>
      <App_Header/>
      <a href="/"> Index </a>
      <a href="/home"> Home </a>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <App_Footer/>
    </BrowserRouter>
  )
}

export default App
