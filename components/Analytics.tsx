import Script from 'next/script';

/**
 * Google Analytics 4.
 * Set NEXT_PUBLIC_GA_ID (e.g. "G-XXXXXXXXXX") in Vercel → Environment Variables.
 * Renders nothing until the ID is present, so it's safe when unset (e.g. previews).
 */
export default function Analytics() {
  const id = process.env.NEXT_PUBLIC_GA_ID;
  if (!id) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${id}');
        `}
      </Script>
    </>
  );
}
