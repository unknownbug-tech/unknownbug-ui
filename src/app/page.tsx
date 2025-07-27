import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full h-full ">
      <div className="py-[16vh]">Based on Shadcn UI</div>
      <Link href={"/components"}>Components Page</Link>
    </div>
  );
}
