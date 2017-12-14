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

//this gives each of a task a number value. 
enum TodoState {
    New = 1,
    Active,
    Complete,
    Deleted
}

/*this class holds the logic for the getter and setter and cZhanging the state of the todo. */
class SmartTodo {
    /* ._state is defined as TodoState, which is the enum TodoState */
     _state: TodoState;
    name: string;
    
    //using a getter
    get state() {
        return this._state;
    }
    
    //using a setter 
    set state(newState) {
        /* restricts the state value that is set.
        This logic evaluates the state and decides if the new setter can be assigned. */
        if(newState == TodoState.Complete) {
            var canBeCompleted = 
                this.state == TodoState.Active
                || this.state == TodoState.Deleted;
                
            if(!canBeCompleted) {
                throw "Todo must be Active or Deleted in order to be marked Completed"
            }
        }
        this._state = newState;
    }
      
    constructor(name: string) {
        this.name = name;
    }
}
  
var todo = new SmartTodo("Pick up drycleaning");
todo.state = TodoState.Complete;
todo.state