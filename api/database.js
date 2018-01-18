var Datastore = require('nedb');
var db = new Datastore({filename:'./db'});

db.loadDatabase((err) => {
  if(err)
    console.log('Erro',err);
});

const save = (obj) => {
  return new Promise((resolve, reject) => {
    db.insert(obj, (err, doc) => {
      if (err)
        resolve({});
      resolve(doc);
    });
  });
}

const findOne = (id) => {
  return db.findOne({_id: id}, (err, doc) => {
    if (err)
      return {};

    return doc;
  });
}

const findAll = () => {
  return new Promise((resolve, reject) => {
    db.find({}, (err, docs) => {
      if (err)
        resolve([]);
      resolve(docs);
    });
  });

}

const remove = (id) => {
  return db.remove({_id: id}, (err, numDeleted) => {
    if (err)
      return 0;

    return numDeleted;
  });
}

const removeAll = () => {
  return db.remove({}, {multi: true}, (err, numDeleted) => {
    if (err)
      return 0;

    return numDeleted;
  });
}

const update = (obj) => {
  const newData = obj
  const id = obj._id;
  delete newData._id;  
  return db.update({_id: id}, newData, {}, (err, numReplaced) => {
    if(err)
      return 0;
    return numReplaced;
  });
}

module.exports = {save, findOne, findAll, remove, update, removeAll};
