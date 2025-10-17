'use client';

import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  lcp?: number; // Largest Contentful Paint
  fid?: number; // First Input Delay
  cls?: number; // Cumulative Layout Shift
  fcp?: number; // First Contentful Paint
  ttfb?: number; // Time to First Byte
}

interface PerformanceConfig {
  reportInterval?: number;
  enableConsoleLog?: boolean;
  onMetricReport?: (metric: string, value: number) => void;
}

export const usePerformanceMonitor = (config: PerformanceConfig = {}) => {
  const {
    reportInterval = 5000,
    enableConsoleLog = false,
    onMetricReport
  } = config;

  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    // Check if browser supports Performance Observer
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      setIsSupported(true);
    }
  }, []);

  useEffect(() => {
    if (!isSupported) return;

    let observer: PerformanceObserver;

    try {
      observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        
        entries.forEach((entry) => {
          let value = entry.startTime;
          
          // Handle different entry types with proper typing
          if (entry.entryType === 'first-input') {
            const fidEntry = entry as PerformanceEventTiming;
            value = fidEntry.processingStart - entry.startTime;
          } else if (entry.entryType === 'layout-shift') {
            const clsEntry = entry as any; // LayoutShiftEntry not in standard types
            value = clsEntry.value || 0;
          }
          
          if (enableConsoleLog) {
            console.log(`${entry.name}: ${value}ms`);
          }

          if (onMetricReport) {
            onMetricReport(entry.name, value);
          }

          // Update metrics state
          setMetrics(prev => {
            const updated = { ...prev };
            
            switch (entry.entryType) {
              case 'largest-contentful-paint':
                updated.lcp = entry.startTime;
                break;
              case 'first-input':
                updated.fid = (entry as any).processingStart - entry.startTime;
                break;
              case 'layout-shift':
                if (!(entry as any).hadRecentInput) {
                  updated.cls = (updated.cls || 0) + (entry as any).value;
                }
                break;
              case 'paint':
                if (entry.name === 'first-contentful-paint') {
                  updated.fcp = entry.startTime;
                }
                break;
              case 'navigation':
                updated.ttfb = (entry as any).responseStart;
                break;
            }
            
            return updated;
          });
        });
      });

      // Observe different performance metrics
      const observeMetrics = [
        'largest-contentful-paint',
        'first-input',
        'layout-shift',
        'paint',
        'navigation'
      ];

      observeMetrics.forEach(metric => {
        try {
          observer.observe({ entryTypes: [metric] });
        } catch (e) {
          // Some metrics might not be supported
          if (enableConsoleLog) {
            console.warn(`Performance metric '${metric}' not supported`);
          }
        }
      });

    } catch (error) {
      if (enableConsoleLog) {
        console.error('Performance monitoring not available:', error);
      }
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [isSupported, enableConsoleLog, onMetricReport]);

  // Calculate performance scores (similar to Lighthouse)
  const getPerformanceScore = () => {
    const { lcp, fid, cls, fcp } = metrics;
    
    let score = 100;
    
    // LCP scoring (target: <2.5s)
    if (lcp) {
      if (lcp > 4000) score -= 30;
      else if (lcp > 2500) score -= 15;
    }
    
    // FID scoring (target: <100ms)
    if (fid) {
      if (fid > 300) score -= 20;
      else if (fid > 100) score -= 10;
    }
    
    // CLS scoring (target: <0.1)
    if (cls) {
      if (cls > 0.25) score -= 25;
      else if (cls > 0.1) score -= 10;
    }
    
    // FCP scoring (target: <1.8s)
    if (fcp) {
      if (fcp > 3000) score -= 20;
      else if (fcp > 1800) score -= 10;
    }
    
    return Math.max(0, score);
  };

  const getMetricStatus = (metric: keyof PerformanceMetrics) => {
    const value = metrics[metric];
    if (!value) return 'unknown';
    
    switch (metric) {
      case 'lcp':
        return value <= 2500 ? 'good' : value <= 4000 ? 'needs-improvement' : 'poor';
      case 'fid':
        return value <= 100 ? 'good' : value <= 300 ? 'needs-improvement' : 'poor';
      case 'cls':
        return value <= 0.1 ? 'good' : value <= 0.25 ? 'needs-improvement' : 'poor';
      case 'fcp':
        return value <= 1800 ? 'good' : value <= 3000 ? 'needs-improvement' : 'poor';
      case 'ttfb':
        return value <= 800 ? 'good' : value <= 1800 ? 'needs-improvement' : 'poor';
      default:
        return 'unknown';
    }
  };

  return {
    metrics,
    isSupported,
    performanceScore: getPerformanceScore(),
    getMetricStatus
  };
};
