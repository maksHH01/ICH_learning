import "./App.css";
import React from "react";
import { Button, Form, Input, Card, Typography } from "antd";
import { useState } from "react";

const MyFormItemContext = React.createContext([]);

function toArr(str) {
  return Array.isArray(str) ? str : [str];
}
const MyFormItemGroup = ({ prefix, children }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatPath = React.useMemo(
    () => [...prefixPath, ...toArr(prefix)],
    [prefixPath, prefix]
  );
  return (
    <MyFormItemContext.Provider value={concatPath}>
      {children}
    </MyFormItemContext.Provider>
  );
};
const MyFormItem = ({ name, ...props }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatName =
    name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
  return <Form.Item name={concatName} {...props} />;
};
const App = () => {
  const [formData, setFormData] = useState(null);

  const onFinish = (value) => {
    console.log(value);
    setFormData(value);
  };
  return (
    <div>
      <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
        <MyFormItemGroup prefix={["user"]}>
          <MyFormItemGroup prefix={["name"]}>
            <MyFormItem name="name" label="Имя">
              <Input placeholder="Name" />
            </MyFormItem>
            <MyFormItem name="description" label="Описание">
              <Input placeholder="Discription" />
            </MyFormItem>
          </MyFormItemGroup>
        </MyFormItemGroup>

        <Button type="primary" htmlType="submit">
          Отправить
        </Button>
      </Form>

      {formData && (
        <Card
          title="Отправленные данные:"
          variant="borderless"
          style={{ width: "100%", marginTop: 30 }}
        >
          <p>
            <strong>Имя:</strong> {formData.user?.name?.name}
          </p>
          <p>
            <strong>Описание:</strong> {formData.user?.name?.description}
          </p>
        </Card>
      )}
    </div>
  );
};
export default App;
