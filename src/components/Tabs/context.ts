import { createContext } from "react";

import type { TabsProps } from "./type";

const TabsContext = createContext<Omit<TabsProps, "children">>({
  value: "",
  onChange: () => {},
});

export { TabsContext };
