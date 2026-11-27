import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { engineeringCheckboxChecked } from "./engineeringTitle";

describe("engineering titled checkbox", () => {
  it("pre-ticks from the title rule and keeps an explicit no", () => {
    assert.equal(engineeringCheckboxChecked(null, true), true);
    assert.equal(engineeringCheckboxChecked(null, false), false);
    assert.equal(engineeringCheckboxChecked(false, true), false);
    assert.equal(engineeringCheckboxChecked(true, false), true);
  });
});
