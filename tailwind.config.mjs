/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./src/**/*.{ts,tsx}"],
  theme: {
  	extend: {
  		colors: {
  			background: '#0B0B0C',
  			surface: '#111214',
  			panel: '#17181B',
  			elevated: '#1D1F23',
  			textPrimary: '#F6F7FA',
  			textSecondary: '#C9CED6',
  			muted: '#9AA3AF',
  			accent: '#7C5CFF',
  			accentHover: '#6A4BFF',
  			border: 'rgba(255,255,255,0.10)',
  			hairline: 'rgba(255,255,255,0.06)'
  		},
  		boxShadow: {
  			soft: '0 8px 24px rgba(0,0,0,0.25)',
  			hard: '0 12px 48px rgba(0,0,0,0.35)',
  			glow: '0 0 0 8px rgba(124,92,255,0.18)'
  		},
  		borderRadius: {
  			xl: '24px',
  			pill: '999px'
  		},
  		fontFamily: {
  			sans: [
  				'Inter',
  				'ui-sans-serif',
  				'system-ui',
  				'sans-serif'
  			],
  			mono: [
  				'IBM Plex Mono',
  				'ui-monospace',
  				'SFMono-Regular',
  				'monospace'
  			]
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: []
};