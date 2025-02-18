import { HydrateClient, trpc } from '@/trpc/server'
import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { ClientGreeting } from '@/app/client-greeting'

const Home = async () => {
  void trpc.hello.prefetch({ text: 'Lucas' })
  // method 2:
  // const data = await trpc.hello({ text: 'Lucas' })
  // console.log('{ data.greeting }')

  return (
    <HydrateClient>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <ClientGreeting />
        </Suspense>
      </ErrorBoundary>
    </HydrateClient>
  )
}

export default Home
