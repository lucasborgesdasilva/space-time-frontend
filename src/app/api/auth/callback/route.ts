import { api } from '@/lib/api'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url) // Pegamos todos os parâmetro que tem dentro da URL de retorno.
  const code = searchParams.get('code') // Pegamos apenas o parâmetro code.

  const registerResponse = await api.post('/register', {
    code,
  })

  const { token } = registerResponse.data

  const redirectUrl = new URL('/', request.url)

  const cookieExpiresInSeconds = 60 * 60 * 24 * 30

  return NextResponse.redirect(redirectUrl, {
    headers: {
      'Set-Cookie': `token=${token}; Path=/; max-age=${cookieExpiresInSeconds}`, // O Path=/, significa que o cookie vai ficar disponível para toda a aplicação.
    },
  })
}
