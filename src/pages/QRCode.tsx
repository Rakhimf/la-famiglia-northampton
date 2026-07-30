import React, { useState } from 'react';

// ─── CONFIG ───────────────────────────────────────────────────────────────────
// Update this URL when the domain changes
const MENU_URL = 'https://la-famiglia-northampton.vercel.app/menu';

// Google Charts QR API — no npm package needed
function qrSrc(size: number) {
  return `https://chart.googleapis.com/chart?chs=${size}x${size}&cht=qr&chl=${encodeURIComponent(MENU_URL)}&choe=UTF-8&chld=H|2`;
}

// ─── PRINT STYLES ─────────────────────────────────────────────────────────────
const printStyles = `
  @media print {
    @page { margin: 0; size: A4; }
    body {
      background: white !important;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    .no-print { display: none !important; }
    .print-page {
      background: white !important;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .qr-card {
      box-shadow: none !important;
      background: white !important;
      border: 1px solid #C4A55A !important;
    }
    .qr-muted { color: #555 !important; }
    .qr-cream { color: #111 !important; }
    .qr-gold { color: #8B6914 !important; }
  }
`;

// ─── BRANDING BLOCK ───────────────────────────────────────────────────────────
function Branding({ compact = false }: { compact?: boolean }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <p
        className="qr-gold"
        style={{
          fontFamily: '"Cormorant Garamond", Georgia, serif',
          fontSize: compact ? '15px' : '18px',
          letterSpacing: '0.3em',
          color: '#C4A55A',
          textTransform: 'uppercase' as const,
          margin: 0,
          fontWeight: 400,
        }}
      >
        La Famiglia
      </p>
      <p
        className="qr-muted"
        style={{
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: compact ? '10px' : '12px',
          letterSpacing: '0.15em',
          color: '#8A8178',
          marginTop: '4px',
          textTransform: 'uppercase' as const,
        }}
      >
        Northampton
      </p>
      <div
        style={{
          height: '1px',
          width: '60px',
          backgroundColor: '#C4A55A',
          margin: compact ? '12px auto' : '18px auto',
        }}
      />
    </div>
  );
}

// ─── QR IMAGE BLOCK ───────────────────────────────────────────────────────────
function QRBlock({ size = 220 }: { size?: number }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div
        style={{
          backgroundColor: '#ffffff',
          padding: '16px',
          borderRadius: '8px',
          display: 'inline-block',
          lineHeight: 0,
        }}
      >
        <img
          src={qrSrc(size)}
          alt="QR code for La Famiglia menu"
          width={size}
          height={size}
          style={{ display: 'block' }}
        />
      </div>
    </div>
  );
}

// ─── TABLE CARD (portrait, A6-ish) ────────────────────────────────────────────
function TableCard() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '40px 20px' }}>
      <div
        className="qr-card"
        style={{
          backgroundColor: '#141210',
          border: '1px solid #C4A55A',
          borderRadius: '16px',
          padding: '40px 36px 36px',
          maxWidth: '360px',
          width: '100%',
          textAlign: 'center',
          boxShadow: '0 8px 64px rgba(0,0,0,0.6)',
        }}
      >
        <Branding />
        <QRBlock size={240} />
        <div style={{ marginTop: '24px' }}>
          <p
            className="qr-cream"
            style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: '16px',
              fontStyle: 'italic',
              color: '#F0EDE6',
              margin: '0 0 6px',
            }}
          >
            Scan to view our menu
          </p>
          <p
            className="qr-muted"
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '11px',
              color: '#8A8178',
              letterSpacing: '0.05em',
              margin: '0 0 16px',
            }}
          >
            la-famiglia-northampton.vercel.app
          </p>
          <div
            style={{
              height: '1px',
              backgroundColor: 'rgba(196,165,90,0.2)',
              marginBottom: '16px',
            }}
          />
          <p
            className="qr-gold"
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '12px',
              color: '#C4A55A',
              letterSpacing: '0.05em',
              margin: 0,
              fontWeight: 400,
            }}
          >
            Reserve a table:{' '}
            <strong style={{ fontWeight: 600 }}>07916 249066</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── TABLE TENT (landscape, fold in half) ────────────────────────────────────
function TableTent() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '40px 20px' }}>
      <div
        className="qr-card"
        style={{
          backgroundColor: '#141210',
          border: '1px solid #C4A55A',
          borderRadius: '16px',
          padding: '36px 40px',
          maxWidth: '740px',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          boxShadow: '0 8px 64px rgba(0,0,0,0.6)',
        }}
      >
        {/* Left QR */}
        <div style={{ flex: 1, textAlign: 'center' }}>
          <QRBlock size={200} />
          <p
            className="qr-cream"
            style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: '14px',
              fontStyle: 'italic',
              color: '#F0EDE6',
              marginTop: '14px',
              marginBottom: 0,
            }}
          >
            Scan to view our menu
          </p>
        </div>

        {/* Divider */}
        <div
          style={{
            width: '1px',
            alignSelf: 'stretch',
            backgroundColor: 'rgba(196,165,90,0.3)',
            margin: '0 36px',
            flexShrink: 0,
          }}
        />

        {/* Centre branding */}
        <div style={{ textAlign: 'center', flexShrink: 0, minWidth: '160px' }}>
          <Branding compact />
          <p
            className="qr-gold"
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '11px',
              color: '#C4A55A',
              letterSpacing: '0.04em',
              margin: '0 0 4px',
              fontWeight: 400,
            }}
          >
            Reserve a table
          </p>
          <p
            className="qr-gold"
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '14px',
              color: '#C4A55A',
              fontWeight: 600,
              margin: 0,
              letterSpacing: '0.02em',
            }}
          >
            07916 249066
          </p>
          <p
            className="qr-muted"
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '10px',
              color: '#6B625A',
              marginTop: '12px',
              letterSpacing: '0.04em',
            }}
          >
            ↕ fold here
          </p>
        </div>

        {/* Divider */}
        <div
          style={{
            width: '1px',
            alignSelf: 'stretch',
            backgroundColor: 'rgba(196,165,90,0.3)',
            margin: '0 36px',
            flexShrink: 0,
          }}
        />

        {/* Right QR */}
        <div style={{ flex: 1, textAlign: 'center' }}>
          <QRBlock size={200} />
          <p
            className="qr-cream"
            style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: '14px',
              fontStyle: 'italic',
              color: '#F0EDE6',
              marginTop: '14px',
              marginBottom: 0,
            }}
          >
            Scan to view our menu
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

type LayoutMode = 'card' | 'tent';

export default function QRCode() {
  const [layout, setLayout] = useState<LayoutMode>('card');

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: printStyles }} />
      <div
        className="print-page"
        style={{
          minHeight: '100vh',
          backgroundColor: '#0D0C0A',
          display: 'flex',
          flexDirection: 'column',
          fontFamily: 'Inter, system-ui, sans-serif',
        }}
      >
        {/* Screen-only header */}
        <div className="no-print" style={{ textAlign: 'center', padding: '40px 20px 0' }}>
          <p
            style={{
              fontSize: '10px',
              textTransform: 'uppercase' as const,
              letterSpacing: '0.25em',
              color: '#C4A55A',
              marginBottom: '8px',
            }}
          >
            Print Tools
          </p>
          <h1
            style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: 'clamp(24px, 4vw, 36px)',
              fontWeight: 300,
              color: '#F5F0E8',
              textTransform: 'uppercase' as const,
              letterSpacing: '0.2em',
              margin: '0 0 28px',
            }}
          >
            Table QR Code
          </h1>

          {/* Layout toggle */}
          <div
            style={{
              display: 'inline-flex',
              border: '1px solid rgba(196,165,90,0.4)',
              borderRadius: '8px',
              overflow: 'hidden',
              marginBottom: '10px',
            }}
          >
            {(['card', 'tent'] as LayoutMode[]).map((l) => {
              const isActive = layout === l;
              return (
                <button
                  key={l}
                  id={`qr-toggle-${l}`}
                  onClick={() => setLayout(l)}
                  style={{
                    padding: '10px 24px',
                    fontSize: '12px',
                    fontWeight: isActive ? 500 : 400,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase' as const,
                    cursor: 'pointer',
                    border: 'none',
                    backgroundColor: isActive ? '#C4A55A' : 'transparent',
                    color: isActive ? '#0D0C0A' : '#D4C4A8',
                    transition: 'all 0.2s ease',
                    fontFamily: 'Inter, system-ui, sans-serif',
                  }}
                >
                  {l === 'card' ? 'Table Card' : 'Table Tent'}
                </button>
              );
            })}
          </div>

          <p style={{ fontSize: '12px', color: '#6B625A', margin: '0 0 4px' }}>
            {layout === 'card'
              ? 'Portrait card — print, laminate and place on tables'
              : 'Landscape tent — fold in half for a double-sided table tent'}
          </p>
        </div>

        {/* The printable layout */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {layout === 'card' ? <TableCard /> : <TableTent />}
        </div>

        {/* Screen-only print controls */}
        <div className="no-print" style={{ textAlign: 'center', padding: '0 20px 52px' }}>
          <button
            id="qr-print-button"
            onClick={() => window.print()}
            style={{
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '0.14em',
              textTransform: 'uppercase' as const,
              color: '#C4A55A',
              backgroundColor: 'transparent',
              border: '1px solid #C4A55A',
              padding: '13px 40px',
              borderRadius: '2px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              fontFamily: 'Inter, system-ui, sans-serif',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#C4A55A';
              e.currentTarget.style.color = '#0D0C0A';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#C4A55A';
            }}
          >
            Print QR Code
          </button>
          <p style={{ fontSize: '11px', color: '#6B625A', marginTop: '12px' }}>
            Or save as PDF: File → Print → Save as PDF
          </p>
        </div>
      </div>
    </>
  );
}
