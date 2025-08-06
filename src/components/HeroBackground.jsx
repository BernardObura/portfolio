import heroBackgroundImage from '../assets/hero-background.jpg';

const HeroBackground = ({ isDark }) => {
  return (
    <div
      className="absolute inset-0 w-full h-full"
      style={{
        backgroundImage: `url(${heroBackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: isDark ? 0.3 : 0.15,
        filter: isDark ? 'brightness(0.7) contrast(1.2)' : 'brightness(1.2) contrast(0.8)',
        transition: 'opacity 0.3s ease, filter 0.3s ease',
        zIndex: 0,
      }}
    />
  );
};

export default HeroBackground;

