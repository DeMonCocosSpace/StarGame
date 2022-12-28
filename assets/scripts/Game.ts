// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

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

    @property(cc.Node)
    player: cc.Node = null; //玩家主角节点

    @property(cc.Label)
    scoreText: cc.Label = null; //分数节点

    @property(cc.AudioClip)
    scoreAudio: cc.AudioClip = null; //得分音效

    @property(cc.Integer)
    minStarDuration = 0;  //星星生成随机最小时间

    @property(cc.Integer)
    maxStarDuration = 0; //星星生成的随机最大时间


    timer = 0; //计时器
    starDuration; //星星存在时间

    private groundY = 0;//地面高度
    private score = 0; //得分

    onLoad() {
        this.groundY = this.ground.y + this.ground.height / 2;

        this.scoreText.node.active = false;
        this.player.active = false;
    }

    update(dt) {
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
        this.spawnNewStar();

        this.btnPlay.active = false;
        this.scoreText.node.active = true;
        this.player.active = true;
    }
    //得分逻辑
    gainScore() {
        this.score += 1;
        this.scoreText.string = 'Score: ' + this.score;

        //播放得分音效
        cc.audioEngine.playEffect(this.scoreAudio, false);
    }

    //游戏结束逻辑
    gameOver() {
        //停止Player的跳跃动作
        this.player.stopAllActions();
        //重新加载场景
        cc.director.loadScene('Game');
    }

    spawnNewStar() {
        //根据prefab生成星星
        let newStar = cc.instantiate(this.star);
        //添加星星
        this.node.addChild(newStar);
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
        let randx = (Math.random() - 0.5) * 2 * this.node.width / 2;
        let jumpHeight = this.player.getComponent('Player').jumpHeight;
        let randy = this.groundY + Math.random() * jumpHeight + 50;
        cc.log(this.node.width + ',(' + randx + ',' + randy + ')');
        return cc.v2(randx, randy);
    }

}
