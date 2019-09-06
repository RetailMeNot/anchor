// e.g. yarn generate Foo

const fs = require('fs-extra');
const argv = require('yargs').argv;
const replace = require('replace-in-file');
const Renamer = require('renamer');
const renamer = new Renamer();

const componentName = argv._[0];

if (componentName) {
    const srcPath = 'scripts/MyComponent';
    const destPath = `src/${componentName}`;
    const files = [`${destPath}/*`, `${destPath}/**/*`];

    try {
        // copy template component
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

        console.log(`Generated new component: ${componentName}`);
    } catch (error) {
        console.error('Error occurred:', error);
    }
} else {
    console.error('No component name defined, e.g. yarn generate MyComponent');
}
