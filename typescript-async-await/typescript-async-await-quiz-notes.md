# typescript-async-await-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `async` and `await` keywords used for?

- async is used to define an asynchronous function that will return a promise.

await is used inside an async function to pause the execution of the function until the promises is fulfilled or rejected

- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?

- async and await make asynchronous code appear as synchronous

- When do you use `async`?

- before the function keyword. before the function is defined

- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)

- in the body of the try function before the promise function is called. If you await a value that is not a promise, it is converted to a resolved promise by using Promise.resolve. the code is deferred to the event loop

- How do you handle errors with `await`?

- with the catch keyword

- What do `try`, `catch` and `throw` do? When do you use them?

- try keyword is equivalent to resolve promise, catch is equivalent to reject promise, The throw statement throws a user-defined exception

- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?

- the code will be executed right away. it could through a runtime error

- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?

- async/await seems to be a bit easier to write and follow

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
