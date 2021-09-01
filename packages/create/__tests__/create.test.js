/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-08-31 19:23:37
 * @LastEditTime: 2021-08-31 19:55:13
 * @LastEditors: changqing
 * @Usage: 
 */
'use strict';

const create = require('..');

describe('@lerna2/create', () => {
    it("test create", () => {
        expect(create()).toEqual("create");
      });
});
