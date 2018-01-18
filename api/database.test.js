import * as api from './database';

test('Database Api Test', () => {
  api.save({text: "Steve"});
  api.save({text: "Bill"});

  let id = '';
  api.save({text: "Elon"}).then((res) => {
    id = res._id;
    expect(res._id).not.toBe('');
  });

  const doc = api.findOne(id);
  expect(doc).not.toBe({});

  expect(api.update({...doc, completed: true})).not.toBe(0);

  const list = api.findAll();
  expect(list).not.toBe([]);

  expect(api.remove(id)).not.toBe(0);
  expect(api.removeAll()).not.toBe(0);
});
