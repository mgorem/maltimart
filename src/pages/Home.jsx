import React, { useState, useEffect } from "react"
import { Container, Row, Col } from "reactstrap"
import { Helmet } from "../components/index"
import heroImg from "../assets/images/hero-img.png"
import "../styles/home.css"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ProductsList, Services, Clock } from "../home-components/index"
import products from "../assets/data/products"
import counterImg from "../assets/images/counter-timer-img.png"


const Home = () => {

  const [trendingProducts, setTrendingProducts] = useState([])
  const [bestSalesProducts, setBestSalesProducts] = useState([])
  const currentYear = new Date().getFullYear()

  useEffect(() => {
    const filteredTrendingProducts = products.filter((item) => item.category === "chair")

    const filteredBestSalesProducts = products.filter((item) => item.category === "sofa")

    setTrendingProducts(filteredTrendingProducts)
    setBestSalesProducts(filteredBestSalesProducts)
  },[])

  return (
    <div>
      <Helmet title={'Home'}>

        {/* hero */}
        <section className="hero__section">
          <Container>
            <Row>
              <Col lg='6' md='6'>
                <div className="hero__content">
                  <p className="hero__subtitle">
                    Trending Product in {currentYear}
                  </p>
                  <h2>Make Your Interior More Minimalistic & Modern</h2>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing 
                     elit. Architecto nemo culpa non a ratione veritatis 
                     delectus accusantium quisquam adipisci veniam est sunt, 
                     corrupti eveniet recusandae laudantium assumenda 
                     aperiam eaque sed!
                  </p>
                  <motion.button whileTap={{scale: 1.2}} className="buy__btn"><Link to="/shop">SHOP NOW</Link></motion.button>
                </div>
              </Col>

              <Col lg='6' md='6'>
                <div className="hero__img">
                  <img src={heroImg} alt="hero-chair" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* services */}
        <Services />

        {/* trending products */}
        <section className="trending__products">
          <Container>
            <Row>
              <Col lg='12' className="text-center">
                <h2 className="section__title">Trending Products</h2>
              </Col>
              <ProductsList data={trendingProducts} />
            </Row>
          </Container>
        </section>

        {/* best sales */}
        <section className="best__sales">
          <Container>
            <Row>
                <Col lg='12' className="text-center">
                  <h2 className="section__title">Best Sales</h2>
                </Col>
                <ProductsList data={bestSalesProducts} />
              </Row>
          </Container>
        </section>

        {/* timer count */}
        <section className="timer__count">
          <Container>
            <Row>
              <Col lg='6' md='6'>
                <div className="clock__top-content">
                  <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
                  <h3 className="text-white fs-5 mb-3">Quality Armchair</h3>
                </div>
                <Clock />

                <motion.button whileTap={{scale: 1.2}} className="buy__btn store__btn"><Link to="/shop">Visit Store</Link></motion.button>
              </Col>

              <Col lg='6' md='6' className="text-end">
                <img src={counterImg} alt="counter" />
              </Col>
            </Row>
          </Container>
        </section>

      </Helmet>
    </div>
  )
}

export default Home
