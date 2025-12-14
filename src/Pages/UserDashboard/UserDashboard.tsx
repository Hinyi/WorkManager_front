import { Tabs } from "@/components/ui/tabs";
import { UserContent } from "@/components/UserDashboard/userContent";
import UserSidebar from "@/components/UserDashboard/userSidebar";

export default function UserDashboard() {
  return (
    // <div className="flex items-center space-x-2">
    //   <div>Main</div>
    //   <Separator orientation="vertical" />
    //   <div>Hello</div>
    // </div>

    <div className="">
      <div className="space-x-4 p-4">
        <Tabs
          defaultValue="account"
          className="flex flex-1 gap-6"
          orientation="vertical"
        >
          <UserSidebar />
          <UserContent />
        </Tabs>
      </div>
    </div>
  );
}
