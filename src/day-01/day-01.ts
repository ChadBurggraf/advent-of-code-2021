// Count the number of lines whose integer value
// is greater than the previous line.
const result = Deno.readTextFileSync("input.txt")
    .split(/\s+/)
    .reduce<number>((acc, curr, i, arr) => {
        if (i > 0 && !/s+/.test(curr) && +curr > +arr[i - 1]) {
            acc++;
        }

        return acc;
    }, 0);

console.log(`The result is "${result}".`);
