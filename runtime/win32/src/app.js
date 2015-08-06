
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
    	
        this._super();

        var size = cc.winSize;

        var json = ccs.load(res.MainScene_json);
        mainscene = json.node;
        this.addChild(mainscene);
        
        var wins = [];
        for (var i=0;i<9; i++){
        	var win = mainscene.getChildByName("win"+ (i+1));
        	wins.push(win);
        }
        for (var i=0;i<wins.length;i++){
        	var bear = wins[i].getChildByName("bear");
//        	bear.setVisible(true);
        }
        
        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

