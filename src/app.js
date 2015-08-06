
var HelloWorldLayer = cc.Layer.extend({
    bears:[],
    kisses:[],
    score:0,
    scoreLabel:null,
    time:0,
    ctor:function () {
    	
        this._super();

        var size = cc.winSize;

        var json = ccs.load(res.MainScene_json);
        ccs.load(res.bear_json);
        mainscene = json.node;
        this.addChild(mainscene);
        
        return true;
    },
    onEnter:function(){
    	this._super();
    	
    	this.init();
    	this.scheduleUpdateWithPriority(1);
    },
    init:function(){
    	//初始化熊与kiss
    	for (var i=0;i<9; i++){
    		var win = mainscene.getChildByName("win"+ (i+1));
    		
    		var bear = win.getChildByName("bear");
    		bear.addTouchEventListener(this.touchEvent, this);
    		bear.setPressedActionEnabled(false);
    		bear.myIndex = i
    		this.bears.push(bear);
    		
    		var kiss = win.getChildByName("kiss");
    		kiss.myIndex = i
    		this.kisses.push(kiss);
    	}	
    	//初始化计分
    	this.scoreLabel = mainscene.getChildByName("scoreLabel");
    	if (this.scoreLabel != null){
    		this.scoreLabel.setString(this.score);
    	}
    },
    touchEvent: function (sender, type) {
    	switch (type) {
    	case ccui.Widget.TOUCH_BEGAN:
    		this.showKiss(sender.myIndex);
    		for(var i=0;i<this.bears.length;i++){
    			this.bears[i].setEnabled(false);
    		}
    		break;
    	default:
    		break;
    	}
    },
    update:function(dt){
    	if (this.time == 0){
    		this.time = new Date().getTime();
    	} 
    	if ((new Date().getTime() - this.time) > 1500){
    		this.time = new Date().getTime();
    		var index = Math.floor(Math.random()*this.bears.length);
    		this.showBear(index);
    	}
    },
    showBear:function(index){
    	for (var i=0;i<this.bears.length;i++){
    		this.bears[i].setVisible(false);
    		this.bears[i].setEnabled(true);
    		this.kisses[i].setVisible(false);
    	}
    	this.bears[index].setVisible(true);
    },
    showKiss:function(index){
    	this.kisses[index].setVisible(true);
    	this.score += 100
    	this.scoreLabel.setString(this.score);
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

