// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class Star extends cc.Component {

    @property(cc.Integer)
    pickRadius = 0;

    //当前场景的脚本
    private game = null;

    onLoad() {
        this.game = this.node.parent.getComponent('Game');

    }

    //获取主角与星星间的距离
    getDistance() {
        let playerPos = this.game.player.position;
        console.log('(' + playerPos.x + ',' + playerPos.y + '+)');
        let distance = this.node.position.sub(playerPos).mag();
        return distance;
    }


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
    }


}
