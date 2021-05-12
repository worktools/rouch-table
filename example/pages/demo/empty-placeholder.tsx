import React, { FC } from "react";
import { css } from "@emotion/css";
import { DocDemo, DocSnippet } from "@worktools/doc-frame";
import EmptyPlaceholder from "../../../src/empty-placeholder";

let DemoEmptyPlaceholder: FC<{ className?: string }> = React.memo((props) => {
  /** Plugins */
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div className={props.className}>
      <DocDemo title={"暂无数据"}>
        <EmptyPlaceholder />
        <EmptyPlaceholder emptyLocale={"暂无数据"} />
        <DocSnippet code={code} />
      </DocDemo>
    </div>
  );
});

export default DemoEmptyPlaceholder;

let code = `
<EmptyPlaceholder />
<EmptyPlaceholder emptyLocale={'暂无数据'} />
`;
