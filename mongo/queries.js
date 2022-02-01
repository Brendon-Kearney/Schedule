const mongoClient = require("./config");

async function findListings(criteria)
{
  let result = [{name: "No matches"}]
  await mongoClient.connect()
    .then(connection=>connection.db("SchoolClasses"))
    .then(db=>db.collection("SchoolClasses"))
    .then(classListings=>classListings
      .find(criteria))
    .then(cursor=>cursor.toArray())
    .then(classes=>result = classes)
    .catch(error=>console.log(error))
  return result
}

module.exports = {findListings} 

