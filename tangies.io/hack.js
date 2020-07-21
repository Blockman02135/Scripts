// ==UserScript==
// @name         Tangies.IO Mod
// @namespace    https://discord.gg/wGuxrmt
// @version      0.5
// @description  [X] = Infinity Powerups, [G] = GodMode, [F] Infinite Jumps
// @author       Blockman_#0431 & ɹaɹoldxa ʇauɹaʇu!#2036
// @match        *://tangies.io/*
// @grant        none
// ==/UserScript==
(function() {
   'use strict';
   var flypower = 10;
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
            titleInfo(`Fly: ${settings.fly}`, 1000);
            break;
            case ' ':
              if (settings.fly) {
                 Player.GetById(Game.context.gameClient.mPlayerId).actor.rigidbody.applyImpulse(0,flypower*10,0);
              }
            break;
          case '`':
              var fp = prompt("Fly Power", flypower);
              if (fp!=null) flypower=fp
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
