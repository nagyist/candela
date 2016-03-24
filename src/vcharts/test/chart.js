import test from 'tape';
import vcharts from '..';

test.skip('chart width and height should be based on el properties', t => {
  const padding = {
    top: 10,
    left: 20,
    bottom: 30,
    right: 40
  };

  vcharts.templates.test = {
    width: ['@get', 'width', 100],
    height: ['@get', 'height', 200],
    padding: padding
  };

  let c = vcharts.chart('test', {
    el: {offsetWidth: 0, offsetHeight: 0}
  });

  t.deepEqual(c.spec, {
    width: 100,
    height: 200,
    padding: padding
  });

  c = vcharts.chart('test', {
    el: {offsetWidth: 300, offsetHeight: 400}
  });

  t.deepEqual(c.spec, {
    width: (300 - 20 - 40),
    height: (400 - 10 - 30),
    padding: padding
  });

  t.end();
});

test('vcharts.chart()', t => {
  let c = vcharts.chart('vega', {
    el: document.createElement('div'),
    spec: {marks: []}
  });

  t.deepEqual(c.template, vcharts.templates.vega, 'template used should be the one requested');
  t.deepEqual(c.spec, {marks: []}, 'spec used should match the one specified');

  t.end();
});

test('vcharts.update()', t => {
  var c = vcharts.chart('vega', {
    el: document.createElement('div'),
    spec: {marks: [1]}
  });

  t.deepEqual(c.template, vcharts.templates.vega, 'template used should be the one requested (precondition)');
  t.deepEqual(c.options.spec, {marks: [1]}, 'spec used should match the one specified (precondition)');

  c.update({spec: {marks: [1, 2, 3]}});

  t.deepEqual(c.options.spec, {marks: [1, 2, 3]}, 'update call should change the spec used to the one specified');

  t.end();
});
