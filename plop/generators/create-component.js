module.exports = {
  description: 'Create a Svelte component',
  prompts: [
    {
      type: 'input',
      name: 'componentName',
      message: 'component name'
    },
    {
      type: 'input',
      name: 'packageDescription',
      message: 'component description'
    },
    {
      type: 'input',
      name: 'packageKeywords',
      message: 'package keywords (space separated)',
      // fix me
      validate: (input) => input !== undefined && input !== null && input.trim().length > 0,
      filter: (input) => 
        input
          .split(' ')
          .map((keyword) => `"${keyword}"`)
          .join(', ')
    }
  ],
  actions: [
    {
      type: 'add',
      path: 'packages/{{kebabCase componentName}}/index.js',
      templateFile: 'plop/templates/component/index.js.hbs'
    },
    {
      type: 'add',
      path: 'packages/{{kebabCase componentName}}/{{pascalCase componentName}}.svelte',
      templateFile: 'plop/templates/component/Component.svelte.hbs'
    },
    {
      type: 'add',
      path: 'packages/{{kebabCase componentName}}/tests/{{pascalCase componentName}}.spec.js',
      templateFile: 'plop/templates/component/Component.test.hbs'
    },
    {
      type: 'add',
      path: 'packages/{{kebabCase componentName}}/package.json',
      templateFile: 'plop/templates/component/package.json.hbs'
    },
    {
      type: 'add',
      path: 'packages/{{kebabCase componentName}}/README.md',
      templateFile: 'plop/templates/component/README.md.hbs'
    }
  ]
};