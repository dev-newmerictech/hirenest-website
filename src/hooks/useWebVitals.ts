/**
 * Performance Monitoring Hook
 * Tracks Core Web Vitals and reports to analytics
 */

import { useEffect } from 'react';

// Type for web-vitals library metrics
type Metric = {
    name: string;
    value: number;
    delta: number;
    id: string;
    rating?: 'good' | 'needs-improvement' | 'poor';
};

export interface WebVitalsMetric {
    name: 'CLS' | 'FID' | 'FCP' | 'LCP' | 'TTFB' | 'INP';
    value: number;
    rating: 'good' | 'needs-improvement' | 'poor';
    delta: number;
    id: string;
}

/**
 * Report Web Vitals to analytics
 * @param metric - Web Vitals metric
 */
function reportWebVitals(metric: WebVitalsMetric) {
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
        console.log(`[Web Vitals] ${metric.name}:`, {
            value: metric.value,
            rating: metric.rating,
            delta: metric.delta,
        });
    }

    // Send to analytics in production
    if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined') {
        // Google Analytics 4
        if (window.gtag) {
            window.gtag('event', metric.name, {
                value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
                event_category: 'Web Vitals',
                event_label: metric.id,
                non_interaction: true,
            });
        }

        // Google Tag Manager
        if (window.dataLayer) {
            window.dataLayer.push({
                event: 'web_vitals',
                metric_name: metric.name,
                metric_value: metric.value,
                metric_rating: metric.rating,
                metric_delta: metric.delta,
            });
        }
    }
}

/**
 * Get rating for a metric value
 */
function getRating(name: string, value: number): 'good' | 'needs-improvement' | 'poor' {
    const thresholds: Record<string, [number, number]> = {
        CLS: [0.1, 0.25],
        FID: [100, 300],
        FCP: [1800, 3000],
        LCP: [2500, 4000],
        TTFB: [800, 1800],
        INP: [200, 500],
    };

    const [good, poor] = thresholds[name] || [0, 0];

    if (value <= good) return 'good';
    if (value <= poor) return 'needs-improvement';
    return 'poor';
}

/**
 * Measure and report Core Web Vitals
 */
export function useWebVitals() {
    useEffect(() => {
        if (typeof window === 'undefined') return;

        // Use web-vitals library if available
        import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB, onINP }) => {
            onCLS((metric: Metric) => reportWebVitals({
                name: 'CLS' as const,
                value: metric.value,
                delta: metric.delta,
                id: metric.id,
                rating: getRating('CLS', metric.value)
            }));
            onFCP((metric: Metric) => reportWebVitals({
                name: 'FCP' as const,
                value: metric.value,
                delta: metric.delta,
                id: metric.id,
                rating: getRating('FCP', metric.value)
            }));
            onLCP((metric: Metric) => reportWebVitals({
                name: 'LCP' as const,
                value: metric.value,
                delta: metric.delta,
                id: metric.id,
                rating: getRating('LCP', metric.value)
            }));
            onTTFB((metric: Metric) => reportWebVitals({
                name: 'TTFB' as const,
                value: metric.value,
                delta: metric.delta,
                id: metric.id,
                rating: getRating('TTFB', metric.value)
            }));
            onINP((metric: Metric) => reportWebVitals({
                name: 'INP' as const,
                value: metric.value,
                delta: metric.delta,
                id: metric.id,
                rating: getRating('INP', metric.value)
            }));
        }).catch(() => {
            // Fallback: Use Performance Observer API
            if ('PerformanceObserver' in window) {
                // Observe LCP
                try {
                    const lcpObserver = new PerformanceObserver((list) => {
                        const entries = list.getEntries();
                        const lastEntry = entries[entries.length - 1] as PerformanceEntry & { renderTime?: number; loadTime?: number };
                        const value = lastEntry.renderTime || lastEntry.loadTime || 0;

                        reportWebVitals({
                            name: 'LCP',
                            value,
                            rating: getRating('LCP', value),
                            delta: value,
                            id: `lcp-${Date.now()}`,
                        });
                    });
                    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
                } catch (e) {
                    console.warn('LCP observation failed:', e);
                }

                // Observe FCP
                try {
                    const fcpObserver = new PerformanceObserver((list) => {
                        const entries = list.getEntries();
                        const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
                        if (fcpEntry) {
                            reportWebVitals({
                                name: 'FCP',
                                value: fcpEntry.startTime,
                                rating: getRating('FCP', fcpEntry.startTime),
                                delta: fcpEntry.startTime,
                                id: `fcp-${Date.now()}`,
                            });
                        }
                    });
                    fcpObserver.observe({ entryTypes: ['paint'] });
                } catch (e) {
                    console.warn('FCP observation failed:', e);
                }

                // Observe CLS
                try {
                    let clsValue = 0;
                    const clsObserver = new PerformanceObserver((list) => {
                        for (const entry of list.getEntries()) {
                            const layoutShift = entry as PerformanceEntry & { hadRecentInput?: boolean; value?: number };
                            if (!layoutShift.hadRecentInput) {
                                clsValue += layoutShift.value || 0;
                            }
                        }
                    });
                    clsObserver.observe({ entryTypes: ['layout-shift'] });

                    // Report CLS on page hide
                    window.addEventListener('visibilitychange', () => {
                        if (document.visibilityState === 'hidden') {
                            reportWebVitals({
                                name: 'CLS',
                                value: clsValue,
                                rating: getRating('CLS', clsValue),
                                delta: clsValue,
                                id: `cls-${Date.now()}`,
                            });
                        }
                    });
                } catch (e) {
                    console.warn('CLS observation failed:', e);
                }
            }
        });
    }, []);
}

/**
 * Measure page load performance
 */
export function usePageLoadPerformance() {
    useEffect(() => {
        if (typeof window === 'undefined') return;

        window.addEventListener('load', () => {
            // Get navigation timing
            const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;

            if (perfData) {
                const metrics = {
                    dns: perfData.domainLookupEnd - perfData.domainLookupStart,
                    tcp: perfData.connectEnd - perfData.connectStart,
                    ttfb: perfData.responseStart - perfData.requestStart,
                    download: perfData.responseEnd - perfData.responseStart,
                    domInteractive: perfData.domInteractive - perfData.fetchStart,
                    domComplete: perfData.domComplete - perfData.fetchStart,
                    loadComplete: perfData.loadEventEnd - perfData.fetchStart,
                };

                if (process.env.NODE_ENV === 'development') {
                    console.log('[Page Load Performance]', metrics);
                }

                // Report to analytics
                if (process.env.NODE_ENV === 'production' && window.dataLayer) {
                    window.dataLayer.push({
                        event: 'page_load_performance',
                        ...metrics,
                    });
                }
            }
        });
    }, []);
}

// Type declarations for global window objects
declare global {
    interface Window {
        gtag?: (...args: any[]) => void;
        dataLayer?: any[];
    }
}

export default {
    useWebVitals,
    usePageLoadPerformance,
};
