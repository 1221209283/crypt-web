import { useState } from 'react'
import { hash_sha256 } from "@/src/common/Hash_Component.tsx";
import { App_Header, App_Footer, Page_Navbar } from "@/src/common/App_Component.tsx";
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  const [Plaintext, setPlaintext] = useState("");
  const [Hashedtext, setHashedtext] = useState("");

  hash_sha256(Plaintext).then(
    (value) =>
      setHashedtext(value)
    ,
    () =>
      setHashedtext("hashing fail") // online split for readable reason
  )

  return (
    <>
      <title>Index Page</title>
      <App_Header/>
      <Page_Navbar/>
      <p>Index Page</p>
      <p>crypto Testing: SHA-256 Hash</p>
      <input onChange={
        (value) => {
          setPlaintext(value.target.value);
        }
      }/>
      <p>{Plaintext} -{'>'} {Hashedtext}</p>
      <App_Footer/>
    </>
  )
}
