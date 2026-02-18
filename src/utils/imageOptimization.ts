/**
 * Image Optimization Utilities
 * Helps improve LCP and overall page performance
 */

export interface ImageOptimizationProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    priority?: boolean;
    className?: string;
    sizes?: string;
}

/**
 * Generate srcset for responsive images
 * @param src - Base image URL
 * @param widths - Array of widths to generate
 */
export function generateSrcSet(src: string, widths: number[] = [640, 750, 828, 1080, 1200]): string {
    return widths
        .map(width => `${src}?w=${width} ${width}w`)
        .join(', ');
}

/**
 * Get optimized image props for better performance
 * @param props - Image optimization properties
 */
export function getOptimizedImageProps(props: ImageOptimizationProps) {
    const { src, alt, width, height, priority = false, className, sizes } = props;

    return {
        src,
        alt,
        width,
        height,
        className,
        loading: priority ? ('eager' as const) : ('lazy' as const),
        fetchPriority: priority ? ('high' as const) : ('auto' as const),
        decoding: 'async' as const,
        sizes: sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
        // Add srcset if we have width
        ...(width && {
            srcSet: generateSrcSet(src),
        }),
    };
}

/**
 * Preload critical images
 * @param imageUrls - Array of image URLs to preload
 */
export function preloadImages(imageUrls: string[]) {
    if (typeof window === 'undefined') return;

    imageUrls.forEach(url => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = url;
        link.fetchPriority = 'high';
        document.head.appendChild(link);
    });
}

/**
 * Check if image format is supported
 * @param format - Image format to check (webp, avif, etc.)
 */
export async function supportsImageFormat(format: 'webp' | 'avif'): Promise<boolean> {
    if (typeof window === 'undefined') return false;

    const testImages = {
        webp: 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=',
        avif: 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=',
    };

    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = testImages[format];
    });
}

/**
 * Get modern image format URL if supported
 * @param src - Original image URL
 * @param format - Preferred format
 */
export function getModernImageUrl(src: string, format: 'webp' | 'avif' = 'webp'): string {
    // If URL already has format parameter, return as is
    if (src.includes('format=')) return src;

    // Add format parameter to URL
    const separator = src.includes('?') ? '&' : '?';
    return `${src}${separator}format=${format}`;
}

export default {
    generateSrcSet,
    getOptimizedImageProps,
    preloadImages,
    supportsImageFormat,
    getModernImageUrl,
};
