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
		} else if (self.profileView != undefined || self.profileView != null) {
			self.remove(self.profileView);
			self.profileView = null;
		}
	});

	var titleLabel = Ti.UI.createLabel({
		color : 'white',
		text : "Where'sMyStuff",
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
			top : 120,
			width : 320,
			height : 35,
			left : 'auto'
		});

		var submitButton = Ti.UI.createButton({
			title : 'Submit',
			top : 179,
			width : 'auto',
			height : 'auto'
		});

		submitButton.addEventListener('click', function(e) {
			alert("Search has been sent!");
		});

		self.searchView.add(searchIcon);
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

		self.addView.add(chooseFrom);
		self.addView.add(camera);
		self.add(self.addView);

		chooseFrom.addEventListener('click', function(e) {
			var selectionGallery = Ti.UI.createView({
				top : 108,
				width : 340,
				backgroundColor : 'teal'
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
					var itemPhoto = Ti.UI.createView({
						top : 10 + (i * 10) + (i * 100),
						left : 10 + (j * 10) + (j * 100),
						width : 100,
						height : 100,
						backgroundColor : 'orange'
					});
					itemPhoto.addEventListener('click', function(e) {
						if (confirm('itemImage.jpg selected\n\nUpload phtoto to create new item?')) {
							var itemDetailView = Ti.UI.createView({
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
								self.remove(itemDetailView);
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
							itemDetailView.add(nameTextField);
							itemDetailView.add(nameLabel);
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
							itemDetailView.add(locationTextField);
							itemDetailView.add(locationLabel);
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
							itemDetailView.add(tagsTextField);
							itemDetailView.add(tagsLabel);
							itemDetailView.add(itemTitleLabel);
							itemDetailView.add(itemPhoto);

							var saveButton = Ti.UI.createButton({
								title : 'Save',
								left : 8,
								bottom : 40,
								width : 100,
								height : 24
							});
							itemDetailView.add(saveButton);

							var addMoreButton = Ti.UI.createButton({
								title : 'Add Another Item',
								right : 8,
								bottom : 40,
								width : 200,
								height : 24
							});
							itemDetailView.add(addMoreButton);

							itemDetailView.add(closeDetailButton);
							self.add(itemDetailView);
						}
					});
					selectionGallery.add(itemPhoto);
				}
			}

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

		var profile = Ti.UI.createImageView({
			top : 24,
			image : 'images/profilePage.jpg'
		});

		self.profileView.add(profile);
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
