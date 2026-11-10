import type { Metadata } from "next";
import { portfolio } from "@/data/portfolio";

const { site } = portfolio;
const person = portfolio.profile.portrait.captionName;

export function pageMeta({
  title,
  description,
  path,
  image,
}: {
  title?: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const img = image ?? site.ogImage;
  const fullTitle = title ? `${title} · ${person}` : site.title;
  return {
    title: title ?? { absolute: site.title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      siteName: person,
      url: path,
      title: fullTitle,
      description,
      images: [{ url: img, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [img],
    },
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Karin Elizabeth Ramos",
    alternateName: person,
    url: site.url,
    image: `${site.url}${portfolio.profile.portrait.image ?? ""}`,
    jobTitle: "Desenvolvedora full-stack",
    email: `mailto:${portfolio.contact.email}`,
    knowsAbout: portfolio.skills.groups.flatMap((g) => g.items),
    sameAs: portfolio.contact.socials.filter((s) => s.platform !== "site").map((s) => s.href),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: person,
    url: site.url,
    inLanguage: site.lang,
  };
}
