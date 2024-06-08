# TaskMate

A simple task management tool built with Next.js and TypeScript, using local storage for state management. Users can add, delete, mark tasks as completed, and filter tasks by status (all, active, completed).

## Features

- Add new tasks
- Delete tasks
- Mark tasks as completed
- Filter tasks (All, Active, Completed)
- Persistent state using local storage
- Unit tests for key components

## Tech Stack

- **Next.js**: React framework for server-rendered applications
- **TypeScript**: Strongly typed JavaScript
- **Jest**: Testing framework
- **React Testing Library**: Testing utilities for React

## Getting Started

### Prerequisites

- Node.js (>= 12.x)
- npm (>= 6.x) or yarn (>= 1.x)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/darkcodelab/taskmate.git
    cd taskmate
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Running the Development server:**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

4.  **Running tests:**

    ```bash
    npm test
    ```

## Project Structure

- `components/`: React components
- `context/`: React context and reducers
- `app/`: Next.js app router
- `public/`: Static assets
- `__tests__`: Unit tests

## Key Components

- TaskItem: Component for individual task items
- TaskList: Component to display a list of task items
- TaskFilter: Component to filter tasks
- AddTaskForm: Component to add new tasks
