import ReactDOM from 'react-dom/client'
import '@/styles/global.css'
import { RouterProvider } from 'react-router'
import { router } from '@/common/router/routes.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <main>
    <RouterProvider router={router} />
  </main>
)
