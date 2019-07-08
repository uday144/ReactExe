import React, { Component } from 'react';

class Home extends Component {

    render() {
        return (
            <div className="row">
               <div className = "col-md-2">
               </div>
               <div className = "col-md-8">
               
               <div className="featurette" >
                    <div className="featurette-inner text-center">
                        <form className="search">
                            <h3 className="no-margin-top h1">Search Me.</h3>
                            <div className="input-group input-group-lg">
                                <input type="search" placeholder="search" className="form-control" />
                                <span className="input-group-btn">
                                    <button className="btn btn-danger search_box" type="button">Search</button>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
               </div>
               <div className = "col-md-2">
               </div>
            </div>
        );
    }

}

export default Home;