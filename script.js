class List extends React.Component {
  constructor() {
    super();
    this.addHandler = this.addHandler.bind(this);
    this.updateHandler = this.updateHandler.bind(this);
  }

  state = {
    list: [],
    word: ""
  };

  addHandler() {
    let newArr = this.state.list;
    newArr.push(this.state.word);
    this.setState({ list: newArr });
    console.log(this.state.list);
  }
  updateHandler(event) {
    this.setState({ word: event.target.value });
  }

  render() {
    let displayList = this.state.list.map(listitem => <li>{listitem}</li>);
    console.log("rendering");
    return (
      <div className="list">
        <input onChange={this.updateHandler} value={this.state.word} />
        <button onClick={this.addHandler}>Add item</button>
        <ol>{displayList}</ol>
      </div>
    );
  }
}

ReactDOM.render(<List />, document.getElementById("root"));
