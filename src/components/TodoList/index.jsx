import { Col, Row, Input, Space, Button, Select, Tag, Checkbox } from "antd";
import Todo from "../Todo";
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { AddTodo } from "../../redux/actions";
import { useState } from "react";
import { filterSearchSelector, todoListSelector } from "../../redux/selectors";

export default function TodoList() {
  const dispatch = useDispatch();
  const todoList = useSelector(todoListSelector);
  const [todoName, setTodoName] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [completed, setCompleted] = useState(false);

  // add
  const handleDispatch = () => {
    dispatch(
      AddTodo({
        id: uuid(),
        name: todoName,
        priority: priority,
        completed: completed,
      })
    );
    setTodoName("");
    setPriority("");
    setCompleted(false);
  };

  const handleInputChange = (e) => {
    const a = e.target.value;
    setTodoName(a);
  };
  const handlePriorityChange = (value) => {
    setPriority(value);
  };

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.length != 0 ? (
          todoList.map((i) => (
            <Todo
              key={i.id}
              name={i.name}
              priority={i.priority}
              completed={i.completed}
            />
          ))
        ) : (
          <h3>Hong coá!</h3>
        )}
      </Col>
      <Col span={24}>
        <Space.Compact style={{ display: "flex" }} compact="true">
          <Input value={todoName} onChange={handleInputChange} />
          <Select
            defaultValue="Medium"
            value={priority}
            onChange={handlePriorityChange}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button onClick={handleDispatch} type="primary">
            Add
          </Button>
        </Space.Compact>
      </Col>
    </Row>
  );
}
