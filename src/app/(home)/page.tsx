interface HomePageProps {
  children: React.ReactNode
}

const Home = ({ children }: HomePageProps) => {
  return <div>{children}home page</div>
}
