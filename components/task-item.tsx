import { DELETE_TASK, TOGGLE_TASK } from "@/context/task/action";
import { Task, TaskContext } from "@/context/task/context";
import Image from "next/image";
import { useContext } from "react";

export default function TaskItem({ task }: { task: Task }) {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("task-item must be used within a Task Provider");
  }

  const { dispatch } = context;

  const deleteTask = () => {
    dispatch({ type: DELETE_TASK, payload: task.id });
  };

  const markTaskAsDone = () => {
    dispatch({ type: TOGGLE_TASK, payload: task.id });
  };

  return (
    <li className="bg-white/5 p-4 rounded-md flex items-center justify-between">
      <div>
        <h3 className={`${task.completed ? "line-through" : "no-underline"}`}>
          {task.title}
        </h3>
      </div>
      <div className="flex gap-4">
        <button onClick={markTaskAsDone} data-testid="task-done">
          <Image src="/task-done.svg" alt="done" width={22} height={22} />
        </button>
        <button onClick={deleteTask} data-testid="task-delete">
          <Image src="/task-delete.svg" alt="done" width={22} height={22} />
        </button>
      </div>
    </li>
  );
}
