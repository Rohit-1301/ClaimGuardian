/* =========================================================
   ClaimGuardian — Navigation Constants
   ========================================================= */

export const PUBLIC_NAV_LINKS = [
  { label: 'Features',    href: '/#features'     },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Resources',   href: '/#resources'    },
] as const;

export const SIDEBAR_NAV_ITEMS = [
  {
    label:       'Dashboard',
    href:        '/dashboard',
    icon:        'grid',
    isComingSoon: false,
  },
  {
    label:       'Claims',
    href:        '/claims',
    icon:        'file-text',
    isComingSoon: true,
  },
  {
    label:       'Upload Claim',
    href:        '/upload',
    icon:        'upload',
    isComingSoon: true,
  },
  {
    label:       'Reports',
    href:        '/reports',
    icon:        'bar-chart',
    isComingSoon: true,
  },
  {
    label:       'Analytics',
    href:        '/analytics',
    icon:        'trending-up',
    isComingSoon: true,
  },
] as const;

export const SIDEBAR_BOTTOM_ITEMS = [
  {
    label: 'Profile',
    href:  '/profile',
    icon:  'user',
  },
  {
    label: 'Settings',
    href:  '/settings',
    icon:  'settings',
  },
] as const;

export const FOOTER_LINKS = {
  product: [
    { label: 'Features',   href: '/#features'    },
    { label: 'Pricing',    href: '/#pricing'      },
    { label: 'Roadmap',    href: '/roadmap'       },
    { label: 'Changelog',  href: '/changelog'     },
  ],
  company: [
    { label: 'About',      href: '/about'         },
    { label: 'Blog',       href: '/blog'          },
    { label: 'Careers',    href: '/careers'       },
    { label: 'Contact',    href: '/contact'       },
  ],
  legal: [
    { label: 'Privacy',    href: '/privacy'       },
    { label: 'Terms',      href: '/terms'         },
    { label: 'HIPAA',      href: '/hipaa'         },
    { label: 'Security',   href: '/security'      },
  ],
} as const;
