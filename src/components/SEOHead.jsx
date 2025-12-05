import { useEffect } from 'react';

const SEOHead = ({ 
  title, 
  description, 
  keywords, 
  image = '/img/about/first_pic.jpg',
  url,
  type = 'website'
}) => {
  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title;
    }

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && description) {
      metaDescription.setAttribute('content', description);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords && keywords) {
      metaKeywords.setAttribute('content', keywords);
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && title) {
      ogTitle.setAttribute('content', title);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription && description) {
      ogDescription.setAttribute('content', description);
    }

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage && image) {
      ogImage.setAttribute('content', `https://www.tigworldschools.com${image}`);
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl && url) {
      ogUrl.setAttribute('content', `https://www.tigworldschools.com${url}`);
    }

    const ogType = document.querySelector('meta[property="og:type"]');
    if (ogType && type) {
      ogType.setAttribute('content', type);
    }

    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle && title) {
      twitterTitle.setAttribute('content', title);
    }

    const twitterDescription = document.querySelector('meta[property="twitter:description"]');
    if (twitterDescription && description) {
      twitterDescription.setAttribute('content', description);
    }

    const twitterImage = document.querySelector('meta[property="twitter:image"]');
    if (twitterImage && image) {
      twitterImage.setAttribute('content', `https://www.tigworldschools.com${image}`);
    }

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (url) {
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', `https://www.tigworldschools.com${url}`);
    }

    // Add Organization schema with logo
    let orgSchemaScript = document.querySelector('script[type="application/ld+json"][data-schema="organization"]');
    if (!orgSchemaScript) {
      orgSchemaScript = document.createElement('script');
      orgSchemaScript.setAttribute('type', 'application/ld+json');
      orgSchemaScript.setAttribute('data-schema', 'organization');
      document.head.appendChild(orgSchemaScript);
    }
    orgSchemaScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Techno India Group World School",
      "url": "https://www.tigworldschools.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.tigworldschools.com/img/logo/tigws_logo_search.png",
        "width": 250,
        "height": 60
      }
    });

    // Add WebSite schema
    let websiteSchemaScript = document.querySelector('script[type="application/ld+json"][data-schema="website"]');
    if (!websiteSchemaScript) {
      websiteSchemaScript = document.createElement('script');
      websiteSchemaScript.setAttribute('type', 'application/ld+json');
      websiteSchemaScript.setAttribute('data-schema', 'website');
      document.head.appendChild(websiteSchemaScript);
    }
    websiteSchemaScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Techno India Group World School",
      "url": "https://www.tigworldschools.com",
      "publisher": {
        "@type": "Organization",
        "name": "Techno India Group World School",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.tigworldschools.com/img/logo/tigws_logo_search.png",
          "width": 250,
          "height": 60
        }
      }
    });

    // Add CollectionPage schema for Best Schools listing
    if (title && title.includes('Best Schools')) {
      let collectionSchemaScript = document.querySelector('script[type="application/ld+json"][data-schema="collection"]');
      if (!collectionSchemaScript) {
        collectionSchemaScript = document.createElement('script');
        collectionSchemaScript.setAttribute('type', 'application/ld+json');
        collectionSchemaScript.setAttribute('data-schema', 'collection');
        document.head.appendChild(collectionSchemaScript);
      }
      collectionSchemaScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": title,
        "description": description,
        "url": `https://www.tigworldschools.com${url}`,
        "image": `https://www.tigworldschools.com${image}`,
        "publisher": {
          "@type": "Organization",
          "name": "Techno India Group World School",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.tigworldschools.com/img/logo/tigws_logo_search.png",
            "width": 250,
            "height": 60
          }
        }
      });
    }
  }, [title, description, keywords, image, url, type]);

  return null; // This component doesn't render anything
};

export default SEOHead;
