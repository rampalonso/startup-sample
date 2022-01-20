import Nav from './Footer'
import Footer from './Nav'

export default function Layout({ children }) {
  return (
    <>
      <Footer />
      <div className="page-content">
        {children}
      </div>
      <Nav />
    </>
  )
}