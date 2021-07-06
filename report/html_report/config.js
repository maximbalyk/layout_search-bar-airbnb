report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Entire_document_1024px.png",
        "test": "..\\bitmaps_test\\20210706-185117\\Entire_document_1024px.png",
        "selector": "document",
        "fileName": "Entire_document_1024px.png",
        "label": "Entire document",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3010/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/search-bar-airbnb/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -8
          },
          "misMatchPercentage": "0.50",
          "analysisTime": 89
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Entire_document_720px.png",
        "test": "..\\bitmaps_test\\20210706-185117\\Entire_document_720px.png",
        "selector": "document",
        "fileName": "Entire_document_720px.png",
        "label": "Entire document",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3010/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/search-bar-airbnb/",
        "expect": 0,
        "viewportLabel": "720px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -8
          },
          "misMatchPercentage": "0.71",
          "analysisTime": 81
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Big_search_bar_data-qa_big_1024px.png",
        "test": "..\\bitmaps_test\\20210706-185117\\Big_search_bar_data-qa_big_1024px.png",
        "selector": "[data-qa=\"big\"]",
        "fileName": "Big_search_bar_data-qa_big_1024px.png",
        "label": "Big search bar data-qa_big",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3010/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/search-bar-airbnb/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.69",
          "analysisTime": 32
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Big_search_bar_data-qa_big_720px.png",
        "test": "..\\bitmaps_test\\20210706-185117\\Big_search_bar_data-qa_big_720px.png",
        "selector": "[data-qa=\"big\"]",
        "fileName": "Big_search_bar_data-qa_big_720px.png",
        "label": "Big search bar data-qa_big",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3010/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/search-bar-airbnb/",
        "expect": 0,
        "viewportLabel": "720px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.98",
          "analysisTime": 50
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Small_search_bar_data-qa_small_1024px.png",
        "test": "..\\bitmaps_test\\20210706-185117\\Small_search_bar_data-qa_small_1024px.png",
        "selector": "[data-qa=\"small\"]",
        "fileName": "Small_search_bar_data-qa_small_1024px.png",
        "label": "Small search bar data-qa_small",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3010/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/search-bar-airbnb/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.78",
          "analysisTime": 88
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Small_search_bar_data-qa_small_720px.png",
        "test": "..\\bitmaps_test\\20210706-185117\\Small_search_bar_data-qa_small_720px.png",
        "selector": "[data-qa=\"small\"]",
        "fileName": "Small_search_bar_data-qa_small_720px.png",
        "label": "Small search bar data-qa_small",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3010/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/search-bar-airbnb/",
        "expect": 0,
        "viewportLabel": "720px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "1.11",
          "analysisTime": 58
        },
        "diffImage": "..\\bitmaps_test\\20210706-185117\\failed_diff_Small_search_bar_data-qa_small_720px.png"
      },
      "status": "fail"
    }
  ]
});