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

test("union() Two intervals are Unified", () => {
    const interval1 = new Interval(2,10);
    const interval2 = new Interval(6,15);
    expect(interval1.union(interval2)).toEqual(expect.arrayContaining([expect.objectContaining({"end":15,"start":2})]));
});

test("union() Two intervals are Unified", () => {
    const interval1 = new Interval(2,10);
    const interval2 = new Interval(6,15);
    expect(interval1.union(interval2)).toEqual(expect.arrayContaining([expect.objectContaining({"end":15,"start":2})]));
});

test("union() Two intervals are distincts", () => {
    const interval1 = new Interval(2,8);
    const interval2 = new Interval(10,15);
    expect(interval1.union(interval2)).toEqual(expect.arrayContaining([{"end": 8, "start": 2}, {"end": 15, "start": 10}]));
    expect(interval2.union(interval1)).toEqual(expect.arrayContaining([{"end": 8, "start": 2}, {"end": 15, "start": 10}]));
});

test("union() Two intervals are equal", () => {
    const interval1 = new Interval(2,8);
    const interval2 = new Interval(2,8);
    expect(interval1.union(interval2)).toEqual(expect.arrayContaining([{"end": 8, "start": 2}]));
    expect(interval2.union(interval1)).toEqual(expect.arrayContaining([{"end": 8, "start": 2}]));
});

test("ToString() return a String type or Null", () => {
    const interval1 = new Interval(2,10);
    expect(interval1.toString()).toBeDefined();
});

test("intersection() there is no intersection ( empty array[])", () => {
    const interval1 = new Interval(2,8);
    const interval2 = new Interval(9,12);
    expect(interval1.intersection(interval2)).toStrictEqual([]);
});

test("intersection() the intersection is one point", () => {
    const interval1 = new Interval(2,8);
    const interval2 = new Interval(8,12);
    expect(interval1.intersection(interval2)).toEqual(8);
});

test("intersection() this.interval DEVANT interval OK ", () => {
    const interval1 = new Interval(8,12);
    const interval2 = new Interval(6,10);
    expect(interval1.intersection(interval2)).toEqual({"end": 10, "start": 8});
});

test("exclusion() l'incluson de 2 intervals donne les 2 intervals d'exclusion V1", () => {
    const interval1 = new Interval(9,12);
    const interval2 = new Interval(2,10);
    expect(interval1.exclusion(interval2)).toEqual(expect.arrayContaining([{"end": 9, "start": 2}, {"end": 12, "start": 10}]));
});

test("exclusion() l'incluson de 2 intervals donne les 2 intervals d'exclusion V2", () => {
    const interval1 = new Interval(2,10);
    const interval2 = new Interval(9,12);
    expect(interval2.exclusion(interval1)).toEqual(expect.arrayContaining([{"end": 9, "start": 2}, {"end": 12, "start": 10}]));
});

