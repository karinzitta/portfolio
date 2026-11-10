import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import { portfolio } from "@/data/portfolio";
import { Motion } from "@/components/Motion";
import "./globals.css";
import "./zoom.css";
import "./diagram.css";
import "./projects.css";
import "./about.css";
import "./motion.css";

const motionBoot =
  "document.documentElement.classList.add('js');setTimeout(function(){if(!window.__motion)document.documentElement.classList.add('motion-off')},3500)";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-mono",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const { site } = portfolio;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s · ${portfolio.profile.portrait.captionName}` },
  description: site.description,
  applicationName: portfolio.profile.portrait.captionName,
  authors: [{ name: "Karin Elizabeth", url: site.url }],
  creator: "Karin Elizabeth",
  keywords: site.keywords,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: portfolio.profile.portrait.captionName,
    url: "/",
    title: site.title,
    description: site.description,
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: site.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [site.ogImage],
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0610",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={portfolio.site.lang} className={`${mono.variable} ${sans.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionBoot }} />
      </head>
      <body>
        {children}
        <Motion />
      </body>
    </html>
  );
}
