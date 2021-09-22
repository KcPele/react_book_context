import React, { createContext, Component } from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: { syntax: "#91529c", ui: "#b4aeb0", bg: "#eee" },
    dark: { syntax: "#ddd", ui: "#333", bg: "#555" }
  };
  toggleTheme = () => {
    this.setState({
      isLightTheme: !this.state.isLightTheme
    });
  };
  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
export default ThemeContextProvider;
