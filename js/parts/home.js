(function($V) {
var Home = $V.classes.VViewController.extend({
	displayName: "Home",
	viewWillInit: function(attr) {
		attr.id = "HomeVC";
	},
	viewDidLoad: function(aView){
		this.buildView(aView);
		this.bindEvents();
	},
	buildView: function(aView) {
		var tvc1, tvc2, tvc3;
		
		$V.beginNamespace("Home");
		
		$V.Button.create({ id: "button1", focusTargets: { left: 'button3', right: 'button2'}, text: "Button 1" });
		$V.Button.create({ id: "button2", focusTargets: { left: 'button1', right: 'button3'}, text: "Button 2" });
		$V.Button.create({ id: "button3", focusTargets: { left: 'button2', right: 'button1'}, text: "Button 3" });

		$V.endNamespace();		

		tvc1 = $V.TableViewController.create({ id: "tvc1", customClass: "vertical" });
		tvc2 = $V.TableViewController.create({ id: "tvc2", customClass: "horizontal", isVertical: false });
		tvc3 = $V.TableViewController.create({ id: "tvc3", customClass: "horizontal", isVertical: false });
		
		tvc1.setFocusTargets({ right: 'tvc2' });
		tvc2.setFocusTargets({ left:  'tvc1', down: 'tvc3' });
		tvc3.setFocusTargets({ left:  'tvc1', up: 'tvc2' });
		
		aView.append(tvc1);
		aView.append(tvc2);
		aView.append(V('button2', "Home"));
		aView.append(tvc3);
		
		V('tvc1').takeFocus();
		

		
		var demoData = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
		tvc1.setDataSource(demoData);
		tvc2.setDataSource(demoData);
		tvc3.setDataSource(demoData);
		

		tvc1.reloadData();
		tvc2.reloadData();
		tvc3.reloadData();
		
	},
	bindEvents: function() {
		$V.beginNamespace("Home");
		
		$V.endNamespace();
	}
});

$V.setIncludeObject(Home);

})($V);