import { useEffect, useState } from 'react'

import {
    getCatalog,
    type Product,
} from '../api/catalog.service'

import CatalogTable from '../components/catalog-table'

import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { ConfirmDialog } from '../components/ConfirmDialog'

export default function Dashboard() {
    const [data, setData] =
        useState<Product[]>([])

    const [page, setPage] =
        useState(1)

    const [count, setCount] =
        useState(0)

    const [loading, setLoading] =
        useState(false)

    const [search, setSearch] =
        useState('')

    const [showDialog, setShowDialog] =
        useState(false)

    const [product, setProduct] =
        useState<Product | null>(null)

    const size = 10

    const fetchCatalog =
        async () => {
            try {
                setLoading(true)

                const res =
                    await getCatalog(
                        page,
                        size
                    )

                setData(res.data)
                setCount(res.count)
            } finally {
                setLoading(false)
            }
        }

    useEffect(() => {
        fetchCatalog()
    }, [page])

    const totalPages =
        Math.ceil(count / size)

    const filtered =
        data.filter((item) =>
            item.name
                .toLowerCase()
                .includes(
                    search.toLowerCase()
                )
        )

    const onRowClick = (product: Product) => {
        console.log(product)
        setProduct(product)
        setShowDialog(true)
    }

    return (
        <div className="space-y-4 p-4">
            <div>
                <h1 className="text-2xl font-bold">
                    QMS
                </h1>
            </div>

            <Input
                placeholder="Search products"
                value={search}
                onChange={(e) =>
                    setSearch(e.target.value)
                }
            />

            {loading ? (
                <div>Loading...</div>
            ) : (
                <CatalogTable
                    data={filtered}
                    onRowClick={onRowClick}
                />
            )}
            {showDialog && (<ConfirmDialog
                open={showDialog}
                onOpenChange={setShowDialog}
                product={product}
            />)}

            <div className="flex items-center justify-between">
                <Button
                    variant="outline"
                    disabled={page === 1}
                    onClick={() =>
                        setPage(
                            (p) => p - 1
                        )
                    }
                >
                    Previous
                </Button>

                <span className="text-sm">
                    Page {page} /{' '}
                    {totalPages}
                </span>

                <Button
                    variant="outline"
                    disabled={
                        page >= totalPages
                    }
                    onClick={() =>
                        setPage(
                            (p) => p + 1
                        )
                    }
                >
                    Next
                </Button>
            </div>


        </div>
    )
}