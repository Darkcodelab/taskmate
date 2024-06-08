import { Task, TaskContext } from "@/context/task/context";
import { useContext, useEffect } from "react";
import TaskItem from "./task-item";

export default function TaskList() {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("task-list must be used within a Task Provider");
  }

  const { state } = context;

  const filterTasks = (task: Task) => {
    if (state.filter === "completed") {
      return task.completed;
    } else if (state.filter === "active") {
      return !task.completed;
    }
  };

  return (
    <section className="mt-5">
      <ul className="max-w-[800px] mx-auto space-y-2">
        {(state.filter === "all"
          ? state.tasks
          : state.tasks.filter(filterTasks)
        ).map((task: Task) => {
          return <TaskItem key={task.id} task={task} />;
        })}
      </ul>
    </section>
  );
}
