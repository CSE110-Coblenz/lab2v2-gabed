import { describe, it, expect } from "vitest";
import { snacks } from "./snacks";
import { people } from "./people";

describe("snacks", () => {
  it("should have at least 3 items", () => {
    expect(snacks.length).toBeGreaterThanOrEqual(3);
  });

  it("should include ''", () => {
    expect(snacks).toContain("gummies");
  });
});

describe("people", () => {
  it("should have at least 3 items", () => {
    expect(people.length).toBeGreaterThanOrEqual(3);
  });

  it("should include 'Lebron'", () => {
    expect(people).toContain("Lebron");
  });
});