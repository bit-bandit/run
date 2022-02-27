/**
 * @file run.ts - Main module file for `run`.
 * @author BitBandit - PK
 * @license: 0BSD
 */

import { parse } from "https://deno.land/std@0.127.0/flags/mod.ts";
import { parse as yamlparse } from "https://deno.land/std@0.127.0/encoding/yaml.ts";

const flags = await parse(Deno.args);
let yaml = `runfile`;

// Overwrite `yaml` variable if specified.
if (flags.hasOwnProperty("f")) {
  yaml = flags.f;
} else if (flags.hasOwnProperty("runfile")) {
  yaml = flags.runfile;
}

let parsedyaml: any = await yamlparse(await Deno.readTextFile(`./${yaml}`));

flags._.forEach(async function (arg: any) {
  if (parsedyaml.hasOwnProperty(arg)) {
    parsedyaml[`${arg}`].forEach(async function (exec: string) {
      // /bin/sh used to ensure compatability with systems that don't have bash installed.
      await Deno.run({ cmd: ["/bin/sh", "-c", `${exec}`] });
    });
  } else {
    throw new Error(`${arg}: Not found in runfile.`);
  }
});
