import { type ReactNode } from "react";
import type { TabProps } from "../Tab";

export type TabsProps = {
  value: TabProps["value"];
  onChange: (data: TabProps) => void;
  children: ReactNode;
};
