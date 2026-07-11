export const site = {
  name: 'American Gage',
  legalName: 'American Gage',
  url: 'https://americangage.com',
  phone: '(657) 216-2600',
  phoneHref: 'tel:+16572162600',
  fax: '657.888.9345',
  email: 'customerservice@americangage.com',
  repairEmail: 'repair@americangage.com',
  address: {
    street: '1131 S Richfield Rd',
    city: 'Placentia',
    state: 'CA',
    zip: '92870',
  },
  hours: 'Mon–Fri 7:30 AM – 4:00 PM PT',
  founded: 1968,
  a2laCertNumber: '4296.01',
  a2laDirectoryUrl:
    'https://customer.a2la.org/index.cfm?event=directory.detail&labPID=976EBE3A-30CD-497B-841E-58FDB18F9AA8',
  a2laScopeUrl:
    'https://customer.a2la.org/index.cfm?event=directory.getDocument&accreditationPID=C0086F01-07B5-4C75-9DE2-3A922A32AB5A&documentPID=7A3C4A27-E250-46EA-82FA-6E4DD5075307',
  portalUrl: 'https://americangage.indysoft.com',
  linkedin: 'https://www.linkedin.com/company/american-gage',
} as const;

export const pickupRoutes = [
  { days: 'Monday & Wednesday', area: 'Orange County' },
  { days: 'Tuesday & Thursday', area: 'Los Angeles County' },
  { days: 'Friday', area: 'Inland Empire' },
] as const;
