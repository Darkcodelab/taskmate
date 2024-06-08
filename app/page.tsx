"use client";

import AddTaskForm from "@/components/add-task-form";
import Banner from "@/components/banner";
import Header from "@/components/header";
import PageBG from "@/components/page-bg";
import TaskFilter from "@/components/task-filter";
import TaskList from "@/components/task-list";
import { TaskProvider } from "@/context/task/context";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <TaskProvider>
      <main className="bg-gray-900 h-screen dark:text-white">
        <Header />
        <Banner />
        <AddTaskForm />
        <TaskFilter />
        <TaskList />

        <PageBG />
      </main>
    </TaskProvider>
  );
}
