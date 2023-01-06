import React, { useState } from "react";

/* class _Accordion extends React.Component {
  state = { activeIndex: 0 };
  onTitleClick = (index) => {
    this.setState({ activeIndex: index });
  };

  renderItems() {
    return this.props.items.map((item, index) => {
      return (
        <React.Fragment key={index}>
          <div
            className="title active"
            onClick={() => this.onTitleClick(index)}
          >
            <i className="dropdown icon"></i>
            {item.title}
          </div>
          <div className="content active">
            <p>{item.content}</p>
          </div>
        </React.Fragment>
      );
    });
  }
  render() {
    return (
      <div className="accordion ui styled">
        {this.renderItems()}
        <h1>{this.state.activeIndex}</h1>
      </div>
    );
  }
}
 */
const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };
  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";
    return (
      <React.Fragment key={index}>
        <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return (
    <div className="accordion ui styled">
      {renderedItems}
      <h2>{activeIndex}</h2>
    </div>
  );
};

export default Accordion;
