import { useState } from 'react'
import './contact.css'
import { FiCheckCircle, FiXCircle, FiX } from 'react-icons/fi'
import img1 from '../../assets/image1.png'

export default function Contact() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    message: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [toast, setToast] = useState<{ show: boolean; type: 'success' | 'error'; message: string }>({ show: false, type: 'success', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const nextErrors: Record<string, string> = {}
    if (!form.firstName.trim()) nextErrors.firstName = 'First name is required'
    if (!form.lastName.trim()) nextErrors.lastName = 'Last name is required'
    if (!form.email.trim()) nextErrors.email = 'Email is required'
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)) nextErrors.email = 'Enter a valid email'
    if (!form.mobile.trim()) nextErrors.mobile = 'Mobile number is required'
    else if (!/^\+?\d[\d\s().-]{7,}$/.test(form.mobile.trim())) nextErrors.mobile = 'Enter a valid phone number'
    if (!form.message.trim()) nextErrors.message = 'Please enter a message'

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) {
      // success path (demo)
      setToast({ show: true, type: 'success', message: 'Thanks! We received your message.' })
      setForm({ firstName: '', lastName: '', email: '', mobile: '', message: '' })
      setTimeout(() => setToast(prev => ({ ...prev, show: false })), 3000)
    } else {
      setToast({ show: true, type: 'error', message: 'Please fix the highlighted fields.' })
      setTimeout(() => setToast(prev => ({ ...prev, show: false })), 3000)
    }
  }

  return (
    <>
      {toast.show && (
        <div className="toast-container" role="status" aria-live="polite">
          <div className={`toast ${toast.type}`} role="alert">
            <span className="toast-icon" aria-hidden>
              {toast.type === 'success' ? <FiCheckCircle /> : <FiXCircle />}
            </span>
            <span className="toast-message">{toast.message}</span>
            <button className="toast-close" aria-label="Dismiss notification" onClick={() => setToast(prev => ({ ...prev, show: false }))}>
              <FiX />
            </button>
          </div>
        </div>
      )}
      <div className="contact-page">
        <section className="contact-hero">
          <div className="container">
            <h1>Contact</h1>
            <p>Any questions or feedback? Just send us a message.</p>
          </div>
        </section>
        <div className="container">
          <section className="contact-layout">
            {/* Left info panel */}
            <aside className="contact-panel">
              <div className="panel-inner">
                <h2>Get in touch</h2>
                <p>Reach out via our contact form or use the details. We’re here to help!</p>
                <div className="hours">
                  <p>Opening hours:</p>
                  <p>Monday to Friday: 9am to 6pm</p>
                  <p>Saturday and Sunday: Closed</p>
                </div>
                <div className="panel-image">
                  <img src={img1} alt="Warehouse support team" />
                </div>
              </div>
            </aside>

            {/* Right form */}
            <div className="contact-form-wrap">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="grid">
                  <div className="field">
                    <label htmlFor="firstName">First name</label>
                    <input id="firstName" name="firstName" value={form.firstName} onChange={(e) => { setErrors(prev => ({ ...prev, firstName: '' })); handleChange(e) }} placeholder="First name" className={errors.firstName ? 'error' : ''} />
                    {errors.firstName && <small className="error-text">{errors.firstName}</small>}
                  </div>
                  <div className="field">
                    <label htmlFor="lastName">Last name</label>
                    <input id="lastName" name="lastName" value={form.lastName} onChange={(e) => { setErrors(prev => ({ ...prev, lastName: '' })); handleChange(e) }} placeholder="Last name" className={errors.lastName ? 'error' : ''} />
                    {errors.lastName && <small className="error-text">{errors.lastName}</small>}
                  </div>
                  <div className="field">
                    <label htmlFor="email">Email address</label>
                    <input id="email" name="email" type="email" value={form.email} onChange={(e) => { setErrors(prev => ({ ...prev, email: '' })); handleChange(e) }} placeholder="you@example.com" className={errors.email ? 'error' : ''} />
                    {errors.email && <small className="error-text">{errors.email}</small>}
                  </div>
                  <div className="field">
                    <label htmlFor="mobile">Mobile number</label>
                    <input id="mobile" name="mobile" value={form.mobile} onChange={(e) => { setErrors(prev => ({ ...prev, mobile: '' })); handleChange(e) }} placeholder="(+1) 555-000-0000" className={errors.mobile ? 'error' : ''} />
                    {errors.mobile && <small className="error-text">{errors.mobile}</small>}
                  </div>
                  <div className="field field-full">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows={5} value={form.message} onChange={(e) => { setErrors(prev => ({ ...prev, message: '' })); handleChange(e) }} placeholder="Write your message" className={errors.message ? 'error' : ''} />
                    {errors.message && <small className="error-text">{errors.message}</small>}
                  </div>
                </div>
                <button className="btn submit" type="submit">Submit</button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}