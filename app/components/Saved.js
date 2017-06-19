var React = require("react");

// create Saved component
var Saved = React.createClass({
  render: function() {
    return (
      // This row will handle saved Results
      <div class="row">
        <div class="col-sm-12">
          <br />

          <div class="panel panel-primary">
            <div class="panel-heading">
              <h3 class="panel-title"><strong><i class="fa fa-table"></i>   Saved Articles</strong></h3>
            </div>
            
            <div class="panel-body" id="well-section">

            </div>
          </div>
        </div>
      </div>
    );
  }
});

// export the component back for the use in other files
module.exports = Saved;
