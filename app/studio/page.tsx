import StudioContent from './content';
import metadataConfig from '@/config/seo/studio/config.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...metadataConfig,
  alternates: {
    canonical: '/studio',
  },
  openGraph: {
    ...metadataConfig.openGraph,
  },
  twitter: {
    ...metadataConfig.twitter,
  },
};

export default function StudioPage() {
  return <StudioContent />;
}
