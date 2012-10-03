//Application Window Component Constructor
function ApplicationWindow() {
	//load component dependencies
	var FirstView = require('ui/common/FirstView');

	//create component instance
	var self = Ti.UI.createWindow({
		backgroundColor : '#ffffff'
	});

	var titleBar = Ti.UI.createView({
		backgroundColor : 'black',
		top : 0,
		height : 48,
		width : Ti.Platform.displayCaps.platformWidth,
	});

	var homeButton = Ti.UI.createImageView({
		image : 'images/home.png',
		height : 40,
		width : 40,
		top : 4,
		left : 4
	});

	homeButton.addEventListener('click', function(e) {
		if (self.searchView != undefined || self.searchView != null) {
			self.remove(self.searchView);
			self.searchView = null;
		} else if (self.addView != undefined || self.addView != null) {
			self.remove(self.addView);
			self.addView = null;
			if (self.itemDetaiView != undefined || self.itemDetailView != null) {
				self.remove(self.itemDetailView);
				self.itemDetailView = null;
			}
		} else if (self.profileView != undefined || self.profileView != null) {
			self.remove(self.profileView);
			self.profileView = null;
		}
	});

	var titleLabel = Ti.UI.createLabel({
		color : 'white',
		text : "Where's My Stuff",
		font : {
			fontSize : 28
		},
		width : 'auto',
		height : 'auto'
	});

	var searchButton = Ti.UI.createImageView({
		top : 72,
		image : 'images/search.jpg'
	});

	searchButton.addEventListener('click', function(e) {
		//alert("ok");
		self.searchView = Ti.UI.createView({
			top : 48,
			backgroundColor : 'white'
		});

		var searchIcon = Ti.UI.createImageView({
			top : 24,
			height : 72,
			width : 72,
			image : 'images/search.png'
		});

		var searchBox = Ti.UI.createTextField({
			top : 20,
			width : 320,
			height : 35,
			left : 'auto'
		});

		var submitButton = Ti.UI.createImageView({
			top : 20,
			height : 28,
			width : 28,
			left : (Ti.Platform.displayCaps.platformWidth / 2) + 42,
			image : 'images/search.png'
		});

		submitButton.addEventListener('click', function(e) {
			alert('You have searched for "Sports Shoes"');
			var searchResults = Ti.UI.createScrollView({
				width : 'auto',
				contentWidth : 'auto',
				contentHeight : 'auto',
				top : 54
			});
			var searchResultsList = Ti.UI.createImageView({
				left : (Ti.Platform.displayCaps.platformWidth / 2) - 152,
				image : 'images/search-result.jpg'
			});
			searchResults.add(searchResultsList);
			self.searchView.add(searchResults);
		});

		//self.searchView.add(searchIcon);
		self.searchView.add(searchBox);
		self.searchView.add(submitButton);

		self.add(self.searchView);
	});

	var addButton = Ti.UI.createImageView({
		top : 72 + 60 + 24,
		image : 'images/add.jpg'
	});

	addButton.addEventListener('click', function(e) {
		self.addView = Ti.UI.createView({
			top : 48,
			backgroundColor : 'white'
		});

		var chooseFrom = Ti.UI.createImageView({
			top : 24,
			image : 'images/add_item.jpg'
		});

		var camera = Ti.UI.createImageView({
			top : 48 + 60,
			image : 'images/camera.jpg'
		});

		camera.addEventListener('click', function(e) {
			confirm("This will open the phone's camera app\nContinue?");
		});

		self.addView.add(chooseFrom);
		self.addView.add(camera);
		//self.addView.add(location);
		self.add(self.addView);

		chooseFrom.addEventListener('click', function(e) {
			var selectionGallery = Ti.UI.createView({
				top : 80,
				width : 340,
				backgroundColor : 'white'
			});
			var backButton = Ti.UI.createLabel({
				backgroundColor : 'black',
				bottom : 0,
				right : 0,
				color : 'white',
				text : "back",
				font : {
					fontSize : 24
				},
				width : 'auto',
				height : 'auto'
			});
			backButton.addEventListener('click', function(e) {
				self.addView.remove(selectionGallery);
			});

			// var itemPhoto1 = Ti.UI.createView({
			// top: 10,
			// left: 10,
			// width : 100,
			// height : 100,
			// backgroundColor : 'orange'
			// });
			//
			// var itemPhoto2 = Ti.UI.createView({
			// top: 10,
			// left: 120,
			// width : 100,
			// height : 100,
			// backgroundColor : 'orange'
			// });
			//
			// selectionGallery.add(itemPhoto1);
			// selectionGallery.add(itemPhoto2);

			for (var i = 0; i < 3; i++) {
				for (var j = 0; j < 3; j++) {
					var count = 1;
					var itemPhoto = Ti.UI.createImageView({
						top : 36 + (i * 10) + (i * 100),
						left : 10 + (j * 10) + (j * 100),
						width : 100,
						height : 100,
						image : 'images/pink-pumps.jpg'
					});
					itemPhoto.addEventListener('click', function(e) {
						if (confirm('itemImage.jpg selected\n\nUpload phtoto to create new item?')) {
							self.itemDetailView = Ti.UI.createView({
								top : 48,
								backgroundColor : 'white'
							});
							var closeDetailButton = Ti.UI.createLabel({
								backgroundColor : 'black',
								bottom : 0,
								right : 0,
								color : 'white',
								text : "close detail",
								font : {
									fontSize : 24
								},
								width : 'auto',
								height : 'auto'
							});
							closeDetailButton.addEventListener('click', function(e) {
								self.remove(self.itemDetailView);
								self.itemDetailView = null
							});
							var itemTitleLabel = Ti.UI.createLabel({
								backgroundColor : 'white',
								top : 6,
								left : 8,
								color : 'black',
								text : "Details",
								font : {
									fontSize : 32
								},
								width : 'auto',
								height : 'auto'
							});
							var itemPhoto = Ti.UI.createImageView({
								top : 6 + 32 + 6,
								left : 8,
								image : 'images/pink-pumps.jpg',
								width : 240
							});
							var nameLabel = Ti.UI.createLabel({
								left : 8,
								top : 274,
								text : 'NAME',
								font : {
									fontWeight : 'bold',
									fontSize : 18
								}
							});
							var nameTextField = Ti.UI.createTextField({
								borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
								color : '#336699',
								top : 274,
								left : 120,
								width : 200,
								height : 24
							});
							self.itemDetailView.add(nameTextField);
							self.itemDetailView.add(nameLabel);
							var locationLabel = Ti.UI.createLabel({
								left : 8,
								top : 274 + 18 + 6,
								text : 'LOCATION',
								font : {
									fontWeight : 'bold',
									fontSize : 18
								}
							});
							var locationTextField = Ti.UI.createTextField({
								borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
								color : '#336699',
								top : 274 + 18 + 6,
								left : 120,
								width : 200,
								height : 24
							});
							self.itemDetailView.add(locationTextField);
							self.itemDetailView.add(locationLabel);
							var tagsLabel = Ti.UI.createLabel({
								left : 8,
								top : 274 + 36 + 12,
								text : 'TAGS',
								font : {
									fontWeight : 'bold',
									fontSize : 18
								}
							});
							var tagsTextField = Ti.UI.createTextField({
								borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
								color : '#336699',
								top : 274 + 36 + 12,
								left : 120,
								width : 200,
								height : 24
							});
							self.itemDetailView.add(tagsTextField);
							self.itemDetailView.add(tagsLabel);
							self.itemDetailView.add(itemTitleLabel);
							self.itemDetailView.add(itemPhoto);

							var saveButton = Ti.UI.createButton({
								title : 'Save',
								left : 8,
								bottom : 40,
								width : 100,
								height : 24
							});
							saveButton.addEventListener('click', function(e) {
								alert('Item has been saved to you profile!');
							});
							self.itemDetailView.add(saveButton);

							var addMoreButton = Ti.UI.createButton({
								title : 'Add Another Item',
								right : 8,
								bottom : 40,
								width : 200,
								height : 24
							});
							self.itemDetailView.add(addMoreButton);

							self.itemDetailView.add(closeDetailButton);
							self.add(self.itemDetailView);
						}
					});
					selectionGallery.add(itemPhoto);
				}
			}

			selectionGallery.add(Ti.UI.createLabel({
				backgroundColor : 'white',
				top : 10,
				color : 'black',
				text : "Select an item's image to upload",
				font : {
					fontSize : 18
				},
				width : 'auto',
				height : 'auto'
			}));

			selectionGallery.add(backButton);
			self.addView.add(selectionGallery);
		});
	});

	var profileButton = Ti.UI.createImageView({
		top : 72 + 120 + 48,
		image : 'images/profile.jpg'
	});

	profileButton.addEventListener('click', function(e) {
		self.profileView = Ti.UI.createView({
			top : 48,
			backgroundColor : 'white'
		});

		var profileLabel = Ti.UI.createImageView({
			top : 24,
			image : 'images/irenes-profile.jpg'
		});

		var profileCategoryLabel = Ti.UI.createImageView({
			top : 24 + 82 + 6,
			left : (Ti.Platform.displayCaps.platformWidth / 2) - 154,
			image : 'images/choose-category.jpg'
		});

		var categoryTextField = Ti.UI.createTextField({
			borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
			color : '#336699',
			top : 24 + 82 + 6,
			left : (Ti.Platform.displayCaps.platformWidth / 2),
			width : 150,
			height : 24
		});

		var profileFilterLabel = Ti.UI.createImageView({
			top : 24 + 82 + 6 + 36,
			left : (Ti.Platform.displayCaps.platformWidth / 2) - 154,
			image : 'images/filter-by-category.jpg'
		});

		var filterTextField = Ti.UI.createTextField({
			borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
			color : '#336699',
			top : 24 + 82 + 6 + 36,
			left : (Ti.Platform.displayCaps.platformWidth / 2),
			width : 150,
			height : 24
		});

		var activateFilterButton = Ti.UI.createLabel({
			backgroundColor : 'black',
			top : 24 + 82 + 6 + 36 + 34,
			color : 'white',
			text : "Filter Items",
			font : {
				fontSize : 18
			},
			width : 'auto',
			height : 'auto'
		});

		activateFilterButton.addEventListener('click', function(e) {
			var filterResults = Ti.UI.createScrollView({
				width : 'auto',
				contentWidth : 'auto',
				contentHeight : 'auto',
				top : 24 + 82 + 6 + 36 + 30 + 30
			});
			//alert('ok');
			var resultsList = Ti.UI.createImageView({
				left : (Ti.Platform.displayCaps.platformWidth / 2) - 152,
				image : 'images/my-items.jpg'
			});
			filterResults.add(resultsList);
			self.profileView.add(filterResults);
		});

		self.profileView.add(profileLabel);
		self.profileView.add(profileFilterLabel);
		self.profileView.add(categoryTextField);
		self.profileView.add(filterTextField);
		self.profileView.add(profileCategoryLabel);
		self.profileView.add(activateFilterButton);
		self.add(self.profileView);
	});

	titleBar.add(titleLabel);
	titleBar.add(homeButton);

	//construct UI
	var firstView = new FirstView();
	self.add(titleBar);
	self.add(searchButton);
	self.add(addButton);
	self.add(profileButton);
	//self.add(firstView);

	return self;
}

//make constructor function the public component interface
module.exports = ApplicationWindow;
