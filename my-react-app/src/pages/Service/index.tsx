import './service.css'
import bannerImg from '../../assets/banner_img.png'

export default function Service() {
	return (
		<div className="service-page">
			{/* Hero */}
			<section className="service-hero">
				<div className="media">
					<img src={bannerImg} alt="Industrial services" />
				</div>
				<div className="overlay" />
				<div className="content container">
					<h1 className="reveal-up">Our Services</h1>
					<p className="reveal-up" style={{animationDelay: '120ms'}}>
						From engineering to maintenance, we deliver end‑to‑end solutions with safety and reliability.
					</p>
					<div className="actions reveal-up" style={{animationDelay: '220ms'}}>
						<button className="btn primary">Get a Quote</button>
						<button className="btn ghost">View Case Studies</button>
					</div>
				</div>
			</section>

			{/* Services grid */}
			<section className="service-grid container">
				<h2 className="section-title">What we do</h2>
				<div className="cards">
					{[
						{ t: 'Application Engineering', d: 'Process assessment, hazard analysis, and code‑compliant design.' },
						{ t: 'System Installation', d: 'Turnkey project execution with certified crews and site safety.' },
						{ t: 'Compliance & Testing', d: 'NFPA and OSHA compliance reviews, testing, and documentation.' },
						{ t: 'Maintenance Programs', d: 'Preventative plans, emergency service, and performance audits.' },
						{ t: 'Controls & Automation', d: 'Smart PLC upgrades, VFD tuning, and remote monitoring.' },
						{ t: 'Parts & Retrofits', d: 'OEM parts, filter programs, and energy‑saving retrofits.' },
					].map((c, i) => (
						<div key={c.t} className="card reveal-up" style={{animationDelay: `${100 + i * 60}ms`}}>
							<div className="icon" aria-hidden />
							<h3>{c.t}</h3>
							<p>{c.d}</p>
							<a className="link" href="#">Learn more</a>
						</div>
					))}
				</div>
			</section>

			{/* Process timeline */}
			<section className="process container">
				<h2 className="section-title">How we deliver</h2>
				<ol className="timeline">
					{[
						{ t: 'Discovery', d: 'Site walkdown, data collection, and goals.' },
						{ t: 'Design', d: 'Engineering, 3D layout, code checks.' },
						{ t: 'Build', d: 'Fabrication, install, commissioning.' },
						{ t: 'Support', d: 'Training, maintenance, remote monitoring.' },
					].map((s, i) => (
						<li key={s.t} className="step reveal-up" style={{animationDelay: `${100 + i * 90}ms`}}>
							<span className="dot" />
							<div className="step-body">
								<h4>{s.t}</h4>
								<p>{s.d}</p>
							</div>
						</li>
					))}
				</ol>
			</section>

			{/* CTA */}
			<section className="service-cta">
				<div className="container box reveal-up">
					<h2>Ready to start your project?</h2>
					<p>Talk with our specialists to design the right solution.</p>
					<button className="btn primary">Contact Sales</button>
				</div>
			</section>
		</div>
	)
}
