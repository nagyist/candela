/*globals require, module*/
/*jshint devel:true, browser:true*/

var Backbone = require('backbone'),
    jQuery = require('jquery'),
    d3 = require('d3'),
    Dataset = require('../../../../core_models/dataset.js'),
    myTemplate = require('./template.html'),
    libImage = require('../../../../assets/images/library.svg'),
    girder = window.girder;

var DatasetLibrary = Backbone.View.extend({
    render : function () {
        var self = this;
        self.$el.html(myTemplate);

        girder.restRequest({
          path: 'resource/lookup?path=/collection/ReferenceApp/Data',
          type: 'GET',
          error: null
        }).done(function (folder) {
          var datasets = new girder.collections.ItemCollection();
          datasets.pageLimit = 100;
          datasets.fetch({
            folderId: folder._id
          });

          datasets.on('reset', function (items) {
            var libraryButtons = d3.select('div.datasetLibrary')
              .selectAll('.circleButton')
              .data(items.models);


            var libraryButtonsEnter = libraryButtons.enter().append('div')
              .attr('class', 'circleButton');
            libraryButtons.exit().remove();

            libraryButtonsEnter.append('img');
            libraryButtons.selectAll('img')
              .attr('src', libImage);

            libraryButtonsEnter.append('span');
            libraryButtons.selectAll('span')
              .text(function (d) { return d.get('name'); });

            d3.select('div.libraryInterface').selectAll('.circleButton')
              .on('click', function (d) {
                girder.restRequest({
                  path: 'item/' + d.id + '/download',
                  type: 'GET',
                  error: null,
                  dataType: 'text'
                }).done(function (data) {
                  d.set('content', data);
                  window.user.addDataset(d);
                  window.overlay.render(null);
                });
              });
          });
        });
    }
});

module.exports = DatasetLibrary;