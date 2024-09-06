# sql-join-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a foreign key?

- An ID the the primary and secondary table have in common

- How do you join two SQL tables? (Provide at least two syntaxes.)

- select "amount", "firstName", "lastName"
  from "payments"
  join "customers" using ("customerId")
  order by "amount" desc
  limit 10;

  select "p"."amount", "c"."firstName", "c"."lastName"
  from "payments" as "p"
  join "customers" as "c" using ("customerId")
  order by "p"."amount" desc
  limit 10;

- How do you temporarily rename columns or tables in a SQL statement?

- using the 'as' key work to rename
  from "payments" as "p"

- How do you create a one-to-many relationship between two tables?

- connecting 2 tables together with a foreign key

- How do you create a many-to-many relationship between two tables?

- connecting more than 2 tables together using more than 1 foreign key

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
