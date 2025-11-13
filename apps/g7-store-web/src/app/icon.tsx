import { ImageResponse } from 'next/og';

export const size = {
  width: 64,
  height: 64,
};

export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'radial-gradient(circle at 30% 30%, #E40F43, #050608)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 28,
          color: '#F5F7FA',
          letterSpacing: 2,
          fontFamily: 'sans-serif',
        }}
      >
        G7
      </div>
    ),
    size,
  );
}
