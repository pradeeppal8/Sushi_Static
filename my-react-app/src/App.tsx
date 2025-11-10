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
              <div className="modal" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                  <h2>Restaurant Menu</h2>
                  <button className="modal-close" aria-label="Close" onClick={() => setShowMenuModal(false)}>×</button>
                </div>
                <div className="modal-body">
                  <div className="menu-grid">
                    <div className="menu-col">
                      <h3>Starters</h3>
                      <ul>
                        <li>Tomato Soup <span>$6</span></li>
                        <li>Garlic Bread <span>$5</span></li>
                        <li>Caesar Salad <span>$7</span></li>
                      </ul>
                    </div>
                    <div className="menu-col">
                      <h3>Mains</h3>
                      <ul>
                        <li>Grilled Chicken <span>$14</span></li>
                        <li>Veggie Pasta <span>$12</span></li>
                        <li>Margherita Pizza <span>$11</span></li>
                      </ul>
                    </div>
                    <div className="menu-col">
                      <h3>Drinks</h3>
                      <ul>
                        <li>Lemonade <span>$4</span></li>
                        <li>Iced Tea <span>$4</span></li>
                        <li>Espresso <span>$3</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button className="btn primary" onClick={() => setShowMenuModal(false)}>Order Now</button>
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
