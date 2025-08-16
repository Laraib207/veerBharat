"use client";
import Navbar from '../components/Navnar'
import Footer from '../components/Footer'
import { useState } from 'react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      <Navbar />
      <section style={{
        minHeight: '70vh',
        background: 'linear-gradient(135deg, #f0f9ff 0%, #e0e7ff 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3rem 0'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          color: '#1e40af',
          marginBottom: '1rem',
          letterSpacing: '2px'
        }}>
          Contact Veer Bharat Grocery
        </h1>
        <p style={{
          fontSize: '1.1rem',
          color: '#444',
          marginBottom: '2rem',
          maxWidth: '500px',
          textAlign: 'center'
        }}>
          Have questions, feedback, or want to connect? Fill out the form below and we’ll get back to you soon!
        </p>
        <form
          onSubmit={handleSubmit}
          style={{
            background: 'white',
            borderRadius: '18px',
            boxShadow: '0 4px 24px rgba(30,64,175,0.10)',
            padding: '2rem',
            minWidth: '320px',
            maxWidth: '400px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.2rem',
            animation: 'fadeIn 1s'
          }}
        >
          <input
            type="text"
            placeholder="Your Name"
            required
            style={{
              padding: '0.8rem',
              borderRadius: '8px',
              border: '1px solid #e0e7ff',
              fontSize: '1rem',
              outline: 'none',
              transition: 'border 0.2s'
            }}
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            style={{
              padding: '0.8rem',
              borderRadius: '8px',
              border: '1px solid #e0e7ff',
              fontSize: '1rem',
              outline: 'none',
              transition: 'border 0.2s'
            }}
          />
          <input
            type="tel"
            placeholder="Contact Number"
            required
            style={{
              padding: '0.8rem',
              borderRadius: '8px',
              border: '1px solid #e0e7ff',
              fontSize: '1rem',
              outline: 'none',
              transition: 'border 0.2s'
            }}
          />
          <textarea
            placeholder="Share your feedback..."
            required
            rows={4}
            style={{
              padding: '0.8rem',
              borderRadius: '8px',
              border: '1px solid #e0e7ff',
              fontSize: '1rem',
              outline: 'none',
              resize: 'vertical'
            }}
          />
          <button
            type="submit"
            style={{
              background: 'linear-gradient(90deg, #1e40af 0%, #7c3aed 100%)',
              color: 'white',
              fontWeight: 'bold',
              padding: '0.9rem',
              borderRadius: '8px',
              border: 'none',
              fontSize: '1.1rem',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(30,64,175,0.08)',
              transition: 'background 0.2s'
            }}
          >
            Send Message 🚀
          </button>
          {submitted && (
            <div style={{
              marginTop: '1rem',
              color: '#16a34a',
              fontWeight: 'bold',
              textAlign: 'center'
            }}>
              Thank you for your feedback!
            </div>
          )}
        </form>
        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(40px);}
            to { opacity: 1; transform: translateY(0);}
          }
          input:focus, textarea:focus {
            border: 1.5px solid #7c3aed;
          }
          button:hover {
            background: linear-gradient(90deg, #7c3aed 0%, #1e40af 100%);
          }
        `}</style>
      </section>
      <Footer />
    </main>
  );
}