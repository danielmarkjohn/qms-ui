import api from './axios'

export interface OrderResponse {
  order_id: string
  status: string
  tracking_number: string
}

export const buyProduct = async (
  product_id: string
) => {
  const res = await api.post(
    '/orders/',
    {
      product_id,
    }
  )

  return res.data as OrderResponse
}