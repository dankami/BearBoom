var StartScene = cc.Scene.extend({
	onEnter:function () {
		this._super();
		var layer = new StartLayer();
		this.addChild(layer);
	}
});

var StartLayer = cc.Layer.extend({
	
	startBtn : null,
	rankerBtn : null,
	
	ctor:function() {
		this._super();
		
		var size = cc.winSize;

		var json = ccs.load(res.StartScene_json);
		ccs.load(res.bear_json);
		startscene = json.node;
		this.addChild(startscene);
		
		this.startBtn = startscene.getChildByName("startBtn");
		this.startBtn.addTouchEventListener(this.touchEvent,this);
		return true;
	},
	
	touchEvent: function (sender, type) {
		switch (type) {
		case ccui.Widget.TOUCH_BEGAN:
			console.log("ok");
			break;
		default:
			break;
		}
	},
	
});