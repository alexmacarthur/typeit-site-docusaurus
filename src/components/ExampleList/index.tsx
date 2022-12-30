import React, { useMemo } from "react";
import Example from "../Example";
import getExamples from "./getExamples";

export default () => {
  if (typeof window !== "undefined") {
    window.ti_exampleTimeouts = window.ti_exampleTimeouts || {};
  }

  const exampleInstances = useMemo(() => {
    return getExamples((key, ti) => {
      let exampleTimeoutsCopy = Object.assign({}, window.ti_exampleTimeouts);

      if (exampleTimeoutsCopy[key]) {
        exampleTimeoutsCopy[key].push(ti);
      } else {
        exampleTimeoutsCopy[key] = [ti];
      }

      window.ti_exampleTimeouts = exampleTimeoutsCopy;
    });
  }, []);

  return (
    <div className="md:px-8">
      {exampleInstances.map((example, index) => {
        return (
          <Example
            example={example}
            isLast={index + 1 === exampleInstances.length}
            key={example.slug}
          />
        );
      })}
    </div>
  );
};
