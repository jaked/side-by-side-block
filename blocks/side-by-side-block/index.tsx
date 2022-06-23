import { useMemo } from "react";
import { FileBlockProps } from "@githubnext/blocks";

export default function (props: FileBlockProps) {
  const { context, BlockComponent } = props;

  const rendered = useMemo(
    () => (
      <div style={{ display: "grid" }}>
        <div>
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
    ),
    []
  );

  return rendered;
}
