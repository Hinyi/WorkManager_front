import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import { AccountTab } from "@/components/UserDashboard/accountTab";
import { EmptyState } from "@/components/UserDashboard/emptyState";
import { Tab } from "@/components/UserDashboard/tab";
import { UserContent } from "@/components/UserDashboard/userContent";
import UserSidebar from "@/components/UserDashboard/userSidebar";

import { User, Palette, Lock, Bell, Shield, Link2 } from "lucide-react";

export default function UserDashboard() {
  return (
    <Tabs
      defaultValue="account"
      className="flex flex-1 gap-6"
      orientation="vertical"
    >
      {/* LEFT TABS */}
      <TabsList className="flex h-full w-64 flex-col items-stretch justify-start rounded-xl border bg-background p-2">
        {/* <AvatarSection /> */}

        <Tab value="account" icon={User} label="Account" />
        <Tab value="appearance" icon={Palette} label="Appearance" />
        <Tab value="password" icon={Lock} label="Change Password" />
        <Tab value="profile" icon={User} label="Profile" />
        <Tab value="notifications" icon={Bell} label="Notification Settings" />
        <Tab value="access" icon={Shield} label="Access Rights" />
        <Tab value="linked" icon={Link2} label="Linked Services" />
      </TabsList>

      <div className="flex-1">
        <TabsContent value="account" className="h-full">
          <AccountTab />
        </TabsContent>

        <TabsContent value="appearance">
          <EmptyState title="Appearance" />
        </TabsContent>

        <TabsContent value="password">
          <EmptyState title="Change Password" />
        </TabsContent>
      </div>
    </Tabs>
  );
}

// <div className="flex items-center space-x-2">
//   <div>Main</div>
//   <Separator orientation="vertical" />
//   <div>Hello</div>
// </div>

// <div className="">
//   <div className="space-x-4 p-4">
//     <Tabs
//       defaultValue="account"
//       className="flex flex-1 gap-6"
//       orientation="vertical"
//     >
//       <UserSidebar />
//       <UserContent />
//     </Tabs>
//   </div>
// </div>
