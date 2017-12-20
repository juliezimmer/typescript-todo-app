class TodoService {
    /*lastId assigns a new id to each todo added.
    It is static because it needs to be the same throughout the app and may be used in more than one component. */
    static lastId: number = 0;
    constructor(private todos: Todo[]) {
    }
    
    //the add method adds a new id to each new todo.
    add(todo: Todo) {
      //var newId is the unique id that is added to each todo.
      var newId = TodoService.getNextId();
      }

    getAll() {
      return this.todos;
    } 

    static getNextId() {
      return TodoService.lastId += 1;
    }
}

interface Todo {
    name: string;
    state: TodoState;
}

//this gives each todo state a number. 
enum TodoState {
    New = 1,
    Active,
    Complete,
    Deleted
}

/* new Class TodoStateChanger that has the logic for changing the state of a todo. 
It defines two methods in the constructor: canChangeState and changeState. */
abstract class TodoStateChanger {
    /* accepts the desired end state as the constructor parameter. */
    constructor(private newState: TodoState) {
    }
    /* contains basic logic to validate whether the todo may be changed to the new desired state. */
    abstract canChangeState(todo: Todo): boolean; 
    }
    
    /* first calls the canChangeState method to make sure that it can proceed.  It is can, it updates the state on the todo object. */
    changeState(todo: Todo): Todo {
        if(this.canChangeState(todo)) {
            todo.state = this.newState;
        }
        
        return todo;
    }
    
}
/* Adding a new Class called CompleteTodoStateChanger that extends the TodoStateChanger class.  
In order for this new class to inherit from TodoStateChanger, the keyword 'extends' must be used in the name of the new class.
Now, CompleteTodoStateChanger will inherit from TodoStateChanger.  
CompleteTodoStateChanger now contains all of the vbehavior defined on the TodoStateChanger base class. */
class CompleteTodoStateChanger extends TodoStateChanger {
    /*  If a class is derived from a class that has a constructor, a new constructor isn't necessary in the new class. 
    If anything is going to be added to the class or altered, then a constructor is needed.  So, if the constructor is used on the new class (that inherits from another class), the constructor has to be called on the base class. 
    This constructor does not allow the ability to pass in a new state to the todo, like the TodoStateChanger did, so a constructor will be called in this case to pass in a complete state to the todo. */
    constructor () {
      /* To call the constructor on a base class, the super() function is used. 
      This code calls the base class and changes its state to complete. 
      This now has to be over-written to enforce the fact that todos must be in the active or deleted state in order to be eligible to have the state changed, that is, overwrite the logic in the canChangeState method defined on the TodoStateChanger base class. */
      super(TodoState.Complete);
    }
    /* this "new" method defined overwrites the base class behavior.
    The method is defined in the base class, but used here again with different logic. The method isn't completely overwritten, but extended a little bit. 
    The 'super' keyword is again, used,  but this time 'super" is the base class object, instead of the base class constructor (like on line 69).  */
    canChangeState(todo: Todo): boolean {
      return !!todo && ( /* cnecking to make sure the todo state is acrive or deleted before the state can be changed. */
          todo.state == TodoState.Active || todo.state == TodoState.Deleted
      )
    }
}








