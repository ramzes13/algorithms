describe("A suite", function() {

  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });

  it("and can have a negative case", function() {
    expect(false).not.toBe(true);
  });

});

describe("A suite (some custom)", function() {
  
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });

  it("and can have a negative case", function() {
    expect(false).not.toBe(true);
  });

});

describe("A suite (other custom)", function() {
  
  xit("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });

  it("and can have a negative case", function() {
    expect(false).not.toBe(true);
  });

});