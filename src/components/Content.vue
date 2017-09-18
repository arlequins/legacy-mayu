<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <p class="pdt5 disp-inb">content</p>
      </div>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
        <div class="form-group">
          <label for="exampleInputFile">File input</label>
          <input type="file" id="exampleInputFile">
          <p class="help-block">Example block-level help text here.</p>
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox"> Check me out
          </label>
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'content',
  data() {
    return {}
  },
  methods: {},
  computed: {},
  watch: {}
}
</script>
<style lang="sass" scoped>
/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/../bootstrap/stylesheets/bootstrap/blob/master/LICENSE)
 */

// Core variables and mixins
@import "../bootstrap/stylesheets/bootstrap/variables";
@import "../bootstrap/stylesheets/bootstrap/mixins";

// Reset and dependencies
@import "../bootstrap/stylesheets/bootstrap/normalize";
@import "../bootstrap/stylesheets/bootstrap/print";

// Core CSS
@import "../bootstrap/stylesheets/bootstrap/scaffolding";
@import "../bootstrap/stylesheets/bootstrap/type";
@import "../bootstrap/stylesheets/bootstrap/code";
@import "../bootstrap/stylesheets/bootstrap/grid";
@import "../bootstrap/stylesheets/bootstrap/tables";
@import "../bootstrap/stylesheets/bootstrap/forms";
@import "../bootstrap/stylesheets/bootstrap/buttons";

// Components
@import "../bootstrap/stylesheets/bootstrap/component-animations";
@import "../bootstrap/stylesheets/bootstrap/dropdowns";
@import "../bootstrap/stylesheets/bootstrap/button-groups";
@import "../bootstrap/stylesheets/bootstrap/input-groups";
@import "../bootstrap/stylesheets/bootstrap/navs";
@import "../bootstrap/stylesheets/bootstrap/navbar";
@import "../bootstrap/stylesheets/bootstrap/breadcrumbs";
@import "../bootstrap/stylesheets/bootstrap/pagination";
@import "../bootstrap/stylesheets/bootstrap/pager";
@import "../bootstrap/stylesheets/bootstrap/labels";
@import "../bootstrap/stylesheets/bootstrap/badges";
@import "../bootstrap/stylesheets/bootstrap/jumbotron";
@import "../bootstrap/stylesheets/bootstrap/thumbnails";
@import "../bootstrap/stylesheets/bootstrap/alerts";
@import "../bootstrap/stylesheets/bootstrap/progress-bars";
@import "../bootstrap/stylesheets/bootstrap/media";
@import "../bootstrap/stylesheets/bootstrap/list-group";
@import "../bootstrap/stylesheets/bootstrap/panels";
@import "../bootstrap/stylesheets/bootstrap/responsive-embed";
@import "../bootstrap/stylesheets/bootstrap/wells";
@import "../bootstrap/stylesheets/bootstrap/close";

// Components w/ JavaScript
@import "../bootstrap/stylesheets/bootstrap/modals";
@import "../bootstrap/stylesheets/bootstrap/tooltip";
@import "../bootstrap/stylesheets/bootstrap/popovers";
@import "../bootstrap/stylesheets/bootstrap/carousel";

// Utility classes
@import "../bootstrap/stylesheets/bootstrap/utilities";
@import "../bootstrap/stylesheets/bootstrap/responsive-utilities";

</style>
