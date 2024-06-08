import { SET_FILTER } from "@/context/task/action";
import { TaskContext } from "@/context/task/context";
import { ChangeEvent, useContext } from "react";

export default function TaskFilter() {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("task-filter must be used within a TaskProvider");
  }

  const { dispatch } = context;

  const handleFilterChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value as "all" | "active" | "completed";
    dispatch({ type: SET_FILTER, payload: value });
  };

  return (
    <section className="mt-10 max-w-[800px] mx-auto">
      <select
        onChange={handleFilterChange}
        className="bg-white/5 p-2 rounded-md outline-none cursor-pointer"
      >
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
      </select>
    </section>
  );
}
