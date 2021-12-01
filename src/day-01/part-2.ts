// Group values into windows that are three values long.
// Sum each group of three, and count how many windows'
// sums are greater than the previous windows' sum.

// E.g., whether B > A, C > B, etc.:

// 199  A
// 200  A B
// 208  A B C
// 210    B C D
// 200  E   C D
// 207  E F   D
// 240  E F G
// 269    F G H
// 260      G H
// 263        H

const part2 = Deno.readTextFileSync("input.txt")
    .split(/\s+/)
    // First, reduce into an array of 3-value sums. There may be
    // tailing values if there aren't exactly a multiple-of-three
    // number of lines, but the problem said we can ignore those
    // values.
    .reduce<number[]>((acc, curr, i, arr) => {
        if (i > 1 && !/\s+/.test(curr)) {
            acc.push(+arr[i - 2] + +arr[i - 1] + +curr);
        }

        return acc;
    }, [])
    // Then compare, just like in part 1.
    .reduce<number>((acc, curr, i, arr) => {
        if (i > 0 && curr > arr[i - 1]) {
            acc++;
        }

        return acc;
    }, 0);

console.log(`The result is "${part2}".`);
