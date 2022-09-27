import { Reflect } from "https://deno.land/x/reflect_metadata@v0.1.12/mod.ts";

// deno-lint-ignore no-explicit-any
type Constructor<T = unknown> = new (...args: any[]) => T;

function decorator<T>(_: Constructor<T>): void {}

@decorator
class Example {
  constructor(a: string, b: number, c: Example) {}
}

console.log(Reflect.getMetadata("design:paramtypes", Example));
// "[ [Function: String], [Function: Number], [Function: Example] ]"  