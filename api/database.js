var Datastore = require('nedb');
var db = new Datastore({filename: './db'});

db.loadDatabase((err) => {
  if(err)
    console.log('Erro',err);
});

export const save = (obj) => {
  return db.insert(obj, (err, doc) => {
    console.log('Inserted', doc.text, 'with ID', doc._id);
    if (err)
      return '';
    return doc._id;
  });
}

export const findOne = (id) => {
  return db.findOne({_id: id}, (err, doc) => {
    if (err)
      return {};

    return doc;
  });
}

export const findAll = () => {
  return db.find({}, (err, docs) => {
    if (err)
      return [];

    return docs;
  });
}

export const remove = (id) => {
  return db.remove({_id: id}, (err, numDeleted) => {
    if (err)
      return 0;

    return numDeleted;
  });
}

export const removeAll = () => {
  return db.remove({}, {multi: true}, (err, numDeleted) => {
    if (err)
      return 0;

    return numDeleted;
  });
}

export const update = (obj) => {
  const newData = obj
  delete newData._id;
  return db.update({_id: obj._id}, newData, {}, (err, numReplaced) => {
    if(err)
      return 0;
    return numReplaced;
  });
}
