(function($V) {
var Screen2 = $V.classes.VViewController.extend({
	displayName: "Screen2",
	viewWillInit: function(attr) {
		attr.id = "Screen2VC";
	},
	viewDidLoad: function(aView){
		this.buildView(aView);
		this.bindEvents();
	},
	buildView: function(aView) {
		var tvc1, tvc2, tvc3;
		
		$V.beginNamespace("Screen2");
		
		$V.Button.create({ id: "button1", focusTargets: { left: 'button3', right: 'button2'}, text: "Button 1" });

		aView.append(V('button1'));
		
		$V.endNamespace();		


	},
	bindEvents: function() {
	}
});

$V.setIncludeObject(Screen2);

})($V);