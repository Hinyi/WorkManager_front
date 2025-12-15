import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export const ChangePassword = () => {
  return (
    <Card className="min-w-110">
      <CardHeader>
        <CardTitle>Change Password</CardTitle>
      </CardHeader>

      <CardContent className="flex h-full flex-col justify-between space-y-6">
        <div className="space-y-6">
          <div className="space-y-2">
            <Label>Current password</Label>
            <Input placeholder="Current password" />
          </div>

          <div className="space-y-2">
            <Label>New password</Label>
            <Input placeholder="New password" />
          </div>

          <div className="space-y-2">
            <Label>Confirm new password</Label>
            <Input placeholder="Confirm new password" />
          </div>
        </div>

        <div className="pt-6 justify-end flex">
          <Button>Save</Button>
        </div>
      </CardContent>
    </Card>
  );
};
