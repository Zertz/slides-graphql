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
          <h3>Pssst…</h3>
          <div className="fragment">
            <h3>👩🏻‍💻 Développeuse</h3>
            <hr />
            <h3>👨🏻‍💻 Développeur</h3>
          </div>
        </Slide>
        <Slide>
          <h2>XML-RPC</h2>
          <p className="fragment">Remote Procedure Call</p>
          <img
            className="fragment"
            src="1990.png"
            alt="Back to the 90's"
            style={this.imageStyle}
          />
        </Slide>
        <Slide>
          <h2>SOAP</h2>
          <p className="fragment">Simple Object Access Protocol</p>
          <img
            className="fragment"
            src="soap.jpg"
            alt="SOAP"
            style={this.imageStyle}
          />
        </Slide>
        <Slide>
          <h2>REST</h2>
          <p className="fragment">REpresentational State Transfer</p>
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
          <div className="fragment">
            <h2>URL</h2>
            <pre>
              <code>
                {`
await fetch("https://jsonplaceholder.typicode.com/comments/1")
                `.trim()}
              </code>
            </pre>
          </div>
          <div className="fragment">
            <h2>JSON</h2>
            <pre>
              <code>
                {`
await response.json()
                `.trim()}
              </code>
            </pre>
          </div>
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
          <h2>
            <span role="img" aria-label="Inconvénients" style={this.emojiStyle}>
              🤯
            </span>
            <br />Sémantique
          </h2>
          <img
            className="fragment"
            src="nuclear.jpg"
            alt="Nuclear Bomb"
            style={this.imageStyle}
          />
        </Slide>
        <Slide>
          <h2>Problème n + 1</h2>
          <pre className="fragment">
            <code>
              {`
await fetch("https://jsonplaceholder.typicode.com/comments/1")
await response.json()

// { id: 1, postId: 1, ... }
                `.trim()}
            </code>
          </pre>
          <pre className="fragment">
            <code>
              {`
await fetch("https://jsonplaceholder.typicode.com/posts/1")
await response.json()

// { id: 1, userId: 1, ... }
                `.trim()}
            </code>
          </pre>
          <pre className="fragment">
            <code>
              {`
await fetch("https://jsonplaceholder.typicode.com/users/1")
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

// { id: 1, ..., post: { ... }, user: { ... } }
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
          <h2>Comment ça marche?</h2>
          <ol>
            <li className="fragment">Schema</li>
            <li className="fragment">Queries / Mutations</li>
            <li className="fragment">???</li>
            <li className="fragment">Response</li>
          </ol>
        </Slide>
        <Slide>
          <h2>Schema</h2>
          <pre className="fragment">
            <code>
              {`
type Comment {
  # Le type ID sera transformé en String (5 !== "5")
  id: ID!
  post: Post
  content: String
}

type Post {
  id: ID!
  author: User
  content: String
}

type User {
  id: ID!
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
type Query {
  comment(id: String!): Comment
}
              `.trim()}
            </code>
          </pre>
          <hr />
          <pre className="fragment">
            <code>
              {`
comment(id: 1) {
  content
  post: {
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
"comment": {
  "content": "La distribution de photos de chats.",
  "post": {
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
        <Slide>
          <h2>Mutation 🖥</h2>
          <pre className="fragment">
            <code>
              {`
type Mutation {
  createUser(input: UserInput): User
  updateUser(id: ID!, input: UserInput): User
}
              `.trim()}
            </code>
          </pre>
          <hr />
          <pre className="fragment">
            <code>
              {`
input UserInput {
  name: String
  username: String
}
              `.trim()}
            </code>
          </pre>
        </Slide>
        <Slide>
          <h2>Mutation 💻</h2>
          <pre className="fragment">
            <code>
              {`
mutation ($user: UserInput!) {
  updateUser(id: 1, input: $user) {
    id
    username
  }
}
              `.trim()}
            </code>
          </pre>
          <hr />
          <pre className="fragment">
            <code>
              {`
{
  "user": {
    "name": "Pier-Luc",
    "username": "lolcats"
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
"user": {
  "id": 2,
  "username": "lolcats"
}
              `.trim()}
            </code>
          </pre>
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
        <Slide>Démo Github!</Slide>
        <Slide>Deploiement!</Slide>
        <Slide>https://github.com/Zertz/slides-graphql</Slide>
      </Slides>
    );
  }
}

export default App;
