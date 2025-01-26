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

  const filteredTasks =
    state.filter === "all" ? state.tasks : state.tasks.filter(filterTasks);

  if (filteredTasks.length === 0) {
    return (
      <section className="mt-5 p-2">
        <ul className="max-w-[800px] mx-auto space-y-2">
          <h2 className="text-center text-3xl opacity-40 mt-4">
            No Tasks found...
          </h2>
        </ul>
      </section>
    );
  }

  return (
    <section className="mt-5 p-2">
      <ul className="max-w-[800px] mx-auto space-y-2">
        {filteredTasks.map((task: Task) => {
          return <TaskItem key={task.id} task={task} />;
        })}
      </ul>
    </section>
  );
}
