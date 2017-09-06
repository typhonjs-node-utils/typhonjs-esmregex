var assert = require('chai').assert;

var esmregex = require('../../src/esmregex');

describe("ES Module Tests", function()
{
   it("esmregex is RegExp", function()
   {
      assert.typeOf(esmregex, 'RegExp');
   });

   describe("ES2015 (positive)", function()
   {
      it('import v from "mod";', function()
      {
         assert.isTrue(esmregex.test('import v from "mod";'));
      });

      it('import * as ns from "mod";', function()
      {
         assert.isTrue(esmregex.test('import * as ns from "mod";'));
      });

      it('import {x} from "mod";', function()
      {
         assert.isTrue(esmregex.test('import {x} from "mod";'));
      });

      it('import {x as v} from "mod";', function()
      {
         assert.isTrue(esmregex.test('import {x as v} from "mod";'));
      });

      it('import {x, y as v} from "mod";', function()
      {
         assert.isTrue(esmregex.test('import {x, y as v} from "mod";'));
      });

      it('import v, { x, y as w } from "mod";', function()
      {
         assert.isTrue(esmregex.test('import v, { x, y as w } from "mod";'));
      });

      it('import v, y as w from "mod";', function()
      {
         assert.isTrue(esmregex.test('import v, y as w from "mod";'));
      });

      it('import "mod";', function()
      {
         assert.isTrue(esmregex.test('import "mod";'));
      });

      it('export var v;', function()
      {
         assert.isTrue(esmregex.test('export var v;'));
      });

      it('export var x, y, z;', function()
      {
         assert.isTrue(esmregex.test('export var x, y, z;'));
      });

      it('export var x = 1, y = 2, z = 3;', function()
      {
         assert.isTrue(esmregex.test('export var x = 1, y = 2, z = 3;'));
      });

      it('export let v;', function()
      {
         assert.isTrue(esmregex.test('export let v;'));
      });

      it('export let x, y, z;', function()
      {
         assert.isTrue(esmregex.test('export let x, y, z;'));
      });

      it('export const v = 1;', function()
      {
         assert.isTrue(esmregex.test('export const v = 1;'));
      });

      it('export const x = 1, y = 2, z = 3;', function()
      {
         assert.isTrue(esmregex.test('export const x = 1, y = 2, z = 3;'));
      });

      it('export class Clazz {};', function()
      {
         assert.isTrue(esmregex.test('export class Clazz {};'));
      });

      it('export function f(){};', function()
      {
         assert.isTrue(esmregex.test('export function f(){};'));
      });

      it('export default class Clazz {};', function()
      {
         assert.isTrue(esmregex.test('export default class Clazz {};'));
      });

      it('export default function f(){};', function()
      {
         assert.isTrue(esmregex.test('export default function f(){};'));
      });

      it('export default function* f(){};', function()
      {
         assert.isTrue(esmregex.test('export default function* f(){};'));
      });

      it('export default function(){};', function()
      {
         assert.isTrue(esmregex.test('export default function(){};'));
      });

      it('export default function*(){};', function()
      {
         assert.isTrue(esmregex.test('export default function*(){};'));
      });

      it('export default 42;', function()
      {
         assert.isTrue(esmregex.test('export default 42;'));
      });

      it('export {x};', function()
      {
         assert.isTrue(esmregex.test('export {x};'));
      });

      it('export {x, y, z};', function()
      {
         assert.isTrue(esmregex.test('export {x, y, z};'));
      });

      it('export {x, y, z} from "mod";', function()
      {
         assert.isTrue(esmregex.test('export {x, y, z} from "mod";'));
      });

      it('export {x as v};', function()
      {
         assert.isTrue(esmregex.test('export {x as v};'));
      });

      it('export {x as default};', function()
      {
         assert.isTrue(esmregex.test('export {x as default};'));
      });

      it('export {x as v, y as w};', function()
      {
         assert.isTrue(esmregex.test('export {x as v, y as w};'));
      });

      it('export {x} from "mod";', function()
      {
         assert.isTrue(esmregex.test('export {x} from "mod";'));
      });

      it('export {x as v} from "mod";', function()
      {
         assert.isTrue(esmregex.test('export {x as v} from "mod";'));
      });

      it('export {x as v, y as w} from "mod";', function()
      {
         assert.isTrue(esmregex.test('export {x as v, y as w} from "mod";'));
      });

      it('export * from "mod";', function()
      {
         assert.isTrue(esmregex.test('export * from "mod";'));
      });
   });

   describe("ES2017 (positive)", function()
   {
      it('export async function f(){}', function()
      {
         assert.isTrue(esmregex.test('export async function f(){}'));
      });

      it('export default async function f(){}', function()
      {
         assert.isTrue(esmregex.test('export default async function f(){}'));
      });

      it('export default async function(){}', function()
      {
         assert.isTrue(esmregex.test('export default async function(){}'));
      });
   });

   describe("TC39 proposals (stage 1+)", function()
   {
      describe("export default from", function()
      {
         it('export v from "mod";', function()
         {
            assert.isTrue(esmregex.test('export v from "mod";'));
         });

         it('export v, {x, y as w} from "mod";', function()
         {
            assert.isTrue(esmregex.test('export v, {x, y as w} from "mod";'));
         });

         it('export default from "mod";', function()
         {
            assert.isTrue(esmregex.test('export default from "mod";'));
         });
      });

      describe("export ns from", function()
      {
         it('export * as ns from "mod";', function()
         {
            assert.isTrue(esmregex.test('export * as ns from "mod";'));
         });

         it('export v, {x, y as w} from "mod";', function()
         {
            assert.isTrue(esmregex.test('export v, {x, y as w} from "mod";'));
         });

         it('export * as ns, {x} from "mod";', function()
         {
            assert.isTrue(esmregex.test('export * as ns, {x} from "mod";'));
         });
      });

      describe("export default from & ns from", function()
      {
         it('export v, * as ns from "mod";', function()
         {
            assert.isTrue(esmregex.test('export v, * as ns from "mod";'));
         });

         it('export * as ns, v from "mod";', function()
         {
            assert.isTrue(esmregex.test('export * as ns, v from "mod";'));
         });
      });
   });

   describe("Negative matches", function()
   {
      describe("ES2018", function()
      {
         describe("dynamic import", function()
         {
            it('import("mod");', function()
            {
               assert.isFalse(esmregex.test('import("mod");'));
            });

            it('const mod = await import("mod");', function()
            {
               assert.isFalse(esmregex.test('const mod = await import("mod");'));
            });
         });
      });
   });
});
