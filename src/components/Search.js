import React from 'react'


const Search = props => {

  // const [input, setInput] = useState('')

  // const handleChange = (e) => {
  //   const userInput = e.target.value
  //   setInput(userInput)
  //   props.handleFilterTerm(input)
  // }
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={props.handleFilterTerm} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
