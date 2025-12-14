import { TabsTrigger } from "../ui/tabs";

export const Tab = ({
  value,
  icon: Icon,
  label,
}: {
  value: string;
  icon: any;
  label: string;
}) => {
  return (
    <TabsTrigger
      value={value}
      className="flex items-center gap-3 justify-start rounded-lg px-3 py-2 text-sm data-[state=active]:bg-muted"
    >
      <Icon className="h-4 w-4" />
      {label}
    </TabsTrigger>
  );
};
