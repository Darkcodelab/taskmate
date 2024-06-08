import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import TaskFilter from "@/components/task-filter";
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

test("dispatches SET_FILTER event when input is changed", () => {
  renderWithContext(<TaskFilter />);

  const input = screen.getByRole("combobox");

  fireEvent.change(input, { target: { value: "completed" } });

  expect(mockDispatch).toHaveBeenCalledWith({
    type: "SET_FILTER",
    payload: expect.stringContaining("completed"),
  });
});
