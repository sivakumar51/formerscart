import {useState} from 'react'
import { useNavigate} from 'react-router-dom'        ////ithu ennanu detaila pakkanum

export default function Search(){
  
    const [keyword,setkeyword] = useState("");
    const navigate= useNavigate();         ////ithu ennanu detaila pakkanum


    const searchHandeler =()=>{
        navigate('/search?keyword='+keyword)

    }

    return <div className="input-group">
    <input
      type="text"
      id="search_field"
      className="form-control"
      onChange={(e)=>setkeyword(e.target.value)}
      onBlur={searchHandeler}                        //onblur na nu pakanum 
      placeholder="Enter Fr Product Name ..."
    />
    <div className="input-group-append">
      <button onClick={searchHandeler} id="search_btn" className="btn">   {/* ithu search panna keyword varathuku */}
        <i className="fa fa-search" aria-hidden="true"></i>
      </button>
    </div>
  </div>
}