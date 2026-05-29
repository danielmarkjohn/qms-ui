import type { Product } from '../api/catalog.service'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table'

interface Props {
  data: Product[]
  onRowClick?: (
    product: Product
  ) => void
}

export default function CatalogTable({
  data,
  onRowClick,
}: Props) {
  return (
    <div className="overflow-hidden rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              Product
            </TableHead>

            <TableHead>
              Category
            </TableHead>

            <TableHead>
              Price
            </TableHead>

            <TableHead>
              Stock
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.length ? (
            data.map((item) => (
              <TableRow
                key={item._id}
                className="cursor-pointer"
                onClick={() =>
                  onRowClick?.(item)
                }
              >
                <TableCell className="font-medium">
                  {item.name}
                </TableCell>

                <TableCell>
                  {item.category}
                </TableCell>

                <TableCell>
                  ₹
                  {item.price.toFixed(
                    2
                  )}
                </TableCell>

                <TableCell>
                  {item.stock}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={4}
                className="h-24 text-center"
              >
                No products found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}