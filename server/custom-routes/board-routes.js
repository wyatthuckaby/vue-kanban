var Lists = require('../models/list');

module.exports = {
        boardLists: {
            //path: 'board/:boardId/lists/:listId/todos/:todoId/comments'
            path: '/boardlists/:id',
            reqType: 'get',
            method(req, res, next) {
                var action = 'find board lists';
                //console.log (req);
                Lists.find({ boardId: req.params.id })
                    .then((lists) => {
                        res.send(handleResponse(action, lists));
                    }).catch((error) => {
                        return next(handleResponse(action, null, error));
                    });
            }
        }
    }
    //59a5c64deb86447d1ca1a9c6

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