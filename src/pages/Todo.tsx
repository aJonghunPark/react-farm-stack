import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useAppSelector } from "../app/hooks";
import Auth from "../features/auth/Auth";
import Todo from "../features/todo/Todo";
import { getCsrfToken } from "../features/todo/todoAPI";
import { selectCsrfState } from "../features/todo/todoSlice";

const TodoPage = () => {
  const csrf = useAppSelector(selectCsrfState);
  useEffect(() => {
    getCsrfToken();
  }, [csrf]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default TodoPage;
