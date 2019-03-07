import TodoPage from "../pages/TodoPage";

const routes = [
  {
    path: "/",
    component: TodoPage,
    exact: true
  },
  {
    path: "/todo",
    exact: true,
    component: TodoPage
  }
];

export default routes;
