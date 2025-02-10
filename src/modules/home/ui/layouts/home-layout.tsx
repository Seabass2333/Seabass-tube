interface HomeLayoutProps {
  children: React.ReactNode
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <div>
      <div className="p-4 bg-blue-500">
        <p>home navbar</p>
      </div>
      {children}
    </div>
  )
}

export default HomeLayout
