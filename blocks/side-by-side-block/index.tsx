import { useMemo } from "react";
import { FileBlockProps } from "@githubnext/blocks";

export default function (props: FileBlockProps) {
  const { context, BlockComponent } = props;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        height: "100%",
      }}
    >
      <div style={{ borderRight: "solid 1px rgba(225, 228, 232)" }}>
        <BlockComponent
          block={{
            owner: "githubnext",
            repo: "blocks-examples",
            id: "code-block",
          }}
          context={context}
        />
      </div>
      <div>
        <BlockComponent
          block={{
            owner: "githubnext",
            repo: "blocks-examples",
            id: "markdown-block",
          }}
          context={context}
        />
      </div>
    </div>
  );
}
