import React, { Component } from "../../node_modules/react";


class Contact extends Component {
  render(){
    return (
      <div className="col-5 row-60 mx-auto position-relative">
        <div class="text-center">
          <img
            className="img-fluid"
            src={require("../Images/FeedForward.png")}
            style={{width: 250, height: 250, alignSelf: "center"}}
            alt="logo"
          />
        </div>
        <div className="card position-relative" style={{borderColor: "darkgreen", backgroundColor: "snow"}}>
          <div className="card-body position-relative">
            <form action="action_page.php">

              <label htmlFor="name" style={{color: "darkgreen", fontSize: 18}}>Name:</label>
                <input type="text" id="name" name="name" placeholder="" style={{color: "darkgreen", marginBottom: 50 }}/>

              <label htmlFor="email" style={{color: "darkgreen", fontSize: 18}}>Email:</label>
                <input type="text" id="email" name="email" placeholder="" style={{color: "darkgreen", marginBottom: 50 }}/>

              <label htmlFor="subject" style={{color: "darkgreen", fontSize: 18}}>Subject:</label>
                <textarea id="subject" name="subject" placeholder="" style={{height:200, marginBottom: 50, color: "darkgreen"}}></textarea>

              <button type="submit" className="btn position-relative" style={{backgroundColor: "snow", color: "darkgreen", borderColor: "darkgreen", alignSelf: "center"}}>
                Submit</button>

            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
