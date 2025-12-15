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
import { useAuth } from "@/auth/AuthContext";

export function AccountTab() {
  const user = useAuth().user;
  console.log("AccountTab user:", user);

  return (
    <Card className="min-w-110">
      <CardHeader>
        <CardTitle>User Information</CardTitle>
      </CardHeader>

      <CardContent className="flex h-full flex-col justify-between space-y-6">
        <div className="space-y-6">
          <div className="space-y-2">
            <Label>Login (Email)</Label>
            <Input value={user?.email} disabled />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label>First Name</Label>
              <Input value={user?.UserName} disabled />
            </div>

            <div className="space-y-2">
              <Label>Second Name</Label>
              <Input placeholder="Second Name" />
            </div>

            <div className="space-y-2">
              <Label>Last Name</Label>
              <Input placeholder="Last Name" />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Date of Birth</Label>
            <Input type="date" />
          </div>

          <div className="space-y-2">
            <Label>Time Zone</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select time zone" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="utc+1">
                  (UTC +01:00) Monaco – 10:23
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="pt-6 justify-end flex">
          <Button>Save</Button>
        </div>
      </CardContent>
    </Card>
  );
}
