interface SEOMeta {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonicalUrl?: string;
}

export function updateSEO(meta: SEOMeta) {
  // Update title
  document.title = meta.title;

  // Update or create meta tags
  const updateOrCreateMeta = (name: string, content: string, isProperty = false) => {
    const selector = isProperty 
      ? `meta[property="${name}"]` 
      : `meta[name="${name}"]`;
    let element = document.querySelector(selector);
    
    if (!element) {
      element = document.createElement('meta');
      if (isProperty) {
        element.setAttribute('property', name);
      } else {
        element.setAttribute('name', name);
      }
      document.head.appendChild(element);
    }
    element.setAttribute('content', content);
  };

  // Description
  updateOrCreateMeta('description', meta.description);
  
  // Keywords
  if (meta.keywords) {
    updateOrCreateMeta('keywords', meta.keywords);
  }

  // Open Graph
  updateOrCreateMeta('og:title', meta.ogTitle || meta.title, true);
  updateOrCreateMeta('og:description', meta.ogDescription || meta.description, true);
  if (meta.ogImage) {
    updateOrCreateMeta('og:image', meta.ogImage, true);
  }
  if (meta.ogUrl) {
    updateOrCreateMeta('og:url', meta.ogUrl, true);
  }

  // Twitter Card
  updateOrCreateMeta('twitter:title', meta.twitterTitle || meta.title);
  updateOrCreateMeta('twitter:description', meta.twitterDescription || meta.description);
  if (meta.twitterImage) {
    updateOrCreateMeta('twitter:image', meta.twitterImage);
  }

  // Canonical URL
  if (meta.canonicalUrl) {
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', meta.canonicalUrl);
  }
}

export function addStructuredData(data: any) {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}
