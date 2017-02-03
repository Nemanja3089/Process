import ProcessOverview from '../components/ProcessOverview';
import { connect } from 'react-redux';
import { fetchProcesses, stubProcesses,addProcesses,processNameChange } from "../actions/processes";

const mapStateToProps = (state) => ({
  processes: state.processes.processes
})
function mapDispatchToProps (dispatch) {
  return {
    fetchProcesses: () => dispatch(fetchProcesses()),
    stubProcesses: () => dispatch(stubProcesses()),
    addProcesses: () => dispatch(addProcesses()),
    processNameChange: (name) => dispatch(processNameChange(name))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProcessOverview);
