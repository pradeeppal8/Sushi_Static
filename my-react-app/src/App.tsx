import { useState, useEffect } from 'react'
import { ThemeProvider, } from './context/ThemeContext'
import { FaArrowUp, FaDesktop, FaMobileAlt } from 'react-icons/fa'
import './App.css'
import './styles/theme.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Products from './pages/Products'
import Service from './pages/Service'
import { ThemeLoader } from './components/ThemeLoader'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState('home')
  const [showMenuModal, setShowMenuModal] = useState(false)
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice =
        window.innerWidth <= 768 ||
        /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
      setIsMobileView(isMobileDevice);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleToggle = (view: "desktop" | "mobile") => {
    setIsMobileView(view === "mobile");
  };

  useEffect(() => {
    const id = setTimeout(() => setShowMenuModal(true), 5000)
    return () => clearTimeout(id)
  }, [])

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />
      case 'contact':
        return <Contact />
      case 'blog':
        return <Blog />
      case 'products':
        return <Products />
      case 'services':
        return <Service />
      default:
        return <Home />
    }
  }

  return (
    <>
      {/* <div className={`app-container ${isMobileView ? "mobile" : "desktop"}`}>
        <div className="view-toggle">
          <FaDesktop
            size={30}
            className={`icon ${!isMobileView ? "active" : ""}`}
            onClick={() => handleToggle("desktop")}
          />
          <FaMobileAlt
            size={28}
            className={`icon ${isMobileView ? "active" : ""}`}
            onClick={() => handleToggle("mobile")}
          />
        </div>
      </div> */}
      <ThemeProvider>
        <div className={`app-root theme-wrapper ${isMobileView ? "mobile" : "desktop"}`}>
          {/* <ThemeLoader />
          <Header
            isOpen={sidebarOpen}
            onToggle={() => setSidebarOpen(!sidebarOpen)}
            onNavigate={setCurrentPage}
            currentPage={currentPage}
          /> */}

          {/* <div className="app-body">
            <main className="app-main" onClick={() => sidebarOpen && setSidebarOpen(false)}>
              {renderPage()}
            </main>
            <Footer />
          </div> */}
          <div className="app-body">
            {isMobileView ? (
              <>
                <div className="mobile-frame">
                <div className="notch"></div>
                  <ThemeLoader />
                  <Header
                    isOpen={sidebarOpen}
                    onToggle={() => setSidebarOpen(!sidebarOpen)}
                    onNavigate={setCurrentPage}
                    currentPage={currentPage}
                  />
                  <main className="app-main" onClick={() => sidebarOpen && setSidebarOpen(false)}>
                    {renderPage()}
                    <Footer />
                  </main>
                </div>
              </>
            ) : (
              <>
                <ThemeLoader />
                <Header
                  isOpen={sidebarOpen}
                  onToggle={() => setSidebarOpen(!sidebarOpen)}
                  onNavigate={setCurrentPage}
                  currentPage={currentPage}
                />
                <main className="app-main" onClick={() => sidebarOpen && setSidebarOpen(false)}>
                  {renderPage()}
                </main>
                <Footer />
              </>
            )}
          </div>
         
          {showMenuModal && (
            <div className="modal-overlay" role="dialog" aria-modal="true" onClick={() => setShowMenuModal(false)}>
              <div className="modal modern-menu-modal" onClick={(e) => e.stopPropagation()}>
                {/* Modal Header with Background Image */}
                <div className="modal-header-premium">
                  <div className="modal-header-content">
                    <h2 className="modal-title">Menu</h2>
                    <p className="modal-subtitle">Special Menu Items</p>
                  </div>
                  <button className="modal-close-premium" aria-label="Close" onClick={() => setShowMenuModal(false)}>
                    <span>×</span>
                  </button>
                </div>

                {/* Modal Body with Sections */}
                <div className="modal-body-premium">
                  <div className="menu-sections-wrapper">
                    {/* Starters Section */}
                    <div className="menu-card">
                      <div className="menu-card-image-wrapper">
                        <img src={new URL('../assets/image1.png', import.meta.url).href} alt="Starters" className="menu-card-image" />
                        <div className="image-overlay"></div>
                      </div>
                      <div className="menu-card-content">
                        <h3 className="menu-card-title">Starters</h3>
                        <ul className="menu-items-list">
                          <li className="menu-item">
                            <div className="item-header">
                              <span className="menu-item-name">Tomato Soup</span>
                              <span className="menu-item-price">$6</span>
                            </div>
                            <p className="item-description">Creamy & Fresh</p>
                          </li>
                          <li className="menu-item">
                            <div className="item-header">
                              <span className="menu-item-name">Garlic Bread</span>
                              <span className="menu-item-price">$5</span>
                            </div>
                            <p className="item-description">Golden & Crispy</p>
                          </li>
                          <li className="menu-item">
                            <div className="item-header">
                              <span className="menu-item-name">Caesar Salad</span>
                              <span className="menu-item-price">$7</span>
                            </div>
                            <p className="item-description">Fresh & Healthy</p>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Mains Section */}
                    <div className="menu-card">
                      <div className="menu-card-image-wrapper">
                        <img src={new URL('../assets/image2.png', import.meta.url).href} alt="Mains" className="menu-card-image" />
                        <div className="image-overlay"></div>
                      </div>
                      <div className="menu-card-content">
                        <h3 className="menu-card-title">Main Courses</h3>
                        <ul className="menu-items-list">
                          <li className="menu-item">
                            <div className="item-header">
                              <span className="menu-item-name">Grilled Chicken</span>
                              <span className="menu-item-price">$14</span>
                            </div>
                            <p className="item-description">Perfectly Cooked</p>
                          </li>
                          <li className="menu-item">
                            <div className="item-header">
                              <span className="menu-item-name">Veggie Pasta</span>
                              <span className="menu-item-price">$12</span>
                            </div>
                            <p className="item-description">Organic & Fresh</p>
                          </li>
                          <li className="menu-item">
                            <div className="item-header">
                              <span className="menu-item-name">Margherita Pizza</span>
                              <span className="menu-item-price">$11</span>
                            </div>
                            <p className="item-description">Authentic Recipe</p>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Drinks & Desserts Section */}
                    <div className="menu-card">
                      <div className="menu-card-image-wrapper">
                        <img src={new URL('../assets/image3.png', import.meta.url).href} alt="Beverages" className="menu-card-image" />
                        <div className="image-overlay"></div>
                      </div>
                      <div className="menu-card-content">
                        <h3 className="menu-card-title">Beverages</h3>
                        <ul className="menu-items-list">
                          <li className="menu-item">
                            <div className="item-header">
                              <span className="menu-item-name">Lemonade</span>
                              <span className="menu-item-price">$4</span>
                            </div>
                            <p className="item-description">Refreshing & Cold</p>
                          </li>
                          <li className="menu-item">
                            <div className="item-header">
                              <span className="menu-item-name">Iced Tea</span>
                              <span className="menu-item-price">$4</span>
                            </div>
                            <p className="item-description">Premium Blend</p>
                          </li>
                          <li className="menu-item">
                            <div className="item-header">
                              <span className="menu-item-name">Espresso</span>
                              <span className="menu-item-price">$3</span>
                            </div>
                            <p className="item-description">Bold & Rich</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="modal-footer-premium">
                  <div className="footer-content">
                    <button className="btn btn-order" onClick={() => setShowMenuModal(false)}>
                      <span className="btn-icon">🛒</span>
                      Order Now
                    </button>
                    <button className="btn btn-cancel" onClick={() => setShowMenuModal(false)}>
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <ScrollToolbar />
      </ThemeProvider>
    </>
  )
}

export default App

function ScrollToolbar() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      console.log("Scrolling... Current Y position:", window.scrollY);
      setShowTop(window.scrollY > 300);
    };

    // Run once on mount to check the initial position
    onScroll();
    console.log("Scroll listener added ✅");

    // Add scroll event
    window.addEventListener('scroll', onScroll, { passive: true });

    // Cleanup on unmount
    return () => {
      window.removeEventListener('scroll', onScroll);
      console.log("Scroll listener removed ❌");
    };
  }, []);

  return (
    <div className="scroll-toolbar" aria-label="Page navigation tools">
      {showTop && (
        <button className="scroll-btn" title="Top" aria-label="Scroll to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <FaArrowUp />
        </button>
      )}
      {/* {showTop && (
        <button className="scroll-btn" title="bottom" aria-label="Scroll to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <FaArrowUp />
        </button>
      )} */}
    </div>
  )
}
