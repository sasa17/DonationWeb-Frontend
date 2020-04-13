import React, { Component } from "react";


class Contact extends Component {
  render(){
    return (
      <div className="col-5 row-60 mx-auto position-relative">
        <div class="media container-fluid col-md-6 row-1 position-relative">
      <img src={require("../FeedForward.png")} className="w-100 h-100" alt="logo"/>
      </div>
        <div className="card position-relative" style={{borderColor: "darkgreen", backgroundColor: "snow"}}>
          <div className="card-body position-relative">
            <form action="action_page.php">

              <label htmlFor="name" style={{color: "darkgreen", fontSize: 18}}>Name:</label>
                <input type="text" id="name" name="name" placeholder="Your name.."/>

              <label htmlFor="email" style={{color: "darkgreen", fontSize: 18}}>Email:</label>
                <input type="text" id="email" name="email" placeholder="Your last name.."/>

              <label htmlFor="subject" style={{color: "darkgreen", fontSize: 18}}>Subject:</label>
                <textarea id="subject" name="subject" placeholder="Write something.." style={{height:200}}></textarea>

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
