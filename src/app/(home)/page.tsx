import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 p-4 items-start">
      <p className="text-red-400">hello world</p>
      <Button variant="elevated">Hello button</Button>
      <Progress value={50} />
      <Input placeholder="I am an input" />
      <Textarea placeholder="I am an input" />
    </div>
  );
}
