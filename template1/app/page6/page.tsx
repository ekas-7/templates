import PageCard from "../components/PageCard";
import PageNav from "../components/PageNav";
import pages from "../data/pages.json";

export default function Page6() {
  const item = pages.find((p) => p.id === 6)!;
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="w-full max-w-3xl">
        <PageCard item={item} />
        <PageNav currentId={item.id} />
      </div>
    </div>
  );
}
