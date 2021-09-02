/*
 * @Description:
 * @Author: changqing
 * @Date: 2021-09-02 11:09:36
 * @LastEditTime: 2021-09-02 11:12:00
 * @LastEditors: changqing
 * @Usage:
 */
exports.command = "create <name>";
exports.describe = "创建一个新的lerna管理的包";
exports.builder = (yargs) => {
  console.log("create builder");
  yargs
    .positional("name", {
      // lerna create xxx
      type: "string",
      describe:
        "A custom package location, defaulting to the first configured package location",
    })
    .options({
      // lerna crate xxx --registry=http://npm.org
      registry: {
        group: "Command Groups:",
        describe: "配置包的发布的仓库地址",
        type: "string",
      },
    });
};
//init命令的真正的处理逻辑
exports.handler = (argv) => {
  console.log("执行init命令", argv);
  return require(".")(argv);
};
