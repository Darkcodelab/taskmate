import { ADD_TASK, DELETE_TASK, SET_FILTER, TOGGLE_TASK } from "./action";
import { State, Task } from "./context";

export type Action =
  | { type: "ADD_TASK"; payload: Task }
  | { type: "TOGGLE_TASK"; payload: number }
  | { type: "DELETE_TASK"; payload: number }
  | { type: "SET_FILTER"; payload: "all" | "active" | "completed" }
  | { type: "INIT_TASKS"; payload: Task[] };

const taskReducer = (state: State, action: Action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };

    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };

    case DELETE_TASK:
      if (state.tasks.length === 1) localStorage.setItem("dc-tasks", "[]");
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    case SET_FILTER:
      return { ...state, filter: action.payload };

    case "INIT_TASKS":
      return { ...state, tasks: action.payload };

    default:
      return state;
  }
};

export default taskReducer;
