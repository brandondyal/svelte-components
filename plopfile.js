const { execSync } = require('child_process');
const { createPackage } = require('./plop/generators');

module.exports = (plop) => {
  plop.setHelper('userFullName', () => {
    const name = execSync('git config --global --includes user.name').toString();
    return name.replace(/\n$/, '').trim();
  });

  plop.setHelper('userEmail', () => {
    const name = execSync('git config --global --includes user.email').toString();
    return name.replace(/\n$/, '').trim();
  });

  plop.setGenerator('package', createPackage);
};