import { api } from '@/lib/axios'

export interface GetOrderDetailsParams {
  orderId: string
}

export interface GerOrderDetailsResponse {
  status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
  id: string
  createdAt: string
  totalInCents: number
  customer: {
    name: string
    email: string
    phone: string | null
  }
  orderItems: {
    id: string
    priceInCents: number
    quantity: number
    product: {
      name: string
    }
  }[]
}

export async function getOrderDetails({ orderId }: GetOrderDetailsParams) {
  const response = await api.get(`/orders/${orderId}`)

  return response.data as GerOrderDetailsResponse
}
