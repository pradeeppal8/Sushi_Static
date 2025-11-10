import sushiImage from "../../assets/banner_img.png";
import "./about.css";
import img1 from "../../assets/image1.png";
import img2 from "../../assets/image2.png";
import img3 from "../../assets/image3.png";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

const features = [
  {
    img: img1,
    title: "Feature #1",
    desc: "Sed pede ullamcorper amet ullamcorper primis, nam pretium suspendisse neque, a phasellus sit pulvinar vel integer.",
  },
  {
    img: img2,
    title: "Feature #2",
    desc: "Sed pede ullamcorper amet ullamcorper primis, nam pretium suspendisse neque, a phasellus sit pulvinar vel integer.",
  },
  {
    img: img3,
    title: "Feature #3",
    desc: "Sed pede ullamcorper amet ullamcorper primis, nam pretium suspendisse neque, a phasellus sit pulvinar vel integer.",
  },
];

export default function About() {
  return (
    <>
      <section className="banner">
        <div className="banner-left">
          <p className="banner-subtitle">WELCOME TO OUR WEBSITE</p>
          <h1 className="banner-title">
            Japanese Delights:
            <br />
            Experience the Artistry of Sushi
          </h1>

          <div className="banner-line"></div>

          <p className="banner-desc">
            Handcrafted Perfection: Where Quality and Taste Meet in Every Bite.
          </p>

          <div className="banner-buttons">
            <button className="btn btn-started">Get Started</button>
            <button className="btn btn-info">More Info</button>
          </div>
        </div>

        <div className="banner-right">
          <img src={sushiImage} alt="Sushi" />
        </div>
      </section>
      <section className="feature-section">
        <div className="feature-left">
          <h2>
            Ullamcorper primis,
            <br /> nam pretium suspendisse neque
          </h2>
          <div className="feature-line"></div>
        </div>

        <div className="feature-right">
          {features.map((item, index) => (
            <div className="feature-card" key={index}>
              <img src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <button className="feature-btn">More Info</button>
            </div>
          ))}
        </div>
      </section>
      <section className="get-started-section">
        {/* --- Top CTA Section --- */}
        <div className="get-started-top">
          <div className="get-started-text">
            <h2>Ready? Get started!</h2>
            <p>Ullamcorper primis, nam pretium suspendisse neque</p>
          </div>
          <button className="get-started-btn">
            Get Started <FaArrowRight className="arrow-icon" />
          </button>
        </div>

        {/* --- Bottom Contact Info --- */}
        <div className="get-started-bottom">
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <span>(123) 456-7890</span>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <span>your@email.com</span>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <span>123 Street, San Francisco, USA</span>
          </div>
        </div>
      </section>
    </>
  );
}
