import ContactContent from './content';
import metadataConfig from '@/config/seo/contact/config.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...metadataConfig,
  openGraph: {
    ...metadataConfig.openGraph,
  },
  twitter: {
    ...metadataConfig.twitter,
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
