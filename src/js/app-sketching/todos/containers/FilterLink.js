import React, { Component } from 'react'
import Link from '../components/Link'
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'

const mapStateToProps = (state, { filter }) => ({
  active: state.visibilityFilter === filter
})

const mapDispatchToProps = (dispatch, { filter }) => ({
  onClick() { dispatch(setVisibilityFilter(filter)) }
})

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink
