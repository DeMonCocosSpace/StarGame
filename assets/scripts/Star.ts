// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Game from "./Game";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Star extends cc.Component {

    @property(cc.Integer)
    pickRadius = 0;

    //当前场景的脚本
    private game: Game = null;

    onLoad() {

    }

    init(game: Game) {
        this.game = game;
    }

    //获取主角与星星间的距离
    getDistance() {
        let playerPos = this.game.player.position;
        //console.log('(' + playerPos.x + ',' + playerPos.y + '+)');
        let distance = this.node.position.sub(playerPos).mag();
        return distance;
    }
    //主角摘到星星
    onPicked() {
        // 当星星被收集时，调用 Game 脚本中的接口，生成一个新的星星
        this.game.spawnNewStar();
        // 调用 Game 脚本的得分方法
        this.game.gainScore();
        // 然后销毁当前星星节点
        this.node.destroy();
    }
    update(dt) {
        if (this.getDistance() < this.pickRadius) {
            this.onPicked();
            return;
        }

        // 根据 Game 脚本中的计时器更新星星的透明度
        let opacityRatio = 1 - this.game.timer / this.game.starDuration;
        const minOpacity = 50;
        this.node.opacity = minOpacity + Math.floor(opacityRatio * (255 - minOpacity));
    }


}
