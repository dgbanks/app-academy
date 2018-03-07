import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedIndex: 0 };
  }

  render() {
    return (
      <div style={{border: "1px solid red"}}>
        <ul style={{
          display:"flex",
          justifyContent: "space-between",
          border:"1px solid orange"
        }}>
          {
            this.props.tabs.map((tab, i) => {
              return (
                <div
                  key={i}
                  style={{border: "1px solid yellow"}}
                  onClick={() => this.setState({selectedIndex: i})}>
                  {tab.title}
                </div>
              );
            })
          }
        </ul>
        <article style={{border: "1px solid green"}}>
          <h1>{this.props.tabs[this.state.selectedIndex].content}</h1>
        </article>
      </div>
    );
  }
}

export default Tabs;
