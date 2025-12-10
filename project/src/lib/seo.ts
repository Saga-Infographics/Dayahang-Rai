export const SITE = {
  title: 'Dayahang Rai',
  description:
    'Award-winning Nepali actor and theatre practitioner Dayahang Rai — portfolio, biography, films, theatre, and contact for bookings, collaborations, and press enquiries.',
  siteUrl: 'https://dayahangrai.com', // production URL placeholder
  defaultImage: '/og-image.png',
  author: 'Dayahang Rai',
  twitter: '@dayahangrai',
  language: 'en-US',
};

export const structuredDataPerson = (overrides: Record<string, any> = {}) => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: SITE.title,
  url: SITE.siteUrl,
  description: SITE.description,
  jobTitle: 'Actor',
  image: SITE.siteUrl.replace(/\/$/, '') + SITE.defaultImage,
  birthDate: '1980-04-13',
  birthPlace: {
    '@type': 'Place',
    name: 'Khawa, Bhojpur District, Nepal',
  },
  sameAs: [],
  ...overrides,
});
