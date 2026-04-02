import Sidebar from "../components/common/Sidebar";

export default function HomePage() {
  return (
    <div className="grid h-full grid-cols-1 sm:grid-cols-[35fr_65fr] md:grid-cols-[30fr_70fr] lg:grid-cols-[25fr_75fr] xl:grid-cols-[20fr_80fr]">
      <div className="hidden p-4 sm:block">
        <Sidebar />
      </div>
      <div className="sm:border-primary h-full p-4 sm:border-l-2">main</div>
    </div>
  );
}
