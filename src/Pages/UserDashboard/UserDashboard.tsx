import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import { AccountTab } from "@/components/UserDashboard/accountTab";
import { AvatarSection } from "@/components/UserDashboard/avatarSection";
import { ChangePassword } from "@/components/UserDashboard/changePassword";
import { EmptyState } from "@/components/UserDashboard/emptyState";
import { Tab } from "@/components/UserDashboard/tab";

import { User, Palette, Lock, Bell, Shield, Link2 } from "lucide-react";

export default function UserDashboard() {
  return (
    <div className="">
      <div className="">
        <Tabs
          defaultValue="account"
          className="flex gap-6 px-4 items-center"
          orientation="vertical"
        >
          {/* LEFT TABS */}
          <TabsList className=" min-w-64 flex-col items-stretch border-r-sidebar bg-background p-2">
            <div className="mb-4">
              <AvatarSection />
            </div>

            <Tab value="account" icon={User} label="Account" />
            <Tab value="appearance" icon={Palette} label="Appearance" />
            <Tab value="password" icon={Lock} label="Change Password" />
            <Tab value="profile" icon={User} label="Profile" />
            <Tab
              value="notifications"
              icon={Bell}
              label="Notification Settings"
            />
            <Tab value="access" icon={Shield} label="Access Rights" />
            <Tab value="linked" icon={Link2} label="Linked Services" />
          </TabsList>

          <div className="justify-center w-full sm:w-80 md:w-96 lg:w-[500px]">
            <TabsContent value="account" className="mt-0">
              <AccountTab />
            </TabsContent>

            <TabsContent value="appearance">
              <EmptyState title="Appearance" />
            </TabsContent>

            <TabsContent value="password">
              <ChangePassword />
              {/* <EmptyState title="Change Password" /> */}
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
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
