import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { apiErrorMessage } from "./api";
import { partitionUploads } from "./uploadBatch";

describe("batch upload", () => {
  it("keeps all three selected files", () => {
    const files = [
      { name: "year-1.pdf", size: 1000 },
      { name: "year-2.pdf", size: 1000 },
      { name: "year-3.pdf", size: 1000 },
    ];
    const { accepted, errors } = partitionUploads(files, 10 * 1024 * 1024);
    assert.equal(accepted.length, 3);
    assert.deepEqual(errors, []);
  });
});

describe("api error text", () => {
  it("shows the specific message when the status text is Internal Server Error", () => {
    assert.equal(
      apiErrorMessage(
        { error: "Internal Server Error", message: "Job is already waiting" },
        500,
      ),
      "Job is already waiting",
    );
    assert.equal(
      apiErrorMessage({ error: "degreeLevel is required for Transcript and Certificate" }, 400),
      "degreeLevel is required for Transcript and Certificate",
    );
  });
});
