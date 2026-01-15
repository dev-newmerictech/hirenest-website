import { Metadata } from 'next';
import { pageMetadata } from '../lib/metadata';

export const metadata: Metadata = pageMetadata.customAssessments;

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
