import React from "react";




const SearchBar = ({searchChange, searchField}) => {
    return(
        <div>
        <form>
            <div className="tc br2 Courier fl w-100 pa3">
                <input className='pa3 ba b--green bg-lightest-blue' itemID="search "type="text" placeholder='search...Robots' name="text" onChange={searchChange}></input>
                <input itemID="search" type="submit" ></input>
            </div>
        </form>
        </div>
    )
}

export default SearchBar