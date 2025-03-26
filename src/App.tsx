import { useState } from 'react'
import reactLogo from '@/src/assets/react.svg'
import { Button } from "@/components/ui/button.tsx" // shadcn

function App_Header() {
  return (
    <header className="rounded-full bg-pink-500 h-[100px] flex place-content-center shadow-lg shadow-pink-500/50">
      <h1 className="font-serif self-center text-stone-50">Tailwind Css</h1>
    </header>
  )
}

function _App_Footer() {
  return (
    <></>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <App_Header/>
      <Button className="cursor-pointer animate-bounce direction-normal" variant="default">Powered By Shadcn</Button>
      <img src="/vite-deno.svg" alt="Vite with Deno" />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
