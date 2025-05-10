import { Metadata } from 'next'
import ProjectClient from './project-client'

export const metadata: Metadata = {
  title: 'Project - v0',
  description: 'Design, build and deploy with AI',
}

type Params = Promise<{ id: string }>;

export default async function ProjectPage({ params }: { params: Params }) {
  const { id } = await params;
  return <ProjectClient id={id} />
}