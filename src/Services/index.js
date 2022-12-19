import { get, post } from '@/utils/request'

export async function getDashboardData() {
  return await get('/api/dashboard')
}
