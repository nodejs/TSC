# Node.js Promise reject use case survey

## Are you currently using Promises, async/await, a mix, or neither?

Assume using as creating your own `new Promise` and `async function`

(Multiple choice)

  - [ ] Promises
  - [ ] async/await
  - [ ] Not writing Promise-based code

## How are you handling rejections today?

When consuming Promises, async functions or thenables, which of the options below do you use to handle rejections?

(Multiple choice)

  - [ ] `.catch()`
  - [ ] `try / catch` wrapping an `await` operation
  - [ ] Ignore the rejection
  - [ ] Not writing Promise-based code

## Do you use `process.on('unhandledRejection')` as a global handler for unhandled rejections?
 
  - [ ] Yes
  - [ ] No

## Do you use the `--unhandled-rejections` command-line flag as a global handler for unhandled rejections?

  - [ ] Yes
  - [ ] No

## Are you using Promises in customer facing, production applications?

  - [ ] Yes
  - [ ] No
  - [ ] I don't know

## Which of the use cases described below do you spend most of your time on?

  - [ ] Third-party libraries
  - [ ] Command-line tools
  - [ ] Web servers
  - [ ] Computation-heavy processing
  - [ ] Desktop applications
  - [ ] Other (please elaborate)

## When a rejected promise doesn't have a catch handler, what is the behavior of your application today? 

  - [ ] Node.js logs a warning alongside a deprecation notice, execution continues
  - [ ] Logs a warning, continue running, no deprecation warning
  - [ ] Logs a warning, continue running, no deprecation warning, exits with an error code when program finishes
  - [ ] Exit as soon as possible
  - [ ] Other (please elaborate)

## What should be the default Node.js behavior for unhandled rejections?

Consider the following modes:

  - `strict`: throw and crash as soon as possible (on nextTick). Can't be overriden by unhandledRejection listener
  - `throw`: throw and crash as soon as possible (on nextTick). Can be overriden by unhandledRejection listener
  - `warn`: outputs a warning as soon as possible (on nextTick). Continues running after the warning is emitted. If the process exits and no status code was set, the process exits with a success code
  - `warn-with-error`: outputs a warning as soon as possible (on nextTick). Continues running after the warning is emitted. If the process exits and no status code was set, the process exits with an error code
  - `none`: do nothing

Which one you think should be the default on Node.js?

  - [ ] `strict`
  - [ ] `throw`
  - [ ] `warn`
  - [ ] `warn-with-error`
  - [ ] `none`
  - [ ] Other (please elaborate)

# Are you aware that not handling rejections may cause memory leaks or denial of service vulnerabilities?

  - [  ] Yes
  - [  ] No
  - [  ] Unhandled rejections do not cause memory leaks or denial of service vulnerabilities
