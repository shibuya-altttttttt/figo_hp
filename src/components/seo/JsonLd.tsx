import { siteConfig } from '@/lib/site';

export function OrganizationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteConfig.url}/#org`,
    name: siteConfig.name,
    alternateName: [siteConfig.nameEn, 'Figo', '株式会社フィーゴ'],
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/figo-logo.png`,
    description: siteConfig.description,
    telephone: siteConfig.contact.tel,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'JP',
      addressRegion: siteConfig.address.prefecture,
      addressLocality: siteConfig.address.city,
      streetAddress: siteConfig.address.street,
      postalCode: siteConfig.address.postal.replace('〒', ''),
    },
    founder: [
      { '@type': 'Person', name: '金 潤求', jobTitle: '代表取締役' },
      { '@type': 'Person', name: '渋谷 優太', jobTitle: '取締役' },
    ],
    foundingDate: '2025',
    foundingLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: '港区',
        addressRegion: '東京都',
        addressCountry: 'JP',
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebSiteJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: 'ja',
    description: siteConfig.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteConfig.url}/?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${siteConfig.url}${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

type ServiceJsonLdProps = {
  name: string;
  description: string;
  url: string;
  serviceType: string;
};

export function ServiceJsonLd({ name, description, url, serviceType }: ServiceJsonLdProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    serviceType,
    url: url.startsWith('http') ? url : `${siteConfig.url}${url}`,
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: {
      '@type': 'Country',
      name: '日本',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

type FaqJsonLdItem = {
  question: string;
  answer: string;
};

export function FaqPageJsonLd({ items }: { items: FaqJsonLdItem[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

type ArticleJsonLdProps = {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
};

export function ArticleJsonLd({
  headline,
  description,
  url,
  datePublished,
  dateModified,
}: ArticleJsonLdProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    datePublished,
    dateModified: dateModified ?? datePublished,
    url: url.startsWith('http') ? url : `${siteConfig.url}${url}`,
    author: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/images/figo-logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url.startsWith('http') ? url : `${siteConfig.url}${url}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function LocalBusinessJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    alternateName: [siteConfig.nameEn, 'Figo'],
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/figo-logo.png`,
    image: `${siteConfig.url}/images/figo-logo.png`,
    description: siteConfig.description,
    telephone: siteConfig.contact.tel,
    priceRange: '￥￥￥',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'JP',
      addressRegion: siteConfig.address.prefecture,
      addressLocality: siteConfig.address.city,
      streetAddress: siteConfig.address.street,
      postalCode: siteConfig.address.postal.replace('〒', ''),
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 35.6657,
      longitude: 139.7583,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    areaServed: [
      { '@type': 'AdministrativeArea', name: '東京都' },
      { '@type': 'AdministrativeArea', name: '神奈川県' },
      { '@type': 'AdministrativeArea', name: '埼玉県' },
      { '@type': 'AdministrativeArea', name: '千葉県' },
    ],
    knowsAbout: [
      '不動産売買',
      '不動産仲介',
      '不動産コンサルティング',
      '不動産相続',
      '資産継承',
      '相続対策',
      '不動産再生',
      '一棟マンション',
      '一棟ビル',
      '区分マンション',
      '収益不動産',
      '共有名義の解消',
    ],
    makesOffer: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: '不動産コンサルティング事業',
          description:
            '一棟マンション・一棟ビル・区分マンションの購入・売却仲介、相続対策、財産管理、資産継承コンサルティングまで一貫サポート',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: '不動産再生事業',
          description:
            '利用価値が低迷している不動産を取得し、リーシング・リノベーション・運営改善で資産価値を再生',
        },
      },
    ],
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      name: '宅地建物取引業免許',
      identifier: '東京都知事(1)第112936号',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
