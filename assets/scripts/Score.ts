// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Game from "./Game";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Score extends cc.Component {
    // LIFE-CYCLE CALLBACKS:
    @property(cc.AudioClip)
    scoreAudio: cc.AudioClip = null; //得分音效
    private anim: cc.Animation = null;

    private game: Game = null;
    init(game: Game) {
        this.game = game;
    }

    onLoad() {
        this.anim = this.node.getComponent(cc.Animation);
    }

    play() {
        this.anim.play();
        //播放得分音效
        cc.audioEngine.playEffect(this.scoreAudio, false);
    }

    playEnd() {
        this.game.despawnScore(this.node);
    }

    start() {}

    // update (dt) {}
}
