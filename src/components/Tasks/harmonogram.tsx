import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Trash2, Plus, Clock } from "lucide-react";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const HOURS = Array.from({ length: 14 }, (_, i) => i + 7); // 7:00 – 20:00

const COLORS = [
  {
    label: "Indigo",
    bg: "bg-indigo-100",
    border: "border-indigo-400",
    text: "text-indigo-800",
    dot: "bg-indigo-500",
  },
  {
    label: "Rose",
    bg: "bg-rose-100",
    border: "border-rose-400",
    text: "text-rose-800",
    dot: "bg-rose-500",
  },
  {
    label: "Emerald",
    bg: "bg-emerald-100",
    border: "border-emerald-400",
    text: "text-emerald-800",
    dot: "bg-emerald-500",
  },
  {
    label: "Amber",
    bg: "bg-amber-100",
    border: "border-amber-400",
    text: "text-amber-800",
    dot: "bg-amber-500",
  },
  {
    label: "Sky",
    bg: "bg-sky-100",
    border: "border-sky-400",
    text: "text-sky-800",
    dot: "bg-sky-500",
  },
  {
    label: "Violet",
    bg: "bg-violet-100",
    border: "border-violet-400",
    text: "text-violet-800",
    dot: "bg-violet-500",
  },
];

const CELL_HEIGHT = 56; // px per hour

function timeToOffset(h, m = 0) {
  return (h - 7) * CELL_HEIGHT + (m / 60) * CELL_HEIGHT;
}

function durationHeight(startH, startM, endH, endM) {
  const start = startH * 60 + startM;
  const end = endH * 60 + endM;
  return ((end - start) / 60) * CELL_HEIGHT;
}

function fmt(h, m = 0) {
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

// const INITIAL_TASKS = [
//   {
//     id: 1,
//     title: "Team standup",
//     day: "Mon",
//     startH: 9,
//     startM: 0,
//     endH: 9,
//     endM: 30,
//     color: 0,
//   },
//   {
//     id: 2,
//     title: "Design review",
//     day: "Tue",
//     startH: 11,
//     startM: 0,
//     endH: 12,
//     endM: 0,
//     color: 1,
//   },
//   {
//     id: 3,
//     title: "Deep work",
//     day: "Wed",
//     startH: 8,
//     startM: 0,
//     endH: 10,
//     endM: 0,
//     color: 2,
//   },
//   {
//     id: 4,
//     title: "1-on-1",
//     day: "Thu",
//     startH: 14,
//     startM: 0,
//     endH: 14,
//     endM: 45,
//     color: 4,
//   },
//   {
//     id: 5,
//     title: "Weekly retro",
//     day: "Fri",
//     startH: 15,
//     startM: 30,
//     endH: 16,
//     endM: 30,
//     color: 5,
//   },
// ];

export default function ScheduleHarmonogram() {
  const [tasks, setTasks] = useState(); //(INITIAL_TASKS);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    title: "",
    day: "Mon",
    startH: "9",
    startM: "00",
    endH: "10",
    endM: "00",
    color: "0",
  });
  const [error, setError] = useState("");
  const nextId = useRef(100);

  const handleOpen = (prefill = {}) => {
    setForm({
      title: "",
      day: "Mon",
      startH: "9",
      startM: "00",
      endH: "10",
      endM: "00",
      color: "0",
      ...prefill,
    });
    setError("");
    setOpen(true);
  };

  const handleAdd = () => {
    const { title, day, startH, startM, endH, endM, color } = form;
    if (!title.trim()) {
      setError("Task title is required.");
      return;
    }
    const s = parseInt(startH) * 60 + parseInt(startM);
    const e = parseInt(endH) * 60 + parseInt(endM);
    if (e <= s) {
      setError("End time must be after start time.");
      return;
    }
    setTasks((prev) => [
      ...prev,
      {
        id: nextId.current++,
        title: title.trim(),
        day,
        startH: parseInt(startH),
        startM: parseInt(startM),
        endH: parseInt(endH),
        endM: parseInt(endM),
        color: parseInt(color),
      },
    ]);
    setOpen(false);
  };

  const handleDelete = (id) =>
    setTasks((prev) => prev.filter((t) => t.id !== id));

  // Click on a cell to pre-fill day + hour
  const handleCellClick = (day, hour) => {
    handleOpen({
      day,
      startH: String(hour),
      startM: "00",
      endH: String(hour + 1),
      endM: "00",
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6 font-sans">
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-800 tracking-tight">
            Weekly Schedule
          </h1>
          <p className="text-sm text-slate-500 mt-0.5">
            Click any cell to add a task, or use the button →
          </p>
        </div>
        <Button onClick={() => handleOpen()} className="gap-2">
          <Plus className="w-4 h-4" /> Add task
        </Button>
      </div>

      {/* Grid */}
      <div className="max-w-5xl mx-auto bg-white rounded-2xl border border-slate-200 overflow-auto shadow-sm">
        <div className="flex min-w-[640px]">
          {/* Time axis */}
          <div className="w-14 shrink-0 border-r border-slate-100">
            <div className="h-10 border-b border-slate-100" />{" "}
            {/* header spacer */}
            {HOURS.map((h) => (
              <div
                key={h}
                style={{ height: CELL_HEIGHT }}
                className="relative border-b border-slate-100 last:border-0"
              >
                <span className="absolute -top-2.5 left-1 text-[10px] text-slate-400 font-mono">
                  {fmt(h)}
                </span>
              </div>
            ))}
          </div>

          {/* Day columns */}
          {DAYS.map((day) => {
            const dayTasks = tasks.filter((t) => t.day === day);
            return (
              <div
                key={day}
                className="flex-1 border-r border-slate-100 last:border-r-0"
              >
                {/* Day header */}
                <div className="h-10 border-b border-slate-100 flex items-center justify-center">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
                    {day}
                  </span>
                </div>

                {/* Hour cells (clickable background) */}
                <div className="relative">
                  {HOURS.map((h) => (
                    <div
                      key={h}
                      style={{ height: CELL_HEIGHT }}
                      className="border-b border-slate-100 last:border-0 cursor-pointer hover:bg-slate-50 transition-colors"
                      onClick={() => handleCellClick(day, h)}
                    />
                  ))}

                  {/* Task blocks */}
                  {dayTasks.map((task) => {
                    const c = COLORS[task.color];
                    const top = timeToOffset(task.startH, task.startM);
                    const height = durationHeight(
                      task.startH,
                      task.startM,
                      task.endH,
                      task.endM,
                    );
                    return (
                      <div
                        key={task.id}
                        style={{ top, height, minHeight: 24 }}
                        className={`absolute inset-x-1 rounded-md border-l-2 px-1.5 py-1 overflow-hidden group cursor-default ${c.bg} ${c.border}`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <p
                          className={`text-[11px] font-semibold leading-tight truncate ${c.text}`}
                        >
                          {task.title}
                        </p>
                        {height >= 36 && (
                          <p
                            className={`text-[10px] leading-none mt-0.5 ${c.text} opacity-70`}
                          >
                            {fmt(task.startH, task.startM)}–
                            {fmt(task.endH, task.endM)}
                          </p>
                        )}
                        <button
                          onClick={() => handleDelete(task.id)}
                          className="absolute top-0.5 right-0.5 opacity-0 group-hover:opacity-100 transition-opacity p-0.5 rounded hover:bg-black/10"
                          aria-label="Delete task"
                        >
                          <Trash2 className={`w-3 h-3 ${c.text}`} />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Task list summary */}
      {tasks.length > 0 && (
        <div className="max-w-5xl mx-auto mt-6">
          <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-3">
            All tasks
          </h2>
          <div className="flex flex-wrap gap-2">
            {tasks.map((task) => {
              const c = COLORS[task.color];
              return (
                <Badge
                  key={task.id}
                  variant="outline"
                  className={`gap-1.5 pr-1 text-xs ${c.text} border-current bg-transparent`}
                >
                  <span className={`w-2 h-2 rounded-full shrink-0 ${c.dot}`} />
                  <span>
                    {task.day} · {task.title}
                  </span>
                  <button
                    onClick={() => handleDelete(task.id)}
                    className="ml-1 opacity-50 hover:opacity-100"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                </Badge>
              );
            })}
          </div>
        </div>
      )}

      {/* Add task dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>New task</DialogTitle>
          </DialogHeader>

          <div className="grid gap-4 py-2">
            {/* Title */}
            <div className="grid gap-1.5">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                placeholder="e.g. Team meeting"
                value={form.title}
                onChange={(e) =>
                  setForm((f) => ({ ...f, title: e.target.value }))
                }
                onKeyDown={(e) => e.key === "Enter" && handleAdd()}
                autoFocus
              />
            </div>

            {/* Day */}
            <div className="grid gap-1.5">
              <Label>Day</Label>
              <Select
                value={form.day}
                onValueChange={(v) => setForm((f) => ({ ...f, day: v }))}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {DAYS.map((d) => (
                    <SelectItem key={d} value={d}>
                      {d}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Time */}
            <div className="grid grid-cols-2 gap-3">
              <div className="grid gap-1.5">
                <Label className="flex items-center gap-1">
                  <Clock className="w-3 h-3" /> Start
                </Label>
                <div className="flex gap-1">
                  <Select
                    value={form.startH}
                    onValueChange={(v) => setForm((f) => ({ ...f, startH: v }))}
                  >
                    <SelectTrigger className="flex-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {HOURS.map((h) => (
                        <SelectItem key={h} value={String(h)}>
                          {fmt(h)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select
                    value={form.startM}
                    onValueChange={(v) => setForm((f) => ({ ...f, startM: v }))}
                  >
                    <SelectTrigger className="w-16">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {["00", "15", "30", "45"].map((m) => (
                        <SelectItem key={m} value={m}>
                          :{m}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid gap-1.5">
                <Label className="flex items-center gap-1">
                  <Clock className="w-3 h-3" /> End
                </Label>
                <div className="flex gap-1">
                  <Select
                    value={form.endH}
                    onValueChange={(v) => setForm((f) => ({ ...f, endH: v }))}
                  >
                    <SelectTrigger className="flex-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {HOURS.map((h) => (
                        <SelectItem key={h} value={String(h)}>
                          {fmt(h)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select
                    value={form.endM}
                    onValueChange={(v) => setForm((f) => ({ ...f, endM: v }))}
                  >
                    <SelectTrigger className="w-16">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {["00", "15", "30", "45"].map((m) => (
                        <SelectItem key={m} value={m}>
                          :{m}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Color */}
            <div className="grid gap-1.5">
              <Label>Color</Label>
              <div className="flex gap-2 flex-wrap">
                {COLORS.map((c, i) => (
                  <button
                    key={i}
                    onClick={() => setForm((f) => ({ ...f, color: String(i) }))}
                    className={`w-7 h-7 rounded-full ${c.dot} ring-offset-2 transition-all ${form.color === String(i) ? "ring-2 ring-slate-600 scale-110" : "opacity-60 hover:opacity-100"}`}
                    aria-label={c.label}
                  />
                ))}
              </div>
            </div>

            {error && <p className="text-sm text-rose-600">{error}</p>}
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleAdd}>Add task</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
