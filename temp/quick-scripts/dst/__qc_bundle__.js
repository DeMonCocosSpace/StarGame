
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
    } // 根据 Game 脚本中的计时器更新星星的透明度


    var opacityRatio = 1 - this.game.timer / this.game.starDuration;
    var minOpacity = 50;
    this.node.opacity = minOpacity + Math.floor(opacityRatio * (255 - minOpacity));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1N0YXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJwaWNrUmFkaXVzIiwic3RhcnQiLCJ1cGRhdGUiLCJkdCIsImdldFBsYXllckRpc3RhbmNlIiwib25QaWNrZWQiLCJvcGFjaXR5UmF0aW8iLCJnYW1lIiwidGltZXIiLCJzdGFyRHVyYXRpb24iLCJtaW5PcGFjaXR5Iiwibm9kZSIsIm9wYWNpdHkiLCJNYXRoIiwiZmxvb3IiLCJwbGF5ZXJQb3MiLCJwbGF5ZXIiLCJnZXRQb3NpdGlvbiIsImRpc3QiLCJwb3NpdGlvbiIsInN1YiIsIm1hZyIsInNwYXduTmV3U3RhciIsImdhaW5TY29yZSIsImRlc3Ryb3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FDLElBQUFBLFVBQVUsRUFBRTtBQWpCSixHQUhQO0FBdUJMO0FBRUE7QUFFQUMsRUFBQUEsS0EzQkssbUJBMkJHLENBRVAsQ0E3Qkk7QUErQkxDLEVBQUFBLE1BL0JLLGtCQStCRUMsRUEvQkYsRUErQk07QUFDUCxRQUFJLEtBQUtDLGlCQUFMLEtBQTJCLEtBQUtKLFVBQXBDLEVBQWdEO0FBQzVDLFdBQUtLLFFBQUw7QUFDQTtBQUNILEtBSk0sQ0FLUDs7O0FBQ0EsUUFBSUMsWUFBWSxHQUFHLElBQUksS0FBS0MsSUFBTCxDQUFVQyxLQUFWLEdBQWtCLEtBQUtELElBQUwsQ0FBVUUsWUFBbkQ7QUFDQSxRQUFJQyxVQUFVLEdBQUcsRUFBakI7QUFDQSxTQUFLQyxJQUFMLENBQVVDLE9BQVYsR0FBb0JGLFVBQVUsR0FBR0csSUFBSSxDQUFDQyxLQUFMLENBQVdSLFlBQVksSUFBSSxNQUFNSSxVQUFWLENBQXZCLENBQWpDO0FBQ0gsR0F4Q0k7QUEwQ0xOLEVBQUFBLGlCQTFDSywrQkEwQ2U7QUFDaEI7QUFDQSxRQUFJVyxTQUFTLEdBQUcsS0FBS1IsSUFBTCxDQUFVUyxNQUFWLENBQWlCQyxXQUFqQixFQUFoQixDQUZnQixDQUdoQjs7QUFDQSxRQUFJQyxJQUFJLEdBQUcsS0FBS1AsSUFBTCxDQUFVUSxRQUFWLENBQW1CQyxHQUFuQixDQUF1QkwsU0FBdkIsRUFBa0NNLEdBQWxDLEVBQVg7QUFDQSxXQUFPSCxJQUFQO0FBQ0gsR0FoREk7QUFpRExiLEVBQUFBLFFBakRLLHNCQWlETTtBQUNQO0FBQ0EsU0FBS0UsSUFBTCxDQUFVZSxZQUFWLEdBRk8sQ0FHUDs7QUFDQSxTQUFLZixJQUFMLENBQVVnQixTQUFWLEdBSk8sQ0FLUDs7QUFDQSxTQUFLWixJQUFMLENBQVVhLE9BQVY7QUFDSDtBQXhESSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBmb286IHtcbiAgICAgICAgLy8gICAgIC8vIEFUVFJJQlVURVM6XG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcbiAgICAgICAgLy8gICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gYmFyOiB7XG4gICAgICAgIC8vICAgICBnZXQgKCkge1xuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XG4gICAgICAgIC8vICAgICB9LFxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyDmmJ/mmJ/lkozkuLvop5LkuYvpl7TnmoTot53nprvlsI/kuo7ov5nkuKrmlbDlgLzml7bvvIzlsLHkvJrlrozmiJDmlLbpm4ZcbiAgICAgICAgcGlja1JhZGl1czogMCxcbiAgICB9LFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge30sXG5cbiAgICBzdGFydCgpIHtcblxuICAgIH0sXG5cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0UGxheWVyRGlzdGFuY2UoKSA8IHRoaXMucGlja1JhZGl1cykge1xuICAgICAgICAgICAgdGhpcy5vblBpY2tlZCgpO1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgLy8g5qC55o2uIEdhbWUg6ISa5pys5Lit55qE6K6h5pe25Zmo5pu05paw5pif5pif55qE6YCP5piO5bqmXG4gICAgICAgIHZhciBvcGFjaXR5UmF0aW8gPSAxIC0gdGhpcy5nYW1lLnRpbWVyIC8gdGhpcy5nYW1lLnN0YXJEdXJhdGlvbjtcbiAgICAgICAgdmFyIG1pbk9wYWNpdHkgPSA1MDtcbiAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSBtaW5PcGFjaXR5ICsgTWF0aC5mbG9vcihvcGFjaXR5UmF0aW8gKiAoMjU1IC0gbWluT3BhY2l0eSkpO1xuICAgIH0sXG5cbiAgICBnZXRQbGF5ZXJEaXN0YW5jZSgpIHtcbiAgICAgICAgLy8g5qC55o2uIFBsYXllciDoioLngrnkvY3nva7liKTmlq3ot53nprtcbiAgICAgICAgdmFyIHBsYXllclBvcyA9IHRoaXMuZ2FtZS5wbGF5ZXIuZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgLy8g5qC55o2u5Lik54K55L2N572u6K6h566X5Lik54K55LmL6Ze06Led56a7XG4gICAgICAgIHZhciBkaXN0ID0gdGhpcy5ub2RlLnBvc2l0aW9uLnN1YihwbGF5ZXJQb3MpLm1hZygpO1xuICAgICAgICByZXR1cm4gZGlzdDtcbiAgICB9LFxuICAgIG9uUGlja2VkKCkge1xuICAgICAgICAvLyDlvZPmmJ/mmJ/ooqvmlLbpm4bml7bvvIzosIPnlKggR2FtZSDohJrmnKzkuK3nmoTmjqXlj6PvvIznlJ/miJDkuIDkuKrmlrDnmoTmmJ/mmJ9cbiAgICAgICAgdGhpcy5nYW1lLnNwYXduTmV3U3RhcigpO1xuICAgICAgICAvLyDosIPnlKggR2FtZSDohJrmnKznmoTlvpfliIbmlrnms5VcbiAgICAgICAgdGhpcy5nYW1lLmdhaW5TY29yZSgpO1xuICAgICAgICAvLyDnhLblkI7plIDmr4HlvZPliY3mmJ/mmJ/oioLngrlcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICB9XG59KTtcbiJdfQ==
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
    },
    scoreAuido: {
      "default": null,
      type: cc.AudioClip
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    // 获取地平面的 y 轴坐标
    this.groundY = this.ground.y + this.ground.height / 2; //初始化计时器

    this.timer = 0;
    this.starDuration = 0; // 生成一个新的星星

    this.spawnNewStar(); // 初始化计分

    this.score = 0;
  },
  start: function start() {},
  update: function update(dt) {
    // 每帧更新计时器，超过限度还没有生成新的星星
    // 就会调用游戏失败逻辑
    if (this.timer > this.starDuration) {
      this.gameOver();
      return;
    }

    this.timer += dt;
  },
  gainScore: function gainScore() {
    this.score += 1;
    this.scoreDisplay.string = 'Score: ' + this.score; // 播放得分音效

    cc.audioEngine.playEffect(this.scoreAuido, false);
  },
  gameOver: function gameOver() {
    // 停止 Player 节点的跳跃动作
    this.player.stopAllActions(); // 重新加载场景 game

    cc.director.loadScene('game');
  },
  spawnNewStar: function spawnNewStar() {
    // 使用给定的模板在场景中生成一个新节点
    var newStar = cc.instantiate(this.starPrefab); // 将新增的节点添加到 Canvas 节点下面

    this.node.addChild(newStar); // 为星星设置一个随机位置

    newStar.setPosition(this.getNewStarPosition()); // 在星星脚本组件上保存 Game 对象的引用

    newStar.getComponent('Star').game = this; // 重置计时器，根据消失时间范围随机取一个值

    this.starDuration = this.minStarDuration + Math.random() * (this.maxStarDuration - this.minStarDuration);
    this.timer = 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dhbWUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzdGFyUHJlZmFiIiwidHlwZSIsIlByZWZhYiIsIm1heFN0YXJEdXJhdGlvbiIsIm1pblN0YXJEdXJhdGlvbiIsImdyb3VuZCIsIk5vZGUiLCJwbGF5ZXIiLCJzY29yZURpc3BsYXkiLCJMYWJlbCIsInNjb3JlIiwiZGlzcGxheU5hbWUiLCJ0b29sdGlwIiwic2NvcmVBdWlkbyIsIkF1ZGlvQ2xpcCIsIm9uTG9hZCIsImdyb3VuZFkiLCJ5IiwiaGVpZ2h0IiwidGltZXIiLCJzdGFyRHVyYXRpb24iLCJzcGF3bk5ld1N0YXIiLCJzdGFydCIsInVwZGF0ZSIsImR0IiwiZ2FtZU92ZXIiLCJnYWluU2NvcmUiLCJzdHJpbmciLCJhdWRpb0VuZ2luZSIsInBsYXlFZmZlY3QiLCJzdG9wQWxsQWN0aW9ucyIsImRpcmVjdG9yIiwibG9hZFNjZW5lIiwibmV3U3RhciIsImluc3RhbnRpYXRlIiwibm9kZSIsImFkZENoaWxkIiwic2V0UG9zaXRpb24iLCJnZXROZXdTdGFyUG9zaXRpb24iLCJnZXRDb21wb25lbnQiLCJnYW1lIiwiTWF0aCIsInJhbmRvbSIsInJhbmRYIiwicmFuZFkiLCJqdW1wSGVpZ2h0IiwibWF4WCIsIndpZHRoIiwidjIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0FDLElBQUFBLFVBQVUsRUFBRTtBQUNSLGlCQUFTLElBREQ7QUFFUkMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkQsS0FGSjtBQU1SO0FBQ0FDLElBQUFBLGVBQWUsRUFBRSxDQVBUO0FBUVJDLElBQUFBLGVBQWUsRUFBRSxD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LEtBQWdCLEtBQUtuQyxNQUFMLENBQVlnQyxZQUFaLENBQXlCLFFBQXpCLEVBQW1DTSxVQUFsRSxHQUErRSxFQUEzRixDQUhpQixDQUlqQjs7QUFDQSxRQUFJQyxJQUFJLEdBQUcsS0FBS1gsSUFBTCxDQUFVWSxLQUFWLEdBQWtCLENBQTdCO0FBQ0FKLElBQUFBLEtBQUssR0FBRyxDQUFDRixJQUFJLENBQUNDLE1BQUwsS0FBZ0IsR0FBakIsSUFBd0IsQ0FBeEIsR0FBNEJJLElBQXBDLENBTmlCLENBT2pCOztBQUNBLFdBQU9sRCxFQUFFLENBQUNvRCxFQUFILENBQU1MLEtBQU4sRUFBYUMsS0FBYixDQUFQO0FBQ0g7QUFuR0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8g6L+Z5Liq5bGe5oCn5byV55So5LqG5pif5pif6aKE5Yi26LWE5rqQXG4gICAgICAgIHN0YXJQcmVmYWI6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWJcbiAgICAgICAgfSxcbiAgICAgICAgLy8g5pif5pif5Lqn55Sf5ZCO5raI5aSx5pe26Ze055qE6ZqP5py66IyD5Zu0XG4gICAgICAgIG1heFN0YXJEdXJhdGlvbjogMCxcbiAgICAgICAgbWluU3RhckR1cmF0aW9uOiAwLFxuICAgICAgICAvLyDlnLDpnaLoioLngrnvvIznlKjkuo7noa7lrprmmJ/mmJ/nlJ/miJDnmoTpq5jluqZcbiAgICAgICAgZ3JvdW5kOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxuICAgICAgICB9LFxuICAgICAgICAvLyBQbGF5ZXIg6IqC54K577yM55So5LqO6I635Y+W5Li76KeS5by56Lez55qE6auY5bqm77yM5ZKM5o6n5Yi25Li76KeS6KGM5Yqo5byA5YWzXG4gICAgICAgIHBsYXllcjoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcbiAgICAgICAgfSxcbiAgICAgICAgc2NvcmVEaXNwbGF5OiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcbiAgICAgICAgc2NvcmU6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IDAsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogXCJTY29yZSAocGxheWVyKVwiLFxuICAgICAgICAgICAgdG9vbHRpcDogXCJUaGUgc2NvcmUgb2YgcGxheWVyXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHNjb3JlQXVpZG86IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5BdWRpb0NsaXBcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgLy8g6I635Y+W5Zyw5bmz6Z2i55qEIHkg6L205Z2Q5qCHXG4gICAgICAgIHRoaXMuZ3JvdW5kWSA9IHRoaXMuZ3JvdW5kLnkgKyB0aGlzLmdyb3VuZC5oZWlnaHQgLyAyO1xuICAgICAgICAvL+WIneWni+WMluiuoeaXtuWZqFxuICAgICAgICB0aGlzLnRpbWVyID0gMDtcbiAgICAgICAgdGhpcy5zdGFyRHVyYXRpb24gPSAwO1xuICAgICAgICAvLyDnlJ/miJDkuIDkuKrmlrDnmoTmmJ/mmJ9cbiAgICAgICAgdGhpcy5zcGF3bk5ld1N0YXIoKTtcbiAgICAgICAgLy8g5Yid5aeL5YyW6K6h5YiGXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgIH0sXG5cbiAgICBzdGFydCgpIHsgfSxcblxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgICAvLyDmr4/luKfmm7TmlrDorqHml7blmajvvIzotoXov4fpmZDluqbov5jmsqHmnInnlJ/miJDmlrDnmoTmmJ/mmJ9cbiAgICAgICAgLy8g5bCx5Lya6LCD55So5ri45oiP5aSx6LSl6YC76L6RXG4gICAgICAgIGlmICh0aGlzLnRpbWVyID4gdGhpcy5zdGFyRHVyYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRpbWVyICs9IGR0O1xuICAgIH0sXG4gICAgZ2FpblNjb3JlKCkge1xuICAgICAgICB0aGlzLnNjb3JlICs9IDE7XG4gICAgICAgIHRoaXMuc2NvcmVEaXNwbGF5LnN0cmluZyA9ICdTY29yZTogJyArIHRoaXMuc2NvcmU7XG5cbiAgICAgICAgLy8g5pKt5pS+5b6X5YiG6Z+z5pWIXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5zY29yZUF1aWRvLCBmYWxzZSk7XG4gICAgfSxcbiAgICBnYW1lT3ZlcigpIHtcbiAgICAgICAgLy8g5YGc5q2iIFBsYXllciDoioLngrnnmoTot7Pot4PliqjkvZxcbiAgICAgICAgdGhpcy5wbGF5ZXIuc3RvcEFsbEFjdGlvbnMoKTtcblxuICAgICAgICAvLyDph43mlrDliqDovb3lnLrmma8gZ2FtZVxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ2dhbWUnKTtcblxuICAgIH0sXG4gICAgc3Bhd25OZXdTdGFyKCkge1xuICAgICAgICAvLyDkvb/nlKjnu5nlrprnmoTmqKHmnb/lnKjlnLrmma/kuK3nlJ/miJDkuIDkuKrmlrDoioLngrlcbiAgICAgICAgdmFyIG5ld1N0YXIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnN0YXJQcmVmYWIpO1xuICAgICAgICAvLyDlsIbmlrDlop7nmoToioLngrnmt7vliqDliLAgQ2FudmFzIOiKgueCueS4i+mdolxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobmV3U3Rhcik7XG4gICAgICAgIC8vIOS4uuaYn+aYn+iuvue9ruS4gOS4qumaj+acuuS9jee9rlxuICAgICAgICBuZXdTdGFyLnNldFBvc2l0aW9uKHRoaXMuZ2V0TmV3U3RhclBvc2l0aW9uKCkpO1xuICAgICAgICAvLyDlnKjmmJ/mmJ/ohJrmnKznu4Tku7bkuIrkv53lrZggR2FtZSDlr7nosaHnmoTlvJXnlKhcbiAgICAgICAgbmV3U3Rhci5nZXRDb21wb25lbnQoJ1N0YXInKS5nYW1lID0gdGhpcztcbiAgICAgICAgLy8g6YeN572u6K6h5pe25Zmo77yM5qC55o2u5raI5aSx5pe26Ze06IyD5Zu06ZqP5py65Y+W5LiA5Liq5YC8XG4gICAgICAgIHRoaXMuc3RhckR1cmF0aW9uID0gdGhpcy5taW5TdGFyRHVyYXRpb24gKyBNYXRoLnJhbmRvbSgpICogKHRoaXMubWF4U3RhckR1cmF0aW9uIC0gdGhpcy5taW5TdGFyRHVyYXRpb24pO1xuICAgICAgICB0aGlzLnRpbWVyID0gMDtcbiAgICB9LFxuICAgIGdldE5ld1N0YXJQb3NpdGlvbigpIHtcbiAgICAgICAgdmFyIHJhbmRYID0gMDtcbiAgICAgICAgLy8g5qC55o2u5Zyw5bmz6Z2i5L2N572u5ZKM5Li76KeS6Lez6LeD6auY5bqm77yM6ZqP5py65b6X5Yiw5LiA5Liq5pif5pif55qEIHkg5Z2Q5qCHXG4gICAgICAgIHZhciByYW5kWSA9IHRoaXMuZ3JvdW5kWSArIE1hdGgucmFuZG9tKCkgKiB0aGlzLnBsYXllci5nZXRDb21wb25lbnQoJ1BsYXllcicpLmp1bXBIZWlnaHQgKyA1MDtcbiAgICAgICAgLy8g5qC55o2u5bGP5bmV5a695bqm77yM6ZqP5py65b6X5Yiw5LiA5Liq5pif5pifIHgg5Z2Q5qCHXG4gICAgICAgIHZhciBtYXhYID0gdGhpcy5ub2RlLndpZHRoIC8gMjtcbiAgICAgICAgcmFuZFggPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAyICogbWF4WDtcbiAgICAgICAgLy8g6L+U5Zue5pif5pif5Z2Q5qCHXG4gICAgICAgIHJldHVybiBjYy52MihyYW5kWCwgcmFuZFkpO1xuICAgIH1cbn0pO1xuIl19
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
//------QC-SOURCE-SPLIT------
