import {
  ArrowLeftOnRectangleIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/solid";
import React, { useState } from "react";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useProcessAuth } from "../../hooks/useProcessAuth";
import { useProcessTask } from "../../hooks/useProcessTask";
import { useQuerySingleTask } from "../../hooks/useQuerySingleTask";
import { useQueryTasks } from "../../hooks/useQueryTasks";
import { useQueryUser } from "../../hooks/useQueryUser";
import { TaskItem } from "./TaskItem";
import { selectTask, setEditedTask } from "./todoSlice";

const Todo = () => {
  const [id, setId] = useState("");
  const { logout } = useProcessAuth();
  const { data: dataUser } = useQueryUser();
  const { data: dataTasks, isLoading: isLoadingTasks } = useQueryTasks();
  const { data: dataSingleTask, isLoading: isLoadingTask } =
    useQuerySingleTask(id);
  const { processTask } = useProcessTask();
  const dispatch = useAppDispatch();
  const editedTask = useAppSelector(selectTask);
  return (
    <div className="flex justify-center items-center flex-col min-h-screen text-gray-600 font-mono">
      <div className="flex items-center">
        <ShieldCheckIcon className="h-8 w-8 mr-3 text-green-500 cursor-pointer" />
        <span className="text-center text-3xl font-extrabold">CRUD tasks</span>
      </div>
      <p className="my-3 text-sm">{dataUser?.email}</p>
      <ArrowLeftOnRectangleIcon
        onClick={logout}
        className="h-7 w-7 mb-5 text-blue-500 cursor-pointer"
      />
      <form onSubmit={processTask}>
        <input
          className="mb-3 mr-3 px-3 py-2 border border-gray-300"
          placeholder="title ?"
          type="text"
          onChange={(e) =>
            dispatch(setEditedTask({ ...editedTask, title: e.target.value }))
          }
          value={editedTask.title}
        />
        <input
          className="mb-3 px-3 py-2 border border-gray-300"
          placeholder="description ?"
          type="text"
          onChange={(e) =>
            dispatch(
              setEditedTask({ ...editedTask, description: e.target.value })
            )
          }
          value={editedTask.description}
        />
        <button
          className="disabled:opacity-40 mx-3 py-2 px-3 text-white bg-indigo-600 rounded"
          disabled={!editedTask.title || !editedTask.description}
        >
          {editedTask.id === "" ? "Create" : "Update"}
        </button>
      </form>
      {isLoadingTasks ? (
        <p>Loading...</p>
      ) : (
        <ul className="my-5">
          {dataTasks?.map((task) => (
            <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              description={task.description}
              setId={setId}
            />
          ))}
        </ul>
      )}
      <h2 className="mt-3 font-bold">Seletect Task</h2>
      {isLoadingTask && <p>Loading...</p>}
      <p className="my-1 text-blue-500 text-sm">{dataSingleTask?.title}</p>
      <p className="text-blue-500 text-sm">{dataSingleTask?.description}</p>
    </div>
  );
};

export default Todo;
