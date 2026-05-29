import { RouterProvider } from 'react-router-dom'

import router from './router'
import MobileOnly from './components/MobileOnly'

export default function App() {
  return (
    <MobileOnly>
      <RouterProvider router={router} />
    </MobileOnly>
  )
}