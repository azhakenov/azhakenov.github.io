import { Helmet } from "react-helmet-async";
import { SITE } from "@/config/site";

interface SeoProps {
  title: string;
  description: string;
  path: string;
}

export function Seo({ title, description, path }: SeoProps) {
  const url = new URL(path.replace(/^\//, ""), SITE.url + "/").toString();
  const fullTitle = `${title} | Abay Zhakenov`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
