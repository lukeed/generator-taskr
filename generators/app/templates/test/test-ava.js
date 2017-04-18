const join = require('path').join
const test = require('ava')
const Fly = require('fly')

const dir = join(__dirname, 'fixtures')
const plugins = [require('fly-clear'), require('../')]

const tmpDir = str => join(__dirname, str)
const create = tasks => new Fly({tasks, plugins})

test('attach `<%= pluginSlugName %>` plugin to instance', t => {
  const fly = create();
  t.ok('<%= pluginSlugName %>' in fly.plugins);
})

test('attach `<%= pluginSlugName %>` to Task instance', t => {
  create({
    *foo(f) {
      t.ok('<%= pluginSlugName %>' in f);
    }
  }).start('foo')
})
