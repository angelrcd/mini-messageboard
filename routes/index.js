var express = require('express');
var router = express.Router();
const MessageModel = require("../models/message");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    const messages = await getMessages();
    res.render('index', { title: 'Mini Messageboard', messages: messages });
  } catch (e) {
    res.send("aaa");
  }
});

router.get('/new', (req, res) => {
  res.render('form')
})

router.post('/new', async (req, res) => {
  const {username, text} = req.body;
  // messages.push({text: text, user: username, added: new Date()});
  await postMessage({text: text, user: username, added: new Date()});

  res.redirect('/');
})

async function getMessages(){
  const messages = await MessageModel.find().exec();
  return messages;
}

async function postMessage(message){
  const newMessage = new MessageModel(message);
  await newMessage.save();
}

module.exports = router;
