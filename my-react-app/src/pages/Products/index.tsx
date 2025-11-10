import './products.css';
import bannerImg from '../../assets/banner_img.png';
import img1 from '../../assets/image1.png';
import img2 from '../../assets/image2.png';
import img3 from '../../assets/image3.png';

export default function Products() {
	return (
		<div className="products-page">
			{/* Hero Section */}
			<section className="products-hero">
				<div className="products-hero-media">
					<img src={bannerImg} alt="Industrial plant at night" />
				</div>
				<div className="products-hero-overlay" />
				<div className="products-hero-content">
					<h1>Dust Collection Solutions You Can Trust</h1>
					<p>Engineered, installed, and supported by dedicated experts.</p>
					<div className="products-hero-actions">
						<button className="btn primary">Get Started</button>
						<button className="btn ghost">Learn More</button>
					</div>
				</div>
			</section>

			{/* Icon Feature Row */}
			<section className="features">
				<div className="container">
					<h2>Proven solutions. Pure expertise.</h2>
					<p className="sub">From concept to compliance, we deliver end‑to‑end air quality solutions.</p>
					<div className="feature-grid">
						{[
							{ label: 'Application Engineering' },
							{ label: 'NFPA Compliance' },
							{ label: 'Installation' },
							{ label: 'Maintenance' },
							{ label: 'Replacement Parts' }
						].map((item) => (
							<div key={item.label} className="feature-card">
								<div className="icon" aria-hidden />
								<p>{item.label}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Three Column Info Cards */}
			<section className="info">
				<div className="container">
					<h2>Your Single Source Partner</h2>
					<p className="sub">Design, equipment, and lifecycle services tailored to your industry and regulations.</p>
					<div className="cards">
						<div className="card">
							<img src={img1} alt="Application engineering" />
							<div className="card-body">
								<h3>Application Expertise</h3>
								<p>Purpose-built systems for combustible dust, fumes, and process hazards.</p>
								<a className="link" href="#">Learn more</a>
							</div>
						</div>
						<div className="card">
							<img src={img2} alt="Service team" />
							<div className="card-body">
								<h3>Install & Service</h3>
								<p>Turnkey installation and preventative maintenance programs that keep uptime high.</p>
								<a className="link" href="#">Learn more</a>
							</div>
						</div>
						<div className="card">
							<img src={img3} alt="Parts on a table" />
							<div className="card-body">
								<h3>Parts & Retrofits</h3>
								<p>OEM filters, valves, and smart upgrades for reliability and performance.</p>
								<a className="link" href="#">Learn more</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Featured Industry */}
			<section className="featured">
				<div className="container">
					<div className="feature-wrap">
						<div className="feature-image">
							<img src={img1} alt="Power generation facility" />
						</div>
						<div className="feature-content">
							<h2>Featured Industry</h2>
							<h3>Power Generation</h3>
							<p>Meet stringent emissions with efficient capture and rugged, maintainable systems.
							</p>
							<a className="btn link-btn" href="#">See solutions</a>
						</div>
					</div>
				</div>
			</section>

			{/* Contact CTA */}
			<section className="cta">
				<div className="container">
					<div className="cta-box">
						<div>
							<h2>Contact Us</h2>
							<p>Speak with an air quality specialist about your application.</p>
						</div>
						<button className="btn primary">Request a Quote</button>
					</div>
				</div>
			</section>
		</div>
	);
}