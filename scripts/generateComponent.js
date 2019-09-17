// e.g.
//   yarn generate Foo
//   yarn generate Form/Foo

const fs = require('fs-extra');
const argv = require('yargs').argv;
const replace = require('replace-in-file');
const Renamer = require('renamer');
const renamer = new Renamer();
const chalk = require('chalk');

try {
    const componentPath = argv._[0];

    if (!componentPath) {
        throw new Error(
            'No component name defined, e.g. yarn generate MyComponent'
        );
    }

    const componentName = componentPath.split('/').pop();

    const srcPath = 'scripts/MyComponent';
    const destPath = `src/${componentPath}`;
    const files = [`${destPath}/*`, `${destPath}/**/*`];

    if (fs.existsSync(destPath)) {
        throw new Error('Component path already exists');
    }

    fs.copySync(srcPath, destPath);

    // replace text in files
    replace.sync({
        files,
        from: /MyComponent/g,
        to: componentName,
    });
    replace.sync({
        files,
        from: /mycomponent/g,
        to: componentName.toLowerCase(),
    });

    // rename files
    renamer.rename({
        files: [`${destPath}/*`],
        find: 'MyComponent',
        replace: componentName,
    });

    console.log('✅  Generated new component:', chalk.bold(componentPath));
} catch (error) {
    console.error(chalk.red(error));
    process.exitCode = 1;
}
