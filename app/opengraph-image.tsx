import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'RapidlyOwn - Experience-first product design';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: '#08080c',
          color: 'white',
        }}
      >
        <div
          style={{
            fontSize: 28,
            color: '#a78bfa',
            marginBottom: 28,
          }}
        >
          RAPIDLYOWN
        </div>

        <div
          style={{
            fontSize: 72,
            lineHeight: 1.05,
            fontWeight: 700,
            maxWidth: 950,
            letterSpacing: -3,
          }}
        >
          We design the experience before we design the interface.
        </div>

        <div
          style={{
            fontSize: 25,
            color: '#a1a1aa',
            marginTop: 35,
          }}
        >
          UX Research - Product Design - Digital Products
        </div>
      </div>
    ),
    size
  );
}
