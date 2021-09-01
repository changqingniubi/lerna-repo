/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-08-31 19:21:52
 * @LastEditTime: 2021-08-31 20:51:03
 * @LastEditors: changqing
 * @Usage: 
 */
'use strict';

const lerna2 = require('..');
console.log(lerna2());
describe('lerna2', () => {
    it("test lerna2", () => {
        expect(lerna2()).toEqual("lerna2");
      });
});
