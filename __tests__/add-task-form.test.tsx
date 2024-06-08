import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import AddTask from "../components/add-task-form";
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

test("dispatches ADD_TASK event when form is submitted", () => {
  renderWithContext(<AddTask />);

  const input = screen.getByPlaceholderText("What's next on your list?");
  const button = screen.getByText("add +");

  fireEvent.change(input, { target: { value: "New Task" } });
  fireEvent.click(button);

  expect(mockDispatch).toHaveBeenCalledWith({
    type: "ADD_TASK",
    payload: expect.objectContaining({ title: "New Task", completed: false }),
  });
});
