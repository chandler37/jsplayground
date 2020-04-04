import {
    adder,
    sha1
} from "./index";

test("adder adds properly", () => {
    expect(adder(2, 2)).toEqual(4);
});

test("sha1 hashes properly", () => {
    expect(sha1("testing 1, 2, 3")).toEqual("6277c9c288c51fec511f074d0026ee0c3e303683");
});

