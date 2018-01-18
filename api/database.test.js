import * as api from './database';

test('Database Api Test', () => {
  api.save({text: "Steve"});
  api.save({text: "Bill"});
  const id = api.save({text: "Elon"});
  expect(id).not.toBe('');

  const doc = api.findOne(id);
  expect(doc).not.toBe({});

  expect(api.update({...doc, completed: true})).not.toBe(0);

  const list = api.findAll();
  expect(list).not.toBe([]);

  expect(api.remove(id)).not.toBe(0);
  expect(api.removeAll()).not.toBe(0);
});
