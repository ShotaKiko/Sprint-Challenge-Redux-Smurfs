1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object? 
    
    map, filter and reduce

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    The store is the application level state meaning that this is the summative version of your application

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state is found in the store and component state is  stored in the components themselves. You could use an action to change the state of one component which would then update application state which then could pass some data along to a different component via mapstatetoprops

4.  What is middleware?

    It is further logic placed into the flow between actions and reducers thats adds a condition or some other form of logic before the reducers incorporates a certain action.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    It allows to have an additional check on actions before the reducer acts on it

6.  Which `react-redux` method links up our `components` with our `redux store`?

    connect