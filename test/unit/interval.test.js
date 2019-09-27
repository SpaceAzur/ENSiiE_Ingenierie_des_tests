const Interval = require('../../src/interval');

test("Common interval", () => {
    const interval1 = new Interval(2,10);
    const interval2 = new Interval(8,15);
    expect(interval1.overlaps(interval2)).toBeTruthy;
});

test("No commom interval", () => {
    const interval1 = new Interval(2,10);
    const interval2 = new Interval(12,15);
    expect(interval1.overlaps(interval2)).toBeFalsy;
});

test("Interval is include", () => {
    const interval1 = new Interval(2,10);
    const interval2 = new Interval(4,9);
    expect(interval1.includes(interval2)).toBeTruthy;
});

test("Interval is NOT include", () => {
    const interval1 = new Interval(2,10);
    const interval2 = new Interval(6,15);
    expect(interval1.includes(interval2)).toBeFalsy;
});

// test("Two intervals are Unified", () => {
//     const interval1 = new Interval(2,10);
//     const interval2 = new Interval(6,15);
//     expect(interval1.union(interval2)).toContain([{"end":15,"start":2}]);
// });

// test("Two separate intervals return two intervals", () => {
//     const interval1 = new Interval(2,8);
//     const interval2 = new Interval(10,15);
//     expect(interval1.union(interval2)).toContain([{"end":8,"start":2},{"end":15,"start":10}]);
// });