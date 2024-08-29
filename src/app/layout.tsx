import {Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({subsets: ["latin"]});

export async function generateMetadata() {
  
  const keywords = ['Jonas Nogueira de Oliveira', 'Jonas Oliveira', 'Dev', 'Desenvolvedor', "Desenvolvedor FullStack"];
  
  return {
    metadataBase: new URL('https://jonasoliveiradev.vercel.app/'),
    title: 'Jonas Oliveira - Desenvolvedor FullStack',
    description: 'Portfólio de Jonas Oliveira, Desenvolvedor FullStack especializado em React, TypeScript, Node.js, Next, e mais.',
    generator: 'Jonas Oliveira - Desenvolvedor FullStack',
    applicationName: 'Jonas Oliveira - Desenvolvedor FullStack',
    referrer: 'origin-when-cross-origin',
    keywords: keywords,
    authors: [
      {
        name: 'Jonas Oliveira',
        url: 'https://jonasoliveiradev.vercel.app/'
      }
    ],
    creator: 'Jonas Oliveira',
    publisher: 'Jonas Oliveira',
    openGraph: {
      title: 'Jonas Oliveira',
      description: 'Portfólio de Jonas Oliveira, Desenvolvedor FullStack especializado em React, TypeScript, Node.js, Next, e mais.',
      url: 'https://jonasoliveiradev.vercel.app/',
      siteName: 'Jonas Oliveira - Desenvolvedor FullStack',
      images: [
        {
          url: '/preview.png',
          width: 800,
          height: 600,
          alt: 'Jonas Oliveira - Desenvolvedor FullStack'
        },
        {
          url: '/preview.png',
          width: 1800,
          height: 1600,
          alt: 'Jonas Oliveira - Desenvolvedor FullStack'
        }
      ],
      locale: 'pr_BR',
      type: 'website'
    },
    icons: {
      icon: 'favicon.ico',
      shortcut: 'favicon.ico',
      apple: "favicon.ico",
      other: {
        rel: "/images/logos/" + process.env.SEO_LOGO || 'apple-touch-icon-precomposed',
        url: "favicon.ico"
      }
    }
  };
}

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
    <head>
      <meta charSet="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <title> Jonas Oliveira - Desenvolvedor FullStack </title>
    </head>
    <body className={inter.className}>{children}</body>
    </html>
  );
}
