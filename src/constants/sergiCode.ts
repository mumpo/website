export const sergiCode =
`import React, { PureComponent } from 'react';

interface SergiProps {
  /** Half of the fun is the movie, the other half is popcorn **/
  cinema: boolean;
  /** Music is the best tool to express myself **/
  piano: boolean;
  /** Cliffs share the best from two world (mountain and sea) **/
  nature: boolean;
  /** Number of puns I need to do per minute **/
  puns: number;
}

/** This is me! Pretty much functional **/
class Sergi extends PureComponent<SergiProps> {
  render() {
    const { cinema, piano, nature, puns } = this.props;

    if (cinema && piano && nature && puns >= 1) {
      return '😄';
    } else {
      return null;
    }
  }
}

export default Sergi;`;