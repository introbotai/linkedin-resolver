---
trigger: always_on
---

1. All other comments except file header comment must be in lowercase.
2. All files must start with the following file header comment and leave 1 line after this file header comment:

```plaintext
/*
 *  {{1 line description of what this file does}}
 *  Created On {{0 prefixed date of month, ex: 19}} {{full month, ex: March}} {{4 digit year}}
 */
```

In the above snippet everything in "{{}}" is instructions for you to replace "{{}}" with that output of the instruction.

3. Must only use dash-case (kebab case) when creating files.
4. Prefer "if/else" instead of switch case statements.
5. Prefer functions and void TypeScript classes.
6. Prefer async/await than callbacks or promise chains, unless explicitly said so or there is a reason.
7. Split code files into logical chunks with filenames using dash-case, where no file is above 300 lines.
8. Always prefer named exports at the definition of variables, functions instead of default exporting or exporting at the bottom of files.
9. Never add try/catch to functions unless or until explicitly told by the developer, instead prefer to throw new Error() with an apt message.
10. Before completion of the task, always run `bun run type-check` to ensure you're not submitting broken code with errors.
11. No JSDOc comments please, regular comments using // is acceptable, but only if explicitly instructed by the developer.
12. To save tokens, instead of manually solving linting code style errors, you simply run `bun run lint` in the terminal and it'll fix every file.
