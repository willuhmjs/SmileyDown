import { red, yellow } from "https://deno.land/std@0.137.0/fmt/colors.ts"
import { readLines } from "https://deno.land/std@0.137.0/io/buffer.ts"
import { parse } from "https://deno.land/std@0.137.0/flags/mod.ts";
import { parse as parseDown } from "./lib.ts"

const argv = parse(Deno.args)

const error = (message: string) => console.error(red("error | ") + message);
const warn = (message: string) => console.warn(yellow("warn | ") + message);

const { i, input, o, output } = argv as Record<string, string>;

const parsedInput = await getInput()

if (!output && !o) warn("No output is specified, so I am outputting to the console.");

if (output || o) {
  await Deno.writeTextFile(output || o, parseDown(parsedInput));  
} else {
  console.log(parseDown(parsedInput));
}

async function getInput(): Promise<string> {
  if (!input && !i) {
  
    if (!Deno.isatty(Deno.stdin.rid)) {
      let str = ""
      for await (const l of readLines(Deno.stdin)) {
        str += (str ? "\n" : "") + l
      }
      return str
    }
  
    error("No input specified, please specify an input!");
    Deno.exit(1);

  } else return await Deno.readTextFile(input || i)
}
