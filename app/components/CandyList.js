import React from 'react';
import { getCandies } from '../reducers';

class CandyList extends Component {
  render() {
  //   return (
  //     <div className="contained">
  //       <h2>All the Candy!</h2>
  //       {this.props.map(candy => (
  //         <div key={candy.id}>
  //     </div>)
  //     </div>)
  //   ))
  // }
}
}

function mapStateToProps (state) {
  const { allCandies } =  state
  return allCandies;
}

const mapDispatchToProps = (dispatch) => ({
  getCandies: () => dispatch(getCandies()})

  export default connect(mapStateToProps, mapDispatchToProps)(CandyList);
