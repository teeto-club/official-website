import * as React from 'react';

import styles from './Home.less';

class Home extends React.Component<{}, {}> {
  render() {
    return (
      <div className={styles.container}>
        <h1>Teeto Club</h1>
      </div>
    );
  }
}
export default Home;
