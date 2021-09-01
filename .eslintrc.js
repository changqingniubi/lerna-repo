/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-08-31 21:05:13
 * @LastEditTime: 2021-08-31 21:05:13
 * @LastEditors: changqing
 * @Usage: 
 */
module.exports = {
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module",
  },
  //这是一个prettier插件，它可以关闭跟eslint冲突的那些规则，走自己的风格规则
  plugins: ["prettier"],
  rules: {
    "no-unused-vars": ["off"],
    //如果不符合prettier的规范的话会报错，进行错误提示
    "prettier/prettier": ["error", { endOfLine: "auto" }],
  },
  env: { node: true },
};
