var React = require("react");

// including all of the sub-components
var Search = require("./Search");
var Saved = require("./Saved");

// create Main component
var Main = React.createClass({
	render: function() {
		return (
			<div class="container">
				{/* jumbotron for title */}
				<div class="jumbotron" style="background-color: #20315A; color: white;">
					<h1 class="text-center"><strong><i class="fa fa-newspaper-o"></i> New York Times Search</strong></h1>
				</div>
				<Search />
				<Saved />
			</div>

			// footer region
			<div class="row">
				<div class="col-sm-12">

					{/* line break followed by closing */}
					<hr />
					<h5 class="text-center"><small>Made by Keythe with lots of <i class="fa fa-heart"></i></small></h5>
				</div>
			</div>
		);
	}
});

// export the component back for the use in other files
module.exports = Main;
