import Index from "../pages/Index";
import TodoPage from "../pages/TodoPage";

const routes = [
  {
    path: "/",
    component: Index,
    exact: true
  },
  {
    path: "/todo",
    exact: true,
    component: TodoPage
  }
];

export default routes;
