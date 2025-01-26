import { ADD_TASK } from "@/context/task/action";
import { TaskContext } from "@/context/task/context";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import toast from "react-hot-toast";

export default function AddTaskForm() {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("add-task-form must be used within a TaskProvider");
  }

  const { dispatch } = context;

  const [taskInput, setTaskInput] = useState("");
  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!taskInput.trim()) {
      toast.error("Task cannot be empty");
      return;
    } else {
      dispatch({
        type: ADD_TASK,
        payload: {
          id: Date.now(),
          title: taskInput,
          completed: false,
        },
      });
      setTaskInput("");
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskInput(event.target.value);
  };

  return (
    <section className="mt-10 p-2">
      <form onSubmit={handleFormSubmit}>
        <div className="max-w-[800px] mx-auto bg-white/5 px-4 rounded-md flex items-center">
          <input
            type="text"
            placeholder="What's next on your list?"
            className="bg-transparent flex-1 outline-none"
            value={taskInput}
            onChange={handleInputChange}
          />
          <button type="submit" className="py-4">
            add +
          </button>
        </div>
      </form>
    </section>
  );
}
