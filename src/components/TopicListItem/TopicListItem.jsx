import React from 'react'
import ReactDOM from 'react-dom'
import TopicListItemCss from './TopicListItemCss.css'

const TopicListItem = props => (
  <p>{props.id} - {props.name}</p>
)

export default TopicListItem;
