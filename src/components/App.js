<<<<<<< HEAD
import React, { Component } from 'react';

import Header from './Header';
import Post from './Post';
=======
import React, { Component } from "react";

import Header from "./Header";
import Post from "./Post";
>>>>>>> 479956cde0823888711550983877cf387fb322b0

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
<<<<<<< HEAD
        name: 'Djamilson',
        avatar: 'https://avatars0.githubusercontent.com/u/2254731?s=460&v=4',
        time: 'há 3 min',
        body:
          'Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis',
      },
      {
        id: 2,
        name: 'Escolas',
        avatar: 'https://avatars0.githubusercontent.com/u/2254731?s=460&v=4',
        time: 'há 30 min',
        body:
          'Funcions. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum.',
      },
    ],
=======
        name: "Djamilson",
        avatar: "https://avatars0.githubusercontent.com/u/2254731?s=460&v=4",
        time: "há 3 min",
        body:
          "Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis"
      },
      {
        id: 2,
        name: "Escolas",
        avatar: "https://avatars0.githubusercontent.com/u/2254731?s=460&v=4",
        time: "há 30 min",
        body:
          "Pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum."
      }
    ]
>>>>>>> 479956cde0823888711550983877cf387fb322b0
  };

  render() {
    const { posts } = this.state;
    return (
      <div>
        <Header />
        <div className="post-container">
          {posts && posts.map(post => <Post key={post.id} data={post} />)}
        </div>
      </div>
    );
  }
}
