import { getIronSession } from 'iron-session'
import { cookies } from 'next/headers'
import { sessionOptions, SessionData } from './session-config'

export { sessionOptions }
export type { SessionData }

export async function getSession() {
  return getIronSession<SessionData>(await cookies(), sessionOptions)
}
