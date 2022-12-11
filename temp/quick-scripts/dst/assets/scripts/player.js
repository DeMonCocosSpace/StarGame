
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '42647DB7IdAxIxjtYH071RD', 'Player');
// scripts/Player.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    // foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },
    // 主角跳跃高度
    jumpHeight: 0,
    // 主角跳跃持续时间
    jumpDuration: 0,
    // 最大移动速度
    maxMoveSpeed: 0,
    // 加速度
    accel: 0,
    jumpAudio: {
      "default": null,
      type: cc.AudioClip
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    console.log('onLoad'); // 初始化跳跃动作

    var jumpAction = this.runJumpAction();
    cc.tween(this.node).then(jumpAction).start(); // 加速度方向开关

    this.accLeft = false;
    this.accRight = false; // 主角当前水平方向速度

    this.xSpeed = 0;
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
  },
  start: function start() {
    console.log('start');
  },
  onDestroy: function onDestroy() {
    // 取消键盘输入监听
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
  },
  update: function update(dt) {
    //console.log('update');
    // 根据当前加速度方向每帧更新速度
    if (this.accLeft) {
      this.xSpeed -= this.accel * dt;
    } else if (this.accRight) {
      this.xSpeed += this.accel * dt;
    } // 限制主角的速度不能超过最大值


    if (Math.abs(this.xSpeed) > this.maxMoveSpeed) {
      this.xSpeed = this.maxMoveSpeed * this.xSpeed / Math.abs(this.xSpeed);
    }

    this.node.x += this.xSpeed * dt;
  },
  onKeyDown: function onKeyDown(event) {
    switch (event.keyCode) {
      case cc.macro.KEY.a:
        this.accLeft = true;
        break;

      case cc.macro.KEY.d:
        this.accRight = true;
        break;
    }
  },
  onKeyUp: function onKeyUp(event) {
    switch (event.keyCode) {
      case cc.macro.KEY.a:
        this.accLeft = false;
        break;

      case cc.macro.KEY.d:
        this.accRight = false;
        break;
    }
  },
  runJumpAction: function runJumpAction() {
    //跳跃上升
    var jumpUp = cc.tween().by(this.jumpDuration, {
      y: this.jumpHeight
    }, {
      easing: 'sineOut'
    }); //下落

    var jumpDown = cc.tween().by(this.jumpDuration, {
      y: -this.jumpHeight
    }, {
      easing: 'sineIn'
    }); //创建一个缓动=

    var tween = cc.tween() //按 jumpUp、jumpDown 的顺序执行动作
    .sequence(jumpUp, jumpDown).call(this.playJumpSound, this); //不断重复

    return cc.tween().repeatForever(tween);
  },
  playJumpSound: function playJumpSound() {
    // 调用声音引擎播放声音
    cc.audioEngine.playEffect(this.jumpAudio, false);
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUGxheWVyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwianVtcEhlaWdodCIsImp1bXBEdXJhdGlvbiIsIm1heE1vdmVTcGVlZCIsImFjY2VsIiwianVtcEF1ZGlvIiwidHlwZSIsIkF1ZGlvQ2xpcCIsIm9uTG9hZCIsImNvbnNvbGUiLCJsb2ciLCJqdW1wQWN0aW9uIiwicnVuSnVtcEFjdGlvbiIsInR3ZWVuIiwibm9kZSIsInRoZW4iLCJzdGFydCIsImFjY0xlZnQiLCJhY2NSaWdodCIsInhTcGVlZCIsInN5c3RlbUV2ZW50Iiwib24iLCJTeXN0ZW1FdmVudCIsIkV2ZW50VHlwZSIsIktFWV9ET1dOIiwib25LZXlEb3duIiwiS0VZX1VQIiwib25LZXlVcCIsIm9uRGVzdHJveSIsIm9mZiIsInVwZGF0ZSIsImR0IiwiTWF0aCIsImFicyIsIngiLCJldmVudCIsImtleUNvZGUiLCJtYWNybyIsIktFWSIsImEiLCJkIiwianVtcFVwIiwiYnkiLCJ5IiwiZWFzaW5nIiwianVtcERvd24iLCJzZXF1ZW5jZSIsImNhbGwiLCJwbGF5SnVtcFNvdW5kIiwicmVwZWF0Rm9yZXZlciIsImF1ZGlvRW5naW5lIiwicGxheUVmZmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUMsSUFBQUEsVUFBVSxFQUFFLENBakJKO0FBa0JSO0FBQ0FDLElBQUFBLFlBQVksRUFBRSxDQW5CTjtBQW9CUjtBQUNBQyxJQUFBQSxZQUFZLEVBQUUsQ0FyQk47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O0FBQ0g7QUEvR0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIGJhcjoge1xyXG4gICAgICAgIC8vICAgICBnZXQgKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIOS4u+inkui3s+i3g+mrmOW6plxyXG4gICAgICAgIGp1bXBIZWlnaHQ6IDAsXHJcbiAgICAgICAgLy8g5Li76KeS6Lez6LeD5oyB57ut5pe26Ze0XHJcbiAgICAgICAganVtcER1cmF0aW9uOiAwLFxyXG4gICAgICAgIC8vIOacgOWkp+enu+WKqOmAn+W6plxyXG4gICAgICAgIG1heE1vdmVTcGVlZDogMCxcclxuICAgICAgICAvLyDliqDpgJ/luqZcclxuICAgICAgICBhY2NlbDogMCxcclxuICAgICAgICBqdW1wQXVkaW86IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuQXVkaW9DbGlwXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnb25Mb2FkJylcclxuICAgICAgICAvLyDliJ3lp4vljJbot7Pot4PliqjkvZxcclxuICAgICAgICB2YXIganVtcEFjdGlvbiA9IHRoaXMucnVuSnVtcEFjdGlvbigpO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkudGhlbihqdW1wQWN0aW9uKS5zdGFydCgpO1xyXG5cclxuICAgICAgICAvLyDliqDpgJ/luqbmlrnlkJHlvIDlhbNcclxuICAgICAgICB0aGlzLmFjY0xlZnQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmFjY1JpZ2h0ID0gZmFsc2U7XHJcbiAgICAgICAgLy8g5Li76KeS5b2T5YmN5rC05bmz5pa55ZCR6YCf5bqmXHJcbiAgICAgICAgdGhpcy54U3BlZWQgPSAwO1xyXG5cclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCB0aGlzLm9uS2V5VXAsIHRoaXMpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnc3RhcnQnKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIC8vIOWPlua2iOmUruebmOi+k+WFpeebkeWQrFxyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCwgdGhpcy5vbktleVVwLCB0aGlzKTtcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygndXBkYXRlJyk7XHJcbiAgICAgICAgLy8g5qC55o2u5b2T5YmN5Yqg6YCf5bqm5pa55ZCR5q+P5bin5pu05paw6YCf5bqmXHJcbiAgICAgICAgaWYgKHRoaXMuYWNjTGVmdCkge1xyXG4gICAgICAgICAgICB0aGlzLnhTcGVlZCAtPSB0aGlzLmFjY2VsICogZHQ7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmFjY1JpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMueFNwZWVkICs9IHRoaXMuYWNjZWwgKiBkdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g6ZmQ5Yi25Li76KeS55qE6YCf5bqm5LiN6IO96LaF6L+H5pyA5aSn5YC8XHJcbiAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMueFNwZWVkKSA+IHRoaXMubWF4TW92ZVNwZWVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMueFNwZWVkID0gdGhpcy5tYXhNb3ZlU3BlZWQgKiB0aGlzLnhTcGVlZCAvIE1hdGguYWJzKHRoaXMueFNwZWVkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ub2RlLnggKz0gdGhpcy54U3BlZWQgKiBkdDtcclxuICAgIH0sXHJcblxyXG4gICAgb25LZXlEb3duKGV2ZW50KSB7XHJcbiAgICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmE6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjY0xlZnQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjY1JpZ2h0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uS2V5VXAoZXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuYTpcclxuICAgICAgICAgICAgICAgIHRoaXMuYWNjTGVmdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjY1JpZ2h0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBydW5KdW1wQWN0aW9uKCkge1xyXG4gICAgICAgIC8v6Lez6LeD5LiK5Y2HXHJcbiAgICAgICAgdmFyIGp1bXBVcCA9IGNjLnR3ZWVuKCkuYnkodGhpcy5qdW1wRHVyYXRpb24sIHsgeTogdGhpcy5qdW1wSGVpZ2h0IH0sIHsgZWFzaW5nOiAnc2luZU91dCcgfSk7XHJcbiAgICAgICAgLy/kuIvokL1cclxuICAgICAgICB2YXIganVtcERvd24gPSBjYy50d2VlbigpLmJ5KHRoaXMuanVtcER1cmF0aW9uLCB7IHk6IC10aGlzLmp1bXBIZWlnaHQgfSwgeyBlYXNpbmc6ICdzaW5lSW4nIH0pO1xyXG4gICAgICAgIC8v5Yib5bu65LiA5Liq57yT5YqoPVxyXG4gICAgICAgIHZhciB0d2VlbiA9IGNjLnR3ZWVuKClcclxuICAgICAgICAgICAgLy/mjIkganVtcFVw44CBanVtcERvd24g55qE6aG65bqP5omn6KGM5Yqo5L2cXHJcbiAgICAgICAgICAgIC5zZXF1ZW5jZShqdW1wVXAsIGp1bXBEb3duKVxyXG4gICAgICAgICAgICAuY2FsbCh0aGlzLnBsYXlKdW1wU291bmQsIHRoaXMpO1xyXG4gICAgICAgIC8v5LiN5pat6YeN5aSNXHJcbiAgICAgICAgcmV0dXJuIGNjLnR3ZWVuKCkucmVwZWF0Rm9yZXZlcih0d2Vlbik7XHJcbiAgICB9LFxyXG4gICAgcGxheUp1bXBTb3VuZCgpIHtcclxuICAgICAgICAvLyDosIPnlKjlo7Dpn7PlvJXmk47mkq3mlL7lo7Dpn7NcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuanVtcEF1ZGlvLCBmYWxzZSlcclxuICAgIH1cclxufSk7XHJcbiJdfQ==