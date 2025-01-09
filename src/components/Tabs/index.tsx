import React from "react";
import { TabsContext } from "./context";

import { TabsProps } from "./type";

export * from "./type";

const Tabs: React.FC<TabsProps> = (props) => {
  const { value, onChange, children } = props;
  const tabsClassName = `tabs flex overflow-x-auto border-b border-solid border-[--border-color]`;
  return (
    <div className={tabsClassName}>
      <TabsContext.Provider value={{ value, onChange }}>
        {children}
      </TabsContext.Provider>
    </div>
  );
};

export default Tabs;
