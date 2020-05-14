# Node.js Promise reject use case survey

Today, Node.js handles unhandled rejections by emitting a deprecation warning to stderr. The warning shows the stack where the rejection happened, and states that in future Node.js versions unhandled rejections will result on Node.js exitting with non-zero status code. We intend to remove the deprecation warning, replacing it with a stable behavior which might be different from the one described on the deprecation warning. We're running this survey to better understand how Node.js users are using Promises and how they are dealing with unhandled rejections today, so we can make an informed decision on how to move forward.

## What is a Promise rejection?

A Promise rejection indicates that something went wrong while executing a Promise or an async function. Rejections can occur on several situations: thorwing inside an async function or a `Promise` executor/then/catch/finally callback, when calling the `reject` callback of an `executor`, or when calling `Promise.reject`.

```js

Promise.reject()  // This will result in a rejection

new Promise((fulfill, reject) => {
  reject();  // This will result in a rejection
});

new Promise(() => {
  throw new Error();  // This will result in a rejection
}).then(() => {
  throw new Error();  // This will result in a rejection
}, () => {
  throw new Error();  // This will result in a rejection
}).catch(() => {
  throw new Error();  // This will result in a rejection
}).finally(() => {
  throw new Error();  // This will result in a rejection
});

async function () {
  throw new Error();  // This will result in a rejection
}

async function () {
  if (a === undefined)
    a();  // This will result in a rejection
}
```

## What is an unhandled rejection?

Rejections are designed to be handled asynchronously. In JavaScript, Promises can be handled when awaiting for a promise inside a try/catch block, or via .catch calls:


```js
async function foo() {
  throw new Error();
}

foo().catch(() => console.error("an error occured"));  // 1. Handled

try {
  await foo();
} catch(e) {  // 2. Handled
  console.error("an error occured")
}

foo(); // 3. Unhandled, but execution continues

const rejected = foo(); // 4. Unhandled on current event loop tick

// 4. ... but handled asynchronously when the setTimeout callback is popped from
// the event loop
setTimeout(() => rejected.catch(() => console.error("an error occured")), 100);
```

An unhandled rejection is a rejection which hasn't been handled yet. It might be handled in the future, like example 4, but it might also stay unhandled forever (like example 3).

## Are you currently using Promises, async/await, a mix, or neither?

Assume using as creating your own `new Promise`, `Promise.resolve`, and `async function`; or using libraries that produce Promises (that you use with `.then`/`.catch`/`.finally`, or with `await`)

(Multiple choice)

  - [ ] Promises
  - [ ] async/await
  - [ ] Not writing Promise-based code or using Promise-based libraries

## How are you handling rejections today?

When consuming Promises, async functions or thenables, which of the options below do you use to handle rejections?

(Multiple choice)

  - [ ] `.catch()`
  - [ ] `try / catch` wrapping an `await` operation
  - [ ] Ignore the rejection
  - [ ] Not writing Promise-based code or using Promise-based libraries

## Do you know that Node.js has a global handled for unhandled rejections (`process.on('unhandledRejection')`)? If so, do you use it?
 
  - [ ] I use `process.on('unhandledRejection')`
  - [ ] I don't use `process.on('unhandledRejection')`
  - [ ] I didn't know `process.on('unhandledRejection')` existed

## Do you know that Node.js has a flag to change the behavior of unhandled rejections `--unhandled-rejections`? If so, do you use it?

  - [ ] I use `--unhandled-rejections` set to `'strict'`
  - [ ] I use `--unhandled-rejections` set to `'warn'`
  - [ ] I use `--unhandled-rejections` set to `'none'`
  - [ ] I don't use `--unhandled-rejections`
  - [ ] I didn't know `--unhandled-rejections` existed

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

For example:

```js
async function error() {
  throw new Error();
}
error();
```

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
