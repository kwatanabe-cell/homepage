import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pages } from "@/lib/pages";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return Object.keys(pages)
    .filter((slug) => slug !== "index")
    .map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = pages[slug];

  if (!page) return {};

  return {
    title: page.title,
    description: page.description
  };
}

export default async function StaticPage({ params }: PageProps) {
  const { slug } = await params;
  const page = pages[slug];

  if (!page) {
    notFound();
  }

  return <div dangerouslySetInnerHTML={{ __html: page.content }} />;
}
