import html from './index.jade';
import TrackerDash from '../../../components/TrackerDash';
import '../../../components/TrackerDash/styles';

document.write(html());

// Pass query param 'omitAggTrends' to test without 'agg_trends' key.
var betaGroundTruthSettings = {
  el: '.dash-container',
  name: 'Beta Ground Truth Pre-Approved With a very long name',
  day: '2014-06-03',
  submission_uuid: '2d14dd46-0738-11e6-b653-000c29998cff',
  branch: 'feature/incredibly-complex-and-precise-branch-name-master',
  producer_link: 'http://www.example.com',
  histogram_max_x: 0.5,
  trendValuesByDataset: [
    {
      dataset: 'dataset0.jpg',
      trend: 'ALGA RMSE Euclidean Distance',
      current: 0.1
    },
    {
      dataset: 'dataset0.jpg',
      trend: 'ALGC RMSE Euclidean Distance',
      // ALGC RMSE values are strings to elicit alpha sorting order bug.
      // With the bug, the median is 215, with the fix, it is 5.
      current: '215'
    },
    {
      dataset: 'dataset0.jpg',
      trend: 'ALGASBR RMSE Euclidean Distance',
      current: 0.3
    },
    {
      dataset: 'dataset0.jpg',
      trend: 'ALGD-OFFLINE RMSE Euclidean Distance',
      current: 0.25
    },
    {
      dataset: 'dataset0.jpg',
      trend: 'ALGD-ONLINE RMSE Euclidean Distance',
      current: 0.15
    },
    {
      dataset: 'dataset1',
      trend: 'ALGA RMSE Euclidean Distance',
      current: 0.2
    },
    {
      dataset: 'dataset1',
      trend: 'ALGC RMSE Euclidean Distance',
      current: '1'
    },
    {
      dataset: 'dataset1',
      trend: 'ALGASBR RMSE Euclidean Distance',
      current: 0.2
    },
    {
      dataset: 'dataset1',
      trend: 'ALGD-OFFLINE RMSE Euclidean Distance',
      current: 0.10
    },
    {
      dataset: 'dataset1',
      trend: 'ALGD-ONLINE RMSE Euclidean Distance',
      current: 0.12
    },
    {
      dataset: 'dataset2',
      trend: 'ALGA RMSE Euclidean Distance',
      current: 0.5
    },
    {
      dataset: 'dataset2',
      trend: 'ALGC RMSE Euclidean Distance',
      current: '5'
    },
    {
      dataset: 'dataset2',
      trend: 'ALGASBR RMSE Euclidean Distance',
      current: 0.3
    },
    {
      dataset: 'dataset2',
      trend: 'ALGD-OFFLINE RMSE Euclidean Distance',
      current: 0.22
    },
    {
      dataset: 'dataset2',
      trend: 'ALGD-ONLINE RMSE Euclidean Distance',
      current: 0.18
    },
    {
      dataset: 'dataset3',
      trend: 'ALGA RMSE Euclidean Distance',
      current: 0.8
    },
    {
      dataset: 'dataset3',
      trend: 'ALGC RMSE Euclidean Distance',
      current: '6'
    },
    // Omit ALGASBR dataset3
    {
      dataset: 'dataset3',
      trend: 'ALGD-OFFLINE RMSE Euclidean Distance',
      current: 27,
      callback: function () { console.log('dataset3-algd-offline'); }
    },
    {
      dataset: 'dataset3',
      trend: 'ALGD-ONLINE RMSE Euclidean Distance',
      current: 21,
      callback: function () { console.log('dataset3--algd-online'); }
    }
  ],
  datasetLabelMap: {
    'dataset2': 'rotation',
    'dataset1': 'label'
  },
  datasetMap: {
    'dataset3': 'http://www.example.com',
    'dataset2': function () { console.log('dataset 2'); }
  },
  trajectoryMap: {
    'dataset0.jpg': function () { console.log('dataset 0 -- trajectory'); },
    'dataset1': 'http://www.example.com'
  },
  agg_trends: [
    {
      name: 'ALGA 50th percentile RMSE Euclidean Distance',
      trend_name: 'ALGA RMSE Euclidean Distance',
      // No abbreviation provided.
      lower_is_better: true,
      warning: 10,
      fail: 25,
      max: 50,
      history: [0.4, 0.5, 0.6, 0.8, 1.2, 0.55, 0.5]
    },
    {
      name: 'ALGASBR 50th percentile RMSE Euclidean Distance',
      lower_is_better: true,
      trend_name: 'ALGASBR RMSE Euclidean Distance',
      abbreviation: 'ALGASBR',
      // Lacks a valid threshold definition.
      history: [0.4, 0.6, 0.6, 0.8, 1.2, 4, 0.3]
    },
    // ALGC is left out of agg_trends so it will be synthesized.
    {
      name: 'ALGD-ONLINE 50th percentile RMSE Euclidean Distance',
      lower_is_better: true,
      trend_name: 'ALGD-ONLINE RMSE Euclidean Distance',
      abbreviation: 'ALGD-ONLINE',
      warning: 0.10,
      fail: 0.2,
      max: 0.5,
      history: [0.4, 0.5, 0.6, 0.8, 2.2, 3.1415, 0.18]
    },
    {
      name: 'ALGD-OFFLINE 50th percentile RMSE Euclidean Distance',
      lower_is_better: true,
      trend_name: 'ALGD-OFFLINE RMSE Euclidean Distance',
      // A to force first in the sort order.
      abbreviation: 'AALGD-OFFLINE',
      warning: 10,
      fail: 25,
      max: 50,
      history: [0.4, 0.45, 0.52, 0.74, 2.4, 2.7, 0.25]
    }
  ],
  trends: [
    {
      name: 'ALGC RMSE Euclidean Distance',
      lower_is_better: true,
      abbreviation: 'ALGC',
      warning: 3,
      fail: 4,
      max: 5
    },
    {
      name: 'ALGA RMSE Euclidean Distance',
      // No abbreviation provided.
      lower_is_better: true,
      warning: 0.5,
      fail: 1,
      max: 2
    },
    {
      name: 'ALGASBR RMSE Euclidean Distance',
      // Z to force last in the sort order.
      lower_is_better: true,
      abbreviation: 'ZALGASBR',
      warning: 10,
      fail: 25,
      max: 50
    },
    {
      lower_is_better: true,
      name: 'ALGD-OFFLINE RMSE Euclidean Distance',
      abbreviation: 'ALGD-OFFLINE',
      warning: 10,
      fail: 25,
      max: 50
    },
    {
      lower_is_better: true,
      name: 'ALGD-ONLINE RMSE Euclidean Distance',
      abbreviation: 'ALGD-ONLINE',
      warning: 10,
      fail: 25,
      max: 50
    }
  ]
};

var imageProcessingSettings = {
  el: '.dash-container',
  name: 'Image Processing',
  day: '2014-06-03',
  submission_uuid: '2d14dd46-0738-11e6-b653-000c29998cff',
  branch: 'master',
  help_link: 'https://en.wikipedia.org/wiki/Image_processing',
  trendValuesByDataset: [{
    dataset: 'dataset0',
    trend: 'KEYPOINT-MATCHING Precision',
    current: 0.75
  },
    {
      dataset: 'dataset0',
      trend: 'KEYPOINT-MATCHING Recall',
      current: 0.5
    },
    {
      dataset: 'dataset0',
      trend: 'RANSAC Precision',
      current: 0.3
    },
    {
      dataset: 'dataset0',
      trend: 'RANSAC Recall',
      current: 0.25
    },
    {
      dataset: 'dataset1',
      trend: 'KEYPOINT-MATCHING Precision',
      current: 0.85
    },
    {
      dataset: 'dataset1',
      trend: 'KEYPOINT-MATCHING Recall',
      current: 0.85
    },
    {
      dataset: 'dataset1',
      trend: 'RANSAC Precision',
      current: 0.5
    },
    {
      dataset: 'dataset1',
      trend: 'RANSAC Recall',
      current: 0.35
    }],
  trends: [
    {
      name: 'KEYPOINT-MATCHING Precision',
      abbreviation: 'Matching Precision',
      lower_is_better: false,
      warning: 0.75,
      fail: 0.5,
      max: 1
    },
    {
      name: 'KEYPOINT-MATCHING Recall',
      abbreviation: 'Matching Recall',
      lower_is_better: false,
      warning: 0.75,
      fail: 0.5,
      max: 1.0
    },
    {
      name: 'RANSAC Precision',
      lower_is_better: false,
      warning: 0.5,
      fail: 0.25,
      max: 1.0
    },
    {
      name: 'RANSAC Recall',
      lower_is_better: false,
      warning: 0.75,
      fail: 0.5,
      max: 1.0
    }
  ],
  agg_trends: [
    {
      trend_name: 'KEYPOINT-MATCHING Precision',
      lower_is_better: false,
      name: 'KEYPOINT-MATCHING Precision',
      abbreviation: 'Matching Precision',
      warning: 0.75,
      fail: 0.5,
      max: 1.0,
      history: [0.4, 0.5, 0.6, 0.8, 0.6, 0.75, 0.85]
    },
    {
      trend_name: 'KEYPOINT-MATCHING Recall',
      lower_is_better: false,
      name: 'KEYPOINT-MATCHING Recall',
      abbreviation: 'Matching Recall',
      warning: 0.75,
      fail: 0.5,
      max: 1.0,
      // This trend only has one point.
      history: [0.85]
    },
    {
      trend_name: 'RANSAC Precision',
      lower_is_better: false,
      name: 'RANSAC Precision',
      warning: 0.5,
      fail: 0.25,
      max: 1.0,
      history: [0.8, 0.75, 0.64, 0.28, 0.69, 0.87, 0.5]
    },
    {
      trend_name: 'RANSAC Recall',
      lower_is_better: false,
      name: 'RANSAC Recall',
      warning: 0.75,
      fail: 0.5,
      max: 1.0,
      history: [0.7, 0.7, 0.86, 0.92, 0.7, 0.72, 0.35]
    }
  ]
};

// Ground truth dataset is default.
var appSettings = betaGroundTruthSettings;
var qParams = window.location.search;
if (qParams) {
  qParams = qParams.split('?')[1].split('&');
  for (let i = 0; i < qParams.length; i++) {
    if (qParams[i] === 'imageProcessing') {
      // Replace with imageProcessing dataset.
      appSettings = imageProcessingSettings;
    }
  }
  // Perform two separate loops since we set appSettings
  // above, which is modified below.
  for (let i = 0; i < qParams.length; i++) {
    if (qParams[i] === 'omitAggTrends') {
      delete appSettings['agg_trends'];
    }
    if (qParams[i] === 'omitTrends') {
      delete appSettings['trends'];
    }
    if (qParams[i] === 'multipleValues') {
      appSettings['trendValuesByDataset'][0]['current'] = [0.1, 0.2, 0.3, 0.5, 0.9, 0.1, 0.5, 0.3, 5.0];
      appSettings['trendValuesByDataset'][1]['current'] = [0.1, 0.2, 0.3, 0.5, 0.9, 0.1, 0.5, 0.3, 2.0];
      appSettings['trendValuesByDataset'][appSettings['trendValuesByDataset'].length - 1]['current'] = [20, 20, 20, 30, 20, 21, 22, 23, 25];
      appSettings['trendValuesByDataset'][appSettings['trendValuesByDataset'].length - 2]['current'] = [120, 220, 220, 330, 202, 2100, 220, 11, 333];
      appSettings['trendValuesByDataset'][appSettings['trendValuesByDataset'].length - 3]['current'] = [0.1, 0.52, 0.3];
      appSettings['trendValuesByDataset'][appSettings['trendValuesByDataset'].length - 3]['current'] = [0.1, 3.2, 0.3];
      appSettings['trendValuesByDataset'][appSettings['trendValuesByDataset'].length - 8]['current'] = [0.1, 8.2, 10.3];
      appSettings['trendValuesByDataset'][appSettings['trendValuesByDataset'].length - 13]['current'] = [0.1, 0.2, 0.3];
      appSettings['trendValuesByDataset'][appSettings['trendValuesByDataset'].length - 11]['current'] = [99.9];
    }
  }
}
var app = new TrackerDash(document.body, appSettings);
app.render();
