import type { ReactNode } from "react";

export type TabProps = {
  value: string | Record<string | number, unknown>;
  lable: ReactNode | (() => ReactNode);
  disabled?: boolean;
  badge?: boolean;
  // badgeColor: string;
  children?: ReactNode;
  tabindex?: number;
};
