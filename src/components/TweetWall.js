import React from 'react';
import Tweet from './Tweet';

class TweetWall extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    };
  }

  componentWillMount() {
    this.setState({
      tweets: this.props.newTweets
    })
  }


  shouldComponentUpdate(nextProps) {
    return nextProps.newTweets.length > 0;
  }

//use the spread operator to put new tweets up front
  componentWillReceiveProps(nextProps) {
    this.setState({
      tweets:[
        ...nextProps.newTweets,
        ...this.state.tweets
      ]
    })
  }

  render() {
    const tweets = this.state.tweets.map((tweet, index) => <Tweet text={tweet.text} key={index} />);

    return (
      <div>{tweets}</div>
    );
  }
}

export default TweetWall;
