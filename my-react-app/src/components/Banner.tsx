import { FaArrowRight } from 'react-icons/fa';

type Props = {
  title?: string
  highlight?: string
  subtitle?: string
  ctaText?: string
  ctaHref?: string
  image?: string
}

export default function Banner({
  title = 'Welcome',
  highlight,
  subtitle,
  ctaText = 'Get Started',
  ctaHref = '#',
  image,
}: Props) {
  return (
    <section className="home-banner">
      <div className="banner-content">
        <div className="banner-text">
          <h1 className="banner-title">
            {title} {highlight && <span className="banner-highlight">{highlight}</span>}
          </h1>
          {subtitle && <p className="banner-subtitle">{subtitle}</p>}
          <a href={ctaHref} className="banner-cta">
            {ctaText} <FaArrowRight />
          </a>
        </div>
        {image && (
          <div className="banner-image">
            <img src={image} alt="Banner" />
          </div>
        )}
      </div>
    </section>
  )
}
