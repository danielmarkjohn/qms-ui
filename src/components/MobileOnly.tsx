import type { ReactNode } from 'react'

import { isMobileDevice } from '../lib/device'
import UnsupportedDevice from '../pages/UnsupportedDevice'

interface Props {
  children: ReactNode
}

export default function MobileOnly({
  children,
}: Props) {
  if (!isMobileDevice()) {
    return <UnsupportedDevice />
  }

  return <>{children}</>
}