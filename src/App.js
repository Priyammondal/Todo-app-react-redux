import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { AddItem } from "./components/AddItem";
import { Copyright } from "./components/Copyright";
import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";
import { TotalCount } from "./components/TotalCount";

function App() {
  const tasks = useSelector((state) => state.todos);
  return (
    <Box>
      <Header />
      <AddItem />
      <TodoList />
      {tasks.length > 0 ? <TotalCount /> : null}
      <Copyright />
    </Box>
  );
}

export default App;
