import { describe, it, expect } from "vitest";
import { snacks } from "./snacks";
import { drinks } from "./drinks";

describe("snacks", () => {
  it("should have at least 3 items", () => {
    expect(snacks.length).toBeGreaterThanOrEqual(3);
  });

  it("should include 'cheetohs'", () => {
    expect(snacks).toContain("cheetohs");
  });
});

//custom drinks
describe("drinks", () => {
  it("should have at least 3 drinks", () => {
    expect(drinks.length).toBeGreaterThanOrEqual(3);
  });

  it("should have 'coke'", () => {
    expect(drinks).toContain("coke");
  });
});
