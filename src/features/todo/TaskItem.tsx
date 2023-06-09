import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
import { FC, memo } from "react";
import React from "react";

import { useAppDispatch } from "../../app/hooks";
import { useMutateTask } from "../../hooks/useMutateTask";
import { Task } from "../../types";
import { setEditedTask } from "./todoSlice";

const TaskItemMemo: FC<
  Task & { setId: React.Dispatch<React.SetStateAction<string>> }
> = ({ id, title, description, setId }) => {
  const dispatch = useAppDispatch();
  const { deleteTaskMutation } = useMutateTask();
  return (
    <li>
      <span className="font-bold cursor-pointer" onClick={() => setId(id)}>
        {title}
      </span>
      <div className="flex float-right ml-20">
        <PencilSquareIcon
          className="h-5 w-5 mx-1 text-blue-500 cursor-pointer"
          onClick={() => {
            dispatch(
              setEditedTask({
                id: id,
                title: title,
                description: description,
              })
            );
          }}
        />
        <TrashIcon
          className="h-5 w-5 text-blue-500 cursor-pointer"
          onClick={() => {
            deleteTaskMutation.mutate(id);
          }}
        />
      </div>
    </li>
  );
};

export const TaskItem = memo(TaskItemMemo);
