# About Components

This directory can be freely configured to suit the nature of your project.

This template don't use any UI libraries for the reasons mentioned above. Instead of using UI libraries, raw CSS is used. However, you can install any UI libraries as you need.

You can also change the directory structure according to the nature of your project.

## Classification of the sample components

Atomic Design has a lot of problems when it comes to creating actual components on the front-end.

For example:
- If you use a UI library (such as MUI), you don't need to follow Atomic Design.
- There is little benefit in separating Atoms and Molecules & it's hard to get the same idea in the team.
- Consequently, anything can be added to Organisms, and it becomes bloated.

So we decided to make the following rules in the file structure:
- ui: Components that are responsible for their appearance and are used throughout the application.
- domain: A component that has domain-dependent logic and state(including Redux) and can be mounted to achieve the expected role.
- layouts: Components for adjusting the layout.
- functional: Components to be used when custom hooks are not sufficient.
- pages: Components that work as a single page and are called by routers.

### ui

ui: A component that can be used throughout an application to unify the design.

It is domain-independent and can be reused by changing its behavior based on the value of props.

If the component itself has margins, it is difficult to reuse, so it is preferable to use the layouts component to adjust the layout at the destination.

It is similar to Atoms and Molecules in Atomic Design.

Example: confirmation dialog, label, button

### domain

A component that depends on a domain or a specific State.

It is desirable to have a logic or state that depends on the domain and can be mounted to achieve the expected role.

It is similar to Organisms in Atomic Design.

Example: article list, input form

### layout

A component to adjust the layout.

It receives the component in props and adjusts the margins and layout.

This eliminates the need to have margins in the ui component, making it easier to reuse.

Similar to Templates in Atomic Design.

Examples: header, footer, sidebar, page content section.

### functional

A component that has some function and can be reused.

Components that are difficult to absorb with custom hooks, such as components that need to be mounted according to specific conditions, are preferred.

Examples: Error Boundary, authorization component.

### pages

Page component.

Create one component per page, and mount it by path in React Router.

Example: Dashboard, article list, article creation
