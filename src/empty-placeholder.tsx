import React, { FC } from "react";
import { css, cx } from "@emotion/css";
import { center, Space } from "@worktools/flex-styles";
import { ColorScheme } from "@worktools/jimo-basics";
import { GlobalThemeVariables } from "./theme";

let EmptyPlaceholder: FC<{
  className?: string;
  emptyLocale?: string;
}> = React.memo((props) => {
  /** Plugins */
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div className={cx(center, styleContainer, props.className)}>
      <Space height={8} />
      <span className={cx(styleText, GlobalThemeVariables.placeholder)}>{props.emptyLocale || "no data"}</span>
    </div>
  );
});

export default EmptyPlaceholder;

// special empty color
let placeholderColor = "hsl(0, 0%, 88%)";

let styleIcon = css`
  line-height: 80px;
  font-size: 80px;
`;

let styleText = css`
  line-height: 20px;
  font-size: 12px;
`;

let styleContainer = css`
  color: ${placeholderColor};
  padding: 12px 16px;
`;
