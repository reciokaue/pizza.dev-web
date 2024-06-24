import { api } from '@/lib/axios'

interface getOrderParams {
  // status?:
  //   | 'pending'
  //   | 'canceled'
  //   | 'processing'
  //   | 'delivering'
  //   | 'delivered'
  //   | undefined
  // orderId?: string | undefined
  // customerName?: string | undefined
  pageIndex?: number
}

interface getOrdersResponse {
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

export async function getOrders({ pageIndex }: getOrderParams) {
  const response = await api.get('/orders', {
    params: {
      pageIndex,
    },
  })

  return response.data as getOrdersResponse
}
