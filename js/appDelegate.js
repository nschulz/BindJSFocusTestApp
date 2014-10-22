$V.include(
[
	'js/parts/home.js',
	'js/parts/screen2.js'
],
function run(context) {
	
	$V.preventTouchScrolling();
	$V.preventNativeMouseWheel();
	$V.focusController.enableKeyboardNavigation();
	
	var AppDelegate = VObject.extend({
		displayName: "AppDelegate",
		init: function() {
			this.contentView = $V.Window.create({ id: "Stage", 
												  fullScreen: true,
												  hasTitleBar: false });
												
			if ($V.device.isiPad()) {
				this.contentView.addClass("iPad");
			}
			
			this.Home = new (context.Home)();
			this.contentView.append( this.Home );
			this.contentView.makeKeyAndOrderFront();
			
			this.Screen2 = new (context.Screen2)();
			this.contentView.append( this.Screen2 );
		}
	});
	AppDelegate.displayName = "AppDelegate";
	$V.setIncludeObject(AppDelegate);
	
});