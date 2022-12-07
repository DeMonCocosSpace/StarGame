
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/scripts/Game');
require('./assets/scripts/Player');
require('./assets/scripts/Star');

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Star.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c55f86v7YRLD4h849MZCwzC', 'Star');
// scripts/Star.js

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
    // 星星和主角之间的距离小于这个数值时，就会完成收集
    pickRadius: 0
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {},
  update: function update(dt) {
    if (this.getPlayerDistance() < this.pickRadius) {
      this.onPicked();
      return;
    }
  },
  getPlayerDistance: function getPlayerDistance() {
    // 根据 Player 节点位置判断距离
    var playerPos = this.game.player.getPosition(); // 根据两点位置计算两点之间距离

    var dist = this.node.position.sub(playerPos).mag();
    return dist;
  },
  onPicked: function onPicked() {
    // 当星星被收集时，调用 Game 脚本中的接口，生成一个新的星星
    this.game.spawnNewStar(); // 调用 Game 脚本的得分方法

    this.game.gainScore(); // 然后销毁当前星星节点

    this.node.destroy();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU3Rhci5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInBpY2tSYWRpdXMiLCJzdGFydCIsInVwZGF0ZSIsImR0IiwiZ2V0UGxheWVyRGlzdGFuY2UiLCJvblBpY2tlZCIsInBsYXllclBvcyIsImdhbWUiLCJwbGF5ZXIiLCJnZXRQb3NpdGlvbiIsImRpc3QiLCJub2RlIiwicG9zaXRpb24iLCJzdWIiLCJtYWciLCJzcGF3bk5ld1N0YXIiLCJnYWluU2NvcmUiLCJkZXN0cm95Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQyxJQUFBQSxVQUFVLEVBQUU7QUFqQkosR0FIUDtBQXVCTDtBQUVBO0FBRUFDLEVBQUFBLEtBM0JLLG1CQTJCRyxDQUVQLENBN0JJO0FBK0JMQyxFQUFBQSxNQS9CSyxrQkErQkVDLEVBL0JGLEVBK0JNO0FBQ1AsUUFBSSxLQUFLQyxpQkFBTCxLQUEyQixLQUFLSixVQUFwQyxFQUFnRDtBQUM1QyxXQUFLSyxRQUFMO0FBQ0E7QUFDSDtBQUNKLEdBcENJO0FBc0NMRCxFQUFBQSxpQkF0Q0ssK0JBc0NlO0FBQ2hCO0FBQ0EsUUFBSUUsU0FBUyxHQUFHLEtBQUtDLElBQUwsQ0FBVUMsTUFBVixDQUFpQkMsV0FBakIsRUFBaEIsQ0FGZ0IsQ0FHaEI7O0FBQ0EsUUFBSUMsSUFBSSxHQUFHLEtBQUtDLElBQUwsQ0FBVUMsUUFBVixDQUFtQkMsR0FBbkIsQ0FBdUJQLFNBQXZCLEVBQWtDUSxHQUFsQyxFQUFYO0FBQ0EsV0FBT0osSUFBUDtBQUNILEdBNUNJO0FBNkNMTCxFQUFBQSxRQTdDSyxzQkE2Q007QUFDUDtBQUNBLFNBQUtFLElBQUwsQ0FBVVEsWUFBVixHQUZPLENBR1A7O0FBQ0EsU0FBS1IsSUFBTCxDQUFVUyxTQUFWLEdBSk8sQ0FLUDs7QUFDQSxTQUFLTCxJQUFMLENBQVVNLE9BQVY7QUFDSDtBQXBESSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gZm9vOiB7XHJcbiAgICAgICAgLy8gICAgIC8vIEFUVFJJQlVURVM6XHJcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6IG51bGwsICAgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXHJcbiAgICAgICAgLy8gICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxyXG4gICAgICAgIC8vICAgICBzZXJpYWxpemFibGU6IHRydWUsICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gYmFyOiB7XHJcbiAgICAgICAgLy8gICAgIGdldCAoKSB7XHJcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gdGhpcy5fYmFyO1xyXG4gICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgIC8vICAgICBzZXQgKHZhbHVlKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLl9iYXIgPSB2YWx1ZTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8g5pif5pif5ZKM5Li76KeS5LmL6Ze055qE6Led56a75bCP5LqO6L+Z5Liq5pWw5YC85pe277yM5bCx5Lya5a6M5oiQ5pS26ZuGXHJcbiAgICAgICAgcGlja1JhZGl1czogMCxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0UGxheWVyRGlzdGFuY2UoKSA8IHRoaXMucGlja1JhZGl1cykge1xyXG4gICAgICAgICAgICB0aGlzLm9uUGlja2VkKCk7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgZ2V0UGxheWVyRGlzdGFuY2UoKSB7XHJcbiAgICAgICAgLy8g5qC55o2uIFBsYXllciDoioLngrnkvY3nva7liKTmlq3ot53nprtcclxuICAgICAgICB2YXIgcGxheWVyUG9zID0gdGhpcy5nYW1lLnBsYXllci5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIC8vIOagueaNruS4pOeCueS9jee9ruiuoeeul+S4pOeCueS5i+mXtOi3neemu1xyXG4gICAgICAgIHZhciBkaXN0ID0gdGhpcy5ub2RlLnBvc2l0aW9uLnN1YihwbGF5ZXJQb3MpLm1hZygpO1xyXG4gICAgICAgIHJldHVybiBkaXN0O1xyXG4gICAgfSxcclxuICAgIG9uUGlja2VkKCkge1xyXG4gICAgICAgIC8vIOW9k+aYn+aYn+iiq+aUtumbhuaXtu+8jOiwg+eUqCBHYW1lIOiEmuacrOS4reeahOaOpeWPo++8jOeUn+aIkOS4gOS4quaWsOeahOaYn+aYn1xyXG4gICAgICAgIHRoaXMuZ2FtZS5zcGF3bk5ld1N0YXIoKTtcclxuICAgICAgICAvLyDosIPnlKggR2FtZSDohJrmnKznmoTlvpfliIbmlrnms5VcclxuICAgICAgICB0aGlzLmdhbWUuZ2FpblNjb3JlKCk7XHJcbiAgICAgICAgLy8g54S25ZCO6ZSA5q+B5b2T5YmN5pif5pif6IqC54K5XHJcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgIH1cclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a6886ZRpKdMaa5bILpq8zFx', 'Game');
// scripts/Game.js

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
    // 这个属性引用了星星预制资源
    starPrefab: {
      "default": null,
      type: cc.Prefab
    },
    // 星星产生后消失时间的随机范围
    maxStarDuration: 0,
    minStarDuration: 0,
    // 地面节点，用于确定星星生成的高度
    ground: {
      "default": null,
      type: cc.Node
    },
    // Player 节点，用于获取主角弹跳的高度，和控制主角行动开关
    player: {
      "default": null,
      type: cc.Node
    },
    scoreDisplay: {
      "default": null,
      type: cc.Label
    },
    score: {
      "default": 0,
      displayName: "Score (player)",
      tooltip: "The score of player"
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    // 获取地平面的 y 轴坐标
    this.groundY = this.ground.y + this.ground.height / 2; // 生成一个新的星星

    this.spawnNewStar(); // 初始化计分

    this.score = 0;
  },
  start: function start() {},
  update: function update(dt) {},
  gainScore: function gainScore() {
    this.score += 1;
    this.scoreDisplay.string = 'Score: ' + this.score;
  },
  spawnNewStar: function spawnNewStar() {
    // 使用给定的模板在场景中生成一个新节点
    var newStar = cc.instantiate(this.starPrefab); // 将新增的节点添加到 Canvas 节点下面

    this.node.addChild(newStar); // 为星星设置一个随机位置

    newStar.setPosition(this.getNewStarPosition()); // 在星星脚本组件上保存 Game 对象的引用

    newStar.getComponent('Star').game = this;
  },
  getNewStarPosition: function getNewStarPosition() {
    var randX = 0; // 根据地平面位置和主角跳跃高度，随机得到一个星星的 y 坐标

    var randY = this.groundY + Math.random() * this.player.getComponent('Player').jumpHeight + 50; // 根据屏幕宽度，随机得到一个星星 x 坐标

    var maxX = this.node.width / 2;
    randX = (Math.random() - 0.5) * 2 * maxX; // 返回星星坐标

    return cc.v2(randX, randY);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJQcmVmYWIiLCJ0eXBlIiwiUHJlZmFiIiwibWF4U3RhckR1cmF0aW9uIiwibWluU3RhckR1cmF0aW9uIiwiZ3JvdW5kIiwiTm9kZSIsInBsYXllciIsInNjb3JlRGlzcGxheSIsIkxhYmVsIiwic2NvcmUiLCJkaXNwbGF5TmFtZSIsInRvb2x0aXAiLCJvbkxvYWQiLCJncm91bmRZIiwieSIsImhlaWdodCIsInNwYXduTmV3U3RhciIsInN0YXJ0IiwidXBkYXRlIiwiZHQiLCJnYWluU2NvcmUiLCJzdHJpbmciLCJuZXdTdGFyIiwiaW5zdGFudGlhdGUiLCJub2RlIiwiYWRkQ2hpbGQiLCJzZXRQb3NpdGlvbiIsImdldE5ld1N0YXJQb3NpdGlvbiIsImdldENvbXBvbmVudCIsImdhbWUiLCJyYW5kWCIsInJhbmRZIiwiTWF0aCIsInJhbmRvbSIsImp1bXBIZWlnaHQiLCJtYXhYIiwid2lkdGgiLCJ2MiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFDQUMsSUFBQUEsVUFBVSxFQUFFO0FBQ1IsaUJBQVMsSUFERDtBQUVSQyxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGRCxLQUZKO0FBTVI7QUFDQUMsSUFBQUEsZUFBZSxFQUFFLENBUFQ7QUFRUkMsSUFBQUEsZUFBZSxFQUFFLENBUlQ7QUFTUjtBQUNBQyxJQUFBQSxNQUFNLEVBQUU7QUFDSixpQkFBUyxJQURMO0FBRUpKLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDVTtBQUZMLEtBVkE7QUFjUjtBQUNBQyxJQUFBQSxNQUFNLEVBQUU7QUFDSixpQkFBUyxJQURMO0FBRUpOLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDVTtBQUZMLEtBZkE7QUFtQlJFLElBQUFBLFlBQVksRUFBRTtBQUNWLGlCQUFTLElBREM7QUFFVlAsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNhO0FBRkMsS0FuQk47QUF1QlJDLElBQUFBLEtBQUssRUFBRTtBQUNILGlCQUFTLENBRE47QUFFSEMsTUFBQUEsV0FBVyxFQUFFLGdCQUZWO0FBR0hDLE1BQUFBLE9BQU8sRUFBRTtBQUhOO0FBdkJDLEdBSFA7QUFpQ0w7QUFFQUMsRUFBQUEsTUFuQ0ssb0JBbUNJO0FBQ0w7QUFDQSxTQUFLQyxPQUFMLEdBQWUsS0FBS1QsTUFBTCxDQUFZVSxDQUFaLEdBQWdCLEtBQUtWLE1BQUwsQ0FBWVcsTUFBWixHQUFxQixDQUFwRCxDQUZLLENBR0w7O0FBQ0EsU0FBS0MsWUFBTCxHQUpLLENBS0w7O0FBQ0EsU0FBS1AsS0FBTCxHQUFhLENBQWI7QUFDSCxHQTFDSTtBQTRDTFEsRUFBQUEsS0E1Q0ssbUJBNENHLENBRVAsQ0E5Q0k7QUFnRExDLEVBQUFBLE1BaERLLGtCQWdERUMsRUFoREYsRUFnRE0sQ0FBRyxDQWhEVDtBQWlETEMsRUFBQUEsU0FqREssdUJBaURPO0FBQ1IsU0FBS1gsS0FBTCxJQUFjLENBQWQ7QUFDQSxTQUFLRixZQUFMLENBQWtCYyxNQUFsQixHQUEyQixZQUFZLEtBQUtaLEtBQTVDO0FBQ0gsR0FwREk7QUFxRExPLEVBQUFBLFlBckRLLDBCQXFEVTtBQUNYO0FBQ0EsUUFBSU0sT0FBTyxHQUFHM0IsRUFBRSxDQUFDNEIsV0FBSCxDQUFlLEtBQUt4QixVQUFwQixDQUFkLENBRlcsQ0FHWDs7QUFDQSxTQUFLeUIsSUFBTCxDQUFVQyxRQUFWLENBQW1CSCxPQUFuQixFQUpXLENBS1g7O0FBQ0FBLElBQUFBLE9BQU8sQ0FBQ0ksV0FBUixDQUFvQixLQUFLQyxrQkFBTCxFQUFwQixFQU5XLENBT1g7O0FBQ0FMLElBQUFBLE9BQU8sQ0FBQ00sWUFBUixDQUFxQixNQUFyQixFQUE2QkMsSUFBN0IsR0FBb0MsSUFBcEM7QUFDSCxHQTlESTtBQStETEYsRUFBQUEsa0JBL0RLLGdDQStEZ0I7QUFDakIsUUFBSUcsS0FBSyxHQUFHLENBQVosQ0FEaUIsQ0FFakI7O0FBQ0EsUUFBSUMsS0FBSyxHQUFHLEtBQUtsQixPQUFMLEdBQWVtQixJQUFJLENBQUNDLE1BQUwsS0FBZ0IsS0FBSzNCLE1BQUwsQ0FBWXNCLFlBQVosQ0FBeUIsUUFBekIsRUFBbUNNLFVBQWxFLEdBQStFLEVBQTNGLENBSGlCLENBSWpCOztBQUNBLFFBQUlDLElBQUksR0FBRyxLQUFLWCxJQUFMLENBQVVZLEtBQVYsR0FBa0IsQ0FBN0I7QUFDQU4sSUFBQUEsS0FBSyxHQUFHLENBQUNFLElBQUksQ0FBQ0MsTUFBTCxLQUFnQixHQUFqQixJQUF3QixDQUF4QixHQUE0QkUsSUFBcEMsQ0FOaUIsQ0FPakI7O0FBQ0EsV0FBT3hDLEVBQUUsQ0FBQzBDLEVBQUgsQ0FBTVAsS0FBTixFQUFhQyxLQUFiLENBQVA7QUFDSDtBQXhFSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8g6L+Z5Liq5bGe5oCn5byV55So5LqG5pif5pif6aKE5Yi26LWE5rqQXHJcbiAgICAgICAgc3RhclByZWZhYjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWJcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOaYn+aYn+S6p+eUn+WQjua2iOWkseaXtumXtOeahOmaj+acuuiMg+WbtFxyXG4gICAgICAgIG1heFN0YXJEdXJhdGlvbjogMCxcclxuICAgICAgICBtaW5TdGFyRHVyYXRpb246IDAsXHJcbiAgICAgICAgLy8g5Zyw6Z2i6IqC54K577yM55So5LqO56Gu5a6a5pif5pif55Sf5oiQ55qE6auY5bqmXHJcbiAgICAgICAgZ3JvdW5kOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIFBsYXllciDoioLngrnvvIznlKjkuo7ojrflj5bkuLvop5LlvLnot7PnmoTpq5jluqbvvIzlkozmjqfliLbkuLvop5LooYzliqjlvIDlhbNcclxuICAgICAgICBwbGF5ZXI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2NvcmVEaXNwbGF5OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzY29yZToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiAwLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogXCJTY29yZSAocGxheWVyKVwiLFxyXG4gICAgICAgICAgICB0b29sdGlwOiBcIlRoZSBzY29yZSBvZiBwbGF5ZXJcIixcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICAvLyDojrflj5blnLDlubPpnaLnmoQgeSDovbTlnZDmoIdcclxuICAgICAgICB0aGlzLmdyb3VuZFkgPSB0aGlzLmdyb3VuZC55ICsgdGhpcy5ncm91bmQuaGVpZ2h0IC8gMjtcclxuICAgICAgICAvLyDnlJ/miJDkuIDkuKrmlrDnmoTmmJ/mmJ9cclxuICAgICAgICB0aGlzLnNwYXduTmV3U3RhcigpO1xyXG4gICAgICAgIC8vIOWIneWni+WMluiuoeWIhlxyXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZShkdCkgeyB9LFxyXG4gICAgZ2FpblNjb3JlKCkge1xyXG4gICAgICAgIHRoaXMuc2NvcmUgKz0gMTtcclxuICAgICAgICB0aGlzLnNjb3JlRGlzcGxheS5zdHJpbmcgPSAnU2NvcmU6ICcgKyB0aGlzLnNjb3JlO1xyXG4gICAgfSxcclxuICAgIHNwYXduTmV3U3RhcigpIHtcclxuICAgICAgICAvLyDkvb/nlKjnu5nlrprnmoTmqKHmnb/lnKjlnLrmma/kuK3nlJ/miJDkuIDkuKrmlrDoioLngrlcclxuICAgICAgICB2YXIgbmV3U3RhciA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc3RhclByZWZhYik7XHJcbiAgICAgICAgLy8g5bCG5paw5aKe55qE6IqC54K55re75Yqg5YiwIENhbnZhcyDoioLngrnkuIvpnaJcclxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobmV3U3Rhcik7XHJcbiAgICAgICAgLy8g5Li65pif5pif6K6+572u5LiA5Liq6ZqP5py65L2N572uXHJcbiAgICAgICAgbmV3U3Rhci5zZXRQb3NpdGlvbih0aGlzLmdldE5ld1N0YXJQb3NpdGlvbigpKTtcclxuICAgICAgICAvLyDlnKjmmJ/mmJ/ohJrmnKznu4Tku7bkuIrkv53lrZggR2FtZSDlr7nosaHnmoTlvJXnlKhcclxuICAgICAgICBuZXdTdGFyLmdldENvbXBvbmVudCgnU3RhcicpLmdhbWUgPSB0aGlzO1xyXG4gICAgfSxcclxuICAgIGdldE5ld1N0YXJQb3NpdGlvbigpIHtcclxuICAgICAgICB2YXIgcmFuZFggPSAwO1xyXG4gICAgICAgIC8vIOagueaNruWcsOW5s+mdouS9jee9ruWSjOS4u+inkui3s+i3g+mrmOW6pu+8jOmaj+acuuW+l+WIsOS4gOS4quaYn+aYn+eahCB5IOWdkOagh1xyXG4gICAgICAgIHZhciByYW5kWSA9IHRoaXMuZ3JvdW5kWSArIE1hdGgucmFuZG9tKCkgKiB0aGlzLnBsYXllci5nZXRDb21wb25lbnQoJ1BsYXllcicpLmp1bXBIZWlnaHQgKyA1MDtcclxuICAgICAgICAvLyDmoLnmja7lsY/luZXlrr3luqbvvIzpmo/mnLrlvpfliLDkuIDkuKrmmJ/mmJ8geCDlnZDmoIdcclxuICAgICAgICB2YXIgbWF4WCA9IHRoaXMubm9kZS53aWR0aCAvIDI7XHJcbiAgICAgICAgcmFuZFggPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAyICogbWF4WDtcclxuICAgICAgICAvLyDov5Tlm57mmJ/mmJ/lnZDmoIdcclxuICAgICAgICByZXR1cm4gY2MudjIocmFuZFgsIHJhbmRZKTtcclxuICAgIH1cclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------
