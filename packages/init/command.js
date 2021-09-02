/*
 * @Description:
 * @Author: changqing
 * @Date: 2021-09-02 10:35:04
 * @LastEditTime: 2021-09-02 10:38:55
 * @LastEditors: changqing
 * @Usage:
 */
exports.command = "init";
exports.describe = "创建一个新的lerna仓库";
exports.builder = (yargs) => {
  console.log("init builder");
};
//init命令的真正的处理逻辑
exports.handler = (argv) => {
  console.log("执行init命令", argv);
  return require(".")(argv);
};
