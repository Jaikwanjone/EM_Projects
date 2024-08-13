import { Box } from "@mui/material";
import { useState } from "react";
import Form from "../components/Form";
import Item from "../components/Item";
import { useApp } from "../ThemeApp";

const Home = () => {
  const { showForm, setGlobalMsg } = useApp();
  const [data, setData] = useState([
    { id: 3, content: "Yay, interesting.", name: "Chris" },
    { id: 2, content: "Hello, from Thailand.", name: "Wai Wai" },
    { id: 2, content: "Hi, from Shan State.", name: "Shan Gyi" },
  ]);
  const remove = (id) => {
    setData(data.filter((item) => item.id !== id));
    setGlobalMsg("An Item is removed");
  };

  const add = (content, name) => {
    const id = data[data.length - 1].id + 1;
    setData([{ id, content, name }, ...data]);
    setGlobalMsg("An Item is added");
  };

  return (
    <Box>
      {showForm && <Form add={add} />}
      {data.map((item) => {
        return <Item key={item.id} remove={remove} item={item} />;
      })}
    </Box>
  );
};

export default Home;
