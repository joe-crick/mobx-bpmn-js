import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import Search from "../../components/Search/Search";
import { hasItems } from "../../lib/list-utils";
import cuid from "cuid";
import styles from "./optional-page.module.scss";

export class OptionalPage extends Component {
  state = {
    searchTerm: "",
    description: "",
    title: ""
  };

  setStateValue = ({
    target: {
      value,
      dataset: { prop }
    }
  }) => this.setState({ [prop]: value });

  static hasText = matcher => item =>
    matcher.test(item.title) || matcher.test(item.description);

  // For the best performance, you'd use an eventual consistency model that
  // batched updates and fired repaints asynchronously. Here, we'll use a poor-man's
  // "debounce" (not a true debounce, just a wait for a number of chars before running)
  // 3 is the "magic" number!
  getItems = filter => {
    const isMatch = new RegExp(filter, "i");
    const {
      items: { items }
    } = this.props;
    return !filter || filter.length < 3
      ? items
      : items.filter(OptionalPage.hasText(isMatch));
  };

  addFramework = event => {
    event.preventDefault();
    const { description, title } = this.state;
    this.props.items.appendItems({
      description,
      title,
      id: cuid()
    });
    this.setState({
      description: "",
      title: ""
    });
  };

  render() {
    const { searchTerm, description, title } = this.state;
    const displayItems = this.getItems(searchTerm);
    return (
      <div>
        <h2>Search Frameworks:</h2>
        <Search
          searchTerm={searchTerm}
          setSearchTerm={this.setStateValue}
          placeholder="Enter search term"
        >
          {/* The search results will be rendered by the children of the Search component */}
          <ul>
            {hasItems(displayItems) ? (
              displayItems.map(item => (
                <li key={item.id}>
                  <span className={styles.title}>{item.title}</span>:{" "}
                  {item.description}
                </li>
              ))
            ) : (
              <span className={styles.noResults}>No Results Found</span>
            )}
          </ul>
        </Search>
        <form>
          <h2>Add a new Framework</h2>
          <fieldset className={styles.fieldSet}>
            <label className={styles.label} htmlFor="title">
              Title:
            </label>
            <input
              id="title"
              type="text"
              value={title}
              data-prop="title"
              onChange={this.setStateValue}
            />

            <label className={styles.label} htmlFor="description">
              Description:
            </label>
            <textarea
              id="description"
              type="text"
              data-prop="description"
              value={description}
              onChange={this.setStateValue}
            />
          </fieldset>
          <button onClick={this.addFramework}>Add Framework</button>
        </form>
      </div>
    );
  }
}

export default inject("items")(observer(OptionalPage));
