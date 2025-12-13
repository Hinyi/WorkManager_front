import { Separator } from "@/components/ui/separator";

export default function UserDashboard() {
  return (
    <div className="flex items-center space-x-2">
      <div>Main</div>
      <Separator orientation="vertical" />
      <div>Hello</div>
    </div>
  );
}
