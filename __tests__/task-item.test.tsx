import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TaskItem from "../components/task-item";
import { TaskContext } from "../context/task/context";

const mockDispatch = jest.fn();

const renderWithContext = (component: React.ReactElement) => {
  return render(
    <TaskContext.Provider
      value={{ state: { tasks: [], filter: "all" }, dispatch: mockDispatch }}
    >
      {component}
    </TaskContext.Provider>
  );
};

const mockTask = { id: 1, title: "Test Task", completed: false };

test("renders task item", () => {
  renderWithContext(<TaskItem task={mockTask} />);

  const task = screen.getByText("Test Task");
  expect(task).toBeInTheDocument();
  expect(task).toHaveClass("no-underline");
});

test("toggles task completion on click", () => {
  renderWithContext(<TaskItem task={mockTask} />);

  const taskTitle = screen.getByTestId("task-done");
  fireEvent.click(taskTitle);

  expect(mockDispatch).toHaveBeenCalledWith({
    type: "TOGGLE_TASK",
    payload: 1,
  });
});

test("deletes task on delete button click", () => {
  renderWithContext(<TaskItem task={mockTask} />);

  const deleteButton = screen.getByTestId("task-delete");
  fireEvent.click(deleteButton);

  expect(mockDispatch).toHaveBeenCalledWith({
    type: "DELETE_TASK",
    payload: 1,
  });
});
