import ProcessOverview from '../components/ProcessOverview';
import { connect } from 'react-redux';
import { fetchProcesses } from "../actions/processes";

const mapStateToProps = (state) => ({
  processes: state.processes.processes
})
function mapDispatchToProps (dispatch) {
  return {
    fetchProcesses: () => dispatch(fetchProcesses())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProcessOverview);
