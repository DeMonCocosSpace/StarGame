// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Player from "./Player";
import Score from "./Score";
import Star from "./Star";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Game extends cc.Component {
    @property(cc.Node)
    btnPlay: cc.Node = null; //开始按钮节点

    @property(cc.Node)
    ground: cc.Node = null; //地面节点，用于确定星星生成的高度

    @property(cc.Prefab)
    star: cc.Prefab = null; //星星生成的预制体

    @property(cc.Prefab)
    scoreNode: cc.Prefab = null;

    @property(Player)
    player: Player = null; //玩家主角节点

    @property(cc.Label)
    scoreText: cc.Label = null; //分数节点

    @property(cc.Label)
    lTimer: cc.Label = null; //星星倒计时节点

    @property(cc.Node)
    lGameOver: cc.Node = null; //GameOver节点

    @property(cc.Integer)
    minStarDuration = 0; //星星生成随机最小时间

    @property(cc.Integer)
    maxStarDuration = 0; //星星生成的随机最大时间

    @property(cc.Label)
    playTips: cc.Label = null;

    @property({
        multiline: true,
    })
    touchHint = "";

    @property({
        multiline: true,
    })
    keyboardHint = "";

    timer = 0; //计时器
    starDuration; //星星存在时间

    private groundY = 0; //地面高度
    private score = 0; //得分

    private isPlaying = false; //当前是否在玩

    private currentStar: cc.Node = null; //当前星星节点，用于游戏结束销毁

    private starPool: cc.NodePool = null; //星星对象池
    private scorePool: cc.NodePool = null; //得分对象池

    onLoad() {
        this.groundY = this.ground.y + this.ground.height / 2;

        this.starPool = new cc.NodePool("Star"); //星星
        this.scorePool = new cc.NodePool("Score"); //得分

        cc.log("isMobile=" + cc.sys.isMobile + ",platform=" + cc.sys.platform);
        var hintText = cc.sys.isMobile ? this.touchHint : this.keyboardHint;
        this.playTips.string = hintText;
    }

    update(dt) {
        if (!this.isPlaying) return;

        this.lTimer.string = (this.starDuration - this.timer).toFixed(3) + "";
        // 每帧更新计时器，超过限度还没有生成新的星星
        // 就会调用游戏失败逻辑
        if (this.timer > this.starDuration) {
            this.gameOver();
            return;
        }
        this.timer += dt;
    }

    //开始游戏逻辑
    startGame() {
        this.isPlaying = true;

        this.spawnNewStar();
        //显示倒计时
        this.lTimer.node.active = true;
        this.lGameOver.active = false;
        this.btnPlay.active = false;
        //重置得分
        this.score = 0;
        this.scoreText.string = "Score: 0";
        //重置角色状态
        this.player.startMove(this.groundY);
    }
    //得分逻辑
    gainScore(position: cc.Vec3) {
        this.score += 1;
        this.scoreText.string = "Score: " + this.score;
        //播放特效
        this.spawnScore(position);
    }

    //生成得分特效
    spawnScore(position) {
        let fx: cc.Node = null;
        if (this.scorePool.size() > 0) {
            fx = this.scorePool.get();
        } else {
            fx = cc.instantiate(this.scoreNode);
        }
        this.node.addChild(fx);
        fx.setPosition(position);
        const score = fx.getComponent(Score);
        score.init(this);
        score.play();
    }

    //回收得分特效
    despawnScore(score) {
        this.scorePool.put(score);
    }

    //游戏结束逻辑
    gameOver() {
        //隐藏倒计时
        this.lTimer.node.active = false;
        this.isPlaying = false;
        this.lGameOver.active = true;
        //停止角色
        this.player.enabled = false;
        this.player.stopMove();
        //隐藏角色
        //显示开始游戏按钮
        this.btnPlay.active = true;
        //销毁当前星星节点
        this.currentStar.destroy();
        //重新加载场景
        //cc.director.loadScene('Game');
    }

    desPawnStar(star) {
        this.starPool.put(star);
        this.spawnNewStar();
    }

    spawnNewStar() {
        let newStar = null;
        //根据prefab生成星星
        if (this.starPool.size() > 0) {
            newStar = this.starPool.get(this); //会触发Star组件的reuse()方法
        } else {
            newStar = cc.instantiate(this.star);
        }
        //添加星星
        this.node.addChild(newStar);
        //赋值当前星星节点
        this.currentStar = newStar;
        //根据随机位置生成星星
        newStar.setPosition(this.getNewStarPos());
        //传Game给Star调用
        newStar.getComponent(Star).init(this);

        //重置计时器，根据消失时间范围随机取一个值
        this.starDuration = this.minStarDuration + Math.random() * (this.maxStarDuration - this.minStarDuration);
        this.timer = 0;
    }

    //获取星星随机生成的位置
    getNewStarPos() {
        //减掉星星宽度，防止星星一半显示在屏幕外
        let randx = (Math.random() - 0.5) * 2 * (this.node.width / 2 - this.currentStar.width / 2);
        let jumpHeight = this.player.getComponent("Player").jumpHeight;
        let randy = this.groundY + Math.random() * jumpHeight + 50;
        cc.log(this.node.width + ",(" + randx + "," + randy + ")");
        return cc.v2(randx, randy);
    }
}
