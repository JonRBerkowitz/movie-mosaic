import React from 'react'
import SearchFilter from './SearchFilter'

class SearchBar extends React.Component {
	
	render() {
	return(
		<div>
			<p>This is a search bar</p>
			<SearchFilter />
			<SearchFilter />
		</div>
	)
	}

}

export default SearchBar;