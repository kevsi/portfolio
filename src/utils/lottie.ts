let lottieLoaded = false;

export function loadLottieScript(): Promise<void> {
  return new Promise((resolve) => {
    if ((window as any).lottie) {
      lottieLoaded = true;
      resolve();
      return;
    }
    const s = document.createElement('script');
    s.src = 'https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js';
    s.onload = () => { lottieLoaded = true; resolve(); };
    s.onerror = () => resolve();
    document.head.appendChild(s);
  });
}

export function createLottie(container: Element, url: string, speed = 1) {
  if (!(window as any).lottie || !url) return null;
  const anim = (window as any).lottie.loadAnimation({
    container,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: url,
  });
  anim.setSpeed(speed);
  return anim;
}

export function isLottieLoaded(): boolean {
  return lottieLoaded;
}
