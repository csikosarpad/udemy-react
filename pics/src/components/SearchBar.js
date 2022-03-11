import React from "react";
//acckey = ZuxFRf4NMLXfzodINso_cqqE_dM-s3gJO1oZVYW0-_c
//seccey = UDji8KX0Edw2WmEYM-Z7sujDwFlirDazQL2tbkVSHX4

class SearchBar extends React.Component {
  state = { term: "" };
  onInputChange(event) {}
  onFormSubmit = event => {
    event.preventDefault();
    if (this.state.term.length > 0) {
      this.props.onSubmit(this.state.term);
    }
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <fieldset className="ui field">
            <legend>
              <label htmlFor="searchInput">Image search</label>
            </legend>
            <input
              type="text"
              id="searchInput"
              value={this.state.term}
              onChange={(event) => this.setState({ term: event.target.value })}
            />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default SearchBar;
