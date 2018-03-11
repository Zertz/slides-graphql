// @flow
import React, { PureComponent } from "react";
import Reveal from "reveal.js";

import "reveal.js/css/reveal.css";
import "reveal.js/css/theme/night.css";

import Slide from "../Slide";
import Slides from "../Slides";

type Props = {};

class App extends PureComponent<Props> {
  emojiStyle = {
    fontSize: "96px"
  };

  componentDidMount() {
    Reveal.initialize();
  }

  render() {
    return (
      <Slides>
        <Slide>
          <span role="img" aria-label="wave" style={this.emojiStyle}>
            👋
          </span>
          <h2 className="fragment">Pier-Luc</h2>
          <h4 className="fragment">Classcraft (Meteor + React)</h4>
        </Slide>
        <Slide>
          <h1>GraphQL</h1>
          <blockquote>"A query language for your API"</blockquote>
        </Slide>
        <Slide>
          <h2>hello, world</h2>
          <pre>
            <code>
              {`
                const result = asyncFn("awesome")

                console.info(result)
              `}
            </code>
          </pre>
          <pre className="fragment">
            <code>
              {`
                // undefined
              `}
            </code>
          </pre>
          <span
            className="fragment"
            role="img"
            aria-label="thinking"
            style={this.emojiStyle}
          >
            🤔
          </span>
        </Slide>
        <Slide>Code?</Slide>
        <Slide>https://github.com/Zertz/slides-graphql</Slide>
      </Slides>
    );
  }
}

export default App;
