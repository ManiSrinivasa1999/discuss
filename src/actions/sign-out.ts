'use server'

import { signOut as authSignOut } from '@/auth'

export async function signOut() {
  return authSignOut()
}
