import React, {useState} from 'react';
import { AiOutlineSearch} from 'react-icons/ai/';
import { ImYoutube2} from 'react-icons/im';

function Search(props) {

    const [title, setTitle] = useState("");

    const onSearchChange = (event) => {
        setTitle(event.target.value);
    }

    const onSumbit = event => {
        event.preventDefault();
        props.onSearch(title);
    };
    return (
        <div className="search">
           <ImYoutube2 color="red" size="5em" style={{marginLeft: "5%"}}/>  
           <form onSubmit={onSumbit}> 
            <input 
                autoFocus={true}
                type="text" 
                value={title}
                onChange={onSearchChange}
                placeholder="Search..." 
            /> 
            <button type="submit"><AiOutlineSearch size="1.5em"/></button>
           </form>     
        </div>
    );
}

export default Search;