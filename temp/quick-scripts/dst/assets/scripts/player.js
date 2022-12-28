
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1BsYXllci5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImp1bXBIZWlnaHQiLCJqdW1wRHVyYXRpb24iLCJtYXhNb3ZlU3BlZWQiLCJhY2NlbCIsImp1bXBBdWRpbyIsInR5cGUiLCJBdWRpb0NsaXAiLCJvbkxvYWQiLCJjb25zb2xlIiwibG9nIiwianVtcEFjdGlvbiIsInJ1bkp1bXBBY3Rpb24iLCJ0d2VlbiIsIm5vZGUiLCJ0aGVuIiwic3RhcnQiLCJhY2NMZWZ0IiwiYWNjUmlnaHQiLCJ4U3BlZWQiLCJzeXN0ZW1FdmVudCIsIm9uIiwiU3lzdGVtRXZlbnQiLCJFdmVudFR5cGUiLCJLRVlfRE9XTiIsIm9uS2V5RG93biIsIktFWV9VUCIsIm9uS2V5VXAiLCJvbkRlc3Ryb3kiLCJvZmYiLCJ1cGRhdGUiLCJkdCIsIk1hdGgiLCJhYnMiLCJ4IiwiZXZlbnQiLCJrZXlDb2RlIiwibWFjcm8iLCJLRVkiLCJhIiwiZCIsImp1bXBVcCIsImJ5IiwieSIsImVhc2luZyIsImp1bXBEb3duIiwic2VxdWVuY2UiLCJjYWxsIiwicGxheUp1bXBTb3VuZCIsInJlcGVhdEZvcmV2ZXIiLCJhdWRpb0VuZ2luZSIsInBsYXlFZmZlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FDLElBQUFBLFVBQVUsRUFBRSxDQWpCSjtBQWtCUjtBQUNBQyxJQUFBQSxZQUFZLEVBQUUsQ0FuQk47QUFvQlI7QUFDQUMsSUFBQUEsWUFBWSxFQUFFLENBckJOO0FB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QUNIO0FBL0dJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6IG51bGwsICAgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgICBzZXJpYWxpemFibGU6IHRydWUsICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyBiYXI6IHtcbiAgICAgICAgLy8gICAgIGdldCAoKSB7XG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcbiAgICAgICAgLy8gICAgIH0sXG4gICAgICAgIC8vICAgICBzZXQgKHZhbHVlKSB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIOS4u+inkui3s+i3g+mrmOW6plxuICAgICAgICBqdW1wSGVpZ2h0OiAwLFxuICAgICAgICAvLyDkuLvop5Lot7Pot4PmjIHnu63ml7bpl7RcbiAgICAgICAganVtcER1cmF0aW9uOiAwLFxuICAgICAgICAvLyDmnIDlpKfnp7vliqjpgJ/luqZcbiAgICAgICAgbWF4TW92ZVNwZWVkOiAwLFxuICAgICAgICAvLyDliqDpgJ/luqZcbiAgICAgICAgYWNjZWw6IDAsXG4gICAgICAgIGp1bXBBdWRpbzoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkF1ZGlvQ2xpcFxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ29uTG9hZCcpXG4gICAgICAgIC8vIOWIneWni+WMlui3s+i3g+WKqOS9nFxuICAgICAgICB2YXIganVtcEFjdGlvbiA9IHRoaXMucnVuSnVtcEFjdGlvbigpO1xuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpLnRoZW4oanVtcEFjdGlvbikuc3RhcnQoKTtcblxuICAgICAgICAvLyDliqDpgJ/luqbmlrnlkJHlvIDlhbNcbiAgICAgICAgdGhpcy5hY2NMZWZ0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYWNjUmlnaHQgPSBmYWxzZTtcbiAgICAgICAgLy8g5Li76KeS5b2T5YmN5rC05bmz5pa55ZCR6YCf5bqmXG4gICAgICAgIHRoaXMueFNwZWVkID0gMDtcblxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCwgdGhpcy5vbktleVVwLCB0aGlzKTtcbiAgICB9LFxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzdGFydCcpO1xuICAgIH0sXG5cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIC8vIOWPlua2iOmUruebmOi+k+WFpeebkeWQrFxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCB0aGlzLm9uS2V5VXAsIHRoaXMpO1xuICAgIH0sXG5cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZygndXBkYXRlJyk7XG4gICAgICAgIC8vIOagueaNruW9k+WJjeWKoOmAn+W6puaWueWQkeavj+W4p+abtOaWsOmAn+W6plxuICAgICAgICBpZiAodGhpcy5hY2NMZWZ0KSB7XG4gICAgICAgICAgICB0aGlzLnhTcGVlZCAtPSB0aGlzLmFjY2VsICogZHQ7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5hY2NSaWdodCkge1xuICAgICAgICAgICAgdGhpcy54U3BlZWQgKz0gdGhpcy5hY2NlbCAqIGR0O1xuICAgICAgICB9XG4gICAgICAgIC8vIOmZkOWItuS4u+inkueahOmAn+W6puS4jeiDvei2hei/h+acgOWkp+WAvFxuICAgICAgICBpZiAoTWF0aC5hYnModGhpcy54U3BlZWQpID4gdGhpcy5tYXhNb3ZlU3BlZWQpIHtcbiAgICAgICAgICAgIHRoaXMueFNwZWVkID0gdGhpcy5tYXhNb3ZlU3BlZWQgKiB0aGlzLnhTcGVlZCAvIE1hdGguYWJzKHRoaXMueFNwZWVkKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5vZGUueCArPSB0aGlzLnhTcGVlZCAqIGR0O1xuICAgIH0sXG5cbiAgICBvbktleURvd24oZXZlbnQpIHtcbiAgICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5hOlxuICAgICAgICAgICAgICAgIHRoaXMuYWNjTGVmdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOlxuICAgICAgICAgICAgICAgIHRoaXMuYWNjUmlnaHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICB9LFxuICAgIG9uS2V5VXAoZXZlbnQpIHtcbiAgICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5hOlxuICAgICAgICAgICAgICAgIHRoaXMuYWNjTGVmdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuZDpcbiAgICAgICAgICAgICAgICB0aGlzLmFjY1JpZ2h0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcnVuSnVtcEFjdGlvbigpIHtcbiAgICAgICAgLy/ot7Pot4PkuIrljYdcbiAgICAgICAgdmFyIGp1bXBVcCA9IGNjLnR3ZWVuKCkuYnkodGhpcy5qdW1wRHVyYXRpb24sIHsgeTogdGhpcy5qdW1wSGVpZ2h0IH0sIHsgZWFzaW5nOiAnc2luZU91dCcgfSk7XG4gICAgICAgIC8v5LiL6JC9XG4gICAgICAgIHZhciBqdW1wRG93biA9IGNjLnR3ZWVuKCkuYnkodGhpcy5qdW1wRHVyYXRpb24sIHsgeTogLXRoaXMuanVtcEhlaWdodCB9LCB7IGVhc2luZzogJ3NpbmVJbicgfSk7XG4gICAgICAgIC8v5Yib5bu65LiA5Liq57yT5YqoPVxuICAgICAgICB2YXIgdHdlZW4gPSBjYy50d2VlbigpXG4gICAgICAgICAgICAvL+aMiSBqdW1wVXDjgIFqdW1wRG93biDnmoTpobrluo/miafooYzliqjkvZxcbiAgICAgICAgICAgIC5zZXF1ZW5jZShqdW1wVXAsIGp1bXBEb3duKVxuICAgICAgICAgICAgLmNhbGwodGhpcy5wbGF5SnVtcFNvdW5kLCB0aGlzKTtcbiAgICAgICAgLy/kuI3mlq3ph43lpI1cbiAgICAgICAgcmV0dXJuIGNjLnR3ZWVuKCkucmVwZWF0Rm9yZXZlcih0d2Vlbik7XG4gICAgfSxcbiAgICBwbGF5SnVtcFNvdW5kKCkge1xuICAgICAgICAvLyDosIPnlKjlo7Dpn7PlvJXmk47mkq3mlL7lo7Dpn7NcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmp1bXBBdWRpbywgZmFsc2UpXG4gICAgfVxufSk7XG4iXX0=