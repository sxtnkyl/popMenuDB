# popMenuDB

A local postgres db and api for restaurant menus

## Directories:

### /popMenuTypeOrm

My familiar language is Javascript so this directory is built with typescript and typeorm, while utilizing jest for unit tests.

TypeOrm is a Typescript compatible ORM that integrates easily with postrges and provides a [quick start setup](https://typeorm.io/#quick-start) with
`npx typeorm init`

When using typeOrm, the [Entity](https://typeorm.io/entities#what-is-entity) is the model decorator, or a class that maps to a table.

Prerequisites include having node.js installed, a local postgresdb running with db details matching in `/popMenuTypeOrm/data-source.js`, and global Typescript installed.

To run, follow run steps within `/popMenuTypeOrm/README.md`.

## Requirement Notes

My thoughts on the given completion criteria

### Level 1: Basics

- Create an object model for Menu and MenuItem classes
  - one-to-many relationship for Menu-to-MenuItem

### Level 2: Multiple Menus

- update the relationships so that multiple Menu instances can associate with multiple MenuItem and multiple MenuItem can associate with multiple Menu.
- adding a Unique decorator to the MenuItem, added JoinTable to the owning Menu to connect MenuItem, and
- database has not yet been set up, so unit test still reflect properties only
  - interesting note: might be worth adding a multi column unique constraint to MenuItem. Currently, by making the name column unique, one restaurant may have ownership over all instances of a common item. For example, Red Lobster may have 'Chicken Wings', which would mean KFC could not. In this case a multi-column-unique-constraint may be beneficial to associate a restaurant id before name on the MenuItem table.
