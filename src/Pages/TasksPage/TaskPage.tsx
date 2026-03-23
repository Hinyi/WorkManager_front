import { TimeSpan, Availability } from "@/components/ui/availability";
import React, { useState } from "react";

const TaskPage = () => {
  const [data, setData] = useState<TimeSpan[]>([
    {
      nanoid: "1",
      week_day: 1,
      start_time: "09:00",
      end_time: "12:00",
      active: true,
    },
    {
      nanoid: "2",
      week_day: 3,
      start_time: "14:00",
      end_time: "16:00",
      active: true,
    },
    {
      nanoid: "3",
      week_day: 5,
      start_time: "10:00",
      end_time: "11:30",
      active: true,
    },
  ]);
  return (
    <div className="w-full h-full bg-background">
      <Availability
        value={data}
        onValueChange={setData}
        startTime={6}
        endTime={22}
      />
    </div>
  );
};

export default TaskPage;
