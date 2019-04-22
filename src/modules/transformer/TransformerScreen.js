import React from "react";

export function TransformerScreen() {
  const value = "<b>hi</b>";
  return (
    <section className="section vh100 pv0">
      <div
        className="container vh100"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}
      >
        <div className="transformer-input mb1">
          <textarea
            className="textarea dark-bg mb1"
            placeholder="Enter your show notes"
            rows="10"
          />

          <button className="button is-dark">Transform</button>
        </div>

        <div className="transformer-output">
          <div
            className="transformer-output-editor textarea dark-bg mb1"
            contentEditable
            suppressContentEditableWarning
            dangerouslySetInnerHTML={{ __html: value }}
          />

          <button className="button is-dark">Clear</button>
        </div>
      </div>
    </section>
  );
}
