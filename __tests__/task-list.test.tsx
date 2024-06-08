import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TaskList from "../components/task-list";
import { TaskContext, TaskProvider } from "../context/task/context";

const mockDispatch = jest.fn();

const renderWithContext = (component: React.ReactElement, state: any) => {
  return render(
    <TaskContext.Provider value={{ state, dispatch: mockDispatch }}>
      {component}
    </TaskContext.Provider>
  );
};

const mockState = {
  tasks: [
    { id: 1, title: "Task 1", completed: false },
    { id: 2, title: "Task 2", completed: true },
  ],
  filter: "all",
};

test("renders tasks from context", () => {
  renderWithContext(<TaskList />, mockState);

  expect(screen.getByText("Task 1")).toBeInTheDocument();
  expect(screen.getByText("Task 2")).toBeInTheDocument();
});
