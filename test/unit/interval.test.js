const Interval = require('../../src/interval');

test("Common interval", () => {
    const interval1 = new Interval(2,10);
    const interval2 = new Interval(8,15);
    expect(interval1.overlaps(interval2).toBeTruthy);
});

test("No commom interval", () => {
    const interval1 = new Interval(2,10);
    const interval2 = new Interval(12,15);
    expect(interval1.overlaps(interval2).toBeFalsy);
});
