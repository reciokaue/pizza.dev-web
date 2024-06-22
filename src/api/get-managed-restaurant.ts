import { api } from '@/lib/axios'

export interface GetManagedRestaurantResponse {
  name: string
  description: string | null
  id: string
  createdAt: Date | null
  updatedAt: Date | null
  managerId: string | null
}

export async function getManagedRestaurant() {
  const response = await api.get('/managed-restaurant')
  return response.data as GetManagedRestaurantResponse
}
