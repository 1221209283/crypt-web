import './styles/globals.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

<<<<<<< HEAD
createRoot(document.getElementById('root') as HTMLElement).render(
=======
// Import the generated route tree
import { routeTree } from './routeTree.gen.ts'

// Create a new router instance
const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

createRoot(document.getElementById("root") as HTMLElement).render(
>>>>>>> 2d3f878 (EOL)
  <StrictMode>
    <App/>
  </StrictMode>,
<<<<<<< HEAD
)
=======
);

/* // ten-stack verison
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = createRoot(rootElement)
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  )
}
*/
>>>>>>> 2d3f878 (EOL)
