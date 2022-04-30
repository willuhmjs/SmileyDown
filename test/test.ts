import { assertEquals } from "https://deno.land/std@0.137.0/testing/asserts.ts";
import { parse } from "../src/lib.ts"

Deno.test("url test", async () => {
  assertEquals(await Deno.readTextFile("test/expected.md"), parse(await Deno.readTextFile("test/example.sd")));
});