import { Smartphone } from 'lucide-react'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../components/ui/card'

export default function UnsupportedDevice() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-6">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <div className="mb-4 flex justify-center">
            <Smartphone className="h-12 w-12" />
          </div>

          <CardTitle>
            Mobile Device Required
          </CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-muted-foreground">
            Web and desktop access are not supported.
            Please switch to a mobile device.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}