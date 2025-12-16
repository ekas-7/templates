import { redirect } from "next/navigation";

export default function Home() {
  // redirect root to page1 as requested
  redirect("/page1");
}
