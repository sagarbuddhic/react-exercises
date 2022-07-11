import { Form, Input, Select, Popconfirm, Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
const { Option } = Select;

// const originData = [
//   {
//     key: 345,
//     name: `Edrward 3`,
//     email: `vi`,
//     gender: "Female",
//     status: "Active",
//   },
//   {
//     key: 346,
//     name: `Edrward 4`,
//     email: `sagar`,
//     gender: "Male",
//     status: "Inactive",
//   },
//   {
//     key: "347",
//     name: `Edrward 5`,
//     email: `sagar`,
//     gender: "Male",
//     status: "Inactive",
//   },
//   {
//     key: "348",
//     name: `Edrward 6`,
//     email: `sagar`,
//     gender: "Male",
//     status: "Inactive",
//   },
//   {
//     key: "349",
//     name: `Edrward 3`,
//     email: `sagar`,
//     gender: "Male",
//     status: "Inactive",
//   },
// ];

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode =
    inputType === "select" ? (
      dataIndex === "gender" ? (
        <Select>
          <Option value="male">male</Option>
          <Option value="female">female</Option>
        </Select>
      ) : (
        <Select>
          <Option value="active">active</Option>
          <Option value="inactive">inactive</Option>
        </Select>
      )
    ) : (
      <Input />
    );
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const Editabletable = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(null);
  const [editingKey, setEditingKey] = useState("");

  const isEditing = (record) => record.key === editingKey;

  useEffect(() => {
    fetch("https://secure-beach-76746.herokuapp.com/users/get-info")
      .then((res) => res.json())
      .then((json) => {
        setData(
          json.map((value) => ({
            key: value.id,
            name: value.name,
            email: value.email,
            gender: value.gender,
            status: value.status,
          }))
        );
      })
      .catch((err) => setData([]));
  }, []);

  const edit = (record) => {
    form.setFieldsValue({
      name: "",
      gender: "",
      email: "",
      status: "",
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey("");
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);

      const updatedRow = {
        id: key,
        name: row.name,
        email: row.email,
        gender: row.gender,
        status: row.status,
      };

      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedRow),
      };

      fetch(
        "https://secure-beach-76746.herokuapp.com/users/update",
        requestOptions
      )
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch((err) => console.log(err));

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey("");
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey("");
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  const columns = [
    {
      title: "name",
      dataIndex: "name",
      width: "35%",
      editable: true,
    },
    {
      title: "email",
      dataIndex: "email",
      width: "35%",
      editable: true,
    },
    {
      title: "gender",
      dataIndex: "gender",
      width: "15%",
      editable: true,
    },
    {
      title: "status",
      dataIndex: "status",
      width: "15%",
      editable: true,
    },
    {
      title: "operation",
      dataIndex: "operation",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link
            disabled={editingKey !== ""}
            onClick={() => edit(record)}
          >
            Edit
          </Typography.Link>
        );
      },
    },
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType:
          col.dataIndex === "gender" || col.dataIndex === "status"
            ? "select"
            : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        loading={!Boolean(data)}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
};

export default Editabletable;
