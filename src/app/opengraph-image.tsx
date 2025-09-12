import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: '#0b0d0f',
          color: '#e8ecef',
          padding: '64px',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontFamily: 'Inter, ui-sans-serif, system-ui',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              letterSpacing: -1,
            }}
          >
            <span style={{ color: '#caa45d' }}>Luxe</span>
            Motion
          </div>
          <div style={{ fontSize: 28, marginTop: 12, color: '#cbd5e1' }}>
            Luxury Performance Sportswear
          </div>
        </div>
        <div
          style={{
            width: 240,
            height: 240,
            borderRadius: 24,
            background: 'linear-gradient(135deg, rgba(202,164,93,0.15), rgba(224,193,132,0.08))',
            border: '1px solid rgba(148,163,184,0.3)',
          }}
        />
      </div>
    ),
    {
      ...size,
    },
  );
}
