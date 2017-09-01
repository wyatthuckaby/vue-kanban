let Boards = require('../models/board')

module.exports = {
  userBoards: {
    path: '/boards/user/boards',
    reqType: 'get',
    method(req, res, next) {
      let action = 'Find User Boards'
      Boards.find({
          creatorId: req.session.uid
        })
        .then(boards => {
          console.log("BOARDS", boards);
          res.send(handleResponse(action, boards))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  },
  sharedBoards: {
    path: '/boards/share/boards',
    reqType: 'get',
    method(req, res, next) {
      Boards.find({
          collaborators: {
            $in: req.session.uid
          }
        })
        .then(boards => {
          res.send(handleResponse(action, boards))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  }
}


function handleResponse(action, data, error) {
  var response = {
    action: action,
    data: data
  }
  if (error) {
    response.error = error
  }
  return response
}