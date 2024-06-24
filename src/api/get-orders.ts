import { api } from '@/lib/axios'

export interface getOrderParams {
  pageIndex?: number
  orderId?: string | null
  customerName?: string | null
  status?: string | null
}

export interface getOrdersResponse {
  orders: {
    orderId: string
    createdAt: string
    status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
    customerName: string
    total: number
  }[]
  meta: {
    pageIndex: number
    perPage: number
    totalCount: number
  }
}

export async function getOrders(params: getOrderParams) {
  const response = await api.get('/orders', {
    params: {
      ...params,
      status: params.status === 'all' ? null : params.status,
    },
  })

  return response.data as getOrdersResponse
}
