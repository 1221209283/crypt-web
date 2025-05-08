import { ReactNode, useRef, useState } from 'react'
import { Button } from "@/components/ui/button.tsx" // shadcn
import GFL2 from "@/src/assets/GirlsFrontline2-1j4ae0g.jpg"
import { Link } from "@tanstack/react-router";
import { ThumbsUp } from 'lucide-react'

function App_Header() {
  const [count, setCount] = useState(0);
  const elemental = useRef<ReactNode>(<p></p>);
  let platform = navigator?.userAgentData?.platform || navigator?.platform;
  if (count == 10) {
    elemental.current = (<p className="text-2xl self-center"> {platform}</p>)
  } else if (count > 10) {
    elemental.current = <p></p>;
    setCount(0);
  }
  return (
    <header className="bg-pink-500 h-[100px] flex place-content-between shadow-lg shadow-pink-500/50">
      <h1 className="text-4xl font-serif self-center text-stone-50 pr-2"> Test</h1>
      <Button className="font-bold self-center cursor-pointer animate-bounce direction-normal" variant="ghost"
      onClick={
        () => setCount(
          (count) => count + 1
        )}
      >Shadcn</Button>
      {elemental.current}
    </header>
  )
}

function App_Footer() {
  return (
    <footer className="flex place-content-between bg-stone-50">
      <p>Copyrights ???</p>
      <ThumbsUp />
    </footer>
  )
}

function Page_Navbar() {
  return (
    <div>
      <Link to="/"> <Button variant="default"> Index </Button> </Link>
      <Link to="/encrypt" onClick={() => alert("Under Work")}> <Button variant="default"> encrypt </Button> </Link>
      <Link to="/wallframe"> <Button variant="destructive"> Todo </Button> </Link>
    </div>
  )
}

function Todo() {
  return (
    <>
      <p> Todo </p>
      <img src={GFL2}/>
    </>
  )
}

export {
  App_Header,
  App_Footer,
  Page_Navbar,
  Todo
}
