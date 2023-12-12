import Sidebar from "@/components/home/sidebar";
import Content from "@/components/home/content";

export default function Home() {
  return (
    <main className="flex min-w-full min-h-screen px-5 md:p-0">
      <Sidebar />
      <Content />
    </main>
  );
}
