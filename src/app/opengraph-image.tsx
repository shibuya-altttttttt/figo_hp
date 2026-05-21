import { ImageResponse } from 'next/og';
import { siteConfig } from '@/lib/site';

export const runtime = 'edge';
export const alt = '株式会社Figo | 新橋の不動産コンサルティング・相続/資産継承';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#FFFFFF',
          padding: '72px 88px',
          position: 'relative',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              width: '8px',
              height: '40px',
              backgroundColor: '#E8721F',
            }}
          />
          <div
            style={{
              fontSize: '24px',
              letterSpacing: '0.3em',
              color: '#2E2E2E',
              fontWeight: 500,
            }}
          >
            FIGO GROUP
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div
            style={{
              fontSize: '88px',
              fontWeight: 600,
              color: '#1A1A1A',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
            }}
          >
            価値を創り、
            <br />
            価値を守る。
          </div>
          <div
            style={{
              fontSize: '28px',
              color: '#2E2E2E',
              lineHeight: 1.5,
              maxWidth: '900px',
            }}
          >
            新橋・東京の不動産コンサルティング／相続・資産継承
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid #E5E5E5',
            paddingTop: '32px',
          }}
        >
          <div
            style={{
              fontSize: '22px',
              color: '#1A1A1A',
              fontWeight: 500,
            }}
          >
            {siteConfig.name}
          </div>
          <div
            style={{
              fontSize: '20px',
              color: '#737373',
              letterSpacing: '0.05em',
            }}
          >
            {siteConfig.url.replace('https://', '')}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
