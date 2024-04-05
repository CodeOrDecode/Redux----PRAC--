import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import axios from "axios";
import Todoitems from "./Todoitems";
import { useEffect } from "react";
import { getalldata } from "../Redux/Todo/action";
import { todoAllData } from "../Redux/Todo/action";
import { MoonIcon } from "@chakra-ui/icons";
import { useColorMode } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";

const Todo = () => {
  const dispatch = useDispatch();

  const { colorMode, toggleColorMode } = useColorMode();

  const alldata = useSelector((state) => {
    return state.todo;
  });

  console.log(alldata);

  useEffect(() => {
    dispatch(todoAllData);
  }, []);

  return (
    <div>
      <MoonIcon onClick={toggleColorMode} />

      <Input placeholder="title" />
      {alldata.map((ele) => {
        return <Todoitems key={ele.id} {...ele} />;
      })}
    </div>
  );
};

export default Todo;
