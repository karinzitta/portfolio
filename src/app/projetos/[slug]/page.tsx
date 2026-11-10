import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { portfolio } from "@/data/portfolio";
import { SiteShell } from "@/components/SiteShell";
import { ProjectPage } from "@/components/ProjectPage";
import { pageMeta } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

const list = portfolio.projects.list;

export const dynamicParams = false;

export function generateStaticParams() {
  return list.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = list.find((p) => p.slug === slug);
  if (!project) return {};
  return pageMeta({
    title: project.name,
    description: project.summary,
    path: `/projetos/${project.slug}/`,
    image: project.ogImage,
  });
}

export default async function Page({ params }: Params) {
  const { slug } = await params;
  const index = list.findIndex((p) => p.slug === slug);
  if (index < 0) notFound();
  const next = list.length > 1 ? list[(index + 1) % list.length] : undefined;

  return (
    <SiteShell>
      <ProjectPage project={list[index]} ui={portfolio.projects.ui} next={next} />
    </SiteShell>
  );
}
