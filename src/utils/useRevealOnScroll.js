import { useEffect } from 'react';

export default function useRevealOnScroll() {
  useEffect(() => {
    const revealElems = Array.from(document.querySelectorAll('.reveal'));
    if (!('IntersectionObserver' in window)) {
      revealElems.forEach(el => el.classList.add('revealed'));
      return;
    }
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealElems.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}
