import { useEffect } from 'react';

const ResourcePreloader = () => {
  useEffect(() => {
    // Preload critical images
    const criticalImages = [
      '/hero-gadgets.png',
      '/social-icons/whatsapp.png',
      '/social-icons/facebook.png',
      '/social-icons/instagram.png',
      '/social-icons/threads.png',
    ];

    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });

    return () => {
      // Cleanup preload links on unmount
      criticalImages.forEach(src => {
        const existingLink = document.querySelector(`link[href="${src}"]`);
        if (existingLink) {
          document.head.removeChild(existingLink);
        }
      });
    };
  }, []);

  return null;
};

export default ResourcePreloader;