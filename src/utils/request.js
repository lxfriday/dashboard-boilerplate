import { isPending } from '@reduxjs/toolkit'
import axios from 'axios'

const request = axios.create({
  baseURL: '/api/',
})

function toQS(obj) {
  const usp = new URLSearchParams()
  for(const key of Object.keys(obj)) usp.append(key, obj[key])
  return usp.toString()
}

export function get(url, config) {
  
}

export function post(url, config) {}
