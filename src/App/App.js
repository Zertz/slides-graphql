// @flow
import React, { PureComponent } from "react";
import Reveal from "reveal.js";

import "reveal.js/css/reveal.css";
import "reveal.js/css/theme/night.css";

import Slide from "../Slide";
import Slides from "../Slides";

type Props = {};

class App extends PureComponent<Props> {
  centerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  };

  emojiStyle = {
    fontSize: "96px"
  };

  imageStyle = {
    height: "35vh"
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
          <h2>XML-RPC</h2>
          <img
            className="fragment"
            src="1990.png"
            alt="Back to the 90's"
            style={this.imageStyle}
          />
        </Slide>
        <Slide>
          <h2>SOAP</h2>
          <img
            className="fragment"
            src="y2k.gif"
            alt="Y2K"
            style={this.imageStyle}
          />
        </Slide>
        <Slide>
          <h2>REST</h2>
          <img
            className="fragment"
            src="hero.jpg"
            alt="Hero"
            style={this.imageStyle}
          />
        </Slide>
        <Slide>
          <span role="img" aria-label="Avantages" style={this.emojiStyle}>
            👍
          </span>
          <h3>
            <ul className="fragment">
              <li>Simple</li>
            </ul>
          </h3>
        </Slide>
        <Slide>
          <span role="img" aria-label="Inconvénients" style={this.emojiStyle}>
            👎
          </span>
          <h3>
            <ul className="fragment">
              <li>Pas si simple…</li>
            </ul>
          </h3>
        </Slide>
        <Slide>
          <h2 className="fragment">
            🤯<br />Sémantique
          </h2>
        </Slide>
        <Slide>
          <h2>Problème n + 1</h2>
          <pre className="fragment">
            <code>
              {`
await fetch("https://jsonplaceholder.typicode.com/comments/1")
await response.json()

await fetch("https://jsonplaceholder.typicode.com/posts/{postId}")
await response.json()

await fetch("https://jsonplaceholder.typicode.com/users/{userId}")
await response.json()

// { id: 1, ... }
                `.trim()}
            </code>
          </pre>
        </Slide>
        <Slide>
          <h2>"Solution"</h2>
          <h3 className="fragment" style={{ display: "inline-block" }}>
            CustomQL
            <hr />
            REST
          </h3>
          <pre className="fragment">
            <code>
              {`
await fetch("https://api.com/comments/1?query=join[post,user]")
await response.json()

// { id: 1, post: ..., user: ... }
                `.trim()}
            </code>
          </pre>
        </Slide>
        <Slide>
          <h2 style={this.centerStyle}>
            RPC&nbsp;
            <span
              className="fragment"
              role="img"
              aria-label="heart"
              style={this.emojiStyle}
            >
              💏
            </span>
            &nbsp;SQL
          </h2>
        </Slide>
        <Slide>
          <h1>GraphQL</h1>
          <blockquote>"A query language for your API"</blockquote>
        </Slide>
        <Slide>
          <span role="img" aria-label="Avantages" style={this.emojiStyle}>
            👍
          </span>
          <h2>
            <ul className="fragment">
              <li>Flexibilité ∞</li>
            </ul>
          </h2>
        </Slide>
        <Slide>
          <span role="img" aria-label="Inconvénients" style={this.emojiStyle}>
            👎
          </span>
          <h2>
            <ul className="fragment">
              <li>Complexité ∞</li>
            </ul>
          </h2>
        </Slide>
        <Slide>
          <h3>Sauf que…</h3>
          <h1 className="fragment">GraphiQL</h1>
          <span
            className="fragment"
            role="img"
            aria-label="Hourra"
            style={this.emojiStyle}
          >
            🎉
          </span>
        </Slide>
        <Slide>
          <h2>Comment ça marche?</h2>
        </Slide>
        <Slide>
          <h2>Schema</h2>
          <pre className="fragment">
            <code>
              {`
type Comment {
  id: String
  message: Message
  content: String
}

type Message {
  author: User
  content: String
}

type User {
  name: String
  username: String
}
              `.trim()}
            </code>
          </pre>
        </Slide>
        <Slide>
          <h2>Query</h2>
          <pre className="fragment">
            <code>
              {`
comment(id: 1) {
  content
  message: {
    author: {
      name
    }
  }
}
              `.trim()}
            </code>
          </pre>
        </Slide>
        <Slide>
          <h2>Response</h2>
          <pre className="fragment">
            <code>
              {`
"message": {
  "content": "La distribution de photos de chats.",
  "message": {
    content: "L'internet est conçu pour?",
    author: {
      name: "Pier-Luc"
    }
  }
}
              `.trim()}
            </code>
          </pre>
        </Slide>
        <Slide>Code!</Slide>
        <Slide>https://github.com/Zertz/slides-graphql</Slide>
      </Slides>
    );
  }
}

export default App;
