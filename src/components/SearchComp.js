import React from 'react'

function SearchComp({handleFormSubmit,newsCountry,newslang,newscat,setNewsCat,setNewsCountry,setNewsLang}) {


    return (
            <form onSubmit={handleFormSubmit}>
                <div className="row">
                    <div className="col-md-4">
                        <div className="form-group">
                            <input type="text"
                            placeholder="news category"
                            className="form-control"
                            autoFocus
                            value={newscat}
                            onChange={(e)=>setNewsCat(e.target.value)}
                            required/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                           <select className="form-control" value={newslang}
                            onChange={(e)=>setNewsLang(e.target.value)}>
                                <option value="">Language</option>
                                <option value="en">English</option>
                                <option value="hi">Hindi</option>
                                <option value="ml">Malayalam</option>
                                <option value="ta">Tamil</option>
                                <option value="te">Telugu</option>
                           </select>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                             <select className="form-control" value={newsCountry}
                            onChange={(e)=>setNewsCountry(e.target.value)}>
                                <option value="">Country</option>
                                <option value="in">India</option>
                                <option value="us">United States</option>
                                <option value="de">Germany</option>
                                <option value="cn">China</option>
                                <option value="es">Spain</option>
                                <option value="gb">United Kingdom</option>
                                <option value="jp">Japan</option>
                                <option value="fr">France</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-warning" type="submit">Search</button>
                    </div>
                </div>
            </form>
    )
}

export default SearchComp
