import { createContext, useReducer, useEffect } from "react";
import taskReducer, { Action } from "./reducer";

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export interface State {
  tasks: Task[];
  filter: "all" | "active" | "completed";
}

export const TaskContext = createContext<
  | {
      state: State;
      dispatch: React.Dispatch<Action>;
    }
  | undefined
>(undefined);

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(taskReducer, {
    tasks: [],
    filter: "all",
  });

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("dc-tasks") || "[]");
    dispatch({ type: "INIT_TASKS", payload: savedTasks });
  }, []);

  // update the local storage for any changes in tasks
  useEffect(() => {
    if (state.tasks.length > 0) {
      localStorage.setItem("dc-tasks", JSON.stringify(state.tasks));
    }
  }, [state.tasks]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
