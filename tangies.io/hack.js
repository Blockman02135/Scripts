// ==UserScript==
// @name         Tangies.IO Mod
// @namespace    https://discord.gg/wGuxrmt
// @version      0.3
// @description  [X] = Infinity Powerups, [G] = GodMode, [F] Infinite Jumps
// @author       Blockman_#0431 & ɹaɹoldxa ʇauɹaʇu!#2036
// @match        *://tangies.io/*
// @grant        none
// ==/UserScript==
(function() {
   'use strict';
   document.getElementById("branding").innerHTML = "Mod By Blockman_#0431<br>[X] = Infinity Powerups, [G] = GodMode, [F] = Infinite Jumps"

   function titleInfo(text, time) {
      document.title = text;
      setTimeout(() => {
         document.title = "Tangerine Panic";
      }, Number(time));
   }
   var settings = {}
   settings.godmode = false;
   settings.powerups = false;
   settings.fly = false;
   document.addEventListener('keypress', (event) => {
      switch (event.key) {
         case 'x':
            settings.powerups = !settings.powerups;
            Player.GetById(Game.context.gameClient.mPlayerId).actor.script.playerController.Reset();
            titleInfo(`Powerups: ${settings.powerups}`, 1000);
            break;
         case 'g':
            settings.godmode = !settings.godmode;
            if (settings.godmode) {
               GameClient.prototype.Died = function() {}
            } else {
               GameClient.prototype.Died = function() {
                  var e = new OutgoingPacket(PacketHeader.Client.DIED, 1);
                  this.socket.send(e.buffer)
               }
            };
            titleInfo(`GodMode: ${settings.godmode}`, 1000);
            break;
         case 'f':
            settings.fly = !settings.fly;
            if (settings.fly) {
               PlayerController.prototype.update = function(t) {
                  if (void 0 !== this.isMine && !0 === this.isMine) {
                     var e = Game.context.camera.camera.screenToWorld(this.mousePos.x, this.mousePos.y, 1);
                     this.app.keyboard.isPressed(pc.KEY_LEFT) && this.mousePos.add(new pc.Vec2(-15, 0)),
                        this.app.keyboard.isPressed(pc.KEY_RIGHT) && this.mousePos.add(new pc.Vec2(15, 0)),
                        this.app.keyboard.wasPressed(pc.KEY_UP) && (this.requestedJump = !0);
                     var i = e.x;
                     i = pc.math.clamp(i, -10, 40),
                        e.set(i, e.y, 1);
                     new pc.Vec3(e.x, this.entity.getPosition().y, this.entity.getPosition().z);
                     Game.context.mousePosView.setPosition(e);
                     var s = Math.abs(this.entity.getPosition().x - e.x),
                        o = 0;
                     if (!0 === this.player.isAlive)
                        if (s > .2) {
                           if (this.footstepTimer += .016, this.footstepTimer >= .35 && !1 === this.onMidair) {
                              var n = Math.floor(4 * Math.random()) + 1;
                              Game.context.STATIC_AUDIO.sound.play("footstep" + (n + 1)),
                                 this.footstepTimer = 0
                           }
                           this.entity.getPosition().x > e.x ? (this.entity.rigidbody.applyForce(-140, 0, 0), o = -1, this.playerSprite.sprite.flipX = !1) : this.entity.getPosition().x < e.x && (o = 1, this.entity.rigidbody.applyForce(140, 0, 0), this.playerSprite.sprite.flipX = !0),
                              this.SendSync(),
                              this.isAlreadyStopped = !1, !0 === this.player.isAlive && this.playerSprite.sprite.play("Run"),
                              this.runParticles.play()
                        } else this.playerSprite.sprite.flipX = !1, !0 === this.player.isAlive && this.playerSprite.sprite.play("Idle"),
                           this.runParticles.stop(), !0 === this.onMidair && this.SendSync(), !1 === this.isAlreadyStopped && (this.entity.rigidbody.linearVelocity = new pc.Vec3(0, this.entity.rigidbody.linearVelocity.y, 0), this.isAlreadyStopped = !0);
                     this.groundRaycastFrom.copy(this.entity.getPosition()),
                        this.groundRaycastTo.copy(pc.Vec3.DOWN).scale(1).add(this.groundRaycastFrom),
                        true ? (void 0 !== this.requestedJump && !0 === this.requestedJump && (!0 === this.extraJump ? (true && this.entity.rigidbody.applyImpulse(0, 140, 0), 1 === o && this.entity.rigidbody.applyImpulse(15, 140, 0), -1 === o && this.entity.rigidbody.applyImpulse(-15, 140, 0)) : (0 === o && this.entity.rigidbody.applyImpulse(0, 100, 0), 1 === o && this.entity.rigidbody.applyImpulse(10, 100, 0), -1 === o && this.entity.rigidbody.applyImpulse(-10, 100, 0)), this.requestedJump = !1, Game.context.gameClient.SendJump()), this.onMidair = !1) : (this.requestedJump = !1, this.onMidair = !0, this.entity.rigidbody.applyForce(0, -150, 0)),
                        this.onMidair ? this.entity.rigidbody.linearDamping = .99 : this.entity.rigidbody.linearDamping = .99999
                  } else {
                     this.remotePos.copy(this.player.position),
                        this.lerpedRemotePos.lerp(this.entity.getPosition(), this.remotePos, .5),
                        this.player.isAlive && this.entity.setPosition(this.lerpedRemotePos);
                     this.extraJumpVFX.enabled = this.extraJump,
                        this.immunityVFX.enabled = true,
                        this.shieldVFX.enabled = this.shield,
                        this.radPushVFX.enabled = this.radPush
                  }
               }
            } else {
               PlayerController.prototype.update = function(t) {
                  if (void 0 !== this.isMine && !0 === this.isMine) {
                     var e = Game.context.camera.camera.screenToWorld(this.mousePos.x, this.mousePos.y, 1);
                     this.app.keyboard.isPressed(pc.KEY_LEFT) && this.mousePos.add(new pc.Vec2(-15, 0)),
                        this.app.keyboard.isPressed(pc.KEY_RIGHT) && this.mousePos.add(new pc.Vec2(15, 0)),
                        this.app.keyboard.wasPressed(pc.KEY_UP) && (this.requestedJump = !0);
                     var i = e.x;
                     i = pc.math.clamp(i, -10, 40),
                        e.set(i, e.y, 1);
                     new pc.Vec3(e.x, this.entity.getPosition().y, this.entity.getPosition().z);
                     Game.context.mousePosView.setPosition(e);
                     var s = Math.abs(this.entity.getPosition().x - e.x),
                        o = 0;
                     if (!0 === this.player.isAlive)
                        if (s > .2) {
                           if (this.footstepTimer += .016, this.footstepTimer >= .35 && !1 === this.onMidair) {
                              var n = Math.floor(4 * Math.random()) + 1;
                              Game.context.STATIC_AUDIO.sound.play("footstep" + (n + 1)),
                                 this.footstepTimer = 0
                           }
                           this.entity.getPosition().x > e.x ? (this.entity.rigidbody.applyForce(-140, 0, 0), o = -1, this.playerSprite.sprite.flipX = !1) : this.entity.getPosition().x < e.x && (o = 1, this.entity.rigidbody.applyForce(140, 0, 0), this.playerSprite.sprite.flipX = !0),
                              this.SendSync(),
                              this.isAlreadyStopped = !1, !0 === this.player.isAlive && this.playerSprite.sprite.play("Run"),
                              this.runParticles.play()
                        } else this.playerSprite.sprite.flipX = !1, !0 === this.player.isAlive && this.playerSprite.sprite.play("Idle"),
                           this.runParticles.stop(), !0 === this.onMidair && this.SendSync(), !1 === this.isAlreadyStopped && (this.entity.rigidbody.linearVelocity = new pc.Vec3(0, this.entity.rigidbody.linearVelocity.y, 0), this.isAlreadyStopped = !0);
                     this.groundRaycastFrom.copy(this.entity.getPosition()),
                        this.groundRaycastTo.copy(pc.Vec3.DOWN).scale(1).add(this.groundRaycastFrom),
                        this.app.systems.rigidbody.raycastFirst(this.groundRaycastFrom, this.groundRaycastTo) ? (void 0 !== this.requestedJump && !0 === this.requestedJump && (!0 === this.extraJump ? (0 === o && this.entity.rigidbody.applyImpulse(0, 140, 0), 1 === o && this.entity.rigidbody.applyImpulse(15, 140, 0), -1 === o && this.entity.rigidbody.applyImpulse(-15, 140, 0)) : (0 === o && this.entity.rigidbody.applyImpulse(0, 100, 0), 1 === o && this.entity.rigidbody.applyImpulse(10, 100, 0), -1 === o && this.entity.rigidbody.applyImpulse(-10, 100, 0)), this.requestedJump = !1, Game.context.gameClient.SendJump()), this.onMidair = !1) : (this.requestedJump = !1, this.onMidair = !0, this.entity.rigidbody.applyForce(0, -150, 0)),
                        this.onMidair ? this.entity.rigidbody.linearDamping = .99 : this.entity.rigidbody.linearDamping = .99999
                  } else {
                     this.remotePos.copy(this.player.position),
                        this.lerpedRemotePos.lerp(this.entity.getPosition(), this.remotePos, .5),
                        this.player.isAlive && this.entity.setPosition(this.lerpedRemotePos);
                     this.extraJumpVFX.enabled = this.extraJump,
                        this.immunityVFX.enabled = this.immunity,
                        this.shieldVFX.enabled = this.shield,
                        this.radPushVFX.enabled = this.radPush
                  }
               }
            }
            titleInfo(`Fly: ${settings.godmode}`, 1000);
            break;
      };
   });
   setInterval(() => {
      if (settings.powerups) {
         try {
            Player.GetById(Game.context.gameClient.mPlayerId).actor.script.playerController.ConsumePowerup(1);
            Player.GetById(Game.context.gameClient.mPlayerId).actor.script.playerController.ConsumePowerup(2);
            Player.GetById(Game.context.gameClient.mPlayerId).actor.script.playerController.ConsumePowerup(3);
            Player.GetById(Game.context.gameClient.mPlayerId).actor.script.playerController.ConsumePowerup(4);
         } catch (e) {};
      }
   }, 1000);
})();
