//Application Window Component Constructor
function ApplicationWindow() {
	//load component dependencies
	var FirstView = require('ui/common/FirstView');
		
	//create component instance
	var self = Ti.UI.createWindow({
		backgroundColor:'#ffffff',
		navBarHidden:true,
		exitOnClose:true
	});
		
	var titleBar = Ti.UI.createView({
		backgroundColor : 'black',
		top : 0,
		height : 48,
		width : Ti.Platform.displayCaps.platformWidth,
	});

	var homeButton = Ti.UI.createImageView({
		image : '/images/home.png',
		height : 40,
		width : 40,
		top : 4,
		left : 4
	});
	
	homeButton.addEventListener('click',function(e){
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
		text : "Where's My Stuff",
		font : {
			fontSize : 34
		},
		width : 'auto',
		height : 'auto',
		bottom : 0
	});

	var searchButton = Ti.UI.createImageView({
		top : 72,
		image : '/images/search.jpg'
	});

	searchButton.addEventListener('click', function(e) {
		//alert("ok");
		self.searchView = Ti.UI.createView({
			top:48,
			backgroundColor:'white'
		});
		
		var searchIcon = Ti.UI.createImageView({
			top:24,
			height:72,
			width:72,
			image:'/images/search.png'
		});
		
		var searchBox = Ti.UI.createTextField({
			top:120,
			width:320,
			height:35,
			left:'auto'
		});
		
		var submitButton = Ti.UI.createButton({
			title:'Submit',
			top:179,
			width:'auto',
			height:'auto'
		});
		
		submitButton.addEventListener('click', function(e){
			alert("Search has been sent!");
		});
		
		self.searchView.add(searchIcon);
		self.searchView.add(searchBox);
		self.searchView.add(submitButton);
		
		self.add(self.searchView);
	});

	var addButton = Ti.UI.createImageView({
		top : 72 + 60 + 24,
		image : '/images/add.jpg'
	});
	
	addButton.addEventListener('click', function(e){
		self.addView = Ti.UI.createView({
			top:48,
			backgroundColor:'white'
		});
		
		var chooseFrom = Ti.UI.createImageView({
			top:24,
			image:'/images/add_item.jpg'
		});
		
		var camera = Ti.UI.createImageView({
			top:48+60,
			image:'/images/camera.jpg'
		});
		
		var location = Ti.UI.createImageView({
			top : 48 + 60,
			image : 'images/camera.jpg'
		});
		
		self.addView.add(chooseFrom);
		self.addView.add(camera);
		self.addView.add(location);
		self.add(self.addView);
	});

	var profileButton = Ti.UI.createImageView({
		top : 72 + 120 + 48,
		image : '/images/profile.jpg'
	});
	
	profileButton.addEventListener('click', function(e){
		self.profileView = Ti.UI.createView({
			top:48,
			backgroundColor:'white'
		});
		
		var profile = Ti.UI.createImageView({
			top:24,
			image:'/images/profilePage.jpg'
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
