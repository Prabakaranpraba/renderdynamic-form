import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const RenderDynamicForm = ({ data, calcBmi = true, sortBy }) => {
  const [formData, setFormData] = useState({});
  const [inputSchema, setInputSchema] = useState(data);

  const renderField = (data, handleChange) => {
    return (
      <div
        key={data.key}
        className={"fielWrapper"}
        style={{ margin: "10px 0", display: "flex", flexDirection: "column" }}
      >
        <label
          className={"label"}
          htmlFor={data.key}
          style={{ fontSize: "18px" }}
        >
          {data.label}
        </label>
        {data.type !== "dropdown" ? (
          <div style={{ display: "inline-block" }}>
            <input
              type={data.type}
              key={data.key}
              id={data.key}
              required={data.isRequired}
              readOnly={data.isReadonly}
              onChange={(e) => handleChange(e, data)}
              value={formData[data.key] || ""}
            />
            {data.unit && (
              <span style={{ marginLeft: "10px" }}>{data.unit}</span>
            )}
          </div>
        ) : (
          <select
            id={data.key}
            key={data.key}
            name={data.label}
            onChange={(e) => handleChange(e, data)}
            required={data.isRequired}
          >
            <option value=""></option>
            {data.items.map((item, i) => {
              return (
                <option key={i} value={item.value}>
                  {item.text}
                </option>
              );
            })}
          </select>
        )}
      </div>
    );
  };

  const handleChange = (e, data) => {
    setFormData({ ...formData, [data.key]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData, "formData------>");
  };

  useEffect(() => {
    if (formData.weight && formData.height && calcBmi) {
      const bmi =
        formData.weight / ((formData.height * formData.height) / 10000);
      setFormData({ ...formData, bmi });
    } else {
      setFormData({ ...formData, bmi: "" });
    }
  }, [formData.weight, formData.height, calcBmi]);

  useEffect(() => {
    if (sortBy) setInputSchema(data.sort((a, b) => a[sortBy] - b[sortBy]));
  }, [sortBy]);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {inputSchema.map((field) => {
          return renderField(field, handleChange);
        })}
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default RenderDynamicForm;
