'use server'

import { signIn as authSignIn } from '@/auth'

export async function signIn() {
  return authSignIn('github')
}
