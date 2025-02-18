'use client'
import { trpc } from '@/trpc/client'

export function ClientGreeting() {
  const [data] = trpc.hello.useSuspenseQuery({ text: 'Lucas' })
  return <div>{data.greeting}</div>
}
