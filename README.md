# ReactJS
Basic React Tutorial From Mose video


What We have learn 
1. Components
2. State of components
3. render method 
4. props and state 
Props

Props are short for Properties. The simple rule of thumb is props should not be changed. In the programming world we call it “Immutable” or in simple english “Unchangeable”.

    Props are Unchangeable — Immutable

Components receive props from their parent. These props should not be modified inside the component. In React and React Native the data flows in one direction -> From the parent to the child.

You can write your own components that use props. The idea behind props is that you can make a single component that is used in many different places in your app. The parent that is calling the component can set the properties, which could be different in each place.

Props essentially help you write reusable code.

This simple example shows how props are used.
// Parent 
export default class ScreenOne extends React.Component {
  render () {
    return (
     <View>
     	 <Heading message={'Custom Heading for Screen One'}/>
     </View>
    )
  }
}

// Child component
export default class Heading extends React.Component {
  render () {
    return (
      <View>
        <Text>{this.props.message}</Text>
      </View>
    )
  }
}
Heading.propTypes = {
  message: PropTypes.string
}
Heading.defaultProps = {
  message: 'Heading One'
}

5. Callbacks



    The React way would be to pass callbacks down to children explicitly via props — . There's no support for custom events w/ bubbling in React.

The reactive programming abstraction is orthogonal:

    Programming interactive systems by means of the observer pattern is hard and error-prone yet is still the implementation standard in many production environments. We present an approach to gradually deprecate observers in favor of reactive programming abstractions. Several library layers help programmers to smoothly migrate existing code from callbacks to a more declarative programming model.

The React philosophy is based on the Command pattern instead

6. Event Handling 
Binding methods

In JavaScript, class methods are not bound by default. Therefore, it’s important that we bind functions to the class instance.

Binding in render()

One way of resolving the problem of binding is to call bind in render function.
<input type="text" id="name" onChange={this.changeText.bind(this)} />

Binding in constructor()
constructor(props) {
    super(props);
    this.state = {
      name: ""
    };

    this.changeText = this.changeText.bind(this);
  }
  
  Binding with arrow function
  class ChangeInput extends Component {
  handleEvent = event => {
    alert("I was clicked");
  };

  render() {
    return (
      <div>
        <button onClick={this.handleEvent}>Click on me</button>
      </div>
    );
  }
}

Specifying Childreng

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 4 }
    ]
  }
  
  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        ;
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
  
  Embedding Expression in React 
  
  prefer a more "inline" aesthetic, define immediately-invoked function expressions inside your JSX:

return (
  <section>
    <h1>Color</h1>
    <h3>Name</h3>
    <p>{this.state.color || "white"}</p>
    <h3>Hex</h3>
    <p>
      {(() => {
        switch (this.state.color) {
          case "red":   return "#FF0000";
          case "green": return "#00FF00";
          case "blue":  return "#0000FF";
          default:      return "#FFFFFF";
        }
      })()}
    </p>
  </section>
);

00:00 Introduction
01:14 What is React
05:48 Setting Up the Development Environment 
09:27 Your First React App 
16:03 Hello World 
22:26 Components 
24:06 Setting Up the Project 
26:15 Your First React Component 
31:38 Specifying Children 
35:56 Embedding Expressions 
40:49 Setting Attributes
46:36 Rendering Classes Dynamically
50:57 Rendering Lists 
54:58 Conditional Rendering 
1:01:04 Handling Events 
1:03:56 Binding Event Handlers
1:08:34 Updating the State 
1:10:51 What Happens When State Changes
1:12:58 Passing Event Arguments
1:17:31 Composing Components 
1:21:18 Passing Data to Components 
1:24:31 Passing Children 
1:27:44 Debugging React Apps 
1:31:55 Props vs State 
1:34:22 Raising and Handling Events
1:39:16 Updating the State 
1:43:57 Single Source of Truth
1:47:55 Removing the Local State
1:54:44 Multiple Components in Sync 
2:00:39 Lifting the State Up 
2:06:18 Stateless Functional Components 
2:08:49 Destructuring Arguments 
2:10:52 Lifecycle Hooks 
2:12:32 Mounting Phase 
2:18:09 Updating Phase 
2:22:31 Unmounting Phase


