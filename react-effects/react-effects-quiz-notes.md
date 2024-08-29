# react-effects-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When is a component "mounted" to the DOM?

- root

- What is a React Effect?

- In React, useEffect is a React Hook that is used to perform side effects in function components, such as data fetching, subscriptions, or manually changing the DOM.

- When should you use an Effect and when should you not use an Effect?

-useEffect is used to perform side effects in function components, such as data fetching, subscriptions, or manually changing the DOM.

do not use for rendering logic or synchronous logic

- When do Effects run?

- on initial render, when dependencies changes, on cleanup

- What function is used to declare an Effect?

- useEffect() then you use a callback function useEffect(() =>{})

- What are Effect dependencies and how do you declare them?

- Dependencies Array. This is a list of values that the effect depends on. If any value in this array changes, the effect will re-run.

[dependency1, dependency2, ...]

- Why would you want to clean up from an Effect?

- clean-up is a mechanism to handle the clean-up of side effects when a component unmounts or when specific dependencies change. This is crucial for avoiding memory leaks and ensuring that your component's side effects do not persist beyond their intended lifespan.

- How do you clean up from an Effect?

- with a return function in the useEffect callback function codeblock.

useEffect(() => {
// Set up side effects here

return () => {
// Clean-up side effects here
};
}, [dependencies]);

- When does the cleanup function run?

-This function is returned from the effect function and is called by React when the component unmounts or before the effect re-runs (when dependencies change).

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
