import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="container">
	<div className="span8">
	<div id="myCarousel" className="carousel slide">
		<ol className="carousel-indicators">
			<li data-target="#myCarousel" data-slide-to="0" className=""></li>
			<li data-target="#myCarousel" data-slide-to="1" className="active"></li>
			<li data-target="#myCarousel" data-slide-to="2" className=""></li>
		</ol>
		<div className="carousel-inner">
			<div className="item active">
        <iframe width="100%" height="100%" src="//www.youtube.com/embed/yQbOrE6woB8?rel=0" frameBorder="0" title="jurassic"></iframe>
			</div>
			<div className="item">
				<iframe width="100%" height="100%" src="//www.youtube.com/embed/_E7Bprqrfg8?rel=0" frameBorder="0" title = "park"></iframe>
			</div>
			<div className="item">
				<iframe width="100%" height="100%" src="//www.youtube.com/embed/8ZRVGnkSAnk?rel=0" frameBorder="0" title = "rocks"></iframe>
			</div>
		</div>
    {/* 
    
    
    */}
		<a className="left carousel-control" href="#myCarousel" data-slide="prev">‹</a>
		<a className="right carousel-control" href="#myCarousel" data-slide="next">›</a>
	</div>
	</div>
</div>

    );
  }
}

export default App;
