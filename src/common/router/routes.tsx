import { createBrowserRouter } from 'react-router-dom'
import { Index } from '@/pages/index'
import { Error404 } from '@/pages/error-404'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
    errorElement: <Error404 />,
  },
])
