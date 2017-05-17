lightGallery(document.getElementById('lightGallery'), {
  thumbnail: true,
  dynamic: true,
  dynamicEl: [{
      "src": 'demo/img/1-1600.jpg',
      'thumb': 'demo/img/thumb-1.jpg',
      'subHtml': '<h4>Caption 1</h4>'
  }, {
      "src": 'demo/img/1-1600.jpg',
      'thumb': 'demo/img/thumb-1.jpg',
      'subHtml': '<h4>Caption 2</h4>'
  }, {
      "src": 'demo/img/4-1600.jpg',
      'thumb': 'demo/img/thumb-4.jpg',
      'subHtml': '<h4>Caption 3</h4>'
  }, {
      "src": 'demo/img/cat-4.jpg',
      'thumb': 'demo/img/thumb-cat-4.jpg',
      'subHtml': '<h4>Caption 4</h4>'
  }]
}); 