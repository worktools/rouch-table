import React, { FC } from "react";
import { css, cx } from "@emotion/css";

import RoughDivTable, { IRoughTableColumn } from "../../../src/rough-div-table";
import ActionLinks, { IActionLinkItem } from "../../../src/action-links";
import { fullHeight } from "@worktools/flex-styles";
import ScrollDivTable from "../../../src/scroll-div-table";
import { DocDemo, DocSnippet, DocBlock } from "@worktools/doc-frame";

interface IData {
  code: string;
  name: any;
  model: string;
  source: string;
  type: string;
}

let data: IData[] = [
  { code: "001", name: "螺丝", model: "DDR6", source: "外购", type: "产品" },
  { code: "003", name: "扳手", model: "DDR6", source: "外购", type: "产品" },
  { code: "004", name: "堵头", model: "33-36", source: "外购", type: "产品" },
  { code: "044", name: "软管", model: "HO", source: "外购", type: "产品" },
  { code: "045", name: 0, model: "HO", source: "外购", type: "产品" },
];

data = data.concat(data, data, data, data, data, data, data, data, data, data, data);

let actions: IActionLinkItem[] = [
  { text: "修改", onClick: () => {} },
  { text: "删除", onClick: () => {} },
  { hidden: true, text: "恢复", onClick: () => {} },
  null,
];

let columns: IRoughTableColumn<IData>[] = [
  { title: "物料编号", dataIndex: "code", render: (item: IData["code"], record: IData) => item },
  { title: "名称", dataIndex: "name", render: (item: IData["name"], record: IData) => item },
  { title: "型号", dataIndex: "model", render: (item: IData["model"], record: IData) => item },
  { title: "操作", dataIndex: "model", width: 80, render: (item: any, record: IData) => <ActionLinks actions={actions} spaced /> },
];

let DemoTall: FC<{}> = (props) => {
  return (
    <div>
      <DocDemo title="Table 中 body 部分上下滚动" link="https://github.com/worktools/rough-table/blob/master/example/pages/demo/tall.tsx">
        <DocBlock content={content} />
        <div className={styleContainer}>
          <RoughDivTable className={cx(fullHeight)} data={data} columns={columns} rowPadding={24} pageOptions={{}} />
        </div>
      </DocDemo>
    </div>
  );
};

export default DemoTall;

let styleContainer = css`
  height: 600px;
`;

let content = `RoughDivTable 支持 body 区域上下滚动. 横向滚动参考 Row Resizing 章节当中用的配置.`;
