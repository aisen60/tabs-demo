import { useState } from "react";
import Tabs from "./components/Tabs";
import Tab, { type TabProps } from "./components/Tab";

const obj = { a: "4" };

const items: TabProps[] = [
  {
    value: "1",
    lable: "Tab",
    // disabled: true,
  },
  {
    value: "2",
    lable: "Tab",
    badge: true,
  },
  {
    value: "3",
    lable: () => <span>Tab</span>,
  },
  {
    value: obj,
    lable: () => <span>Tab</span>,
    disabled: true,
  },
  {
    value: "5",
    lable: "Tab",
    disabled: true,
  },
  {
    value: "6",
    lable: "Tab",
    badge: true,
  },
  {
    value: "7",
    lable: "Tab",
  },
  {
    value: "8",
    lable: "Tab",
  },
  {
    value: "9",
    lable: "Tab",
  },
  {
    value: "10",
    lable: "Tab",
  },
];

function App() {
  const [state, setState] = useState<TabProps["value"]>("1");
  // const [state, setState] = useState<TabProps["value"]>(obj);

  const onChange = (data: TabProps) => {
    setState(data.value);
  };

  return (
    <div className="p-5 rounded-md border border-dashed border-[#9747FF]">
      <Tabs value={state} onChange={onChange}>
        {items.map((item, index) => (
          <Tab
            key={`${index}-${item.value}`}
            value={item.value}
            lable={item.lable}
            badge={item.badge}
            disabled={item.disabled}
          ></Tab>
        ))}
      </Tabs>
    </div>
  );
}

export default App;
