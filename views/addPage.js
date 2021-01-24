const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () => layout(html`
  <h3>Add a Page</h3>
  <hr>
  <form method="POST" action="/wiki/">

    <div class="form-group">
      <label for="author-name" class="col-sm-2 control-label">Author Name</label>
      <div class="col-sm-10">
        <input id="author-name" name="authorName" type="text" class="form-control"/>
      </div>
    </div>

    <div class="form-group">
      <label for="email" class="col-sm-2 control-label">Author Email</label>
      <div class="col-sm-10">
        <input id="email" name="authorEmail" type="text" class="form-control"/>
      </div>
    </div>

    <div class="form-group">
      <label for="title" class="col-sm-2 control-label">Page Title</label>
      <div class="col-sm-10">
        <input id="title" name="title" type="text" class="form-control"/>
      </div>
    </div>

    <div class="form-group">
      <label for="page-content" class="col-sm-2 control-label">Page Content</label>
      <div class="col-sm-10">
        <input id="page-content" name="pageContent" type="textarea" class="form-control"/>
      </div>
    </div>

    <label for="page-status" class="col-sm-2 control-label">Page Status</label>

    <div id= "page-status">
    <div>
      <input type="radio" id="open" name="pageStatus"
         checked>
      <label for="open">Open</label>
    </div>

    <div>
      <input type="radio" id="closed" name="pageStatus">
      <label for="closed">Closed</label>
    </div>
    </div>

    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary">submit</button>
    </div>

  </form>
`);
