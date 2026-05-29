import { CheckCircle2 } from 'lucide-react'

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '../components/ui/alert-dialog'

interface Props {
    open: boolean
    onOpenChange: (
        open: boolean
    ) => void
    order: {
        order_id: string
        status: string
        tracking_number: string
    } | null
}

export default function OrderSuccessDialog({
    open,
    onOpenChange,
    order,
}: Props) {
    return (
        <AlertDialog
            open={open}
            onOpenChange={onOpenChange}
        >
            <AlertDialogContent
                className="
    fixed
    left-[50%]
    top-[50%]
    z-[9999]
    w-[92vw]
    max-w-md
    translate-x-[-50%]
    translate-y-[-50%]
    rounded-3xl
    p-0
    overflow-hidden
    text-center
    shadow-2xl
  "
            >
                <AlertDialogHeader className="items-center px-6 pt-8 pb-5">
                    <div
                        className="
              mb-5
              flex
              h-20
              w-20
              items-center
              justify-center
              rounded-full
              bg-green-100
            "
                    >
                        <CheckCircle2
                            className="
                h-12
                w-12
                text-green-600
              "
                        />
                    </div>

                    <p
                        className="
              text-xs
              uppercase
              tracking-[0.2em]
              text-green-600
              font-semibold
            "
                    >
                        Success
                    </p>

                    <AlertDialogTitle
                        className="
              mt-2
              text-2xl
              font-black
            "
                    >
                        Order Accepted
                    </AlertDialogTitle>

                    <p
                        className="
              mt-2
              text-sm
              text-muted-foreground
            "
                    >
                        Your order has been
                        successfully placed.
                    </p>
                </AlertDialogHeader>

                <div
                    className="
            mx-6
            mb-6
            rounded-2xl
            border
            bg-muted/40
            p-4
            text-left
            space-y-4
          "
                >
                    <div className="flex justify-between">
                        <span className="text-muted-foreground">
                            Order ID
                        </span>

                        <span className="font-medium break-all">
                            {order?.order_id}
                        </span>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-muted-foreground">
                            Status
                        </span>

                        <span
                            className="
                font-semibold
                capitalize
                text-green-600
              "
                        >
                            {order?.status}
                        </span>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-muted-foreground">
                            Tracking
                        </span>

                        <span className="font-medium">
                            {order?.tracking_number}
                        </span>
                    </div>
                </div>

                <AlertDialogFooter className="px-6 pb-6 pt-0">
                    <AlertDialogAction
                        className="
              w-full
              rounded-2xl
              h-12
              font-semibold
            "
                        onClick={() =>
                            onOpenChange(false)
                        }
                    >
                        Close
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}