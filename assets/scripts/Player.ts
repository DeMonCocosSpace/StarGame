// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class Player extends cc.Component {

    @property(cc.Integer)
    jumpHeight = 0; // 最大移动速度
    @property(cc.Integer)
    jumpDuration = 0; // 主角跳跃持续时间
    @property(cc.Integer)
    maxMoveSpeed = 0; // 最大移动速度
    @property(cc.Integer)
    accel = 0; // 加速度
    @property(cc.AudioClip)
    jumpAudio: cc.AudioClip = null;


    private accLeft = false; //向左加速
    private accRight = false; //向右加速
    private xSpeed = 0; //主角横向加速

    onLoad() {
        this.jumpAction();

        this.setInputControl();
    }

    setInputControl() {
        //add keyboard input listener to jump, turnLeft and turnRight
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        // touch input
        this.node.parent.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this);
        this.node.parent.on(cc.Node.EventType.TOUCH_END, this.onTouchEnded, this);
    }

    onKeyDown(event: cc.Event.EventKeyboard) {
        switch (event.keyCode) {
            case cc.macro.KEY.right:
                this.accRight = true;
                break;
            case cc.macro.KEY.left:
                this.accLeft = true;
                break;
        }
    }

    onKeyUp(event: cc.Event.EventKeyboard) {
        switch (event.keyCode) {
            case cc.macro.KEY.right:
                this.accRight = false;
                break;
            case cc.macro.KEY.left:
                this.accLeft = false;
                break;
        }
    }

    onTouchBegan(event) {
        var touchLoc = event.getLocation();
        if (touchLoc.x >= cc.winSize.width / 2) {
            this.accLeft = false;
            this.accRight = true;
        } else {
            this.accLeft = true;
            this.accRight = false;
        }
        // don't capture the event
        return true;
    }

    onTouchEnded(event) {
        this.accLeft = false;
        this.accRight = false;
    }

    update(dt) {
        // 根据当前加速度方向每帧更新速度
        if (this.accLeft) {
            this.xSpeed -= this.accel * dt;
        } else if (this.accRight) {
            this.xSpeed += this.accel * dt;
        }
        // 限制主角的速度不能超过最大值
        if (Math.abs(this.xSpeed) > this.maxMoveSpeed) {
            this.xSpeed = this.maxMoveSpeed * this.xSpeed / Math.abs(this.xSpeed);
        }

        //设置主角位置
        this.node.x += this.xSpeed * dt;
        //限制主角不能超过屏幕外
        const parentWidth = this.node.parent.width / 2
        if (Math.abs(this.node.x) + this.node.width / 2 >= parentWidth) {
            this.node.x = (parentWidth - this.node.width / 2) * this.node.x / Math.abs(this.node.x);
        }
    }

    onDestroy() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }



    //跳跃
    jumpAction() {
        //上升
        let jumpUp = cc.tween()
            .by(this.jumpDuration, { y: this.jumpHeight }, { easing: 'sineOut' });
        //下落
        let jumpDown = cc.tween()
            .by(this.jumpDuration, { y: -this.jumpHeight }, { easing: 'sineIn' });
        //创建一个缓动=
        let tween = cc.tween()
            //按 jumpUp、jumpDown 的顺序执行动作
            .sequence(jumpUp, jumpDown)
            //回调
            .call(() => {
                this.playJumpAudio();
            }, this)
        //重复执行
        cc.tween(this.node).repeatForever(tween).start();
    }

    playJumpAudio() {
        cc.audioEngine.playEffect(this.jumpAudio, false);
    }
}
