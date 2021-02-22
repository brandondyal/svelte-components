module.exports = {
  description: 'Create a javascript package',
  prompts: [
    {
      type: 'input',
      name: 'packageName',
      message: 'package name'
    },
    {
      type: 'input',
      name: 'packageDescription',
      message: 'package description'
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
      path: 'packages/{{kebabCase packageName}}/lib/{{kebabCase packageName}}.js',
      templateFile: 'plop/templates/package/main.js.hbs'
    },
    {
      type: 'add',
      path: 'packages/{{kebabCase packageName}}/tests/{{kebabCase packageName}}.test.js',
      templateFile: 'plop/templates/package/main.test.js.hbs'
    },
    {
      type: 'add',
      path: 'packages/{{kebabCase packageName}}/package.json',
      templateFile: 'plop/templates/package/package.json.hbs'
    },
    {
      type: 'add',
      path: 'packages/{{kebabCase packageName}}/README.md',
      templateFile: 'plop/templates/package/README.md.hbs'
    }
  ]
};