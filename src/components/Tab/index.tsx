import React, { useContext } from "react";
import { TabsContext } from "../Tabs/context";

import type { TabProps } from "./type";

export * from "./type";

const Tab: React.FC<TabProps> = (props) => {
  const context = useContext(TabsContext);

  const { value, lable, disabled = false, badge = false, children } = props;

  let tabClassNmae = `tab inline-block relative py-1 px-2.5`;

  let tabWrapperClassName =
    "focus-visible:outline-2 focus-visible:outline focus-visible:outline-[--focus-color] focus-visible:outline-offset-[2px] focus-visible:rounded cursor-pointer text-[--default-color] transition-colors duration-150 hover:text-[--hover-color]";

  const badgeClassName = `absolute top-0.5 right-1 w-[6px] h-[6px] bg-[--badge-color] rounded-full`;

  const labelContent = typeof lable === "function" ? lable() : lable;

  if (Object.is(context.value, value)) {
    tabClassNmae +=
      " border-b-2 border-solid border-[--active-color] tab-active";
    tabWrapperClassName += " !text-[--active-color]";
  }

  if (disabled) {
    tabClassNmae += " !border-[--disabled-color]";
    tabWrapperClassName +=
      " cursor-not-allowed !text-[--disabled-color] hover:text-[--disabled-color] tab-disabled";
  }

  const onChange = () => {
    if (disabled) return;
    context.onChange(props);
  };

  return (
    <div className={tabClassNmae}>
      <div className={tabWrapperClassName} onClick={onChange} tabIndex={0}>
        {children || labelContent}
      </div>
      {badge && <div className={badgeClassName}></div>}
    </div>
  );
};

export default Tab;
