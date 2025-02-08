const FullScreenError = ({ error }: { error: string }) => {
  return (
    <div className='full-screen-error'>
      <h1>Error</h1>
      <p>{error}</p>
    </div>
  )
}

export default FullScreenError
