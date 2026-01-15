import { Metadata } from 'next';
import { pageMetadata } from '../lib/metadata';

export const metadata: Metadata = pageMetadata.skillAssessments;

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
