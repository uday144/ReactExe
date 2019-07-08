import React, { Component } from 'react';

class Link1 extends Component {

    render() {
        return (

            <div className="link-container">
                <div className="row">
                    <div className="col-md-3"> hi.... </div>
                    <div className="col-md-5">
                        <div className="class-card-view row">
                            <div className="row">
                                <div className="col-md-8">
                                  <label className = "card-title no-space-break"> Lovely ground floor double bedroom....</label>
                                 </div>
                                <div className="col-md-4">
                                <label  className = "card-price"> $450 - $850PCM </label>
                              </div>
                                
                            <div className="col-md-12 align-left">
                            <label className = "card-line2" > 2 Doubles</label>
                            <label className = "card-line2"> Bow (E3)</label>
                            </div>
                            </div>
                        
                        </div>
                    </div>
                    <div className="col-md-4"> hi.... </div>
                </div>
            </div>

        );
    }

}

export default Link1;