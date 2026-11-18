'use client'

import { useEffect } from 'react'

export default function RootError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log unexpected errors
    console.error('Root application error:', error)
  }, [error])

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F7FAFC',
        padding: '24px',
        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
      }}
    >
      <div
        style={{
          maxWidth: '540px',
          width: '100%',
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          padding: '40px 32px',
          textAlign: 'center',
          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01)',
          border: '1px solid #E2E8F0',
        }}
      >
        <div
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            backgroundColor: '#EFF6FF',
            color: '#4241ff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px',
            fontSize: '24px',
            fontWeight: 'bold',
          }}
        >
          !
        </div>
        <h2
          style={{
            fontSize: '24px',
            fontWeight: '700',
            color: '#1A202C',
            marginBottom: '12px',
          }}
        >
          Something went wrong
        </h2>
        <p
          style={{
            fontSize: '15px',
            color: '#718096',
            lineHeight: '1.6',
            marginBottom: '28px',
          }}
        >
          We apologize for the inconvenience. An unexpected error occurred while loading this page.
        </p>
        <div
          style={{
            display: 'flex',
            gap: '12px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <button
            onClick={() => reset()}
            style={{
              padding: '12px 24px',
              backgroundColor: '#4241ff',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              fontSize: '14px',
              cursor: 'pointer',
              transition: 'background-color 0.2s',
            }}
          >
            Try Again
          </button>
          <a
            href="/"
            style={{
              padding: '12px 24px',
              backgroundColor: '#FFFFFF',
              color: '#4A5568',
              border: '1px solid #CBD5E0',
              borderRadius: '8px',
              fontWeight: '600',
              fontSize: '14px',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
            }}
          >
            Go Back Home
          </a>
        </div>
      </div>
    </div>
  )
}
