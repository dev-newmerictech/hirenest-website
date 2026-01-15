import { Metadata } from 'next';
import { pageMetadata } from '../lib/metadata';

export const metadata: Metadata = pageMetadata.hiringAnalytics;

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
