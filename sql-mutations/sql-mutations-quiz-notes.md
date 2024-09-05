# sql-mutations-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the SQL _CRUD_ operations?

-Create = insert
Read = select
Update = Update
Delete = delete

- How do you add a row to a SQL table?

- insert keyword

insert into "table" ("attribute1", "attribute2")
values('value1', 'value2')

- How do you add multiple rows to a SQL table at once?

-insert into "table" ("attribute1", "attribute2")
values('value1a', 'value2a'),
('value1b', 'value2b')

- How do you update rows in a database table?

- With the update keyword

update "table"
set "attribute" = 'newValue'
where "attribute" = 'value'

- How do you delete rows from a database table?

- with the delete keyword

delete
from "table"
where "attribute" = 'value'

- Why is it important to include a `where` clause in your `update` and `delete` statements?

- Because you could update the entire an entire table attribute to one value by mistake or delete the entire table by mistake

- How do you accidentally delete or update all rows in a table?

- By not using the where clause in your delete or update statements

- How do you get back the modified row without a separate `select` statement?

- by using the returning keyword after your statement

- Why did you get an error when trying to delete certain films?

- Because the film we were trying to delete is being used by another record in the castMembers table disallowing the deletion

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
