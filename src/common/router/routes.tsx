import { createBrowserRouter } from 'react-router-dom'
import { HelloWorld } from '../../components/hello-world/hello-world'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HelloWorld />,
    errorElement: <></>,
  },
])
