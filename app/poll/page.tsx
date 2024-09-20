import PostCards from "@/app/poll/cards";
import Search from "@/app/ui/search";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  return (
    <main className="min-h-screen">
      <div className="flex justify-center">
        <div className="w-1/3">
          <Search placeholder="Search polls..." />
        </div>
      </div>
      <div className="flex flex-col items-center justify-between p-24">
        <PostCards query={"query"} currentPage={currentPage} />
      </div>
    </main>
  );
}
