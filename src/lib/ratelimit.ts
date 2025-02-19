import { Ratelimit } from '@upstash/ratelimit'
import { redis } from './redis'

export const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(10, '10 s'),
})

export const rateLimit = async (userId: string) => {
  const result = await ratelimit.limit(userId)
  return result
}
