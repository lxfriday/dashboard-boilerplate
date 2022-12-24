import { get, post } from '@/utils/request'

export async function getDashboardData() {
  return await get('/api/dashboard')
}
export async function getUserData() {
  return await get('/api/userInfo')
}