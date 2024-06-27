import { api } from '@/lib/axios'

export interface GetDailyRevenueInPeriodQuery {
  from?: Date
  to?: Date
}
export type GetDailyRevenueInPeriodResponse = {
  date: number
  receipt: number
}[]

export async function getDailyRevenueInPeriod({
  from,
  to,
}: GetDailyRevenueInPeriodQuery) {
  const response = await api.get('/metrics/daily-receipt-in-period', {
    params: { from, to },
  })
  return response.data as GetDailyRevenueInPeriodResponse
}
