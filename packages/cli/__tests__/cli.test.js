/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-08-31 19:23:01
 * @LastEditTime: 2021-08-31 19:54:58
 * @LastEditors: changqing
 * @Usage: 
 */
'use strict';

const cli = require('..');

describe('@lerna2/cli', () => {
    it("test cli", () => {
        expect(cli()).toEqual("cli");
      });
});
