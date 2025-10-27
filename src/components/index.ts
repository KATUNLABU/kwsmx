// Layout Components
export { default as AppLayout } from './layout/AppLayout';

// Component exports
export { default as Button } from './ui/Button';
export { default as Card } from './ui/Card';
export { default as ServiceCard } from './ui/ServiceCard';
export { default as ContactForm } from './ui/ContactForm';
export { default as HeroSection } from './ui/HeroSection';
export { default as WavyBanner } from './ui/WavyBanner';
export { default as HeroBannerOptimized } from './ui/HeroBannerOptimized';
export { default as HeroBannerWaves } from './ui/HeroBannerWaves';
export { default as SectorCarousel } from './ui/SectorCarousel';
export { default as FloatingChat } from './ui/FloatingChat';
export { default as OptimizedImage } from './ui/OptimizedImage';
export { default as FlipCards } from './ui/FlipCards';
export { default as NavBar } from './ui/NavBar';
export { default as Footer } from './ui/Footer';
export { default as Toast, ToastProvider, useToast } from './ui/Toast';
export { default as Notification } from './ui/Notification';

// Text & Content Components
export { default as Typography } from './ui/Typography';
export { default as TextSection } from './ui/TextSection';
export { default as List } from './ui/List';
export { default as Quote } from './ui/Quote';
export { default as Breadcrumb } from './ui/Breadcrumb';
export { default as Badge } from './ui/Badge';
export { default as Divider } from './ui/Divider';
export { default as Container } from './ui/Container';

// Block Components
export { default as FeaturesBlock } from './blocks/FeaturesBlock';
export { default as TeamBlock } from './blocks/TeamBlock';
export { default as PricingBlock } from './blocks/PricingBlock';
export { default as FAQBlock } from './blocks/FAQBlock';

// Animation exports
export { default as FadeIn } from './animations/FadeIn';
export { default as Counter } from './animations/Counter';
export { default as CounterExample } from './animations/CounterExample';
export { default as AnimatedCrossBackground } from './animations/AnimatedCrossBackground';
export { default as MinimalistBackground } from './animations/MinimalistBackground';

// Hook exports
export { useIntersectionObserver } from '../hooks/useIntersectionObserver';
export { usePerformanceMonitor } from '../hooks/usePerformanceMonitor';

// Utility exports
export { cn } from '../utils/cn';
export { theme, componentDefaults, animations } from '../utils/designSystem';
