# typescript-operators-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?

- && checks for truthiness of left variable and returns the right variable

|| checks for falsy variable. will return right variable if left is false

- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?

-short-circuit evaluation is when the operator does not find what it is looking for, it will stop and return the value of the original variable

if && variable is found to be false then it will return the original value of the variable. If || variable is found to be true then it will return
the original value of the variable

- What is the `??` (nullish coalescing) operator and how does it differ from `||`?

- ?? checks for null or undefined. || checks for general falsy values including '' or 0

- What is the `?:` (ternary) operator? How does it differ from `if/else`?

- ?: evaluates and expression. if the expression is true it returns the next variable listed after ? if it evaluates false it returns the
  2nd variable listed. it is a simplified way of writing if/else

- What is the `?.` (optional chaining) operator? When would you use it?

- ?. checks is objects, properties or values are null or undefined and will return undefined. preventing run-time errors. You use it for accessing properties of objects that may not exist.

- What is `...` (spread) syntax? How do you use it with arrays and objects?

- allows iterable variables to be expanded and and manipulated. with arrays [..arr, element]. with objects {..obj, prop:value}

- What data types can be spread into an array? Into an object?

- any data type?

- How does spread syntax differ from rest syntax?

- Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
