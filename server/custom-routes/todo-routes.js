var Comments = require('../models/comment');

module.exports = {
        listComments: {
            //path: 'board/:boardId/lists/:listId/todos/:todoId/comments'
            path: '/listcomments/:id',
            reqType: 'get',
            method(req, res, next) {
                var action = 'find todo comments';
                //console.log (req);
                Comments.find({ todoId: req.params.id })
                    .then((comments) => {
                        res.send(handleResponse(action, comments));
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