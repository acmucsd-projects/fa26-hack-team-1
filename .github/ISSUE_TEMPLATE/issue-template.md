---
name: Issue Template
about: template for assigning and creating issues for team
title: ''
labels: ''
assignees: ''

---

## Description
Create a reusable [name] component for [what it does / where it appears]. [One sentence on how it behaves or what it falls back to.]

Example: `<Name prop="value" />` should show [result].

## Image

## Tasks
- [ ] Create `[Name].jsx` and `[Name].module.css` in `src/components/[Name]/`
- [ ] Accept these props: `[prop]`, `[prop]`, `[prop]`
- [ ] [Main thing it renders]
- [ ] Support these variants/states:
  - `[variant]`: [where it's used]
  - `[variant]`: [where it's used]
- [ ] [Interaction, e.g. what happens on click]
- [ ] [Edge case, e.g. long text, empty, or missing data]
- [ ] Add hover and keyboard focus styles *(delete if not interactive)*
- [ ] Add an example of each variant/state to the `/components` page

## Additional Context
**Used in:** [pages or components]
**Needs:** [components that must be merged first, or "None"]

- [Hint or thing to look up]
- [What this component should NOT do]
- Get data through props, with no API calls inside the component.
- Use variables from `global.css` instead of typing hex colors. If a color is missing, ask before adding it.
- A `.module.css` file keeps styles inside this component. Use it with `import styles from './[Name].module.css'` and `className={styles.className}`.

**Before opening a PR:** run `npm run lint`, test [specific thing], and add a screenshot.
