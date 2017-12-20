var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TodoService = /** @class */ (function () {
    function TodoService(todos) {
        this.todos = todos;
    }
    //the add method adds a new id to each new todo.
    TodoService.prototype.add = function (todo) {
        //var newId is the unique id that is added to each todo.
        var newId = TodoService.getNextId();
    };
    TodoService.prototype.getAll = function () {
        return this.todos;
    };
    TodoService.getNextId = function () {
        return TodoService.lastId += 1;
    };
    /*lastId assigns a new id to each todo added.
    It is static because it needs to be the same throughout the app and may be used in more than one component. */
    TodoService.lastId = 0;
    return TodoService;
}());
//this gives each todo state a number. 
var TodoState;
(function (TodoState) {
    TodoState[TodoState["New"] = 1] = "New";
    TodoState[TodoState["Active"] = 2] = "Active";
    TodoState[TodoState["Complete"] = 3] = "Complete";
    TodoState[TodoState["Deleted"] = 4] = "Deleted";
})(TodoState || (TodoState = {}));
/* new Class TodoStateChanger that has the logic for changing the state of a todo.
It defines two methods in the constructor: canChangeState and changeState. */
var TodoStateChanger = /** @class */ (function () {
    /* accepts the desired end state as the constructor parameter. */
    function TodoStateChanger(newState) {
        this.newState = newState;
    }
    return TodoStateChanger;
}());
/* first calls the canChangeState method to make sure that it can proceed.  It is can, it updates the state on the todo object. */
changeState(todo, Todo);
Todo;
{
    if (this.canChangeState(todo)) {
        todo.state = this.newState;
    }
    return todo;
}
/* Adding a new Class called CompleteTodoStateChanger that extends the TodoStateChanger class.
In order for this new class to inherit from TodoStateChanger, the keyword 'extends' must be used in the name of the new class.
Now, CompleteTodoStateChanger will inherit from TodoStateChanger.
CompleteTodoStateChanger now contains all of the vbehavior defined on the TodoStateChanger base class. */
var CompleteTodoStateChanger = /** @class */ (function (_super) {
    __extends(CompleteTodoStateChanger, _super);
    /*  If a class is derived from a class that has a constructor, a new constructor isn't necessary in the new class.
    If anything is going to be added to the class or altered, then a constructor is needed.  So, if the constructor is used on the new class (that inherits from another class), the constructor has to be called on the base class.
    This constructor does not allow the ability to pass in a new state to the todo, like the TodoStateChanger did, so a constructor will be called in this case to pass in a complete state to the todo. */
    function CompleteTodoStateChanger() {
        /* To call the constructor on a base class, the super() function is used.
        This code calls the base class and changes its state to complete.
        This now has to be over-written to enforce the fact that todos must be in the active or deleted state in order to be eligible to have the state changed, that is, overwrite the logic in the canChangeState method defined on the TodoStateChanger base class. */
        return _super.call(this, TodoState.Complete) || this;
    }
    /* this "new" method defined overwrites the base class behavior.
    The method is defined in the base class, but used here again with different logic. The method isn't completely overwritten, but extended a little bit.
    The 'super' keyword is again, used,  but this time 'super" is the base class object, instead of the base class constructor (like on line 69).  */
    CompleteTodoStateChanger.prototype.canChangeState = function (todo) {
        return !!todo && (todo.state == TodoState.Active || todo.state == TodoState.Deleted);
    };
    return CompleteTodoStateChanger;
}(TodoStateChanger));
