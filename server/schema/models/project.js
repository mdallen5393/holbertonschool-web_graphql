const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  title: String,
  weight: Number,
  description: String
});

module.exports = mongoose.model('Project', projectSchema);

// const projects = [
//   {
//     id: '1',
//     title: 'Advanced HTML',
//     weight: 1,
//     description: 'Welcome to the Web Stack specialization. The 3 first projects will give you all basics of the Web development: HTML, CSS and Developer tools. In this project, you will learn how to use HTML tags to structure a web page. No CSS, no styling - don\'t worry, the final page will be “ugly” it\'s normal, it\'s not the purpose of this project. Important note: details are important! lowercase vs uppercase / wrong letter… be careful!',
//     projectId: '1'
//   },
//   {
//     id: '2',
//     title: 'Bootstrap',
//     weight: 1,
//     description: 'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS and JavaScript design templates for typography, forms, buttons, navigation, and other interface components.',
//     projectId: '2'
//   }
// ]