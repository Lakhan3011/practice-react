import Image from "next/image";
import { Inter } from "next/font/google";
import { VideoGrid } from "@/components/VideoGrid";
import { AppBar } from "@/components/AppBar";
import App from "./_app";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <AppBar />
      <div>
        <VideoGrid />
      </div>
    </main>
  );
}
