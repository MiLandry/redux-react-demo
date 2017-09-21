import { connect } from 'react-redux'
import { setVisibilityFilter } from 'actions'
import Link from 'components/Link'

const mapStateToLinkProps = (
  state,
  ownProps
) => {
  return {
    active : ownProps.filter ===
        state.visibilityFilter
  }
}

const mapDispatchToLinkProps = (
  dispatch,
  ownProps
) => {
  return {
    onClick : () => {
      dispatch(
        setVisibilityFilter(ownProps.filter)
      )
    }
  }
}

export default connect(
  mapStateToLinkProps,
  mapDispatchToLinkProps
)(Link)
