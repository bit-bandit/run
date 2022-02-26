# `run` - Command runner.

`run` is a simple, YAML-based command runner.

## Synopsis

```
run [commands]
```

```
run -f [runfile] [commands]
```

## Usage

```yaml
# file name: runfile
# each action is represented as a list of commands,
# which `run` will execute in order.

test:
  - echo "Hello, World!"
  - printf "%s\n" "This is a test!"
```

```sh
# `run` searches for a YAML file name `runfile` in the current working 
# directory, if no argument for a specific runfile is provided.
# To specify a runfile, provide the flag `run -f='/location/of/runfile'`.
$ run test
Hello, World!
This is a test!
```

## CLI Flags

- `-f / --runfile` - Location of runfile.

## TODO

- Support local variables(?).
- Fix any bugs that may be present, particularly when it comes to parsing,
  and executing commands.

## License

0BSD
