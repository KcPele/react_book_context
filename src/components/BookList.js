import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
export class BookList extends Component {
  static contextType = ThemeContext;
  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    console.log(theme);
    return (
      <div
        className="book-list"
        style={{ color: theme.syntax, background: theme.bg }}
      >
        <li style={{ background: theme.ui }}>the way of kings</li>
        <li style={{ background: theme.ui }}>the name of the wing</li>
        <li style={{ background: theme.ui }}>the final empire</li>
      </div>
    );
  }
}

export default BookList;
