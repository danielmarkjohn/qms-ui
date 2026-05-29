import { useState } from 'react'
import { toast } from 'sonner'

import type { Product } from '../api/catalog.service'
import { buyProduct } from '../api/order.service'

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
} from '../components/ui/alert-dialog'
import OrderSuccessDialog from './OrderSuccessDialog'

interface Props {
    open: boolean
    onOpenChange: (
        open: boolean
    ) => void
    product: Product | null
}

export function ConfirmDialog({
    open,
    onOpenChange,
    product,
}: Props) {
    const [loading, setLoading] =
        useState(false)
    const [successOpen, setSuccessOpen] =
        useState(false)

    const [order, setOrder] =
        useState<any>(null)


    const onBuy = async () => {
        if (!product) return

        try {
            setLoading(true)

            const res =
                await buyProduct(
                    product.product_id
                )

            setOrder(res)

            toast.success(
                'Order placed successfully'
            )

            onOpenChange(false)
            setSuccessOpen(true)

            toast.success(
                'Order placed successfully'
            )

            onOpenChange(false)
        } catch {
            toast.error(
                'Purchase failed'
            )
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <AlertDialog
                open={open}
                onOpenChange={onOpenChange}
            >
                <AlertDialogContent
                    className="
          max-w-[92vw]
          rounded-2xl
          border
          bg-background
          p-0
          shadow-xl
        "
                >
                    <AlertDialogHeader className="space-y-4 p-5 pb-3">

                        <AlertDialogDescription className="space-y-4 text-left">
                            <div>
                                <p className=" mt-10 mb-1 text-xs uppercase tracking-wide text-muted-foreground">
                                    Vendor
                                </p>

                                <div className="text-md text-foreground font-medium">
                                    {product?.vendor}
                                </div>
                            </div>
                            <div>
                                <p className="mb-1 text-xs uppercase tracking-wide text-muted-foreground">
                                    Product
                                </p>

                                <p className="font-medium text-foreground">
                                    {product?.name}
                                </p>
                            </div>

                            <div className="rounded-xl border bg-muted/40 p-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-muted-foreground">
                                        Price
                                    </span>

                                    <span className="text-base font-semibold">
                                        ₹
                                        {product?.price?.toFixed(
                                            2
                                        )}
                                    </span>
                                </div>
                            </div>

                            <p className="text-sm text-muted-foreground">
                                Confirm purchase of this
                                product?
                            </p>
                        </AlertDialogDescription>
                    </AlertDialogHeader>

                    <div className="text-sm align-middle center p-auto m-auto text-muted-foreground p-8 border-none background-transparent">
                        <AlertDialogCancel
                            className="rounded-xl px-4 py-2"
                        >
                            Cancel
                        </AlertDialogCancel>

                        <AlertDialogAction
                            onClick={onBuy}
                            disabled={loading}
                            className="rounded-xl ml-5 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 disabled:pointer-events-none disabled:opacity-50"
                        >
                            {loading
                                ? 'Buying...'
                                : 'Buy Now'}
                        </AlertDialogAction>
                    </div>
                </AlertDialogContent>
            </AlertDialog>
            <OrderSuccessDialog
                open={successOpen}
                onOpenChange={setSuccessOpen}
                order={order}
            />
        </>
    )
}