import { RouterProvider } from 'react-router-dom'

import router from './router'
import MobileOnly from './components/MobileOnly'
import { Toaster } from './components/ui/sonner'

export default function App() {
  return (
    <MobileOnly>
      <RouterProvider router={router} />
      <Toaster />
    </MobileOnly>
  )
}