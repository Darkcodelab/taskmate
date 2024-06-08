import { Task, TaskContext } from "@/context/task/context";
import { useContext } from "react";

export default function Banner() {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("banner must be used within a TaskProvider");
  }

  const { state } = context;

  const activeTasks = state.tasks.filter(
    (task: Task) => !task.completed
  ).length;

  return (
    <section className="max-w-[800px] mx-auto mt-16">
      <h2 className="text-5xl">{new Date().toDateString()}</h2>
      <h3 className="mt-4">You have {activeTasks} active task(s)</h3>
    </section>
  );
}
