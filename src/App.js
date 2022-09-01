import { useState } from "react";
import RenderDynamicForm from "./component/renderDynamicForm";


export default function App() {
  const [inputSchema, setInputSchema] = useState(jsonData.fields);

  console.log(inputSchema[0].label, "inputSchema");

  return (
    <div className="App">
      <div style={{ margin: "20px 0" }}>
        {/* <select onChange={(e) => setInputSchema(e.target.value)}> */}
        <select onChange={(e) => setInputSchema(JSON.parse(e.target.value))}>
          <option value={JSON.stringify(jsonData.fields)}>Drug1.Json</option>
          <option value={JSON.stringify(jsonData2.fields)}>Drug2.json</option>
        </select>
      </div>
      <div
        className={"sample"}
        style={{
          height: "100%",
          marginTop: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <RenderDynamicForm data={inputSchema} sortBy={"order"} />
      </div>
    </div>
  );
}

const jsonData = {
  fields: [
    {
      label: "Date of Birth (YYYY-MM-DD)",
      key: "birthday",
      isRequired: true,
      order: 1,
      isReadonly: false,
      type: "date"
    },
    {
      label: "Gestational Age",
      key: "gestationalAge",
      isRequired: true,
      order: 3,
      unit: "weeks",
      isReadonly: false,
      type: "number"
    },
    {
      label: "Sex",
      items: [
        {
          value: "male",
          text: "Male"
        },
        {
          value: "female",
          text: "Female"
        }
      ],
      key: "sex",
      isRequired: true,
      order: 4,
      isReadonly: false,
      type: "dropdown"
    },
    {
      label: "Height",
      key: "height",
      isRequired: true,
      order: 5,
      unit: "cm",
      isReadonly: false,
      type: "number"
    },
    {
      label: "Weight",
      key: "weight",
      isRequired: true,
      order: 6,
      unit: "kg",
      isReadonly: false,
      type: "number"
    },
    {
      label: "BMI",
      key: "bmi",
      order: 11,
      unit: "kg/m²",
      isReadonly: true,
      type: "number"
    }
  ]
};

const jsonData2 = {
  fields: [
    {
      label: "Date of Birth (YYYY-MM-DD)",
      key: "birthday",
      isRequired: true,
      order: 1,
      isReadonly: false,
      type: "date"
    },
    {
      label: "Sex",
      items: [
        {
          value: "male",
          text: "Male"
        },
        {
          value: "female",
          text: "Female"
        }
      ],
      key: "sex",
      isRequired: true,
      order: 2,
      isReadonly: false,
      type: "dropdown"
    },
    {
      label: "Weight",
      key: "weight",
      isRequired: true,
      order: 3,
      unit: "kg",
      isReadonly: false,
      type: "number"
    }
  ]
};
