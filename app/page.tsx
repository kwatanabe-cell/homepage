import { pages } from "@/lib/pages";

export default function Home() {
  return <div dangerouslySetInnerHTML={{ __html: pages.index.content }} />;
}
