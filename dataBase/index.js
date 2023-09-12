const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
// console.log("in index")
main().catch(err => console.log(err));

const kittySchema = new mongoose.Schema({
    name: String
  },{timestamps:true});
const Kitten = mongoose.model('Kitten', kittySchema);

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
  const silence = new Kitten({ name: 'mongo upsert test test' });
  silence.save()
  let p = await Kitten.updateOne({ name: "Silence test" }, { $set: { name: "new value" } }, { upsert: true })
      // p.save();
console.log(silence.name);
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}