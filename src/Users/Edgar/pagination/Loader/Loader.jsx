import ContentLoader from 'react-content-loader'

const Loader = props => {
  return (
    <ContentLoader
      speed={2}
      width={1200}
      height={460}
      viewBox="0 0 1200 460"
      backgroundColor="#9a9393"
      foregroundColor="#787878"
      {...props}
    >
      <rect x="-0" y="1" rx="2" ry="2" width="1200" height="52" />
      <rect x="0" y="73" rx="2" ry="2" width="1200" height="52" />
      <rect x="0" y="145" rx="2" ry="2" width="1200" height="52" />
    </ContentLoader>
  )
}


export default Loader