
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
    accel: 0
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
    }); //创建一个缓动，按 jumpUp、jumpDown 的顺序执行动作

    var tween = cc.tween().sequence(jumpUp, jumpDown); //不断重复

    return cc.tween().repeatForever(tween);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUGxheWVyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwianVtcEhlaWdodCIsImp1bXBEdXJhdGlvbiIsIm1heE1vdmVTcGVlZCIsImFjY2VsIiwib25Mb2FkIiwiY29uc29sZSIsImxvZyIsImp1bXBBY3Rpb24iLCJydW5KdW1wQWN0aW9uIiwidHdlZW4iLCJub2RlIiwidGhlbiIsInN0YXJ0IiwiYWNjTGVmdCIsImFjY1JpZ2h0IiwieFNwZWVkIiwic3lzdGVtRXZlbnQiLCJvbiIsIlN5c3RlbUV2ZW50IiwiRXZlbnRUeXBlIiwiS0VZX0RPV04iLCJvbktleURvd24iLCJLRVlfVVAiLCJvbktleVVwIiwib25EZXN0cm95Iiwib2ZmIiwidXBkYXRlIiwiZHQiLCJNYXRoIiwiYWJzIiwieCIsImV2ZW50Iiwia2V5Q29kZSIsIm1hY3JvIiwiS0VZIiwiYSIsImQiLCJqdW1wVXAiLCJieSIsInkiLCJlYXNpbmciLCJqdW1wRG93biIsInNlcXVlbmNlIiwicmVwZWF0Rm9yZXZlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUMsSUFBQUEsVUFBVSxFQUFFLENBakJKO0FBa0JSO0FBQ0FDLElBQUFBLFlBQVksRUFBRSxDQW5CTjtBQW9CUjtBQUNBQyxJQUFBQSxZQUFZLEVBQUUsQ0FyQk47QUFzQlI7QUFDQUMsSUFBQUEsS0FBSyxFQUFFO0FBdkJDLEdBSFA7QUE2Qkw7QUFDQUMsRUFBQUEsTUE5Qkssb0JBOEJJO0FBQ0xDLElBQUFB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R0FBZ0IsS0FBaEI7QUFDQTtBQU5SO0FBUUgsR0ExRkk7QUEyRkxOLEVBQUFBLGFBM0ZLLDJCQTJGVztBQUNaO0FBQ0EsUUFBSTZCLE1BQU0sR0FBR3pDLEVBQUUsQ0FBQ2EsS0FBSCxHQUFXNkIsRUFBWCxDQUFjLEtBQUtyQyxZQUFuQixFQUFpQztBQUFFc0MsTUFBQUEsQ0FBQyxFQUFFLEtBQUt2QztBQUFWLEtBQWpDLEVBQXlEO0FBQUV3QyxNQUFBQSxNQUFNLEVBQUU7QUFBVixLQUF6RCxDQUFiLENBRlksQ0FHWjs7QUFDQSxRQUFJQyxRQUFRLEdBQUc3QyxFQUFFLENBQUNhLEtBQUgsR0FBVzZCLEVBQVgsQ0FBYyxLQUFLckMsWUFBbkIsRUFBaUM7QUFBRXNDLE1BQUFBLENBQUMsRUFBRSxDQUFDLEtBQUt2QztBQUFYLEtBQWpDLEVBQTBEO0FBQUV3QyxNQUFBQSxNQUFNLEVBQUU7QUFBVixLQUExRCxDQUFmLENBSlksQ0FLWjs7QUFDQSxRQUFJL0IsS0FBSyxHQUFHYixFQUFFLENBQUNhLEtBQUgsR0FBV2lDLFFBQVgsQ0FBb0JMLE1BQXBCLEVBQTRCSSxRQUE1QixDQUFaLENBTlksQ0FPWjs7QUFDQSxXQUFPN0MsRUFBRSxDQUFDYSxLQUFILEdBQVdrQyxhQUFYLENBQXlCbEMsS0FBekIsQ0FBUDtBQUNIO0FBcEdJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBiYXI6IHtcclxuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyDkuLvop5Lot7Pot4Ppq5jluqZcclxuICAgICAgICBqdW1wSGVpZ2h0OiAwLFxyXG4gICAgICAgIC8vIOS4u+inkui3s+i3g+aMgee7reaXtumXtFxyXG4gICAgICAgIGp1bXBEdXJhdGlvbjogMCxcclxuICAgICAgICAvLyDmnIDlpKfnp7vliqjpgJ/luqZcclxuICAgICAgICBtYXhNb3ZlU3BlZWQ6IDAsXHJcbiAgICAgICAgLy8g5Yqg6YCf5bqmXHJcbiAgICAgICAgYWNjZWw6IDAsXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdvbkxvYWQnKVxyXG4gICAgICAgIC8vIOWIneWni+WMlui3s+i3g+WKqOS9nFxyXG4gICAgICAgIHZhciBqdW1wQWN0aW9uID0gdGhpcy5ydW5KdW1wQWN0aW9uKCk7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS50aGVuKGp1bXBBY3Rpb24pLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIC8vIOWKoOmAn+W6puaWueWQkeW8gOWFs1xyXG4gICAgICAgIHRoaXMuYWNjTGVmdCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYWNjUmlnaHQgPSBmYWxzZTtcclxuICAgICAgICAvLyDkuLvop5LlvZPliY3msLTlubPmlrnlkJHpgJ/luqZcclxuICAgICAgICB0aGlzLnhTcGVlZCA9IDA7XHJcblxyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlVcCwgdGhpcyk7XHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzdGFydCcpO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgLy8g5Y+W5raI6ZSu55uY6L6T5YWl55uR5ZCsXHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCB0aGlzLm9uS2V5VXAsIHRoaXMpO1xyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCd1cGRhdGUnKTtcclxuICAgICAgICAvLyDmoLnmja7lvZPliY3liqDpgJ/luqbmlrnlkJHmr4/luKfmm7TmlrDpgJ/luqZcclxuICAgICAgICBpZiAodGhpcy5hY2NMZWZ0KSB7XHJcbiAgICAgICAgICAgIHRoaXMueFNwZWVkIC09IHRoaXMuYWNjZWwgKiBkdDtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYWNjUmlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy54U3BlZWQgKz0gdGhpcy5hY2NlbCAqIGR0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDpmZDliLbkuLvop5LnmoTpgJ/luqbkuI3og73otoXov4fmnIDlpKflgLxcclxuICAgICAgICBpZiAoTWF0aC5hYnModGhpcy54U3BlZWQpID4gdGhpcy5tYXhNb3ZlU3BlZWQpIHtcclxuICAgICAgICAgICAgdGhpcy54U3BlZWQgPSB0aGlzLm1heE1vdmVTcGVlZCAqIHRoaXMueFNwZWVkIC8gTWF0aC5hYnModGhpcy54U3BlZWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm5vZGUueCArPSB0aGlzLnhTcGVlZCAqIGR0O1xyXG4gICAgfSxcclxuXHJcbiAgICBvbktleURvd24oZXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuYTpcclxuICAgICAgICAgICAgICAgIHRoaXMuYWNjTGVmdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuZDpcclxuICAgICAgICAgICAgICAgIHRoaXMuYWNjUmlnaHQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25LZXlVcChldmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5hOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY2NMZWZ0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuZDpcclxuICAgICAgICAgICAgICAgIHRoaXMuYWNjUmlnaHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJ1bkp1bXBBY3Rpb24oKSB7XHJcbiAgICAgICAgLy/ot7Pot4PkuIrljYdcclxuICAgICAgICB2YXIganVtcFVwID0gY2MudHdlZW4oKS5ieSh0aGlzLmp1bXBEdXJhdGlvbiwgeyB5OiB0aGlzLmp1bXBIZWlnaHQgfSwgeyBlYXNpbmc6ICdzaW5lT3V0JyB9KTtcclxuICAgICAgICAvL+S4i+iQvVxyXG4gICAgICAgIHZhciBqdW1wRG93biA9IGNjLnR3ZWVuKCkuYnkodGhpcy5qdW1wRHVyYXRpb24sIHsgeTogLXRoaXMuanVtcEhlaWdodCB9LCB7IGVhc2luZzogJ3NpbmVJbicgfSk7XHJcbiAgICAgICAgLy/liJvlu7rkuIDkuKrnvJPliqjvvIzmjIkganVtcFVw44CBanVtcERvd24g55qE6aG65bqP5omn6KGM5Yqo5L2cXHJcbiAgICAgICAgdmFyIHR3ZWVuID0gY2MudHdlZW4oKS5zZXF1ZW5jZShqdW1wVXAsIGp1bXBEb3duKTtcclxuICAgICAgICAvL+S4jeaWremHjeWkjVxyXG4gICAgICAgIHJldHVybiBjYy50d2VlbigpLnJlcGVhdEZvcmV2ZXIodHdlZW4pO1xyXG4gICAgfVxyXG59KTtcclxuIl19