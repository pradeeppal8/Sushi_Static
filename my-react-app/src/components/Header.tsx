// import Logo from './Logo'

import { useState, useEffect, useRef } from 'react'
import { FaSun, FaMoon, FaDesktop, FaMobileAlt } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'
import './search.css'
import logo from '../assets/header-logo.png'

type SearchResult = {
  id: string
  title: string
  type: 'blog' | 'page' | 'product'
  url: string
}

type Props = {
  isOpen: boolean
  onToggle: () => void
  onNavigate: (page: string) => void
  currentPage: string
}

// Sample search data - replace with your actual data source
const SEARCH_DATA: SearchResult[] = [
  { id: '1', title: 'Getting Started with React', type: 'blog', url: '/blog/react' },
  { id: '2', title: 'About Us', type: 'page', url: '/about' },
  { id: '3', title: 'Contact Support', type: 'page', url: '/contact' },
  { id: '4', title: 'TypeScript Best Practices', type: 'blog', url: '/blog/typescript' },
  { id: '5', title: 'Our Services', type: 'product', url: '/services' },
]

export default function Header({ isOpen, onToggle, onNavigate, currentPage }: Props) {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  // const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)
  const submenuRef = useRef<HTMLDivElement>(null)

  // Handle click outside of search results and submenu
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false)
      }
      if (submenuRef.current && !submenuRef.current.contains(event.target as Node)) {
        // setIsSubmenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Map a search result to our internal page key (title, url, or type)
  const mapToPage = (result: SearchResult): string => {
    const title = result.title.toLowerCase()
    const url = result.url.toLowerCase()
    const type = result.type

    // Title-based matching first (exact or common variants)
    if (title === 'home') return 'home'
    if (title === 'about' || title === 'about us') return 'about'
    if (title === 'contact' || title.includes('contact')) return 'contact'
    if (title === 'services' || title.includes('service')) return 'services'
    if (title === 'products' || title.includes('product')) return 'products'
    if (title === 'blog' || title.includes('blog')) return 'blog'

    // URL/type fallbacks
    if (url.includes('services')) return 'services'
    if (type === 'blog' || url.includes('/blog')) return 'blog'
    if (type === 'product' || url.includes('products')) return 'products'
    if (url.includes('about')) return 'about'
    if (url.includes('contact')) return 'contact'
    if (url === '/' || url.includes('home')) return 'home'
    return 'home'
  }

  // Search function
  const handleSearch = (query: string) => {
    setSearchQuery(query)
    if (query.trim().length === 0) {
      setSearchResults([])
      setIsSearchOpen(false)
      return
    }

    // Filter search results
    const results = SEARCH_DATA.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase())
    )
    setSearchResults(results)
    setIsSearchOpen(true)
  }

  // Handle search result click
  const handleResultClick = (result: SearchResult) => {
    const page = mapToPage(result)
    onNavigate(page)
    setIsSearchOpen(false)
    setSearchQuery('')
  }
  return (
    <header className="site-header">
      <div className="header-left">
        <button
          className="menu-toggle"
          onClick={onToggle}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>

        {/* <div className="brand">
          <span className="brand-title" onClick={() => onNavigate('home')} style={{ cursor: 'pointer' }}>
              <img src={logo} alt=''/>
          </span>
        </div> */}
        <span className="brand-title" onClick={() => onNavigate('home')} style={{ cursor: 'pointer' }}>
          <img src={logo} alt='' style={{ width: 150, filter: "brightness(0) invert(1)", verticalAlign: "bottom", }} />
        </span>

        {/* Search Box */}
        <div className="search-container" ref={searchRef}>
          <div className="search-input-wrapper">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && searchResults.length > 0) {
                  const first = searchResults[0]
                  handleResultClick(first)
                }
              }}
              className="search-input"
            />
            {searchQuery && (
              <button
                className="search-clear"
                onClick={() => {
                  setSearchQuery('')
                  setSearchResults([])
                  setIsSearchOpen(false)
                }}
              >
                ×
              </button>
            )}
          </div>

          {/* Search Results Dropdown */}
          {isSearchOpen && searchResults.length > 0 && (
            <div className="search-results">
              {searchResults.map(result => (
                <button
                  key={result.id}
                  className="search-result-item"
                  onClick={() => handleResultClick(result)}
                >
                  <span className="result-title">{result.title}</span>
                  <span className="result-type">{result.type}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <nav className="header-nav">
        <button
          onClick={() => onNavigate('home')}
          className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
        >
          Home
        </button>
        <button
          onClick={() => onNavigate('about')}
          className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}
        >
          About
        </button>
        <button
          onClick={() => onNavigate('services')}
          className={`nav-link ${currentPage === 'services' ? 'active' : ''}`}
        >
          Services
        </button>
        <div className="nav-item" ref={submenuRef}>
          <button
            onClick={() => onNavigate('products')}
            // onMouseEnter={() => setIsSubmenuOpen(true)}
            // onMouseLeave={() => setIsSubmenuOpen(false)}
            className={`nav-link ${currentPage === 'products' ? 'active' : ''}`}
          >
            Products
          </button>
          {/* {isSubmenuOpen && (
            <div className="submenu">
              <button onClick={() => onNavigate('products')} className="submenu-item">
                All Products
              </button>
              <button onClick={() => onNavigate('products')} className="submenu-item">
                Web Apps
              </button>
              <button onClick={() => onNavigate('products')} className="submenu-item">
                Mobile Apps
              </button>
              <button onClick={() => onNavigate('products')} className="submenu-item">
                APIs
              </button>
            </div>
          )} */}
        </div>
        <button
          onClick={() => onNavigate('blog')}
          className={`nav-link ${currentPage === 'blog' ? 'active' : ''}`}
        >
          Blog
        </button>
        <button
          onClick={() => onNavigate('contact')}
          className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`}
        >
          Contact
        </button>

        {/* Theme Toggle Button */}
        <button
          className="theme-toggle"
          onClick={useTheme().toggleTheme}
          aria-label={`Switch to ${useTheme().theme === 'dark' ? 'light' : 'dark'} theme`}
        >
          {useTheme().theme === 'dark' ? <FaSun /> : <FaMoon />}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="mobile-nav" role="dialog" aria-modal="true" aria-label="Mobile menu">
          <div className="mobile-nav-inner">
            <button className="mobile-close" onClick={onToggle} aria-label="Close menu">
              ×
            </button>
            <ul className="mobile-menu-list">
              <li>
                <button
                  onClick={() => {
                    onNavigate('home')
                    onToggle()
                  }}
                  className={currentPage === 'home' ? 'active' : ''}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('about')
                    onToggle()
                  }}
                  className={currentPage === 'about' ? 'active' : ''}
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('blog')
                    onToggle()
                  }}
                  className={currentPage === 'blog' ? 'active' : ''}
                >
                  Blog
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('services')
                    onToggle()
                  }}
                  className={currentPage === 'services' ? 'active' : ''}
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('contact')
                    onToggle()
                  }}
                  className={currentPage === 'contact' ? 'active' : ''}
                >
                  Contact
                </button>
              </li>
            </ul>
            <button
              className="theme-toggle"
              onClick={useTheme().toggleTheme}
              aria-label={`Switch to ${useTheme().theme === 'dark' ? 'light' : 'dark'} theme`}
            >
              {useTheme().theme === 'dark' ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
