'use client'
// FacebookPixel.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const MetaPixel = ({ pixelId }) => {
  const location = useLocation();

  useEffect(() => {
    // Load the Pixel script only once
    (function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

    // Initialize the Pixel
    fbq('init', pixelId);
    fbq('track', 'PageView');
  }, [pixelId]);

  // Track page view on route change
  useEffect(() => {
    fbq('track', 'PageView');
  }, [location]);

  return null;
};

export default MetaPixel;
