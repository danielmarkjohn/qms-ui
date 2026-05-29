import api from './axios'

export interface Product {
  _id: string
  product_id: string
  name: string
  category: string
  price: number
  stock: number
  vendor: string
}

export interface CatalogResponse {
  status: string
  count: number
  data: Product[]
}

export const getCatalog = async (
  page: number,
  size: number
): Promise<CatalogResponse> => {
  const res = await api.get(
    `/catalog/?page=${page}&size=${size}`
  )

  return res.data
}