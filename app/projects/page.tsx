import ProjectsContent from './content';
import metadataConfig from '@/config/seo/projects/config.json';
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

export default function ProjectsPage() {
  return <ProjectsContent />;
}