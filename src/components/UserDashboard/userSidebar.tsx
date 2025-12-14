import { User, Palette, Lock, Bell, Shield, Link2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Tab } from "./tab";

const UserSidebar = () => {
  return (
    <Tabs defaultValue="account" className="h-full">
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
    </Tabs>
  );
};

export default UserSidebar;
