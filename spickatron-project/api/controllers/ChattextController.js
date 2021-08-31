/**
 * ChattextController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
  message: function(req, res) {
    const {userid, text} = req.params

    Chattext.create({userid, text}).exec((err) => {
      if(err) {
        res.send(500, {error: 'Database Error'})
        return
      }
    })

    Chattext.find({}).exec((err, chatmessages) => {
      if(err) {
        res.send(500, {error: 'Database Error'})
        return
      }

      console.log(chatmessages)
    })
  },

  getmessagelist: function(req, res) {
    Chattext.find({}).exec((err, chatmessages) => {
      if(err) {
        res.send(500, {error: 'Database Error'})
        return
      }

      res.send(200, chatmessages)
    })
  },

  getuserlist: function(req, res) {
    User.find({}).exec((err, users) => {
      if(err) {
        res.send(500, {error: 'Database Error'})
        return
      }

      res.send(users)
    })
  }
};

