import React, { useState } from "react";
import ListDivider from "./ListDivider";
import TypeIt from "typeit-react";
import InView from "./InView";

export default function ({ example, isLast }) {
  const [tiInstance, setTiInstance] = useState(null);
  const [isFrozen, setisFrozen] = useState(false);
  const { CopyComponent } = example;

  /**
   * Destroy the instance and clear arbitray timeouts.
   */
  const resetInstance = () => {
    if (!tiInstance) {
      return;
    }

    // Reset the instance itself.
    tiInstance.reset().go();

    // Destroy any timeouts created by callbacks and
    // special instance methods.
    if (!window.ti_exampleTimeouts[example.slug]) {
      return;
    }

    window.ti_exampleTimeouts[example.slug].forEach((item) => {
      clearTimeout(item);
      return false;
    });

    window.ti_exampleTimeouts[example.slug] = [];
  };

  /**
   * Freeze and unfreeze the instance.
   */
  const toggleFreeze = () => {
    if (!tiInstance) {
      return;
    }

    if (tiInstance.is("frozen")) {
      tiInstance.unfreeze();
    } else {
      tiInstance.freeze();
    }

    setisFrozen((v) => !v);
  };

  const elementFontStyles = "text-xl md:text-2xl text-gray-700 font-extralight";

  return (
    <div className="max-container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
        <div className="">
          <h3 className="font-extralight mb-3">{example.title}</h3>
          <p>{example.description}</p>

          <div className="my-6 md:my-12 bg-gray-100 p-8">
            {example.element === "input" && (
              <label>
                Name: {"  "}
                <InView>
                  <TypeIt
                    as={"input"}
                    type="text"
                    options={example.options}
                    getBeforeInit={(tiInstance) => {
                      return example.getBeforeInit(tiInstance);
                    }}
                    getAfterInit={(instance) => {
                      setTiInstance(instance);
                      return instance;
                    }}
                    className={elementFontStyles}
                  />
                </InView>
              </label>
            )}

            {!example.element && (
              <InView>
                <TypeIt
                  className={elementFontStyles}
                  options={example.options}
                  getBeforeInit={(tiInstance) => {
                    return example.getBeforeInit(tiInstance);
                  }}
                  getAfterInit={(instance) => {
                    setTiInstance(instance);
                    return instance;
                  }}
                />
              </InView>
            )}
          </div>
          <div className="flex items-center gap-6">
            <button onClick={resetInstance} className="button">
              Reset
            </button>

            {example.allowFreeze && (
              <button onClick={toggleFreeze} className="button">
                {isFrozen ? "Unfreeze" : "Freeze"}
              </button>
            )}
          </div>
        </div>

        <CopyComponent />
      </div>

      {!isLast && <ListDivider className="my-10 md:my-24" />}
    </div>
  );
}
