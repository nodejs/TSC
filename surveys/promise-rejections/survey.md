# Node.js Promise reject use case survey

Today, Node.js handles unhandled rejections by emitting a deprecation warning to stderr. The warning shows the stack where the rejection happened, and states that in future Node.js versions unhandled rejections will result in Node.js exiting with non-zero status code. We intend to remove the deprecation warning, replacing it with a stable behavior which might be different from the one described on the deprecation warning. We're running this survey to better understand how Node.js users are using Promises and how they are dealing with unhandled rejections today, so we can make an informed decision on how to move forward.

## What is a Promise rejection?

A Promise rejection indicates that something went wrong while executing a Promise or an async function. Rejections can occur in several situations: throwing inside an async function or a `Promise` executor/then/catch/finally callback, when calling the `reject` callback of an `executor`, or when calling `Promise.reject`.

```js
Promise.reject(new Error())  // This will result in a rejection

new Promise((fulfill, reject) => {
  reject(new Error());  // This will result in a rejection
});

new Promise(() => {
  throw new Error();  // This will result in a rejection
})

Promise.resolve().then(() => {
  throw new Error();  // This will result in a rejection
})

Promise.reject().then(() = {}, () => {
  throw new Error();  // This will result in a rejection
}

Promise.reject().catch(() => {
  throw new Error();  // This will result in a rejection
})

Promise.resolve().finally(() => {
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

Adding the `async` keyword to a function will turn any exceptions thrown inside that function (or any throw propagated from other functions called within it) into a rejection. The same happens when refactoring callback based code that throws into async functions / Promises. Below is an example of a callback based code refactored to Promises where exceptions become rejections:

```js
// Callback version
const { readFile } = require('fs');

function readJsonFile(file, cb) {
  readFile(file, (err, data) => {
    if (err) {
      // If error while reading file, propagate the error via callback
      return cb(err, null);
    }
    // Unexpected invalid JSON input, code will throw
    cb(err, JSON.parse(data));
  });
}
```

```js
const { readFile } = require('fs').promises;

async function readJsonFile(file) {
  // Promise is rejected if fails to read or if unexpected JSON input.
  return JSON.parse(await readFile(file));
}
```

## What is an unhandled rejection?

There are two ways to handle rejections: by attaching a `.catch` handler to it,
or by awaiting on the promise within a try/catch block. In both cases, the
handling of the rejection (the execution of the callback passed to `.catch`, or
the execution of the `catch {}` block) will happen in a future turn of the
event loop.

Promises are designed so that attaching handlers or awaiting can be done at any
point in time, from when the Promise was created (possibly while it's still
pending), to right before the program finishes execution.

A rejection is considered unhandled from the point it happens until the point
where a handler is attached to the Promise or the Promise is awaited within a
`catch {}` block. Below are a few examples of handled and unhandled rejections.

```js
async function foo() {
  throw new Error();
}

foo()  // 1. Unhandled at this point
  .catch(() => console.error("an error occured"));  // 2. Now it's handled

try {
  await foo();
} catch(e) {  // 3. Handled
  console.error("an error occured")
}

foo(); // 4. Unhandled, but execution continues

const rejected = foo(); // 5. Unhandled on current event loop turn, but handled
                        // in a future turn of the event loop when the
                        // setTimeout callback below is executed.
setTimeout(() => rejected.catch(() => console.error("an error occured")), 100);
```

As we can see in the examples, an unhandled rejection might be handled in the future, like example 5, but it might also stay unhandled forever (like example 4).

Certain unhandled rejections may in rare cases leave your application in a non-deterministic and unsafe state, whether it's internal application state (including memory leaks), external resources used by your application (say, file handles or database connections), or external state (say, consistency of data in a database).

As an example, the following server is not sending a response back to the client, causing a socket leak and a possible Denial of Service attack:

```js
const http = require('http')
const server = http.createServer(handle)

server.listen(3000)

function handle (req, res) {
  doStuff()
    .then((body) => {
      res.end(body)
    })
}

function doStuff () {
  if (Math.random() < 0.5) {
    return Promise.reject(new Error('kaboom'))
  }

  return Promise.resolve('hello world')
}
```

## Are you currently using Promises, async functions, a mix, or neither?

(Multiple choice)

  - [ ] Native Promises (`new Promise`, `Promise.resolve`, `Promise.reject`)
  - [ ] Third-party Promises (for example: Bluebird)
  - [ ] async functions
  - [ ] Not writing Promise-based code or using Promise-based libraries

## How are you handling rejections today?

When consuming Promises, async functions or thenables, which of the options below do you use to handle rejections?

(Multiple choice)

  - [ ] `.catch()`
  - [ ] `try / catch` wrapping an `await` operation
  - [ ] Leave the handling to someone else (my caller, global handler, etc.)
  - [ ] Not writing Promise-based code or using Promise-based libraries

## Do you know that Node.js has a global handler for unhandled rejections (`process.on('unhandledRejection')`)? If so, do you use it?
 
  - [ ] I use `process.on('unhandledRejection')`
  - [ ] I don't use `process.on('unhandledRejection')`
  - [ ] I didn't know `process.on('unhandledRejection')` existed

## Do you know that Node.js has a flag to change the behavior of unhandled rejections `--unhandled-rejections`? If so, do you use it?

  - [ ] I use `--unhandled-rejections` set to `'strict'`
  - [ ] I use `--unhandled-rejections` set to `'warn'`
  - [ ] I use `--unhandled-rejections` set to `'none'`
  - [ ] I don't use `--unhandled-rejections`
  - [ ] I use a third-party library (like make-promises-safe) to deal with unhandled rejections
  - [ ] I didn't know `--unhandled-rejections` existed


## Do you know that Node.js has a global handler for uncaught exception (`process.on('uncaughtException')`)? If so, do you use it?
 
  - [ ] I use `process.on('uncaughtException')`
  - [ ] I don't use `process.on('uncaughtException')`
  - [ ] I didn't know `process.on('uncaughtException')` existed

Are you using Promises in any of the following kinds of applications? (check all that apply)

  - [ ] Production-level code
  - [ ] Tests
  - [ ] Benchmarks
  - [ ] Build pipeline / infrastructure
  - [ ] Examples and Demos
  - [ ] Other (please describe)

## Which of the use cases described below have you spent most of your time on?

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

If working on multiple applications or projects, choose the answer that describes the behavior on your biggest project, or on the project you worked the most.

  - [ ] Node.js logs a warning alongside a deprecation notice, execution continues (this is the default Node.js behavior today)
  - [ ] Logs a warning, continue running, no deprecation warning
  - [ ] Logs a warning, continue running, no deprecation warning, exits with an error code when program finishes
  - [ ] Exit as soon as possible (this is the default Node.js behavior for uncaught exceptions today)
  - [ ] Other (please elaborate)

## How do you deal with managing resources wrapped with promises when an unhandled rejection occurs?

Node.js code may wrap resource managing code in async/await:

```js
// if this method wasn't async, node would crash by default
myEmitter.on('event', async () => {
  await databaseConnection.getValue() // throws an error
  databaseConnection.release(); // oops, release is never called
});
```

If the above code throws, a database handle might leak which can in some cases eventually lead to a cascading failure and a denial of service.

How do tools or servers you author deal with this case?

 - [ ] I don't author code where this might be an issue (for example, code I author does not connect to third party resources).
 - [ ] I take extra care to deal with these cases individually and perform monitoring on database handles with alerts.
 - [ ] I make sure to restart my server if code like `databaseConnection.release` a throws, like with `uncaughtException`s.
 - [ ] In theory this can be an issue with code I author but in practice things have been working out fine for me and I ignore these errors.
 - [ ] The server keeps running, I log uncaught exceptions and unhandled rejections to monitoring and use a tool to notify engineers if such a bug occurs.

## What should be the default Node.js behavior for unhandled rejections?

Consider the following modes:

  - `strict`: raise an uncaught exception similar to `throw new Error()` that is not caught. `unhandledRejection` listeners do not prevent raising the exception
  - `throw`: raise an uncaught exception similar to `throw new Error()` that is not caught. `unhandledRejection` listeners take precedence and prevent raising the exception
  - `warn`: outputs a warning as soon as possible. Continues running after the warning is emitted. If the process exits and no status code was set, the process exits with a success code. This is similar to what browser consoles do
  - `warn-with-error`: outputs a warning as soon as possible. Continues running after the warning is emitted. If the process exits and no status code was set, the process exits with an error code
  - `none`: do nothing

For all the modes, the action (raise an exception output a warning) will happen on `nextTick`.

Which one you think should be the default on Node.js?

  - [ ] `strict`
  - [ ] `throw`
  - [ ] `warn`
  - [ ] `warn-with-error`
  - [ ] `none`
  - [ ] Other (please elaborate)
