// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery-ujs
//= require bootstrap-sass/assets/javascripts/bootstrap-sprockets
//= require i18n
//= require i18n/translations
//= require angular/angular
//= require angular-resource/angular-resource

//= require ng/app.module
//= require ng/app.config
//  require_tree ./ng/services
//  require_tree ./ng/filters
//  require_tree ./ng/directives
//  require_tree ./ng/components
//= require_tree ./ng/controllers
//  require_tree ./ng/components


$(function(){
  // Tooltips
  $('[data-tooltip="tooltip"]').tooltip({
    container: 'body'
  })
})
