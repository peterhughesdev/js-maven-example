describe("The function bar", function() {
  it("returns a function", function() {
    expect(typeof bar()).toBe("function");
  });

  it("passes its argument to the returned function", function() {
  	var f = bar("foo");
    expect(f()).toBe("foo");
  });

  it("does not care about argument type", function() {
  	var a = 1, b = {};

  	var f1 = bar(a);
  	expect(f1()).toBe(a);

  	var f2 = bar(b);
  	expect(f2()).toBe(b);
  });
});