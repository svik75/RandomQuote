import React from 'react';
import logo from './logo.svg';
import './App.css';

let quotes = [{text: 'Keep away from people who try to belittle your ambitions. Small people always do that, but the really great make you feel that you, too, can become great.', author: 'Mark Twain' }, {text: 'The only way to be truly satisfied is to do what you believe is great work', author: 'Steve Jobs' }, {text: 'If you think you cant, youre right.', author: 'Carol Bartz' }];

class App extends React.Component{
  constructor() {
    super();

     const rq = Math.floor(Math.random()*quotes.length);
    this.state = [{text: quotes[rq].text, author: quotes[rq].author}];
  }

  randomQuote() {
    const rq = Math.floor(Math.random()*quotes.length);
   this.setState({text: quotes[rq].text, author: quotes[rq].author});
  }

  componentDidMount()
  {
    this.randomQuote();
  }

  render() {
  return (
    <div id="wrapper">
  <div id="quote-box">
    <div className="quote-text">
      <i className="fa fa-quote-left"> </i><span id="text"></span>{this.state.text}
    </div>
    <div className="quote-author">
      {this.state.author} <span id="author"></span>
    </div>
    <div className="buttons">
      <a className="button" id="tweet-quote" title="Tweet this quote!" target="_blank">
        <i className="fa fa-twitter">T</i>
      </a>
      <a className="button" id="tumblr-quote" title="Post this quote on tumblr!" target="_blank">
        <i className="fa fa-tumblr"></i>
      </a>
      <button className="button" id="new-quote" onClick={this.randomQuote.bind(this)}>New quote</button>
    </div>
  </div>
  <div className="footer text-white"> by <a href="https://webprog.club" className="text-white">Viktor Sivkov</a></div>
</div>
  );
  }
}

export default App;
