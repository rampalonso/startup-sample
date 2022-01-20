import Nav from './Footer'
import Footer from './Nav'

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <div className="page-content">
        {children}
      </div>
      <Footer />
    </>
  )
}