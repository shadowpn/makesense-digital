import { useState } from "react";

interface HeroBackgroundProps {
  src: string;
  position?: string;
  className?: string;
}

export function HeroBackground({ src, position = "center 80%", className = "" }: HeroBackgroundProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <img 
      src={src} 
      alt="" 
      aria-hidden="true"
      fetchPriority="high"
      loading="eager"
      onLoad={() => setLoaded(true)}
      className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-700 ease-out ${loaded ? 'opacity-40' : 'opacity-0'} ${className}`}
      style={{ objectPosition: position }}
    />
  );
}
