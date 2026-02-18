import React from 'react';
import '../styles/skeleton.css';

interface SkeletonLoaderProps {
    type?: 'post' | 'blog' | 'card';
}

export function PostSkeleton() {
    return (
        <div className="skeleton-post">
            {/* Breadcrumbs skeleton */}
            <div className="skeleton-breadcrumbs">
                <div className="skeleton-line" style={{ width: '120px', height: '14px' }} />
            </div>

            {/* Post header skeleton */}
            <div className="skeleton-header">
                <div className="skeleton-line" style={{ width: '80%', height: '36px', marginBottom: '16px' }} />
                <div className="skeleton-meta">
                    <div className="skeleton-line" style={{ width: '100px', height: '14px' }} />
                    <div className="skeleton-line" style={{ width: '80px', height: '14px' }} />
                    <div className="skeleton-line" style={{ width: '120px', height: '14px' }} />
                </div>
            </div>

            {/* Content skeleton */}
            <div className="skeleton-content">
                <div className="skeleton-line" style={{ width: '100%', height: '16px', marginBottom: '12px' }} />
                <div className="skeleton-line" style={{ width: '95%', height: '16px', marginBottom: '12px' }} />
                <div className="skeleton-line" style={{ width: '98%', height: '16px', marginBottom: '12px' }} />
                <div className="skeleton-line" style={{ width: '90%', height: '16px', marginBottom: '24px' }} />

                <div className="skeleton-line" style={{ width: '100%', height: '16px', marginBottom: '12px' }} />
                <div className="skeleton-line" style={{ width: '97%', height: '16px', marginBottom: '12px' }} />
                <div className="skeleton-line" style={{ width: '93%', height: '16px', marginBottom: '24px' }} />

                <div className="skeleton-line" style={{ width: '100%', height: '16px', marginBottom: '12px' }} />
                <div className="skeleton-line" style={{ width: '96%', height: '16px', marginBottom: '12px' }} />
                <div className="skeleton-line" style={{ width: '88%', height: '16px', marginBottom: '12px' }} />
            </div>
        </div>
    );
}

export function BlogSkeleton() {
    return (
        <div className="skeleton-blog">
            {/* Header skeleton */}
            <div className="skeleton-blog-header">
                <div className="skeleton-line" style={{ width: '200px', height: '32px' }} />
            </div>

            {/* Posts grid skeleton */}
            <div className="skeleton-blog-grid">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="skeleton-card">
                        <div className="skeleton-line" style={{ width: '100%', height: '180px', marginBottom: '12px', borderRadius: '8px' }} />
                        <div className="skeleton-line" style={{ width: '90%', height: '20px', marginBottom: '8px' }} />
                        <div className="skeleton-line" style={{ width: '100%', height: '14px', marginBottom: '6px' }} />
                        <div className="skeleton-line" style={{ width: '95%', height: '14px' }} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export function CardSkeleton() {
    return (
        <div className="skeleton-card">
            <div className="skeleton-line" style={{ width: '100%', height: '180px', marginBottom: '12px', borderRadius: '8px' }} />
            <div className="skeleton-line" style={{ width: '90%', height: '20px', marginBottom: '8px' }} />
            <div className="skeleton-line" style={{ width: '100%', height: '14px', marginBottom: '6px' }} />
            <div className="skeleton-line" style={{ width: '95%', height: '14px' }} />
        </div>
    );
}

export default function SkeletonLoader({ type = 'post' }: SkeletonLoaderProps) {
    if (type === 'blog') return <BlogSkeleton />;
    if (type === 'card') return <CardSkeleton />;
    return <PostSkeleton />;
}
