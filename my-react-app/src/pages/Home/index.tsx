// import { FaShoppingCart, FaDesktop, FaShoppingBasket } from 'react-icons/fa';
import './home.css';
import { ThemeLoader } from '../../components/ThemeLoader';
// import Banner from '../../components/Banner';
import { useState, useEffect } from 'react';
import image1 from "../../assets/image1.png"; // ✅ import local image
import image2 from "../../assets/image2.png"; // ✅ import local image
import image3 from "../../assets/image3.png"; // ✅ import local image
import sushiImg from "../../assets/image1.png"; 


export default function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const menuItems = [
        {
            img: image1,
            title: "Salmon Sushi",
            desc: "Fresh salmon with rice and sesame topping.",
        },
        {
            img: image2,
            title: "Tuna Roll",
            desc: "Delicious tuna roll with avocado and nori.",
        },
        {
            img: image3,
            title: "Veggie Maki",
            desc: "Healthy mix of veggies wrapped in rice and seaweed.",
        },
    ];
    

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // 2 seconds timeout

        return () => clearTimeout(timer);
    }, []);
    return (
        <>
            <ThemeLoader isLoading={isLoading} />
            <div className="home-page">
                <section className="hero">
                    <div className="hero-content">
                        <h1 className="hero-title">Welcome to Sushi Delight</h1>
                        <p className="hero-text">
                            Enjoy authentic Japanese cuisine crafted with care and the freshest
                            ingredients. Taste the art of sushi, redefined for every bite.
                        </p>
                        <button className="hero-btn">ORDER NOW</button>
                    </div>
                    {/* <div className="hero-image"></div> */}
                </section>

                {/* Quick access icon links */}
                {/* <div className="icon-links">
                    <a href="#shop" className="icon-link" aria-label="Shop">
                        <FaShoppingCart />
                    </a>
                    <a href="#products" className="icon-link" aria-label="Products">
                        <FaShoppingBasket />
                    </a>
                    <a href="#demo" className="icon-link" aria-label="Live Demo">
                        <FaDesktop />
                    </a>
                </div> */}
                {/* Popular Menu Section */}
                <section className="popular-menu">
                    <div className="decor top-dots"></div>
                    <div className="decor zigzag"></div>
                    <div className="popular-header">
                        <h2>Popular Menu</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                            lacinia odio vitae vestibulum vestibulum.
                        </p>
                    </div>

                    <div className="menu-grid">
                        {menuItems.map((item, index) => (
                            <div className="menu-card" key={index}>
                                <div className="menu-img">
                                    <img src={item.img} alt={item.title} />
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="promo-section">
                    <div className="promo-container">
                        <div className="decor top-dots"></div>
                        <div className="decor zigzag"></div>
                        {/* Left: Image and design shapes */}
                        <div className="promo-left">
                            <div className="circle-bg">
                                <img src={sushiImg} alt="Sushi" className="promo-img" />
                            </div>
                            <div className="shape top-left"></div>
                            <div className="shape bottom-right"></div>
                        </div>

                        {/* Right: Text content */}
                        <div className="promo-right">
                            <h1 className="promo-title">Title Here</h1>
                            <p className="promo-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                                lacinia odio vitae vestibulum vestibulum.
                            </p>
                            <button className="promo-btn">ORDER NOW</button>
                        </div>
                    </div>
                </section>
                <section className="stats-section">
                    <div className="stats-content">
                        <h2>Statistics</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                            lacinia odio vitae vestibulum vestibulum.
                        </p>

                        <div className="stats-boxes">
                            <div className="stat-item">
                                <h3>123</h3>
                                <span>STORE</span>
                            </div>
                            <div className="stat-item">
                                <h3>100</h3>
                                <span>MENU</span>
                            </div>
                            <div className="stat-item">
                                <h3>200</h3>
                                <span>CHEF</span>
                            </div>
                        </div>
                    </div>

                    {/* Decorative elements */}
                    <div className="shape shape-top-left"></div>
                    <div className="shape shape-top-right"></div>
                    <div className="shape shape-bottom-left"></div>
                    <div className="shape shape-bottom-right"></div>
                </section>
            </div>
        </>
    );
}
