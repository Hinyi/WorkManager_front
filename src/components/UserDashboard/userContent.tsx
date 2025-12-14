import { TabsContent } from "../ui/tabs";
import { AccountTab } from "./accountTab";
import { EmptyState } from "./emptyState";

export function UserContent() {
  return (
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
  );
}
