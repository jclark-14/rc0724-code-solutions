# react-context-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of React "context"?

- to pass state or data to multiple components without having to use props

- What values can be stored in context?

- any js variable/object

- How do you create context and make it available to the components?

- with the create context hook

const context = createContext(value)

- How do you access the context values?

- by calling the useContext() hook

- When would you use context? (in addition to the best answer: "rarely")

- Rarely. For global data that most components will need access to that can't easily be passed as props

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
