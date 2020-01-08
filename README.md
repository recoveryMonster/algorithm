# algorithm
学习数据结构及算法的仓库，相关算法通过 TypeScript 实现。

众所周知，Node.js 遵循的是 CommonJS 规范进行模块化开发，因为 ES6 在 JavaScript 标准中引入了官方的模块功能。因此，在这里都是用的是 ES6 模块导出。点击查看[相关差别及使用方法](https://recoverymonster.github.io/post/exportexport-default-he-exportsmoduleexports-de-qu-bie-yu-lian-xi/)。

由于 Node 中，ES6 导入还是一个实验功能，因此我们需要将文件扩展名由 js 修改为 mjs，并在 node 命令后添加 `--experimental-modules` 来执行代码。

同时本项目使用 TypeScript，因为它可以使用一些 JavaScript 没有提供的面向对象的概念，如接口和私有属性（在开发数据结构和排序算法时非常有用）。

