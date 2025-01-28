import axios from 'axios'

import { MICROSERVICES } from './constants'
import { LoginSchemaType } from '@/pages/Login/helpers'

export async function login(data: LoginSchemaType): Promise<string> {
  try {
    const { data: { token } } = await axios.post(`${MICROSERVICES.auth}/login`, data);
    return token;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        throw new Error(error.response.data.message || 'An error occurred');
      }
    }
    throw new Error(`Unexpected error: ${error.message || 'Unknown error'}`);
  }
}
