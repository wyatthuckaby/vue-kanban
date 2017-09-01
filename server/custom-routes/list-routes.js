var Todos = require('../models/todo');

module.exports = {
        listTodos: {
            //path: 'board/:boardId/lists/:listId/todos/:todoId/comments'
            path: '/lists/:id/todos',
            reqType: 'get',
            method(req, res, next) {
                var action = 'find list todos';
                //console.log (req);
                Todos.find({ listId: req.params.id })
                    .then((todos) => {
                        res.send(handleResponse(action, todos));
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