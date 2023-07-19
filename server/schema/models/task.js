const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  title: String,
  weight: Number,
  description: String,
  projectId: String
});

module.exports = mongoose.model('Task', taskSchema);

// const tasks = [
//   {
//     id: '1',
//     title: 'Create your first webpage',
//     weight: 1,
//     description: 'Create your first HTML file 0-index.html with: -Add the doctype on the first line (without any comment) -After the doctype, open and close a html tag Open your file in your browser (the page should be blank)',
//     projectId: '1'
//   },
//   {
//     id: '2',
//     title: 'Structure your webpage',
//     weight: 1,
//     description: 'Copy the content of 0-index.html into 1-index.html Create the head and body sections inside the html tag, create the head and body tags (empty) in this order',
//     projectId: '2'
//   }
// ];