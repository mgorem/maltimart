import Header from "../header/Header"
import Footer from "../footer/Footer"
import { Routers } from "../../routers/index"

const Layout = () => {
  return (
    <>
    <Header />
    <div>
      <Routers />
    </div>
    <Footer />
    </>
  )
}

export default Layout
