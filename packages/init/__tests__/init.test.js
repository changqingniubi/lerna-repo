/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-08-31 19:24:07
 * @LastEditTime: 2021-08-31 19:55:25
 * @LastEditors: changqing
 * @Usage: 
 */
'use strict';

const init = require('..');

describe('@lerna2/init', () => {
    it("test init", () => {
        expect(init()).toEqual("init");
      });
});
