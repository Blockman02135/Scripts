!function(a, b) {
    function c(a, b) {
        var c = b.x - a.x
          , d = b.z - a.z;
        return Math.sqrt(c * c + d * d)
    }
    function d(a) {
        var b = a.angle() + .5 * Math.PI;
        return b > 2 * Math.PI && (b -= 2 * Math.PI),
        b = 2 * Math.PI - b
    }
    function f(a) {
        return new THREE.Vector2(-Math.sin(a),-Math.cos(a))
    }
    function g(a, b) {
        return d(new THREE.Vector2(b.position.x - a.position.x,b.position.z - a.position.z))
    }
    function h() {}
    function j(a, b, c) {
        var d = ""
          , e = void 0;
        void 0 !== ca[a] && (d = ca[a].name,
        void 0 !== ca[a].parent && (e = 5 === ca[a].parent.netType ? ca[a].parent.id : ca[a].parent.anchorIslandId)),
        this.createProperties(),
        this.supply = 0,
        this.setShipClass(1),
        this.hpRegTimer = 0,
        this.hpRegInterval = 1,
        this.arcFront = 0,
        this.muted = ["x", "z", "y"],
        this.krewMembers = {},
        this.krewCount = 0,
        this.recruiting = !1,
        this.isLocked = !1,
        this.departureTime = 5,
        this.lastMoved,
        this.netType = 1,
        this.steering = 0,
        this.shipState = {
            starting: -1,
            sailing: 0,
            docking: 1,
            finishedDocking: 2,
            anchored: 3,
            departing: 4
        },
        this.shipState = -1,
        this.overall_kills = 0,
        this.overall_cargo = 0,
        this.sentDockingMsg = !1,
        this.anchorIslandId = e,
        this.sinktimer = 0,
        a && ca[a] ? (this.captainId = a,
        this.clan = ca[a].clan) : (this.captainId = "",
        this.clan = ""),
        d = "string" == typeof d ? d : "",
        this.crewName = "string" == typeof b ? b : d + "'" + ("s" === d.charAt(d.length - 1) ? "" : "s") + " krew",
        this.hasDoneDeathDrops = !1,
        this.rottimer = 5 * Math.random(),
        this.leanvalue = 0,
        this.setName(this.crewName)
    }
    function k() {}
    function m(a) {
        this.name = void 0 !== a ? a.name || "" : "",
        this.createProperties(),
        this.position.y = 0,
        this.netType = 0,
        this.size = E.sizePlayer,
        this.walkForward = 0,
        this.walkSideward = 0,
        this.use = !1,
        this.useid = 0,
        this.cooldown = 0,
        this.pitch = 0,
        this.score = 50,
        this.salary = 0,
        this.overall_cargo = 0,
        this.last_island = "",
        this.gold = (a.startingItems || {}).gold || 0,
        this.islandBoundary = {
            x: 0,
            z: 0
        },
        this.shipsSank = 0,
        this.shotsFired = 0,
        this.shotsHit = 0,
        this.sentDockingMsg = !1,
        this.state = {
            alive: 0,
            dead: 1,
            respawning: 2
        },
        this.state = 0,
        this.activeWeapon = {
            nothing: -1,
            cannon: 0,
            fishingRod: 1,
            hammer: 2
        },
        this.activeWeapon = 0,
        this.justLogged = !0,
        this.isFishing = !1,
        this.checkedItemsList = !1,
        this.rareItemsFound = [],
        this.rodRotationSpeed = .25 * Math.random() + .25,
        this.isCaptain = !1,
        this.oldCaptainState = !1,
        this.sentMessages = [],
        this.lastMessageSentAt = void 0,
        this.isSpammer = !1,
        this.lastMoved = new Date,
        this.jumping = 0,
        this.jump_count = 0,
        this.itemId,
        this.ownsCannon = !0,
        this.ownsFishingRod = !0,
        this.attackSpeedBonus = 0,
        this.attackDamageBonus = 0,
        this.attackDistanceBonus = 0,
        this.movementSpeedBonus = 0,
        this.armorBonus = 0,
        this.level = 0,
        this.experience = 0,
        this.experienceBase = 100,
        this.experienceMaxLevel = 50,
        this.experienceNeedsUpdate = !0,
        this.bank = {
            deposit: 0
        },
        this.casino = {},
        this.clan = "" === a.t.cl ? void 0 : a.t.cl,
        this.clanLeader = a.t.cll,
        this.clanOwner = a.t.clo,
        this.clanRequest = a.t.cr,
        this.isLoggedIn = a.t.l,
        this.experienceNeededForLevels = function(a) {
            for (var b = {
                0: {
                    amount: 0,
                    total: 0
                },
                1: {
                    amount: a.experienceBase,
                    total: a.experienceBase
                }
            }, c = 1; c < a.experienceMaxLevel + 1; c++)
                b[c + 1] = {},
                b[c + 1].amount = Math.ceil(1.07 * b[c].amount),
                b[c + 1].total = b[c + 1].amount + b[c].total;
            return b
        }(this),
        this.points = {
            fireRate: 0,
            distance: 0,
            damage: 0
        };
        var b = this;
        this.pointsFormula = {
            getFireRate: function() {
                return 1.2 * (b.points.fireRate >= 50 ? 50 : b.points.fireRate)
            },
            getDistance: function() {
                return (b.points.distance >= 50 ? 50 : b.points.distance) / 2
            },
            getDamage: function() {
                return (b.points.damage >= 50 ? 50 : b.points.damage) / 2
            },
            getExperience: function(a) {
                return parseInt(2.4 * a)
            }
        },
        this.jump = 0,
        this.jumpVel = 0,
        fa[a.id] || (fa[a.id] = this.name),
        this.notifiscationHeap = {},
        this.setName(this.name),
        this.crossHair()
    }
    function n(a, b, c) {
        switch (this.createProperties(),
        this.netType = 3,
        this.sendDelta = !1,
        this.sendSnap = !1,
        this.sendCreationSnapOnDelta = !0,
        this.impactType = a,
        this.size = new THREE.Vector3(1,1,1),
        this.timeout = 1,
        this.position.y = 0,
        a) {
        case 0:
            this.baseGeometry = z.impact_water,
            this.baseMaterial = C.impact_water;
            for (var d = 0; d < 3; ++d)
                vb({
                    vx: 10 * Math.random() - 5,
                    vy: 4 + 2 * Math.random(),
                    vz: 10 * Math.random() - 5,
                    x: b,
                    z: c,
                    y: 0,
                    w: .3,
                    h: .3,
                    d: .3,
                    gravity: 5,
                    gravity: 5,
                    rotaSpeed: 20 * Math.random(),
                    duration: 5,
                    sizeSpeed: -.6,
                    material: C.impact_water,
                    geometry: y.box
                });
            break;
        case 1:
            GameAnalytics("addDesignEvent", "Game:Session:Hit");
            for (var d = 0; d < 5; ++d)
                vb({
                    vx: 20 * Math.random() - 10,
                    vy: 5 + 5 * Math.random(),
                    vz: 20 * Math.random() - 10,
                    x: b,
                    z: c,
                    y: 0,
                    w: .2 + .5 * Math.random(),
                    h: .2 + .5 * Math.random(),
                    d: .2 + .5 * Math.random(),
                    gravity: 12,
                    rotaSpeed: 10 * Math.random(),
                    duration: 2,
                    sizeSpeed: -.8,
                    material: C.splinter,
                    geometry: y.box
                })
        }
        this.position.x = b,
        this.position.z = c
    }
    function q(a, b, c, d) {
        this.createProperties(),
        this.netType = 4,
        this.bonusValues = [50, 75, 100, 1e4],
        this.pickupSize = a,
        this.bonus = this.bonusValues[this.pickupSize] || 25,
        this.captainsCutRatio = .3,
        this.sendDelta = 1 != d,
        this.sendSnap = 1 != d,
        this.sendCreationSnapOnDelta = !0,
        this.spawnPacket = !1;
        var e = 1;
        0 === d && (e = parseInt(a) + 1),
        1 === d && (e = .05 * a,
        GameAnalytics("addDesignEvent", "Game:Session:CatchFish")),
        3 !== d && 2 !== d || (e = .02),
        this.size = new THREE.Vector3(e,e,e),
        this.modelscale = new THREE.Vector3(e,e,e),
        this.position.x = b,
        this.position.z = c,
        this.pickerId = "",
        this.type = d,
        this.picking = 1 == d,
        this.catchingFish = !1,
        this.timeout = 1,
        0 === this.type && (this.baseGeometry = z.boat,
        this.baseMaterial = C.crate),
        1 === this.type && (this.baseModel = M.fish,
        this.modeloffset = E.modeloffsetFishShellClam),
        2 === this.type && (Math.round(Math.random()) ? (this.baseModel = M.shell,
        this.modeloffset = E.modeloffsetFishShellClam) : (this.baseModel = M.clam,
        this.modeloffset = E.modeloffsetFishShellClam,
        this.modelscale = new THREE.Vector3(.03,.03,.03))),
        3 === this.type && (this.baseModel = M.crab,
        this.modeloffset = E.modeloffsetCrab,
        this.modelrotation = new THREE.Vector3(0,Math.PI,0)),
        4 === this.type && (this.baseModel = M.chest),
        this.type <= 1 || 4 === this.type ? (this.floattimer = 0 == this.type ? 5 * Math.random() : 5 * Math.random() + .5,
        this.rotationspeed = .5 * Math.random() + .5) : (this.floattimer = 1,
        this.rotationspeed = 0)
    }
    function r(a, b, c, d) {
        this.createProperties(),
        this.name = d.name || "",
        this.netType = 5,
        this.landmarkType = a,
        this.dockType = 1,
        this.dockRadius = d.dockRadius,
        this.spawnPlayers = d.spawnPlayers,
        this.onlySellOwnShips = d.onlySellOwnShips,
        this.sendDelta = !1,
        this.sendSnap = !1,
        this.sendCreationSnapOnDelta = !0,
        this.size = new THREE.Vector3(this.dockRadius,20,this.dockRadius),
        this.position.x = b,
        this.position.z = c,
        this.collisionRadius = 30,
        this.baseGeometry = z.island,
        this.baseMaterial = C.colorset,
        "Jamaica" == this.name && (this.palm = new THREE.Mesh(z.palm,C.colorset),
        this.palm.position.set(850, 0, 850),
        this.palm.scale.x = 8,
        this.palm.scale.y = 8,
        this.palm.scale.z = 8,
        Aa.add(this.palm));
        var e = this.dockRadius / 10 / 8 * 9;
        this.modelscale.set(e, e, e),
        this.modeloffset.set(0, 1, 0),
        this.visualCue = new THREE.Mesh(new THREE.RingBufferGeometry(this.dockRadius - 1,this.dockRadius,30),C.islandradius),
        this.visualCue.rotation.x = -Math.PI / 2,
        this.visualCue.position.set(this.position.x, 1, this.position.z),
        this.wavetimer = 0,
        Aa.add(this.visualCue),
        this.setName(this.name)
    }
    function s(a) {
        this.createProperties(),
        this.netType = 2,
        this.size = E.sizeProjectile,
        this.sendDelta = !1,
        this.sendSnap = !1,
        this.sendCreationSnapOnDelta = !0,
        this.muted = ["x", "z"],
        this.shooterid = "",
        this.shooterStartPos = new THREE.Vector3,
        this.reel = !1,
        this.impact = void 0,
        this.type = -1,
        this.airtime = 0,
        this.spawnPacket = !1,
        this.setProjectileModel = !0,
        this.particletimer = 0,
        this.startPoint = new THREE.Vector3(0,0,0),
        this.endPoint = new THREE.Vector3(0,0,0)
    }
    function t(a) {
        var b, c, d;
        for (c = 0,
        d = a.length; c < d; c++)
            if (!((b = a.charCodeAt(c)) > 47 && b < 58 || b > 64 && b < 91 || b > 96 && b < 123))
                return !1;
        return !0
    }
    function u(a) {
        this.vx = a.vx,
        this.vy = a.vy,
        this.vz = a.vz,
        this.gravity = a.gravity,
        this.rotaSpeed = a.rotaSpeed,
        this.duration = a.duration,
        this.timeleft = this.duration,
        this.sizeSpeed = a.sizeSpeed,
        this.globalscale = 1,
        this.w = a.w,
        this.h = a.h,
        this.d = a.d,
        this.x = a.x,
        this.y = a.y,
        this.z = a.z,
        this.geometry = new THREE.Mesh(a.geometry,a.material),
        this.geometry.position.set(a.x, a.y, a.z),
        this.geometry.scale.set(a.w, a.h, a.d),
        this.deleteMe = !1,
        Aa.add(this.geometry)
    }
    window.CONFIG = {
        setProperties: {
            inVision: !1
        },
        Labels: {
            redrawInterval: 250,
            fontFamily: "Arial, Helvetica, sans-serif",
            distanceMultiplier: {
                0: 40,
                1: 160,
                5: 300
            },
            boats: {
                useMethod: "inRange"
            }
        }
    },
    window.updateInputRange = function(a) {
        var b = a.parent().find("output")
          , c = a.attr("min")
          , d = a.attr("max")
          , e = (d - c) / 100
          , f = a.val()
          , g = (f - c) / e;
        b.html(f),
        a.attr("style", "--value:" + g),
        b.attr("style", "left:" + g + "%; transform: translate(-" + g + "%);")
    }
    ,
    window.inputRange = function(a) {
        a.on("input change", function() {
            updateInputRange(a)
        }),
        updateInputRange(a)
    }
    ,
    function() {
        var a = function(a, b, c, d) {
            var e = {};
            return e.element = a,
            e.contextMode = d || "2d",
            e.context = e.element.getContext(e.contextMode),
            e.useRadians = !1,
            e.zoom = 1,
            e.world = {
                width: b,
                height: c,
                rotation: 0
            },
            e.scale = {
                width: 0,
                height: 0
            },
            e.elements = {},
            e.randomId = function() {
                var a = (0 | 9e6 * Math.random()).toString(36);
                return void 0 !== e.elements[a] && (a = e.randomId()),
                a
            }
            ,
            e.add = function(a) {
                return a && (a.id = a.id || e.randomId(),
                void 0 === e.elements[a.id] && (e.elements[a.id] = a)),
                e
            }
            ,
            e.remove = function(a) {
                return a && a.id && e.elements[a.id] && delete e.elements[a.id],
                e
            }
            ,
            e.draw = function() {
                var a, b = e.context.canvas.width * e.zoom, c = e.context.canvas.height * e.zoom;
                e.scale.width = 1 / e.world.width * e.context.canvas.width,
                e.scale.height = 1 / e.world.height * e.context.canvas.height,
                e.context.resetTransform(),
                e.context.clearRect(0, 0, e.context.canvas.width, e.context.canvas.height),
                e.world.rotation && (e.context.translate(e.context.canvas.width / 2, e.context.canvas.height / 2),
                e.context.rotate(e.useRadians ? e.world.rotation : Math.PI / 180 * e.world.rotation),
                e.context.translate(-e.context.canvas.width / 2, -e.context.canvas.height / 2)),
                e.context.translate(-(b - e.context.canvas.width) / 2, -(c - e.context.canvas.height) / 2),
                e.context.scale(e.zoom, e.zoom);
                for (a in e.elements)
                    e.elements[a].draw && e.elements[a].draw();
                return e
            }
            ,
            e.toWorld = function(a) {
                var b = Object.assign({}, a);
                return a.x && 0 !== a.x && (b.x = a.x * e.scale.width),
                a.y && 0 !== a.y && (b.y = a.y * e.scale.height),
                a.r && 0 !== a.r && (b.r = a.r * e.scale.width),
                a.width && 0 !== a.width && (b.width = a.width * e.scale.width),
                a.height && 0 !== a.height && (b.height = a.height * e.scale.height),
                a.size && 0 !== a.size && (b.size = a.size * e.scale.width),
                a.rotation && 0 !== a.rotation && (b.rotation = e.useRadians ? a.rotation : Math.PI / 180 * a.rotation),
                delete b.draw,
                delete b.id,
                delete b.toWorld,
                b
            }
            ,
            e.point = function(a) {
                var b = Object.assign({
                    id: void 0,
                    x: 0,
                    y: 0,
                    r: 1,
                    fill: void 0,
                    stroke: a.stroke ? {
                        color: a.stroke.color || "black",
                        width: a.stroke.width || 1
                    } : void 0
                }, a);
                return b.toWorld = function() {
                    return e.toWorld(b)
                }
                ,
                b.draw = function() {
                    var a = b.toWorld();
                    b.fill && (e.context.fillStyle = b.fill,
                    e.context.beginPath(),
                    e.context.arc(a.x, a.y, a.r, 0, 2 * Math.PI, !0),
                    e.context.fill()),
                    b.stroke && (e.context.strokeStyle = b.stroke.color,
                    e.context.lineWidth = b.stroke.width * e.scale.width,
                    e.context.beginPath(),
                    e.context.arc(a.x, a.y, a.r, 0, 2 * Math.PI, !0),
                    e.context.stroke())
                }
                ,
                b
            }
            ,
            e.rect = function(a) {
                var b = Object.assign({
                    id: void 0,
                    x: 0,
                    y: 0,
                    width: 1,
                    height: 1,
                    fill: void 0,
                    stroke: a.stroke ? {
                        color: a.stroke.color || "black",
                        width: a.stroke.width || 1
                    } : void 0
                }, a);
                return b.toWorld = function() {
                    return e.toWorld(b)
                }
                ,
                b.draw = function() {
                    var a = b.toWorld();
                    b.fill && (e.context.fillStyle = b.fill,
                    e.context.fillRect(a.x, a.y, a.width, a.height)),
                    b.stroke && (e.context.strokeStyle = b.stroke.color,
                    e.context.lineWidth = b.stroke.width * e.scale.width,
                    e.context.strokeRect(a.x, a.y, a.width, a.height))
                }
                ,
                b
            }
            ,
            e.triangle = function(a) {
                var b = Object.assign({
                    id: void 0,
                    x: 0,
                    y: 0,
                    size: 1,
                    rotation: 0,
                    fill: void 0,
                    stroke: a.stroke ? {
                        color: a.stroke.color || "black",
                        width: a.stroke.width || 1
                    } : void 0
                }, a);
                return b.toWorld = function() {
                    return e.toWorld(b)
                }
                ,
                b.draw = function() {
                    var a = b.toWorld()
                      , c = a.size / 2;
                    e.context.save(),
                    e.context.translate(a.x, a.y),
                    e.context.rotate(a.rotation),
                    e.context.translate(-a.x, -a.y),
                    b.fill && (e.context.fillStyle = b.fill,
                    e.context.beginPath(),
                    e.context.moveTo(a.x - c, a.y + c),
                    e.context.lineTo(a.x, a.y - c),
                    e.context.lineTo(a.x + c, a.y + c),
                    e.context.lineTo(a.x - c, a.y + c),
                    e.context.fill()),
                    b.stroke && (e.context.strokeStyle = b.stroke.color,
                    e.context.lineWidth = b.stroke.width * e.scale.width,
                    e.context.beginPath(),
                    e.context.moveTo(a.x - c, a.y + c),
                    e.context.lineTo(a.x, a.y - a.size),
                    e.context.lineTo(a.x + c, a.y + c),
                    e.context.lineTo(a.x - c, a.y + c),
                    e.context.stroke()),
                    e.context.restore()
                }
                ,
                b
            }
            ,
            e.text = function(a) {
                var b = Object.assign({
                    id: void 0,
                    x: 0,
                    y: 0,
                    text: "",
                    width: void 0,
                    font: "serif",
                    size: 48,
                    align: "center",
                    baseline: "alphabetic",
                    fill: void 0,
                    stroke: a.stroke ? {
                        color: a.stroke.color || "black",
                        width: a.stroke.width || 1
                    } : void 0
                }, a);
                return b.toWorld = function() {
                    return e.toWorld(b)
                }
                ,
                b.draw = function() {
                    var a = b.toWorld();
                    e.context.textAlign = b.align,
                    e.context.textBaseline = b.baseline,
                    e.context.font = a.size + "px " + b.font,
                    b.fill && (e.context.fillStyle = b.fill,
                    e.context.fillText(b.text, a.x, a.y, a.width)),
                    b.stroke && (e.context.strokeStyle = b.stroke.color,
                    e.context.lineWidth = b.stroke.width * e.scale.width,
                    e.context.strokeText(b.text, a.x, a.y, a.width))
                }
                ,
                b
            }
            ,
            e
        };
        window.CanvasMap = a
    }(window),
    function(a, b) {
        "use strict";
        function c(a) {
            return function() {
                return a.test(d)
            }
        }
        var d = a.navigator && b.userAgent || ""
          , e = {
            isChrome: c(/webkit\W.*(chrome|chromium)\W/i),
            isFirefox: c(/mozilla.*\Wfirefox\W/i),
            isGecko: c(/mozilla(?!.*webkit).*\Wgecko\W/i),
            isIE: function() {
                return "Microsoft Internet Explorer" === b.appName || !!c(/\bTrident\b/)
            },
            isKindle: c(/\W(kindle|silk)\W/i),
            isMobile: c(/(iphone|ipod|((?:android)?.*?mobile)|blackberry|nokia)/i),
            isOpera: c(/opera.*\Wpresto\W|OPR/i),
            isSafari: c(/webkit\W(?!.*chrome).*safari\W/i),
            isTablet: c(/(ipad|android(?!.*mobile)|tablet)/i),
            isTV: c(/googletv|sonydtv/i),
            isWebKit: c(/webkit\W/i),
            isAndroid: c(/android/i),
            isIOS: c(/(ipad|iphone|ipod)/i),
            isIPad: c(/ipad/i),
            isIPhone: c(/iphone/i),
            isIPod: c(/ipod/i),
            whoami: function() {
                return d
            }
        };
        "function" == typeof define && define.amd ? define([], function() {
            return e
        }) : "undefined" != typeof module && module.exports ? (module.exports = e.attach,
        module.exports.UA = e) : a.UA = e
    }(window, navigator),
    function() {
        var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t = {}.hasOwnProperty, u = [].indexOf || function(a) {
            for (var b = 0, c = this.length; b < c; b++)
                if (b in this && this[b] === a)
                    return b;
            return -1
        }
        ;
        f = {
            is_unordered: !1,
            is_counting: !1,
            is_exclusive: !1,
            is_solitary: !1,
            prevent_default: !1,
            prevent_repeat: !1
        },
        r = "meta alt option ctrl shift cmd".split(" "),
        p = "ctrl",
        a = {
            debug: !1
        };
        var v = function(a) {
            var b, c;
            for (b in a)
                t.call(a, b) && !1 !== (c = a[b]) && (this[b] = c);
            this.keys = this.keys || [],
            this.count = this.count || 0
        };
        v.prototype.allows_key_repeat = function() {
            return !this.prevent_repeat && "function" == typeof this.on_keydown
        }
        ,
        v.prototype.reset = function() {
            return this.count = 0,
            this.keyup_fired = null
        }
        ;
        var w = function(a, b) {
            var c, d;
            "undefined" != typeof jQuery && null !== jQuery && a instanceof jQuery && (1 !== a.length && o("Warning: your jQuery selector should have exactly one object."),
            a = a[0]),
            this.should_force_event_defaults = this.should_suppress_event_defaults = !1,
            this.sequence_delay = 800,
            this._registered_combos = [],
            this._keys_down = [],
            this._active_combos = [],
            this._sequence = [],
            this._sequence_timer = null,
            this._prevent_capture = !1,
            this._defaults = b || {};
            for (c in f)
                t.call(f, c) && (d = f[c],
                this._defaults[c] = this._defaults[c] || d);
            this.element = a || document.body,
            c = function(a, b, c) {
                return a.addEventListener ? a.addEventListener(b, c) : a.attachEvent && a.attachEvent("on" + b, c),
                c
            }
            ;
            var e = this;
            this.keydown_event = c(this.element, "keydown", function(a) {
                return a = a || window.event,
                e._receive_input(a, !0),
                e._bug_catcher(a)
            });
            var g = this;
            this.keyup_event = c(this.element, "keyup", function(a) {
                return a = a || window.event,
                g._receive_input(a, !1)
            });
            var h = this;
            this.blur_event = c(window, "blur", function() {
                var a, b, c, d;
                for (d = h._keys_down,
                b = 0,
                c = d.length; b < c; b++)
                    a = d[b],
                    h._key_up(a, {});
                return h._keys_down = []
            })
        };
        w.prototype.destroy = function() {
            var a;
            return a = function(a, b, c) {
                return null != a.removeEventListener ? a.removeEventListener(b, c) : null != a.removeEvent ? a.removeEvent("on" + b, c) : void 0
            }
            ,
            a(this.element, "keydown", this.keydown_event),
            a(this.element, "keyup", this.keyup_event),
            a(window, "blur", this.blur_event)
        }
        ,
        w.prototype._bug_catcher = function(a) {
            var b, c;
            if ("cmd" === p && 0 <= u.call(this._keys_down, "cmd") && "cmd" !== (b = d(null != (c = a.keyCode) ? c : a.key)) && "shift" !== b && "alt" !== b && "caps" !== b && "tab" !== b)
                return this._receive_input(a, !1)
        }
        ,
        w.prototype._cmd_bug_check = function(a) {
            return !("cmd" === p && 0 <= u.call(this._keys_down, "cmd") && 0 > u.call(a, "cmd"))
        }
        ,
        w.prototype._prevent_default = function(a, b) {
            if ((b || this.should_suppress_event_defaults) && !this.should_force_event_defaults && (a.preventDefault ? a.preventDefault() : a.returnValue = !1,
            a.stopPropagation))
                return a.stopPropagation()
        }
        ,
        w.prototype._get_active_combos = function(a) {
            var b, c;
            return b = [],
            c = g(this._keys_down, function(b) {
                return b !== a
            }),
            c.push(a),
            this._match_combo_arrays(c, function(a) {
                return function(c) {
                    if (a._cmd_bug_check(c.keys))
                        return b.push(c)
                }
            }(this)),
            this._fuzzy_match_combo_arrays(c, function(a) {
                return function(c) {
                    if (!(0 <= u.call(b, c)) && !c.is_solitary && a._cmd_bug_check(c.keys))
                        return b.push(c)
                }
            }(this)),
            b
        }
        ,
        w.prototype._get_potential_combos = function(a) {
            var b, c, d, e, f;
            for (c = [],
            f = this._registered_combos,
            d = 0,
            e = f.length; d < e; d++)
                b = f[d],
                b.is_sequence || 0 <= u.call(b.keys, a) && this._cmd_bug_check(b.keys) && c.push(b);
            return c
        }
        ,
        w.prototype._add_to_active_combos = function(a) {
            var b, c, d, e, f, g, h, i, j, k, l;
            if (g = !1,
            f = !0,
            d = !1,
            0 <= u.call(this._active_combos, a))
                return !0;
            if (this._active_combos.length)
                for (e = h = 0,
                k = this._active_combos.length; 0 <= k ? h < k : h > k; e = 0 <= k ? ++h : --h)
                    if ((b = this._active_combos[e]) && b.is_exclusive && a.is_exclusive) {
                        if (b = b.keys,
                        !g)
                            for (i = 0,
                            j = b.length; i < j; i++)
                                if (c = b[i],
                                g = !0,
                                0 > u.call(a.keys, c)) {
                                    g = !1;
                                    break
                                }
                        if (f && !g)
                            for (l = a.keys,
                            i = 0,
                            j = l.length; i < j; i++)
                                if (c = l[i],
                                f = !1,
                                0 > u.call(b, c)) {
                                    f = !0;
                                    break
                                }
                        g && (d ? null != (b = this._active_combos.splice(e, 1)[0]) && b.reset() : (b = this._active_combos.splice(e, 1, a)[0],
                        null != b && b.reset(),
                        d = !0),
                        f = !1)
                    }
            return f && this._active_combos.unshift(a),
            g || f
        }
        ,
        w.prototype._remove_from_active_combos = function(a) {
            var b, c, d;
            for (b = c = 0,
            d = this._active_combos.length; 0 <= d ? c < d : c > d; b = 0 <= d ? ++c : --c)
                if (this._active_combos[b] === a) {
                    a = this._active_combos.splice(b, 1)[0],
                    a.reset();
                    break
                }
        }
        ,
        w.prototype._get_possible_sequences = function() {
            var a, b, c, d, e, f, h, i, j, k, l, m;
            for (d = [],
            k = this._registered_combos,
            f = 0,
            j = k.length; f < j; f++)
                for (a = k[f],
                b = h = 1,
                l = this._sequence.length; 1 <= l ? h <= l : h >= l; b = 1 <= l ? ++h : --h)
                    if (e = this._sequence.slice(-b),
                    a.is_sequence) {
                        if (0 > u.call(a.keys, "shift") && (e = g(e, function(a) {
                            return "shift" !== a
                        }),
                        !e.length))
                            continue;
                        for (b = i = 0,
                        m = e.length; 0 <= m ? i < m : i > m; b = 0 <= m ? ++i : --i) {
                            if (a.keys[b] !== e[b]) {
                                c = !1;
                                break
                            }
                            c = !0
                        }
                        c && d.push(a)
                    }
            return d
        }
        ,
        w.prototype._add_key_to_sequence = function(a, b) {
            var c, d, e, f;
            if (this._sequence.push(a),
            d = this._get_possible_sequences(),
            d.length) {
                for (e = 0,
                f = d.length; e < f; e++)
                    c = d[e],
                    this._prevent_default(b, c.prevent_default);
                this._sequence_timer && clearTimeout(this._sequence_timer),
                -1 < this.sequence_delay && (this._sequence_timer = setTimeout(function() {
                    return this._sequence = []
                }, this.sequence_delay))
            } else
                this._sequence = []
        }
        ,
        w.prototype._get_sequence = function(a) {
            var b, c, d, e, f, h, i, j, k, l, m, n;
            for (l = this._registered_combos,
            h = 0,
            k = l.length; h < k; h++)
                if (b = l[h],
                b.is_sequence) {
                    for (c = i = 1,
                    m = this._sequence.length; 1 <= m ? i <= m : i >= m; c = 1 <= m ? ++i : --i)
                        if (f = g(this._sequence, function(a) {
                            return 0 <= u.call(b.keys, "shift") || "shift" !== a
                        }).slice(-c),
                        b.keys.length === f.length)
                            for (c = j = 0,
                            n = f.length; 0 <= n ? j < n : j > n; c = 0 <= n ? ++j : --j)
                                if (e = f[c],
                                !(0 > u.call(b.keys, "shift") && "shift" === e || "shift" === a && 0 > u.call(b.keys, "shift"))) {
                                    if (b.keys[c] !== e) {
                                        d = !1;
                                        break
                                    }
                                    d = !0
                                }
                    if (d)
                        return b.is_exclusive && (this._sequence = []),
                        b
                }
            return !1
        }
        ,
        w.prototype._receive_input = function(a, b) {
            var c, e;
            if (this._prevent_capture)
                this._keys_down.length && (this._keys_down = []);
            else if (c = d(null != (e = a.keyCode) ? e : a.key),
            (b || this._keys_down.length || !("alt" === c || c === p)) && c)
                return b ? this._key_down(c, a) : this._key_up(c, a)
        }
        ,
        w.prototype._fire = function(a, b, c, d) {
            if ("function" == typeof b["on_" + a] && this._prevent_default(c, !0 !== b["on_" + a].call(b.this, c, b.count, d)),
            "release" === a && (b.count = 0),
            "keyup" === a)
                return b.keyup_fired = !0
        }
        ,
        w.prototype._match_combo_arrays = function(a, d) {
            var e, f, g, h;
            for (h = this._registered_combos,
            f = 0,
            g = h.length; f < g; f++)
                e = h[f],
                (!e.is_unordered && c(a, e.keys) || e.is_unordered && b(a, e.keys)) && d(e)
        }
        ,
        w.prototype._fuzzy_match_combo_arrays = function(a, b) {
            var c, d, e, f;
            for (f = this._registered_combos,
            d = 0,
            e = f.length; d < e; d++)
                c = f[d],
                (!c.is_unordered && j(c.keys, a) || c.is_unordered && i(c.keys, a)) && b(c)
        }
        ,
        w.prototype._keys_remain = function(a) {
            var b, c, d, e;
            for (e = a.keys,
            c = 0,
            d = e.length; c < d; c++)
                if (a = e[c],
                0 <= u.call(this._keys_down, a)) {
                    b = !0;
                    break
                }
            return b
        }
        ,
        w.prototype._key_down = function(a, b) {
            var c, d, f, g, h;
            (c = e(a, b)) && (a = c),
            this._add_key_to_sequence(a, b),
            (c = this._get_sequence(a)) && this._fire("keydown", c, b);
            for (f in q)
                c = q[f],
                b[c] && (f === a || 0 <= u.call(this._keys_down, f) || this._keys_down.push(f));
            for (f in q)
                if (c = q[f],
                f !== a && 0 <= u.call(this._keys_down, f) && !b[c] && !("cmd" === f && "cmd" !== p))
                    for (c = d = 0,
                    g = this._keys_down.length; 0 <= g ? d < g : d > g; c = 0 <= g ? ++d : --d)
                        this._keys_down[c] === f && this._keys_down.splice(c, 1);
            for (d = this._get_active_combos(a),
            f = this._get_potential_combos(a),
            g = 0,
            h = d.length; g < h; g++)
                c = d[g],
                this._handle_combo_down(c, f, a, b);
            if (f.length)
                for (d = 0,
                g = f.length; d < g; d++)
                    c = f[d],
                    this._prevent_default(b, c.prevent_default);
            0 > u.call(this._keys_down, a) && this._keys_down.push(a)
        }
        ,
        w.prototype._handle_combo_down = function(a, b, c, d) {
            var e, f, g, h, i;
            if (0 > u.call(a.keys, c))
                return !1;
            if (this._prevent_default(d, a && a.prevent_default),
            e = !1,
            0 <= u.call(this._keys_down, c) && (e = !0,
            !a.allows_key_repeat()))
                return !1;
            if (g = this._add_to_active_combos(a, c),
            c = a.keyup_fired = !1,
            a.is_exclusive)
                for (h = 0,
                i = b.length; h < i; h++)
                    if (f = b[h],
                    f.is_exclusive && f.keys.length > a.keys.length) {
                        c = !0;
                        break
                    }
            return !c && (a.is_counting && "function" == typeof a.on_keydown && (a.count += 1),
            g) ? this._fire("keydown", a, d, e) : void 0
        }
        ,
        w.prototype._key_up = function(a, b) {
            var c, d, f, g, h, i;
            if (c = a,
            (f = e(a, b)) && (a = f),
            f = n[c],
            b.shiftKey ? f && 0 <= u.call(this._keys_down, f) || (a = c) : c && 0 <= u.call(this._keys_down, c) || (a = f),
            (g = this._get_sequence(a)) && this._fire("keyup", g, b),
            0 > u.call(this._keys_down, a))
                return !1;
            for (g = h = 0,
            i = this._keys_down.length; 0 <= i ? h < i : h > i; g = 0 <= i ? ++h : --h)
                if ((d = this._keys_down[g]) === a || d === f || d === c) {
                    this._keys_down.splice(g, 1);
                    break
                }
            for (d = this._active_combos.length,
            f = [],
            i = this._active_combos,
            g = 0,
            h = i.length; g < h; g++)
                c = i[g],
                0 <= u.call(c.keys, a) && f.push(c);
            for (g = 0,
            h = f.length; g < h; g++)
                c = f[g],
                this._handle_combo_up(c, b, a);
            if (1 < d)
                for (h = this._active_combos,
                d = 0,
                g = h.length; d < g; d++)
                    void 0 === (c = h[d]) || 0 <= u.call(f, c) || this._keys_remain(c) || this._remove_from_active_combos(c)
        }
        ,
        w.prototype._handle_combo_up = function(a, c, d) {
            var e, f;
            this._prevent_default(c, a && a.prevent_default),
            f = this._keys_remain(a),
            a.keyup_fired || (e = this._keys_down.slice(),
            e.push(d),
            a.is_solitary && !b(e, a.keys)) || (this._fire("keyup", a, c),
            a.is_counting && "function" == typeof a.on_keyup && "function" != typeof a.on_keydown && (a.count += 1)),
            f || (this._fire("release", a, c),
            this._remove_from_active_combos(a))
        }
        ,
        w.prototype.simple_combo = function(a, b) {
            return this.register_combo({
                keys: a,
                on_keydown: b
            })
        }
        ,
        w.prototype.counting_combo = function(a, b) {
            return this.register_combo({
                keys: a,
                is_counting: !0,
                is_unordered: !1,
                on_keydown: b
            })
        }
        ,
        w.prototype.sequence_combo = function(a, b) {
            return this.register_combo({
                keys: a,
                on_keydown: b,
                is_sequence: !0,
                is_exclusive: !0
            })
        }
        ,
        w.prototype.register_combo = function(a) {
            var b, c, d;
            "string" == typeof a.keys && (a.keys = a.keys.split(" ")),
            d = this._defaults;
            for (b in d)
                t.call(d, b) && (c = d[b],
                void 0 === a[b] && (a[b] = c));
            if (a = new v(a),
            s(a))
                return this._registered_combos.push(a),
                a
        }
        ,
        w.prototype.register_many = function(a) {
            var b, c, d, e;
            for (e = [],
            c = 0,
            d = a.length; c < d; c++)
                b = a[c],
                e.push(this.register_combo(b));
            return e
        }
        ,
        w.prototype.unregister_combo = function(a) {
            var d, e, f, g, h, i;
            if (!a)
                return !1;
            var j = this;
            if (e = function(a) {
                var b, c, d, e;
                for (e = [],
                b = c = 0,
                d = j._registered_combos.length; 0 <= d ? c < d : c > d; b = 0 <= d ? ++c : --c) {
                    if (a === j._registered_combos[b]) {
                        j._registered_combos.splice(b, 1);
                        break
                    }
                    e.push(void 0)
                }
                return e
            }
            ,
            a instanceof v)
                return e(a);
            for ("string" == typeof a && (a = a.split(" ")),
            h = this._registered_combos,
            i = [],
            f = 0,
            g = h.length; f < g; f++)
                null != (d = h[f]) && (d.is_unordered && b(a, d.keys) || !d.is_unordered && c(a, d.keys) ? i.push(e(d)) : i.push(void 0));
            return i
        }
        ,
        w.prototype.unregister_many = function(a) {
            var b, c, d, e;
            for (e = [],
            c = 0,
            d = a.length; c < d; c++)
                b = a[c],
                e.push(this.unregister_combo(b));
            return e
        }
        ,
        w.prototype.get_registered_combos = function() {
            return this._registered_combos
        }
        ,
        w.prototype.reset = function() {
            return this._registered_combos = []
        }
        ,
        w.prototype.listen = function() {
            return this._prevent_capture = !1
        }
        ,
        w.prototype.stop_listening = function() {
            return this._prevent_capture = !0
        }
        ,
        w.prototype.get_meta_key = function() {
            return p
        }
        ,
        a.Listener = w,
        d = function(a) {
            return m[a]
        }
        ,
        g = function(a, b) {
            var c;
            if (a.filter)
                return a.filter(b);
            var d, e, f;
            for (f = [],
            d = 0,
            e = a.length; d < e; d++)
                c = a[d],
                b(c) && f.push(c);
            return f
        }
        ,
        b = function(a, b) {
            var c, d, e;
            if (a.length !== b.length)
                return !1;
            for (d = 0,
            e = a.length; d < e; d++)
                if (c = a[d],
                !(0 <= u.call(b, c)))
                    return !1;
            return !0
        }
        ,
        c = function(a, b) {
            var c, d, e;
            if (a.length !== b.length)
                return !1;
            for (c = d = 0,
            e = a.length; 0 <= e ? d < e : d > e; c = 0 <= e ? ++d : --d)
                if (a[c] !== b[c])
                    return !1;
            return !0
        }
        ,
        i = function(a, b) {
            var c, d, e;
            for (d = 0,
            e = a.length; d < e; d++)
                if (c = a[d],
                0 > u.call(b, c))
                    return !1;
            return !0
        }
        ,
        h = Array.prototype.indexOf || function(a, b) {
            var c, d, e;
            for (c = d = 0,
            e = a.length; 0 <= e ? d <= e : d >= e; c = 0 <= e ? ++d : --d)
                if (a[c] === b)
                    return c;
            return -1
        }
        ,
        j = function(a, b) {
            var c, d, e, f;
            for (e = d = 0,
            f = a.length; e < f; e++) {
                if (c = a[e],
                !((c = h.call(b, c)) >= d))
                    return !1;
                d = c
            }
            return !0
        }
        ,
        o = function() {
            if (a.debug)
                return console.log.apply(console, arguments)
        }
        ,
        k = function(a) {
            var b, c, d;
            b = !1;
            for (d in m)
                if (c = m[d],
                a === c) {
                    b = !0;
                    break
                }
            if (!b)
                for (d in n)
                    if (c = n[d],
                    a === c) {
                        b = !0;
                        break
                    }
            return b
        }
        ,
        s = function(a) {
            var b, c, d, e, g, i, j;
            for (g = !0,
            a.keys.length || o("You're trying to bind a combo with no keys:", a),
            c = i = 0,
            j = a.keys.length; 0 <= j ? i < j : i > j; c = 0 <= j ? ++i : --i)
                d = a.keys[c],
                (b = l[d]) && (d = a.keys[c] = b),
                "meta" === d && a.keys.splice(c, 1, p),
                "cmd" === d && o('Warning: use the "meta" key rather than "cmd" for Windows compatibility');
            for (j = a.keys,
            b = 0,
            i = j.length; b < i; b++)
                d = j[b],
                k(d) || (o('Do not recognize the key "' + d + '"'),
                g = !1);
            if (0 <= u.call(a.keys, "meta") || 0 <= u.call(a.keys, "cmd")) {
                for (b = a.keys.slice(),
                i = 0,
                j = r.length; i < j; i++)
                    d = r[i],
                    -1 < (c = h.call(b, d)) && b.splice(c, 1);
                1 < b.length && (o("META and CMD key combos cannot have more than 1 non-modifier keys", a, b),
                g = !1)
            }
            for (e in a)
                "undefined" === f[e] && o("The property " + e + " is not a valid combo property. Your combo has still been registered.");
            return g
        }
        ,
        e = function(a, b) {
            var c;
            return !!b.shiftKey && (null != (c = n[a]) && c)
        }
        ,
        q = {
            cmd: "metaKey",
            ctrl: "ctrlKey",
            shift: "shiftKey",
            alt: "altKey"
        },
        l = {
            escape: "esc",
            control: "ctrl",
            command: "cmd",
            break: "pause",
            windows: "cmd",
            option: "alt",
            caps_lock: "caps",
            apostrophe: "'",
            semicolon: ";",
            tilde: "~",
            accent: "`",
            scroll_lock: "scroll",
            num_lock: "num"
        },
        n = {
            "/": "?",
            ".": ">",
            ",": "<",
            "'": '"',
            ";": ":",
            "[": "{",
            "]": "}",
            "\\": "|",
            "`": "~",
            "=": "+",
            "-": "_",
            1: "!",
            2: "@",
            3: "#",
            4: "$",
            5: "%",
            6: "^",
            7: "&",
            8: "*",
            9: "(",
            0: ")"
        },
        m = {
            0: "\\",
            8: "backspace",
            9: "tab",
            12: "num",
            13: "enter",
            16: "shift",
            17: "ctrl",
            18: "alt",
            19: "pause",
            20: "caps",
            27: "esc",
            32: "space",
            33: "pageup",
            34: "pagedown",
            35: "end",
            36: "home",
            37: "left",
            38: "up",
            39: "right",
            40: "down",
            44: "print",
            45: "insert",
            46: "delete",
            48: "0",
            49: "1",
            50: "2",
            51: "3",
            52: "4",
            53: "5",
            54: "6",
            55: "7",
            56: "8",
            57: "9",
            65: "a",
            66: "b",
            67: "c",
            68: "d",
            69: "e",
            70: "f",
            71: "g",
            72: "h",
            73: "i",
            74: "j",
            75: "k",
            76: "l",
            77: "m",
            78: "n",
            79: "o",
            80: "p",
            81: "q",
            82: "r",
            83: "s",
            84: "t",
            85: "u",
            86: "v",
            87: "w",
            88: "x",
            89: "y",
            90: "z",
            91: "cmd",
            92: "cmd",
            93: "cmd",
            96: "num_0",
            97: "num_1",
            98: "num_2",
            99: "num_3",
            100: "num_4",
            101: "num_5",
            102: "num_6",
            103: "num_7",
            104: "num_8",
            105: "num_9",
            106: "num_multiply",
            107: "num_add",
            108: "num_enter",
            109: "num_subtract",
            110: "num_decimal",
            111: "num_divide",
            112: "f1",
            113: "f2",
            114: "f3",
            115: "f4",
            116: "f5",
            117: "f6",
            118: "f7",
            119: "f8",
            120: "f9",
            121: "f10",
            122: "f11",
            123: "f12",
            124: "print",
            144: "num",
            145: "scroll",
            186: ";",
            187: "=",
            188: ",",
            189: "-",
            190: ".",
            191: "/",
            192: "`",
            219: "[",
            220: "\\",
            221: "]",
            222: "'",
            223: "`",
            224: "cmd",
            225: "alt",
            57392: "ctrl",
            63289: "num",
            59: ";",
            61: "=",
            173: "-"
        },
        a._keycode_dictionary = m,
        a._is_array_in_array_sorted = j,
        -1 !== navigator.userAgent.indexOf("Mac OS X") && (p = "cmd"),
        -1 !== navigator.userAgent.indexOf("Opera") && (m[17] = "cmd"),
        "function" == typeof define && define.amd ? define([], function() {
            return a
        }) : "undefined" != typeof exports && null !== exports ? exports.keypress = a : window.keypress = a
    }
    .call(this),
    THREE.OBJLoader = function() {
        function a() {
            var a = {
                objects: [],
                object: {},
                vertices: [],
                normals: [],
                uvs: [],
                materialLibraries: [],
                startObject: function(a, b) {
                    if (this.object && !1 === this.object.fromDeclaration)
                        return this.object.name = a,
                        void (this.object.fromDeclaration = !1 !== b);
                    var c = this.object && "function" == typeof this.object.currentMaterial ? this.object.currentMaterial() : void 0;
                    if (this.object && "function" == typeof this.object._finalize && this.object._finalize(!0),
                    this.object = {
                        name: a || "",
                        fromDeclaration: !1 !== b,
                        geometry: {
                            vertices: [],
                            normals: [],
                            uvs: []
                        },
                        materials: [],
                        smooth: !0,
                        startMaterial: function(a, b) {
                            var c = this._finalize(!1);
                            c && (c.inherited || c.groupCount <= 0) && this.materials.splice(c.index, 1);
                            var d = {
                                index: this.materials.length,
                                name: a || "",
                                mtllib: Array.isArray(b) && b.length > 0 ? b[b.length - 1] : "",
                                smooth: void 0 !== c ? c.smooth : this.smooth,
                                groupStart: void 0 !== c ? c.groupEnd : 0,
                                groupEnd: -1,
                                groupCount: -1,
                                inherited: !1,
                                clone: function(a) {
                                    var b = {
                                        index: "number" == typeof a ? a : this.index,
                                        name: this.name,
                                        mtllib: this.mtllib,
                                        smooth: this.smooth,
                                        groupStart: 0,
                                        groupEnd: -1,
                                        groupCount: -1,
                                        inherited: !1
                                    };
                                    return b.clone = this.clone.bind(b),
                                    b
                                }
                            };
                            return this.materials.push(d),
                            d
                        },
                        currentMaterial: function() {
                            if (this.materials.length > 0)
                                return this.materials[this.materials.length - 1]
                        },
                        _finalize: function(a) {
                            var b = this.currentMaterial();
                            if (b && -1 === b.groupEnd && (b.groupEnd = this.geometry.vertices.length / 3,
                            b.groupCount = b.groupEnd - b.groupStart,
                            b.inherited = !1),
                            a && this.materials.length > 1)
                                for (var c = this.materials.length - 1; c >= 0; c--)
                                    this.materials[c].groupCount <= 0 && this.materials.splice(c, 1);
                            return a && 0 === this.materials.length && this.materials.push({
                                name: "",
                                smooth: this.smooth
                            }),
                            b
                        }
                    },
                    c && c.name && "function" == typeof c.clone) {
                        var d = c.clone(0);
                        d.inherited = !0,
                        this.object.materials.push(d)
                    }
                    this.objects.push(this.object)
                },
                finalize: function() {
                    this.object && "function" == typeof this.object._finalize && this.object._finalize(!0)
                },
                parseVertexIndex: function(a, b) {
                    var c = parseInt(a, 10);
                    return 3 * (c >= 0 ? c - 1 : c + b / 3)
                },
                parseNormalIndex: function(a, b) {
                    var c = parseInt(a, 10);
                    return 3 * (c >= 0 ? c - 1 : c + b / 3)
                },
                parseUVIndex: function(a, b) {
                    var c = parseInt(a, 10);
                    return 2 * (c >= 0 ? c - 1 : c + b / 2)
                },
                addVertex: function(a, b, c) {
                    var d = this.vertices
                      , e = this.object.geometry.vertices;
                    e.push(d[a + 0], d[a + 1], d[a + 2]),
                    e.push(d[b + 0], d[b + 1], d[b + 2]),
                    e.push(d[c + 0], d[c + 1], d[c + 2])
                },
                addVertexLine: function(a) {
                    var b = this.vertices;
                    this.object.geometry.vertices.push(b[a + 0], b[a + 1], b[a + 2])
                },
                addNormal: function(a, b, c) {
                    var d = this.normals
                      , e = this.object.geometry.normals;
                    e.push(d[a + 0], d[a + 1], d[a + 2]),
                    e.push(d[b + 0], d[b + 1], d[b + 2]),
                    e.push(d[c + 0], d[c + 1], d[c + 2])
                },
                addUV: function(a, b, c) {
                    var d = this.uvs
                      , e = this.object.geometry.uvs;
                    e.push(d[a + 0], d[a + 1]),
                    e.push(d[b + 0], d[b + 1]),
                    e.push(d[c + 0], d[c + 1])
                },
                addUVLine: function(a) {
                    var b = this.uvs;
                    this.object.geometry.uvs.push(b[a + 0], b[a + 1])
                },
                addFace: function(a, b, c, d, e, f, g, h, i) {
                    var j = this.vertices.length
                      , k = this.parseVertexIndex(a, j)
                      , l = this.parseVertexIndex(b, j)
                      , m = this.parseVertexIndex(c, j);
                    if (this.addVertex(k, l, m),
                    void 0 !== d) {
                        var n = this.uvs.length;
                        k = this.parseUVIndex(d, n),
                        l = this.parseUVIndex(e, n),
                        m = this.parseUVIndex(f, n),
                        this.addUV(k, l, m)
                    }
                    if (void 0 !== g) {
                        var o = this.normals.length;
                        k = this.parseNormalIndex(g, o),
                        l = g === h ? k : this.parseNormalIndex(h, o),
                        m = g === i ? k : this.parseNormalIndex(i, o),
                        this.addNormal(k, l, m)
                    }
                },
                addLineGeometry: function(a, b) {
                    this.object.geometry.type = "Line";
                    for (var c = this.vertices.length, d = this.uvs.length, e = 0, f = a.length; e < f; e++)
                        this.addVertexLine(this.parseVertexIndex(a[e], c));
                    for (var g = 0, f = b.length; g < f; g++)
                        this.addUVLine(this.parseUVIndex(b[g], d))
                }
            };
            return a.startObject("", !1),
            a
        }
        function b(a) {
            this.manager = void 0 !== a ? a : THREE.DefaultLoadingManager,
            this.materials = null
        }
        var c = /^[og]\s*(.+)?/
          , d = /^mtllib /
          , e = /^usemtl /;
        return b.prototype = {
            constructor: b,
            load: function(a, b, c, d) {
                var e = this
                  , f = new THREE.FileLoader(e.manager);
                f.setPath(this.path),
                f.load(a, function(a) {
                    b(e.parse(a))
                }, c, d)
            },
            setPath: function(a) {
                this.path = a
            },
            setMaterials: function(a) {
                return this.materials = a,
                this
            },
            parse: function(b) {
                console.time("OBJLoader");
                var f = new a;
                -1 !== b.indexOf("\r\n") && (b = b.replace(/\r\n/g, "\n")),
                -1 !== b.indexOf("\\\n") && (b = b.replace(/\\\n/g, ""));
                for (var g = b.split("\n"), h = "", i = "", j = [], k = "function" == typeof "".trimLeft, l = 0, m = g.length; l < m; l++)
                    if (h = g[l],
                    h = k ? h.trimLeft() : h.trim(),
                    0 !== h.length && "#" !== (i = h.charAt(0)))
                        if ("v" === i) {
                            var n = h.split(/\s+/);
                            switch (n[0]) {
                            case "v":
                                f.vertices.push(parseFloat(n[1]), parseFloat(n[2]), parseFloat(n[3]));
                                break;
                            case "vn":
                                f.normals.push(parseFloat(n[1]), parseFloat(n[2]), parseFloat(n[3]));
                                break;
                            case "vt":
                                f.uvs.push(parseFloat(n[1]), parseFloat(n[2]))
                            }
                        } else if ("f" === i) {
                            for (var o = h.substr(1).trim(), p = o.split(/\s+/), q = [], r = 0, s = p.length; r < s; r++) {
                                var t = p[r];
                                if (t.length > 0) {
                                    var u = t.split("/");
                                    q.push(u)
                                }
                            }
                            for (var v = q[0], r = 1, s = q.length - 1; r < s; r++) {
                                var w = q[r]
                                  , x = q[r + 1];
                                f.addFace(v[0], w[0], x[0], v[1], w[1], x[1], v[2], w[2], x[2])
                            }
                        } else if ("l" === i) {
                            var y = h.substring(1).trim().split(" ")
                              , z = []
                              , A = [];
                            if (-1 === h.indexOf("/"))
                                z = y;
                            else
                                for (var B = 0, C = y.length; B < C; B++) {
                                    var D = y[B].split("/");
                                    "" !== D[0] && z.push(D[0]),
                                    "" !== D[1] && A.push(D[1])
                                }
                            f.addLineGeometry(z, A)
                        } else if (null !== (j = c.exec(h))) {
                            var E = (" " + j[0].substr(1).trim()).substr(1);
                            f.startObject(E)
                        } else if (e.test(h))
                            f.object.startMaterial(h.substring(7).trim(), f.materialLibraries);
                        else if (d.test(h))
                            f.materialLibraries.push(h.substring(7).trim());
                        else {
                            if ("s" !== i) {
                                if ("\0" === h)
                                    continue;
                                throw new Error("Unexpected line: '" + h + "'")
                            }
                            if (j = h.split(" "),
                            j.length > 1) {
                                var F = j[1].trim().toLowerCase();
                                f.object.smooth = "0" !== F && "off" !== F
                            } else
                                f.object.smooth = !0;
                            var G = f.object.currentMaterial();
                            G && (G.smooth = f.object.smooth)
                        }
                f.finalize();
                var H = new THREE.Group;
                H.materialLibraries = [].concat(f.materialLibraries);
                for (var l = 0, m = f.objects.length; l < m; l++) {
                    var I = f.objects[l]
                      , J = I.geometry
                      , K = I.materials
                      , L = "Line" === J.type;
                    if (0 !== J.vertices.length) {
                        var M = new THREE.BufferGeometry;
                        M.addAttribute("position", new THREE.BufferAttribute(new Float32Array(J.vertices),3)),
                        J.normals.length > 0 ? M.addAttribute("normal", new THREE.BufferAttribute(new Float32Array(J.normals),3)) : M.computeVertexNormals(),
                        J.uvs.length > 0 && M.addAttribute("uv", new THREE.BufferAttribute(new Float32Array(J.uvs),2));
                        for (var N = [], O = 0, P = K.length; O < P; O++) {
                            var Q = K[O]
                              , G = void 0;
                            if (null !== this.materials && (G = this.materials.create(Q.name),
                            L && G && !(G instanceof THREE.LineBasicMaterial))) {
                                var R = new THREE.LineBasicMaterial;
                                R.copy(G),
                                G = R
                            }
                            G || (G = L ? new THREE.LineBasicMaterial : new THREE.MeshPhongMaterial,
                            G.name = Q.name),
                            G.flatShading = !Q.smooth,
                            N.push(G)
                        }
                        var S;
                        if (N.length > 1) {
                            for (var O = 0, P = K.length; O < P; O++) {
                                var Q = K[O];
                                M.addGroup(Q.groupStart, Q.groupCount, O)
                            }
                            S = L ? new THREE.LineSegments(M,N) : new THREE.Mesh(M,N)
                        } else
                            S = L ? new THREE.LineSegments(M,N[0]) : new THREE.Mesh(M,N[0]);
                        S.name = I.name,
                        H.add(S)
                    }
                }
                return console.timeEnd("OBJLoader"),
                H
            }
        },
        b
    }(),
    THREE.TGALoader = function(a) {
        this.manager = void 0 !== a ? a : THREE.DefaultLoadingManager
    }
    ,
    THREE.TGALoader.prototype = {
        constructor: THREE.TGALoader,
        load: function(a, b, c, d) {
            var e = this
              , f = new THREE.Texture
              , g = new THREE.FileLoader(this.manager);
            return g.setResponseType("arraybuffer"),
            g.load(a, function(a) {
                f.image = e.parse(a),
                f.needsUpdate = !0,
                void 0 !== b && b(f)
            }, c, d),
            f
        },
        parse: function(a) {
            function b(a, b, c, d, e, f, g, h, i) {
                var j, k, l, m = i, n = 0, o = w.width;
                for (l = b; l !== d; l += c)
                    for (k = e; k !== g; k += f,
                    n++)
                        j = h[n],
                        a[4 * (k + o * l) + 3] = 255,
                        a[4 * (k + o * l) + 2] = m[3 * j + 0],
                        a[4 * (k + o * l) + 1] = m[3 * j + 1],
                        a[4 * (k + o * l) + 0] = m[3 * j + 2];
                return a
            }
            function c(a, b, c, d, e, f, g, h) {
                var i, j, k, l = 0, m = w.width;
                for (k = b; k !== d; k += c)
                    for (j = e; j !== g; j += f,
                    l += 2)
                        i = h[l + 0] + (h[l + 1] << 8),
                        a[4 * (j + m * k) + 0] = (31744 & i) >> 7,
                        a[4 * (j + m * k) + 1] = (992 & i) >> 2,
                        a[4 * (j + m * k) + 2] = (31 & i) >> 3,
                        a[4 * (j + m * k) + 3] = 32768 & i ? 0 : 255;
                return a
            }
            function d(a, b, c, d, e, f, g, h) {
                var i, j, k = 0, l = w.width;
                for (j = b; j !== d; j += c)
                    for (i = e; i !== g; i += f,
                    k += 3)
                        a[4 * (i + l * j) + 3] = 255,
                        a[4 * (i + l * j) + 2] = h[k + 0],
                        a[4 * (i + l * j) + 1] = h[k + 1],
                        a[4 * (i + l * j) + 0] = h[k + 2];
                return a
            }
            function e(a, b, c, d, e, f, g, h) {
                var i, j, k = 0, l = w.width;
                for (j = b; j !== d; j += c)
                    for (i = e; i !== g; i += f,
                    k += 4)
                        a[4 * (i + l * j) + 2] = h[k + 0],
                        a[4 * (i + l * j) + 1] = h[k + 1],
                        a[4 * (i + l * j) + 0] = h[k + 2],
                        a[4 * (i + l * j) + 3] = h[k + 3];
                return a
            }
            function f(a, b, c, d, e, f, g, h) {
                var i, j, k, l = 0, m = w.width;
                for (k = b; k !== d; k += c)
                    for (j = e; j !== g; j += f,
                    l++)
                        i = h[l],
                        a[4 * (j + m * k) + 0] = i,
                        a[4 * (j + m * k) + 1] = i,
                        a[4 * (j + m * k) + 2] = i,
                        a[4 * (j + m * k) + 3] = 255;
                return a
            }
            function g(a, b, c, d, e, f, g, h) {
                var i, j, k = 0, l = w.width;
                for (j = b; j !== d; j += c)
                    for (i = e; i !== g; i += f,
                    k += 2)
                        a[4 * (i + l * j) + 0] = h[k + 0],
                        a[4 * (i + l * j) + 1] = h[k + 0],
                        a[4 * (i + l * j) + 2] = h[k + 0],
                        a[4 * (i + l * j) + 3] = h[k + 1];
                return a
            }
            var h = 0
              , i = 1
              , j = 2
              , k = 3
              , l = 9
              , m = 10
              , n = 11
              , o = 48
              , p = 4
              , q = 0
              , r = 1
              , s = 2
              , t = 3;
            a.length < 19 && console.error("THREE.TGALoader: Not enough data to contain header.");
            var u = new Uint8Array(a)
              , v = 0
              , w = {
                id_length: u[v++],
                colormap_type: u[v++],
                image_type: u[v++],
                colormap_index: u[v++] | u[v++] << 8,
                colormap_length: u[v++] | u[v++] << 8,
                colormap_size: u[v++],
                origin: [u[v++] | u[v++] << 8, u[v++] | u[v++] << 8],
                width: u[v++] | u[v++] << 8,
                height: u[v++] | u[v++] << 8,
                pixel_size: u[v++],
                flags: u[v++]
            };
            !function(a) {
                switch (a.image_type) {
                case i:
                case l:
                    (a.colormap_length > 256 || 24 !== a.colormap_size || 1 !== a.colormap_type) && console.error("THREE.TGALoader: Invalid type colormap data for indexed type.");
                    break;
                case j:
                case k:
                case m:
                case n:
                    a.colormap_type && console.error("THREE.TGALoader: Invalid type colormap data for colormap type.");
                    break;
                case h:
                    console.error("THREE.TGALoader: No data.");
                default:
                    console.error('THREE.TGALoader: Invalid type "%s".', a.image_type)
                }
                (a.width <= 0 || a.height <= 0) && console.error("THREE.TGALoader: Invalid image size."),
                8 !== a.pixel_size && 16 !== a.pixel_size && 24 !== a.pixel_size && 32 !== a.pixel_size && console.error('THREE.TGALoader: Invalid pixel size "%s".', a.pixel_size)
            }(w),
            w.id_length + v > a.length && console.error("THREE.TGALoader: No data."),
            v += w.id_length;
            var x = !1
              , y = !1
              , z = !1;
            switch (w.image_type) {
            case l:
                x = !0,
                y = !0;
                break;
            case i:
                y = !0;
                break;
            case m:
                x = !0;
                break;
            case j:
                break;
            case n:
                x = !0,
                z = !0;
                break;
            case k:
                z = !0
            }
            var A = document.createElement("canvas");
            A.width = w.width,
            A.height = w.height;
            var B = A.getContext("2d")
              , C = B.createImageData(w.width, w.height)
              , D = function(a, b, c, d, e) {
                var f, g, h, i;
                if (g = c.pixel_size >> 3,
                h = c.width * c.height * g,
                b && (i = e.subarray(d, d += c.colormap_length * (c.colormap_size >> 3))),
                a) {
                    f = new Uint8Array(h);
                    for (var j, k, l, m = 0, n = new Uint8Array(g); m < h; )
                        if (j = e[d++],
                        k = 1 + (127 & j),
                        128 & j) {
                            for (l = 0; l < g; ++l)
                                n[l] = e[d++];
                            for (l = 0; l < k; ++l)
                                f.set(n, m + l * g);
                            m += g * k
                        } else {
                            for (k *= g,
                            l = 0; l < k; ++l)
                                f[m + l] = e[d++];
                            m += k
                        }
                } else
                    f = e.subarray(d, d += b ? c.width * c.height : h);
                return {
                    pixel_data: f,
                    palettes: i
                }
            }(x, y, w, v, u);
            !function(a, h, i, j, k) {
                var l, m, n, u, v, x;
                switch ((w.flags & o) >> p) {
                default:
                case s:
                    l = 0,
                    n = 1,
                    v = h,
                    m = 0,
                    u = 1,
                    x = i;
                    break;
                case q:
                    l = 0,
                    n = 1,
                    v = h,
                    m = i - 1,
                    u = -1,
                    x = -1;
                    break;
                case t:
                    l = h - 1,
                    n = -1,
                    v = -1,
                    m = 0,
                    u = 1,
                    x = i;
                    break;
                case r:
                    l = h - 1,
                    n = -1,
                    v = -1,
                    m = i - 1,
                    u = -1,
                    x = -1
                }
                if (z)
                    switch (w.pixel_size) {
                    case 8:
                        f(a, m, u, x, l, n, v, j);
                        break;
                    case 16:
                        g(a, m, u, x, l, n, v, j);
                        break;
                    default:
                        console.error("THREE.TGALoader: Format not supported.")
                    }
                else
                    switch (w.pixel_size) {
                    case 8:
                        b(a, m, u, x, l, n, v, j, k);
                        break;
                    case 16:
                        c(a, m, u, x, l, n, v, j);
                        break;
                    case 24:
                        d(a, m, u, x, l, n, v, j);
                        break;
                    case 32:
                        e(a, m, u, x, l, n, v, j);
                        break;
                    default:
                        console.error("THREE.TGALoader: Format not supported.")
                    }
            }(C.data, w.width, w.height, D.pixel_data, D.palettes);
            return B.putImageData(C, 0, 0),
            A
        }
    },
    THREE.MTLLoader = function(a) {
        this.manager = void 0 !== a ? a : THREE.DefaultLoadingManager
    }
    ,
    THREE.MTLLoader.prototype = {
        constructor: THREE.MTLLoader,
        load: function(a, b, c, d) {
            var e = this
              , f = new THREE.FileLoader(this.manager);
            f.setPath(this.path),
            f.load(a, function(a) {
                b(e.parse(a))
            }, c, d)
        },
        setPath: function(a) {
            this.path = a
        },
        setTexturePath: function(a) {
            this.texturePath = a
        },
        setBaseUrl: function(a) {
            console.warn("THREE.MTLLoader: .setBaseUrl() is deprecated. Use .setTexturePath( path ) for texture path or .setPath( path ) for general base path instead."),
            this.setTexturePath(a)
        },
        setCrossOrigin: function(a) {
            this.crossOrigin = a
        },
        setMaterialOptions: function(a) {
            this.materialOptions = a
        },
        parse: function(a) {
            for (var b = a.split("\n"), c = {}, d = /\s+/, e = {}, f = 0; f < b.length; f++) {
                var g = b[f];
                if (g = g.trim(),
                0 !== g.length && "#" !== g.charAt(0)) {
                    var h = g.indexOf(" ")
                      , i = h >= 0 ? g.substring(0, h) : g;
                    i = i.toLowerCase();
                    var j = h >= 0 ? g.substring(h + 1) : "";
                    if (j = j.trim(),
                    "newmtl" === i)
                        c = {
                            name: j
                        },
                        e[j] = c;
                    else if (c)
                        if ("ka" === i || "kd" === i || "ks" === i) {
                            var k = j.split(d, 3);
                            c[i] = [parseFloat(k[0]), parseFloat(k[1]), parseFloat(k[2])]
                        } else
                            c[i] = j
                }
            }
            var l = new THREE.MTLLoader.MaterialCreator(this.texturePath || this.path,this.materialOptions);
            return l.setCrossOrigin(this.crossOrigin),
            l.setManager(this.manager),
            l.setMaterials(e),
            l
        }
    },
    THREE.MTLLoader.MaterialCreator = function(a, b) {
        this.baseUrl = a || "",
        this.options = b,
        this.materialsInfo = {},
        this.materials = {},
        this.materialsArray = [],
        this.nameLookup = {},
        this.side = this.options && this.options.side ? this.options.side : THREE.FrontSide,
        this.wrap = this.options && this.options.wrap ? this.options.wrap : THREE.RepeatWrapping
    }
    ,
    THREE.MTLLoader.MaterialCreator.prototype = {
        constructor: THREE.MTLLoader.MaterialCreator,
        crossOrigin: "Anonymous",
        setCrossOrigin: function(a) {
            this.crossOrigin = a
        },
        setManager: function(a) {
            this.manager = a
        },
        setMaterials: function(a) {
            this.materialsInfo = this.convert(a),
            this.materials = {},
            this.materialsArray = [],
            this.nameLookup = {}
        },
        convert: function(a) {
            if (!this.options)
                return a;
            var b = {};
            for (var c in a) {
                var d = a[c]
                  , e = {};
                b[c] = e;
                for (var f in d) {
                    var g = !0
                      , h = d[f]
                      , i = f.toLowerCase();
                    switch (i) {
                    case "kd":
                    case "ka":
                    case "ks":
                        this.options && this.options.normalizeRGB && (h = [h[0] / 255, h[1] / 255, h[2] / 255]),
                        this.options && this.options.ignoreZeroRGBs && 0 === h[0] && 0 === h[1] && 0 === h[2] && (g = !1)
                    }
                    g && (e[i] = h)
                }
            }
            return b
        },
        preload: function() {
            for (var a in this.materialsInfo)
                this.create(a)
        },
        getIndex: function(a) {
            return this.nameLookup[a]
        },
        getAsArray: function() {
            var a = 0;
            for (var b in this.materialsInfo)
                this.materialsArray[a] = this.create(b),
                this.nameLookup[b] = a,
                a++;
            return this.materialsArray
        },
        create: function(a) {
            return void 0 === this.materials[a] && this.createMaterial_(a),
            this.materials[a]
        },
        createMaterial_: function(a) {
            function b(a, b) {
                return "string" != typeof b || "" === b ? "" : /^https?:\/\//i.test(b) ? b : a + b
            }
            function c(a, c) {
                if (!f[a]) {
                    var e = d.getTextureParams(c, f)
                      , g = d.loadTexture(b(d.baseUrl, e.url));
                    g.repeat.copy(e.scale),
                    g.offset.copy(e.offset),
                    g.wrapS = d.wrap,
                    g.wrapT = d.wrap,
                    f[a] = g
                }
            }
            var d = this
              , e = this.materialsInfo[a]
              , f = {
                name: a,
                side: this.side
            };
            for (var g in e) {
                var h, i = e[g];
                if ("" !== i)
                    switch (g.toLowerCase()) {
                    case "kd":
                        f.color = (new THREE.Color).fromArray(i);
                        break;
                    case "ks":
                        f.specular = (new THREE.Color).fromArray(i);
                        break;
                    case "map_kd":
                        c("map", i);
                        break;
                    case "map_ks":
                        c("specularMap", i);
                        break;
                    case "norm":
                        c("normalMap", i);
                        break;
                    case "map_bump":
                    case "bump":
                        c("bumpMap", i);
                        break;
                    case "ns":
                        f.shininess = parseFloat(i);
                        break;
                    case "d":
                        h = parseFloat(i),
                        h < 1 && (f.opacity = h,
                        f.transparent = !0);
                        break;
                    case "tr":
                        h = parseFloat(i),
                        h > 0 && (f.opacity = 1 - h,
                        f.transparent = !0)
                    }
            }
            return this.materials[a] = new THREE.MeshPhongMaterial(f),
            this.materials[a]
        },
        getTextureParams: function(a, b) {
            var c, d = {
                scale: new THREE.Vector2(1,1),
                offset: new THREE.Vector2(0,0)
            }, e = a.split(/\s+/);
            return c = e.indexOf("-bm"),
            c >= 0 && (b.bumpScale = parseFloat(e[c + 1]),
            e.splice(c, 2)),
            c = e.indexOf("-s"),
            c >= 0 && (d.scale.set(parseFloat(e[c + 1]), parseFloat(e[c + 2])),
            e.splice(c, 4)),
            c = e.indexOf("-o"),
            c >= 0 && (d.offset.set(parseFloat(e[c + 1]), parseFloat(e[c + 2])),
            e.splice(c, 4)),
            d.url = e.join(" ").trim(),
            d
        },
        loadTexture: function(a, b, c, d, e) {
            var f, g = THREE.Loader.Handlers.get(a), h = void 0 !== this.manager ? this.manager : THREE.DefaultLoadingManager;
            return null === g && (g = new THREE.TextureLoader(h)),
            g.setCrossOrigin && g.setCrossOrigin(this.crossOrigin),
            f = g.load(a, c, d, e),
            void 0 !== b && (f.mapping = b),
            f
        }
    },
    function(a) {
        if ("object" == typeof exports && "undefined" != typeof module)
            module.exports = a();
        else if ("function" == typeof define && define.amd)
            define([], a);
        else {
            var b;
            b = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this,
            b.io = a()
        }
    }(function() {
        var a;
        return function a(b, c, d) {
            function e(g, h) {
                if (!c[g]) {
                    if (!b[g]) {
                        var i = "function" == typeof require && require;
                        if (!h && i)
                            return i(g, !0);
                        if (f)
                            return f(g, !0);
                        var j = new Error("Cannot find module '" + g + "'");
                        throw j.code = "MODULE_NOT_FOUND",
                        j
                    }
                    var k = c[g] = {
                        exports: {}
                    };
                    b[g][0].call(k.exports, function(a) {
                        var c = b[g][1][a];
                        return e(c || a)
                    }, k, k.exports, a, b, c, d)
                }
                return c[g].exports
            }
            for (var f = "function" == typeof require && require, g = 0; g < d.length; g++)
                e(d[g]);
            return e
        }({
            1: [function(a, b, c) {
                function d(a, b) {
                    "object" == typeof a && (b = a,
                    a = void 0),
                    b = b || {};
                    var c, d = e(a), f = d.source, j = d.id, k = d.path, l = i[j] && k in i[j].nsps, m = b.forceNew || b["force new connection"] || !1 === b.multiplex || l;
                    return m ? (h("ignoring socket cache for %s", f),
                    c = g(f, b)) : (i[j] || (h("new io instance for %s", f),
                    i[j] = g(f, b)),
                    c = i[j]),
                    c.socket(d.path)
                }
                var e = a("./url")
                  , f = a("socket.io-parser")
                  , g = a("./manager")
                  , h = a("debug")("socket.io-client");
                b.exports = c = d;
                var i = c.managers = {};
                c.protocol = f.protocol,
                c.connect = d,
                c.Manager = a("./manager"),
                c.Socket = a("./socket")
            }
            , {
                "./manager": 2,
                "./socket": 4,
                "./url": 5,
                debug: 14,
                "socket.io-parser": 40
            }],
            2: [function(a, b, c) {
                function d(a, b) {
                    if (!(this instanceof d))
                        return new d(a,b);
                    a && "object" == typeof a && (b = a,
                    a = void 0),
                    b = b || {},
                    b.path = b.path || "/socket.io",
                    this.nsps = {},
                    this.subs = [],
                    this.opts = b,
                    this.reconnection(!1 !== b.reconnection),
                    this.reconnectionAttempts(b.reconnectionAttempts || 1 / 0),
                    this.reconnectionDelay(b.reconnectionDelay || 1e3),
                    this.reconnectionDelayMax(b.reconnectionDelayMax || 5e3),
                    this.randomizationFactor(b.randomizationFactor || .5),
                    this.backoff = new m({
                        min: this.reconnectionDelay(),
                        max: this.reconnectionDelayMax(),
                        jitter: this.randomizationFactor()
                    }),
                    this.timeout(null == b.timeout ? 2e4 : b.timeout),
                    this.readyState = "closed",
                    this.uri = a,
                    this.connecting = [],
                    this.lastPing = null,
                    this.encoding = !1,
                    this.packetBuffer = [],
                    this.encoder = new h.Encoder,
                    this.decoder = new h.Decoder,
                    this.autoConnect = !1 !== b.autoConnect,
                    this.autoConnect && this.open()
                }
                var e = a("engine.io-client")
                  , f = a("./socket")
                  , g = a("component-emitter")
                  , h = a("socket.io-parser")
                  , i = a("./on")
                  , j = a("component-bind")
                  , k = a("debug")("socket.io-client:manager")
                  , l = a("indexof")
                  , m = a("backo2")
                  , n = Object.prototype.hasOwnProperty;
                b.exports = d,
                d.prototype.emitAll = function() {
                    this.emit.apply(this, arguments);
                    for (var a in this.nsps)
                        n.call(this.nsps, a) && this.nsps[a].emit.apply(this.nsps[a], arguments)
                }
                ,
                d.prototype.updateSocketIds = function() {
                    for (var a in this.nsps)
                        n.call(this.nsps, a) && (this.nsps[a].id = this.engine.id)
                }
                ,
                g(d.prototype),
                d.prototype.reconnection = function(a) {
                    return arguments.length ? (this._reconnection = !!a,
                    this) : this._reconnection
                }
                ,
                d.prototype.reconnectionAttempts = function(a) {
                    return arguments.length ? (this._reconnectionAttempts = a,
                    this) : this._reconnectionAttempts
                }
                ,
                d.prototype.reconnectionDelay = function(a) {
                    return arguments.length ? (this._reconnectionDelay = a,
                    this.backoff && this.backoff.setMin(a),
                    this) : this._reconnectionDelay
                }
                ,
                d.prototype.randomizationFactor = function(a) {
                    return arguments.length ? (this._randomizationFactor = a,
                    this.backoff && this.backoff.setJitter(a),
                    this) : this._randomizationFactor
                }
                ,
                d.prototype.reconnectionDelayMax = function(a) {
                    return arguments.length ? (this._reconnectionDelayMax = a,
                    this.backoff && this.backoff.setMax(a),
                    this) : this._reconnectionDelayMax
                }
                ,
                d.prototype.timeout = function(a) {
                    return arguments.length ? (this._timeout = a,
                    this) : this._timeout
                }
                ,
                d.prototype.maybeReconnectOnOpen = function() {
                    !this.reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect()
                }
                ,
                d.prototype.open = d.prototype.connect = function(a) {
                    if (k("readyState %s", this.readyState),
                    ~this.readyState.indexOf("open"))
                        return this;
                    k("opening %s", this.uri),
                    this.engine = e(this.uri, this.opts);
                    var b = this.engine
                      , c = this;
                    this.readyState = "opening",
                    this.skipReconnect = !1;
                    var d = i(b, "open", function() {
                        c.onopen(),
                        a && a()
                    })
                      , f = i(b, "error", function(b) {
                        if (k("connect_error"),
                        c.cleanup(),
                        c.readyState = "closed",
                        c.emitAll("connect_error", b),
                        a) {
                            var d = new Error("Connection error");
                            d.data = b,
                            a(d)
                        } else
                            c.maybeReconnectOnOpen()
                    });
                    if (!1 !== this._timeout) {
                        var g = this._timeout;
                        k("connect attempt will timeout after %d", g);
                        var h = setTimeout(function() {
                            k("connect attempt timed out after %d", g),
                            d.destroy(),
                            b.close(),
                            b.emit("error", "timeout"),
                            c.emitAll("connect_timeout", g)
                        }, g);
                        this.subs.push({
                            destroy: function() {
                                clearTimeout(h)
                            }
                        })
                    }
                    return this.subs.push(d),
                    this.subs.push(f),
                    this
                }
                ,
                d.prototype.onopen = function() {
                    k("open"),
                    this.cleanup(),
                    this.readyState = "open",
                    this.emit("open");
                    var a = this.engine;
                    this.subs.push(i(a, "data", j(this, "ondata"))),
                    this.subs.push(i(a, "ping", j(this, "onping"))),
                    this.subs.push(i(a, "pong", j(this, "onpong"))),
                    this.subs.push(i(a, "error", j(this, "onerror"))),
                    this.subs.push(i(a, "close", j(this, "onclose"))),
                    this.subs.push(i(this.decoder, "decoded", j(this, "ondecoded")))
                }
                ,
                d.prototype.onping = function() {
                    this.lastPing = new Date,
                    this.emitAll("ping")
                }
                ,
                d.prototype.onpong = function() {
                    this.emitAll("pong", new Date - this.lastPing)
                }
                ,
                d.prototype.ondata = function(a) {
                    this.decoder.add(a)
                }
                ,
                d.prototype.ondecoded = function(a) {
                    this.emit("packet", a)
                }
                ,
                d.prototype.onerror = function(a) {
                    k("error", a),
                    this.emitAll("error", a)
                }
                ,
                d.prototype.socket = function(a) {
                    function b() {
                        ~l(d.connecting, c) || d.connecting.push(c)
                    }
                    var c = this.nsps[a];
                    if (!c) {
                        c = new f(this,a),
                        this.nsps[a] = c;
                        var d = this;
                        c.on("connecting", b),
                        c.on("connect", function() {
                            c.id = d.engine.id
                        }),
                        this.autoConnect && b()
                    }
                    return c
                }
                ,
                d.prototype.destroy = function(a) {
                    var b = l(this.connecting, a);
                    ~b && this.connecting.splice(b, 1),
                    this.connecting.length || this.close()
                }
                ,
                d.prototype.packet = function(a) {
                    k("writing packet %j", a);
                    var b = this;
                    b.encoding ? b.packetBuffer.push(a) : (b.encoding = !0,
                    this.encoder.encode(a, function(c) {
                        for (var d = 0; d < c.length; d++)
                            b.engine.write(c[d], a.options);
                        b.encoding = !1,
                        b.processPacketQueue()
                    }))
                }
                ,
                d.prototype.processPacketQueue = function() {
                    if (this.packetBuffer.length > 0 && !this.encoding) {
                        var a = this.packetBuffer.shift();
                        this.packet(a)
                    }
                }
                ,
                d.prototype.cleanup = function() {
                    k("cleanup");
                    for (var a; a = this.subs.shift(); )
                        a.destroy();
                    this.packetBuffer = [],
                    this.encoding = !1,
                    this.lastPing = null,
                    this.decoder.destroy()
                }
                ,
                d.prototype.close = d.prototype.disconnect = function() {
                    k("disconnect"),
                    this.skipReconnect = !0,
                    this.reconnecting = !1,
                    "opening" == this.readyState && this.cleanup(),
                    this.backoff.reset(),
                    this.readyState = "closed",
                    this.engine && this.engine.close()
                }
                ,
                d.prototype.onclose = function(a) {
                    k("onclose"),
                    this.cleanup(),
                    this.backoff.reset(),
                    this.readyState = "closed",
                    this.emit("close", a),
                    this._reconnection && !this.skipReconnect && this.reconnect()
                }
                ,
                d.prototype.reconnect = function() {
                    if (this.reconnecting || this.skipReconnect)
                        return this;
                    var a = this;
                    if (this.backoff.attempts >= this._reconnectionAttempts)
                        k("reconnect failed"),
                        this.backoff.reset(),
                        this.emitAll("reconnect_failed"),
                        this.reconnecting = !1;
                    else {
                        var b = this.backoff.duration();
                        k("will wait %dms before reconnect attempt", b),
                        this.reconnecting = !0;
                        var c = setTimeout(function() {
                            a.skipReconnect || (k("attempting reconnect"),
                            a.emitAll("reconnect_attempt", a.backoff.attempts),
                            a.emitAll("reconnecting", a.backoff.attempts),
                            a.skipReconnect || a.open(function(b) {
                                b ? (k("reconnect attempt error"),
                                a.reconnecting = !1,
                                a.reconnect(),
                                a.emitAll("reconnect_error", b.data)) : (k("reconnect success"),
                                a.onreconnect())
                            }))
                        }, b);
                        this.subs.push({
                            destroy: function() {
                                clearTimeout(c)
                            }
                        })
                    }
                }
                ,
                d.prototype.onreconnect = function() {
                    var a = this.backoff.attempts;
                    this.reconnecting = !1,
                    this.backoff.reset(),
                    this.updateSocketIds(),
                    this.emitAll("reconnect", a)
                }
            }
            , {
                "./on": 3,
                "./socket": 4,
                backo2: 8,
                "component-bind": 11,
                "component-emitter": 12,
                debug: 14,
                "engine.io-client": 16,
                indexof: 32,
                "socket.io-parser": 40
            }],
            3: [function(a, b, c) {
                function d(a, b, c) {
                    return a.on(b, c),
                    {
                        destroy: function() {
                            a.removeListener(b, c)
                        }
                    }
                }
                b.exports = d
            }
            , {}],
            4: [function(a, b, c) {
                function d(a, b) {
                    this.io = a,
                    this.nsp = b,
                    this.json = this,
                    this.ids = 0,
                    this.acks = {},
                    this.receiveBuffer = [],
                    this.sendBuffer = [],
                    this.connected = !1,
                    this.disconnected = !0,
                    this.io.autoConnect && this.open()
                }
                var e = a("socket.io-parser")
                  , f = a("component-emitter")
                  , g = a("to-array")
                  , h = a("./on")
                  , i = a("component-bind")
                  , j = a("debug")("socket.io-client:socket")
                  , k = a("has-binary");
                b.exports = d;
                var l = {
                    connect: 1,
                    connect_error: 1,
                    connect_timeout: 1,
                    connecting: 1,
                    disconnect: 1,
                    error: 1,
                    reconnect: 1,
                    reconnect_attempt: 1,
                    reconnect_failed: 1,
                    reconnect_error: 1,
                    reconnecting: 1,
                    ping: 1,
                    pong: 1
                }
                  , m = f.prototype.emit;
                f(d.prototype),
                d.prototype.subEvents = function() {
                    if (!this.subs) {
                        var a = this.io;
                        this.subs = [h(a, "open", i(this, "onopen")), h(a, "packet", i(this, "onpacket")), h(a, "close", i(this, "onclose"))]
                    }
                }
                ,
                d.prototype.open = d.prototype.connect = function() {
                    return this.connected ? this : (this.subEvents(),
                    this.io.open(),
                    "open" == this.io.readyState && this.onopen(),
                    this.emit("connecting"),
                    this)
                }
                ,
                d.prototype.send = function() {
                    var a = g(arguments);
                    return a.unshift("message"),
                    this.emit.apply(this, a),
                    this
                }
                ,
                d.prototype.emit = function(a) {
                    if (l.hasOwnProperty(a))
                        return m.apply(this, arguments),
                        this;
                    var b = g(arguments)
                      , c = e.EVENT;
                    k(b) && (c = e.BINARY_EVENT);
                    var d = {
                        type: c,
                        data: b
                    };
                    return d.options = {},
                    d.options.compress = !this.flags || !1 !== this.flags.compress,
                    "function" == typeof b[b.length - 1] && (j("emitting packet with ack id %d", this.ids),
                    this.acks[this.ids] = b.pop(),
                    d.id = this.ids++),
                    this.connected ? this.packet(d) : this.sendBuffer.push(d),
                    delete this.flags,
                    this
                }
                ,
                d.prototype.packet = function(a) {
                    a.nsp = this.nsp,
                    this.io.packet(a)
                }
                ,
                d.prototype.onopen = function() {
                    j("transport is open - connecting"),
                    "/" != this.nsp && this.packet({
                        type: e.CONNECT
                    })
                }
                ,
                d.prototype.onclose = function(a) {
                    j("close (%s)", a),
                    this.connected = !1,
                    this.disconnected = !0,
                    delete this.id,
                    this.emit("disconnect", a)
                }
                ,
                d.prototype.onpacket = function(a) {
                    if (a.nsp == this.nsp)
                        switch (a.type) {
                        case e.CONNECT:
                            this.onconnect();
                            break;
                        case e.EVENT:
                        case e.BINARY_EVENT:
                            this.onevent(a);
                            break;
                        case e.ACK:
                        case e.BINARY_ACK:
                            this.onack(a);
                            break;
                        case e.DISCONNECT:
                            this.ondisconnect();
                            break;
                        case e.ERROR:
                            this.emit("error", a.data)
                        }
                }
                ,
                d.prototype.onevent = function(a) {
                    var b = a.data || [];
                    j("emitting event %j", b),
                    null != a.id && (j("attaching ack callback to event"),
                    b.push(this.ack(a.id))),
                    this.connected ? m.apply(this, b) : this.receiveBuffer.push(b)
                }
                ,
                d.prototype.ack = function(a) {
                    var b = this
                      , c = !1;
                    return function() {
                        if (!c) {
                            c = !0;
                            var d = g(arguments);
                            j("sending ack %j", d);
                            var f = k(d) ? e.BINARY_ACK : e.ACK;
                            b.packet({
                                type: f,
                                id: a,
                                data: d
                            })
                        }
                    }
                }
                ,
                d.prototype.onack = function(a) {
                    var b = this.acks[a.id];
                    "function" == typeof b ? (j("calling ack %s with %j", a.id, a.data),
                    b.apply(this, a.data),
                    delete this.acks[a.id]) : j("bad ack %s", a.id)
                }
                ,
                d.prototype.onconnect = function() {
                    this.connected = !0,
                    this.disconnected = !1,
                    this.emit("connect"),
                    this.emitBuffered()
                }
                ,
                d.prototype.emitBuffered = function() {
                    var a;
                    for (a = 0; a < this.receiveBuffer.length; a++)
                        m.apply(this, this.receiveBuffer[a]);
                    for (this.receiveBuffer = [],
                    a = 0; a < this.sendBuffer.length; a++)
                        this.packet(this.sendBuffer[a]);
                    this.sendBuffer = []
                }
                ,
                d.prototype.ondisconnect = function() {
                    j("server disconnect (%s)", this.nsp),
                    this.destroy(),
                    this.onclose("io server disconnect")
                }
                ,
                d.prototype.destroy = function() {
                    if (this.subs) {
                        for (var a = 0; a < this.subs.length; a++)
                            this.subs[a].destroy();
                        this.subs = null
                    }
                    this.io.destroy(this)
                }
                ,
                d.prototype.close = d.prototype.disconnect = function() {
                    return this.connected && (j("performing disconnect (%s)", this.nsp),
                    this.packet({
                        type: e.DISCONNECT
                    })),
                    this.destroy(),
                    this.connected && this.onclose("io client disconnect"),
                    this
                }
                ,
                d.prototype.compress = function(a) {
                    return this.flags = this.flags || {},
                    this.flags.compress = a,
                    this
                }
            }
            , {
                "./on": 3,
                "component-bind": 11,
                "component-emitter": 12,
                debug: 14,
                "has-binary": 30,
                "socket.io-parser": 40,
                "to-array": 43
            }],
            5: [function(a, b, c) {
                (function(c) {
                    function d(a, b) {
                        var d = a
                          , b = b || c.location;
                        null == a && (a = b.protocol + "//" + b.host),
                        "string" == typeof a && ("/" == a.charAt(0) && (a = "/" == a.charAt(1) ? b.protocol + a : b.host + a),
                        /^(https?|wss?):\/\//.test(a) || (f("protocol-less url %s", a),
                        a = void 0 !== b ? b.protocol + "//" + a : "https://" + a),
                        f("parse %s", a),
                        d = e(a)),
                        d.port || (/^(http|ws)$/.test(d.protocol) ? d.port = "80" : /^(http|ws)s$/.test(d.protocol) && (d.port = "443")),
                        d.path = d.path || "/";
                        var g = -1 !== d.host.indexOf(":")
                          , h = g ? "[" + d.host + "]" : d.host;
                        return d.id = d.protocol + "://" + h + ":" + d.port,
                        d.href = d.protocol + "://" + h + (b && b.port == d.port ? "" : ":" + d.port),
                        d
                    }
                    var e = a("parseuri")
                      , f = a("debug")("socket.io-client:url");
                    b.exports = d
                }
                ).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {})
            }
            , {
                debug: 14,
                parseuri: 38
            }],
            6: [function(a, b, c) {
                function d(a, b, c) {
                    function d(a, e) {
                        if (d.count <= 0)
                            throw new Error("after called too many times");
                        --d.count,
                        a ? (f = !0,
                        b(a),
                        b = c) : 0 !== d.count || f || b(null, e)
                    }
                    var f = !1;
                    return c = c || e,
                    d.count = a,
                    0 === a ? b() : d
                }
                function e() {}
                b.exports = d
            }
            , {}],
            7: [function(a, b, c) {
                b.exports = function(a, b, c) {
                    var d = a.byteLength;
                    if (b = b || 0,
                    c = c || d,
                    a.slice)
                        return a.slice(b, c);
                    if (b < 0 && (b += d),
                    c < 0 && (c += d),
                    c > d && (c = d),
                    b >= d || b >= c || 0 === d)
                        return new ArrayBuffer(0);
                    for (var e = new Uint8Array(a), f = new Uint8Array(c - b), g = b, h = 0; g < c; g++,
                    h++)
                        f[h] = e[g];
                    return f.buffer
                }
            }
            , {}],
            8: [function(a, b, c) {
                function d(a) {
                    a = a || {},
                    this.ms = a.min || 100,
                    this.max = a.max || 1e4,
                    this.factor = a.factor || 2,
                    this.jitter = a.jitter > 0 && a.jitter <= 1 ? a.jitter : 0,
                    this.attempts = 0
                }
                b.exports = d,
                d.prototype.duration = function() {
                    var a = this.ms * Math.pow(this.factor, this.attempts++);
                    if (this.jitter) {
                        var b = Math.random()
                          , c = Math.floor(b * this.jitter * a);
                        a = 0 == (1 & Math.floor(10 * b)) ? a - c : a + c
                    }
                    return 0 | Math.min(a, this.max)
                }
                ,
                d.prototype.reset = function() {
                    this.attempts = 0
                }
                ,
                d.prototype.setMin = function(a) {
                    this.ms = a
                }
                ,
                d.prototype.setMax = function(a) {
                    this.max = a
                }
                ,
                d.prototype.setJitter = function(a) {
                    this.jitter = a
                }
            }
            , {}],
            9: [function(a, b, c) {
                !function() {
                    "use strict";
                    for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", b = new Uint8Array(256), d = 0; d < a.length; d++)
                        b[a.charCodeAt(d)] = d;
                    c.encode = function(b) {
                        var c, d = new Uint8Array(b), e = d.length, f = "";
                        for (c = 0; c < e; c += 3)
                            f += a[d[c] >> 2],
                            f += a[(3 & d[c]) << 4 | d[c + 1] >> 4],
                            f += a[(15 & d[c + 1]) << 2 | d[c + 2] >> 6],
                            f += a[63 & d[c + 2]];
                        return e % 3 == 2 ? f = f.substring(0, f.length - 1) + "=" : e % 3 == 1 && (f = f.substring(0, f.length - 2) + "=="),
                        f
                    }
                    ,
                    c.decode = function(a) {
                        var c, d, e, f, g, h = .75 * a.length, i = a.length, j = 0;
                        "=" === a[a.length - 1] && (h--,
                        "=" === a[a.length - 2] && h--);
                        var k = new ArrayBuffer(h)
                          , l = new Uint8Array(k);
                        for (c = 0; c < i; c += 4)
                            d = b[a.charCodeAt(c)],
                            e = b[a.charCodeAt(c + 1)],
                            f = b[a.charCodeAt(c + 2)],
                            g = b[a.charCodeAt(c + 3)],
                            l[j++] = d << 2 | e >> 4,
                            l[j++] = (15 & e) << 4 | f >> 2,
                            l[j++] = (3 & f) << 6 | 63 & g;
                        return k
                    }
                }()
            }
            , {}],
            10: [function(a, b, c) {
                (function(a) {
                    function c(a) {
                        for (var b = 0; b < a.length; b++) {
                            var c = a[b];
                            if (c.buffer instanceof ArrayBuffer) {
                                var d = c.buffer;
                                if (c.byteLength !== d.byteLength) {
                                    var e = new Uint8Array(c.byteLength);
                                    e.set(new Uint8Array(d,c.byteOffset,c.byteLength)),
                                    d = e.buffer
                                }
                                a[b] = d
                            }
                        }
                    }
                    function d(a, b) {
                        b = b || {};
                        var d = new f;
                        c(a);
                        for (var e = 0; e < a.length; e++)
                            d.append(a[e]);
                        return b.type ? d.getBlob(b.type) : d.getBlob()
                    }
                    function e(a, b) {
                        return c(a),
                        new Blob(a,b || {})
                    }
                    var f = a.BlobBuilder || a.WebKitBlobBuilder || a.MSBlobBuilder || a.MozBlobBuilder
                      , g = function() {
                        try {
                            return 2 === new Blob(["hi"]).size
                        } catch (a) {
                            return !1
                        }
                    }()
                      , h = g && function() {
                        try {
                            return 2 === new Blob([new Uint8Array([1, 2])]).size
                        } catch (a) {
                            return !1
                        }
                    }()
                      , i = f && f.prototype.append && f.prototype.getBlob;
                    b.exports = function() {
                        return g ? h ? a.Blob : e : i ? d : void 0
                    }()
                }
                ).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {})
            }
            , {}],
            11: [function(a, b, c) {
                var d = [].slice;
                b.exports = function(a, b) {
                    if ("string" == typeof b && (b = a[b]),
                    "function" != typeof b)
                        throw new Error("bind() requires a function");
                    var c = d.call(arguments, 2);
                    return function() {
                        return b.apply(a, c.concat(d.call(arguments)))
                    }
                }
            }
            , {}],
            12: [function(a, b, c) {
                function d(a) {
                    if (a)
                        return e(a)
                }
                function e(a) {
                    for (var b in d.prototype)
                        a[b] = d.prototype[b];
                    return a
                }
                b.exports = d,
                d.prototype.on = d.prototype.addEventListener = function(a, b) {
                    return this._callbacks = this._callbacks || {},
                    (this._callbacks["$" + a] = this._callbacks["$" + a] || []).push(b),
                    this
                }
                ,
                d.prototype.once = function(a, b) {
                    function c() {
                        this.off(a, c),
                        b.apply(this, arguments)
                    }
                    return c.fn = b,
                    this.on(a, c),
                    this
                }
                ,
                d.prototype.off = d.prototype.removeListener = d.prototype.removeAllListeners = d.prototype.removeEventListener = function(a, b) {
                    if (this._callbacks = this._callbacks || {},
                    0 == arguments.length)
                        return this._callbacks = {},
                        this;
                    var c = this._callbacks["$" + a];
                    if (!c)
                        return this;
                    if (1 == arguments.length)
                        return delete this._callbacks["$" + a],
                        this;
                    for (var d, e = 0; e < c.length; e++)
                        if ((d = c[e]) === b || d.fn === b) {
                            c.splice(e, 1);
                            break
                        }
                    return this
                }
                ,
                d.prototype.emit = function(a) {
                    this._callbacks = this._callbacks || {};
                    var b = [].slice.call(arguments, 1)
                      , c = this._callbacks["$" + a];
                    if (c) {
                        c = c.slice(0);
                        for (var d = 0, e = c.length; d < e; ++d)
                            c[d].apply(this, b)
                    }
                    return this
                }
                ,
                d.prototype.listeners = function(a) {
                    return this._callbacks = this._callbacks || {},
                    this._callbacks["$" + a] || []
                }
                ,
                d.prototype.hasListeners = function(a) {
                    return !!this.listeners(a).length
                }
            }
            , {}],
            13: [function(a, b, c) {
                b.exports = function(a, b) {
                    var c = function() {};
                    c.prototype = b.prototype,
                    a.prototype = new c,
                    a.prototype.constructor = a
                }
            }
            , {}],
            14: [function(a, b, c) {
                function d() {
                    return "WebkitAppearance"in document.documentElement.style || window.console && (console.firebug || console.exception && console.table) || navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31
                }
                function e() {
                    var a = arguments
                      , b = this.useColors;
                    if (a[0] = (b ? "%c" : "") + this.namespace + (b ? " %c" : " ") + a[0] + (b ? "%c " : " ") + "+" + c.humanize(this.diff),
                    !b)
                        return a;
                    var d = "color: " + this.color;
                    a = [a[0], d, "color: inherit"].concat(Array.prototype.slice.call(a, 1));
                    var e = 0
                      , f = 0;
                    return a[0].replace(/%[a-z%]/g, function(a) {
                        "%%" !== a && (e++,
                        "%c" === a && (f = e))
                    }),
                    a.splice(f, 0, d),
                    a
                }
                function f() {
                    return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
                }
                function g(a) {
                    try {
                        null == a ? c.storage.removeItem("debug") : c.storage.debug = a
                    } catch (a) {}
                }
                function h() {
                    var a;
                    try {
                        a = c.storage.debug
                    } catch (a) {}
                    return a
                }
                c = b.exports = a("./debug"),
                c.log = f,
                c.formatArgs = e,
                c.save = g,
                c.load = h,
                c.useColors = d,
                c.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function() {
                    try {
                        return window.localStorage
                    } catch (a) {}
                }(),
                c.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"],
                c.formatters.j = function(a) {
                    return JSON.stringify(a)
                }
                ,
                c.enable(h())
            }
            , {
                "./debug": 15
            }],
            15: [function(a, b, c) {
                function d() {
                    return c.colors[k++ % c.colors.length]
                }
                function e(a) {
                    function b() {}
                    function e() {
                        var a = e
                          , b = +new Date
                          , f = b - (j || b);
                        a.diff = f,
                        a.prev = j,
                        a.curr = b,
                        j = b,
                        null == a.useColors && (a.useColors = c.useColors()),
                        null == a.color && a.useColors && (a.color = d());
                        var g = Array.prototype.slice.call(arguments);
                        g[0] = c.coerce(g[0]),
                        "string" != typeof g[0] && (g = ["%o"].concat(g));
                        var h = 0;
                        g[0] = g[0].replace(/%([a-z%])/g, function(b, d) {
                            if ("%%" === b)
                                return b;
                            h++;
                            var e = c.formatters[d];
                            if ("function" == typeof e) {
                                var f = g[h];
                                b = e.call(a, f),
                                g.splice(h, 1),
                                h--
                            }
                            return b
                        }),
                        "function" == typeof c.formatArgs && (g = c.formatArgs.apply(a, g)),
                        (e.log || c.log || console.log.bind(console)).apply(a, g)
                    }
                    b.enabled = !1,
                    e.enabled = !0;
                    var f = c.enabled(a) ? e : b;
                    return f.namespace = a,
                    f
                }
                function f(a) {
                    c.save(a);
                    for (var b = (a || "").split(/[\s,]+/), d = b.length, e = 0; e < d; e++)
                        b[e] && (a = b[e].replace(/\*/g, ".*?"),
                        "-" === a[0] ? c.skips.push(new RegExp("^" + a.substr(1) + "$")) : c.names.push(new RegExp("^" + a + "$")))
                }
                function g() {
                    c.enable("")
                }
                function h(a) {
                    var b, d;
                    for (b = 0,
                    d = c.skips.length; b < d; b++)
                        if (c.skips[b].test(a))
                            return !1;
                    for (b = 0,
                    d = c.names.length; b < d; b++)
                        if (c.names[b].test(a))
                            return !0;
                    return !1
                }
                function i(a) {
                    return a instanceof Error ? a.stack || a.message : a
                }
                c = b.exports = e,
                c.coerce = i,
                c.disable = g,
                c.enable = f,
                c.enabled = h,
                c.humanize = a("ms"),
                c.names = [],
                c.skips = [],
                c.formatters = {};
                var j, k = 0
            }
            , {
                ms: 35
            }],
            16: [function(a, b, c) {
                b.exports = a("./lib/")
            }
            , {
                "./lib/": 17
            }],
            17: [function(a, b, c) {
                b.exports = a("./socket"),
                b.exports.parser = a("engine.io-parser")
            }
            , {
                "./socket": 18,
                "engine.io-parser": 27
            }],
            18: [function(a, b, c) {
                (function(c) {
                    function d(a, b) {
                        if (!(this instanceof d))
                            return new d(a,b);
                        b = b || {},
                        a && "object" == typeof a && (b = a,
                        a = null),
                        a ? (a = k(a),
                        b.hostname = a.host,
                        b.secure = "https" == a.protocol || "wss" == a.protocol,
                        b.port = a.port,
                        a.query && (b.query = a.query)) : b.host && (b.hostname = k(b.host).host),
                        this.secure = null != b.secure ? b.secure : c.location && "https:" == location.protocol,
                        b.hostname && !b.port && (b.port = this.secure ? "443" : "80"),
                        this.agent = b.agent || !1,
                        this.hostname = b.hostname || (c.location ? location.hostname : "localhost"),
                        this.port = b.port || (c.location && location.port ? location.port : this.secure ? 443 : 80),
                        this.query = b.query || {},
                        "string" == typeof this.query && (this.query = m.decode(this.query)),
                        this.upgrade = !1 !== b.upgrade,
                        this.path = (b.path || "/engine.io").replace(/\/$/, "") + "/",
                        this.forceJSONP = !!b.forceJSONP,
                        this.jsonp = !1 !== b.jsonp,
                        this.forceBase64 = !!b.forceBase64,
                        this.enablesXDR = !!b.enablesXDR,
                        this.timestampParam = b.timestampParam || "t",
                        this.timestampRequests = b.timestampRequests,
                        this.transports = b.transports || ["polling", "websocket"],
                        this.readyState = "",
                        this.writeBuffer = [],
                        this.policyPort = b.policyPort || 843,
                        this.rememberUpgrade = b.rememberUpgrade || !1,
                        this.binaryType = null,
                        this.onlyBinaryUpgrades = b.onlyBinaryUpgrades,
                        this.perMessageDeflate = !1 !== b.perMessageDeflate && (b.perMessageDeflate || {}),
                        !0 === this.perMessageDeflate && (this.perMessageDeflate = {}),
                        this.perMessageDeflate && null == this.perMessageDeflate.threshold && (this.perMessageDeflate.threshold = 1024),
                        this.pfx = b.pfx || null,
                        this.key = b.key || null,
                        this.passphrase = b.passphrase || null,
                        this.cert = b.cert || null,
                        this.ca = b.ca || null,
                        this.ciphers = b.ciphers || null,
                        this.rejectUnauthorized = void 0 === b.rejectUnauthorized || b.rejectUnauthorized;
                        var e = "object" == typeof c && c;
                        e.global === e && b.extraHeaders && Object.keys(b.extraHeaders).length > 0 && (this.extraHeaders = b.extraHeaders),
                        this.open()
                    }
                    function e(a) {
                        var b = {};
                        for (var c in a)
                            a.hasOwnProperty(c) && (b[c] = a[c]);
                        return b
                    }
                    var f = a("./transports")
                      , g = a("component-emitter")
                      , h = a("debug")("engine.io-client:socket")
                      , i = a("indexof")
                      , j = a("engine.io-parser")
                      , k = a("parseuri")
                      , l = a("parsejson")
                      , m = a("parseqs");
                    b.exports = d,
                    d.priorWebsocketSuccess = !1,
                    g(d.prototype),
                    d.protocol = j.protocol,
                    d.Socket = d,
                    d.Transport = a("./transport"),
                    d.transports = a("./transports"),
                    d.parser = a("engine.io-parser"),
                    d.prototype.createTransport = function(a) {
                        h('creating transport "%s"', a);
                        var b = e(this.query);
                        return b.EIO = j.protocol,
                        b.transport = a,
                        this.id && (b.sid = this.id),
                        new f[a]({
                            agent: this.agent,
                            hostname: this.hostname,
                            port: this.port,
                            secure: this.secure,
                            path: this.path,
                            query: b,
                            forceJSONP: this.forceJSONP,
                            jsonp: this.jsonp,
                            forceBase64: this.forceBase64,
                            enablesXDR: this.enablesXDR,
                            timestampRequests: this.timestampRequests,
                            timestampParam: this.timestampParam,
                            policyPort: this.policyPort,
                            socket: this,
                            pfx: this.pfx,
                            key: this.key,
                            passphrase: this.passphrase,
                            cert: this.cert,
                            ca: this.ca,
                            ciphers: this.ciphers,
                            rejectUnauthorized: this.rejectUnauthorized,
                            perMessageDeflate: this.perMessageDeflate,
                            extraHeaders: this.extraHeaders
                        })
                    }
                    ,
                    d.prototype.open = function() {
                        var a;
                        if (this.rememberUpgrade && d.priorWebsocketSuccess && -1 != this.transports.indexOf("websocket"))
                            a = "websocket";
                        else {
                            if (0 === this.transports.length) {
                                var b = this;
                                return void setTimeout(function() {
                                    b.emit("error", "No transports available")
                                }, 0)
                            }
                            a = this.transports[0]
                        }
                        this.readyState = "opening";
                        try {
                            a = this.createTransport(a)
                        } catch (a) {
                            return this.transports.shift(),
                            void this.open()
                        }
                        a.open(),
                        this.setTransport(a)
                    }
                    ,
                    d.prototype.setTransport = function(a) {
                        h("setting transport %s", a.name);
                        var b = this;
                        this.transport && (h("clearing existing transport %s", this.transport.name),
                        this.transport.removeAllListeners()),
                        this.transport = a,
                        a.on("drain", function() {
                            b.onDrain()
                        }).on("packet", function(a) {
                            b.onPacket(a)
                        }).on("error", function(a) {
                            b.onError(a)
                        }).on("close", function() {
                            b.onClose("transport close")
                        })
                    }
                    ,
                    d.prototype.probe = function(a) {
                        function b() {
                            if (m.onlyBinaryUpgrades) {
                                var b = !this.supportsBinary && m.transport.supportsBinary;
                                l = l || b
                            }
                            l || (h('probe transport "%s" opened', a),
                            k.send([{
                                type: "ping",
                                data: "probe"
                            }]),
                            k.once("packet", function(b) {
                                if (!l)
                                    if ("pong" == b.type && "probe" == b.data) {
                                        if (h('probe transport "%s" pong', a),
                                        m.upgrading = !0,
                                        m.emit("upgrading", k),
                                        !k)
                                            return;
                                        d.priorWebsocketSuccess = "websocket" == k.name,
                                        h('pausing current transport "%s"', m.transport.name),
                                        m.transport.pause(function() {
                                            l || "closed" != m.readyState && (h("changing transport and sending upgrade packet"),
                                            j(),
                                            m.setTransport(k),
                                            k.send([{
                                                type: "upgrade"
                                            }]),
                                            m.emit("upgrade", k),
                                            k = null,
                                            m.upgrading = !1,
                                            m.flush())
                                        })
                                    } else {
                                        h('probe transport "%s" failed', a);
                                        var c = new Error("probe error");
                                        c.transport = k.name,
                                        m.emit("upgradeError", c)
                                    }
                            }))
                        }
                        function c() {
                            l || (l = !0,
                            j(),
                            k.close(),
                            k = null)
                        }
                        function e(b) {
                            var d = new Error("probe error: " + b);
                            d.transport = k.name,
                            c(),
                            h('probe transport "%s" failed because of error: %s', a, b),
                            m.emit("upgradeError", d)
                        }
                        function f() {
                            e("transport closed")
                        }
                        function g() {
                            e("socket closed")
                        }
                        function i(a) {
                            k && a.name != k.name && (h('"%s" works - aborting "%s"', a.name, k.name),
                            c())
                        }
                        function j() {
                            k.removeListener("open", b),
                            k.removeListener("error", e),
                            k.removeListener("close", f),
                            m.removeListener("close", g),
                            m.removeListener("upgrading", i)
                        }
                        h('probing transport "%s"', a);
                        var k = this.createTransport(a, {
                            probe: 1
                        })
                          , l = !1
                          , m = this;
                        d.priorWebsocketSuccess = !1,
                        k.once("open", b),
                        k.once("error", e),
                        k.once("close", f),
                        this.once("close", g),
                        this.once("upgrading", i),
                        k.open()
                    }
                    ,
                    d.prototype.onOpen = function() {
                        if (h("socket open"),
                        this.readyState = "open",
                        d.priorWebsocketSuccess = "websocket" == this.transport.name,
                        this.emit("open"),
                        this.flush(),
                        "open" == this.readyState && this.upgrade && this.transport.pause) {
                            h("starting upgrade probes");
                            for (var a = 0, b = this.upgrades.length; a < b; a++)
                                this.probe(this.upgrades[a])
                        }
                    }
                    ,
                    d.prototype.onPacket = function(a) {
                        if ("opening" == this.readyState || "open" == this.readyState)
                            switch (h('socket receive: type "%s", data "%s"', a.type, a.data),
                            this.emit("packet", a),
                            this.emit("heartbeat"),
                            a.type) {
                            case "open":
                                this.onHandshake(l(a.data));
                                break;
                            case "pong":
                                this.setPing(),
                                this.emit("pong");
                                break;
                            case "error":
                                var b = new Error("server error");
                                b.code = a.data,
                                this.onError(b);
                                break;
                            case "message":
                                this.emit("data", a.data),
                                this.emit("message", a.data)
                            }
                        else
                            h('packet received with socket readyState "%s"', this.readyState)
                    }
                    ,
                    d.prototype.onHandshake = function(a) {
                        this.emit("handshake", a),
                        this.id = a.sid,
                        this.transport.query.sid = a.sid,
                        this.upgrades = this.filterUpgrades(a.upgrades),
                        this.pingInterval = a.pingInterval,
                        this.pingTimeout = a.pingTimeout,
                        this.onOpen(),
                        "closed" != this.readyState && (this.setPing(),
                        this.removeListener("heartbeat", this.onHeartbeat),
                        this.on("heartbeat", this.onHeartbeat))
                    }
                    ,
                    d.prototype.onHeartbeat = function(a) {
                        clearTimeout(this.pingTimeoutTimer);
                        var b = this;
                        b.pingTimeoutTimer = setTimeout(function() {
                            "closed" != b.readyState && b.onClose("ping timeout")
                        }, a || b.pingInterval + b.pingTimeout)
                    }
                    ,
                    d.prototype.setPing = function() {
                        var a = this;
                        clearTimeout(a.pingIntervalTimer),
                        a.pingIntervalTimer = setTimeout(function() {
                            h("writing ping packet - expecting pong within %sms", a.pingTimeout),
                            a.ping(),
                            a.onHeartbeat(a.pingTimeout)
                        }, a.pingInterval)
                    }
                    ,
                    d.prototype.ping = function() {
                        var a = this;
                        this.sendPacket("ping", function() {
                            a.emit("ping")
                        })
                    }
                    ,
                    d.prototype.onDrain = function() {
                        this.writeBuffer.splice(0, this.prevBufferLen),
                        this.prevBufferLen = 0,
                        0 === this.writeBuffer.length ? this.emit("drain") : this.flush()
                    }
                    ,
                    d.prototype.flush = function() {
                        "closed" != this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (h("flushing %d packets in socket", this.writeBuffer.length),
                        this.transport.send(this.writeBuffer),
                        this.prevBufferLen = this.writeBuffer.length,
                        this.emit("flush"))
                    }
                    ,
                    d.prototype.write = d.prototype.send = function(a, b, c) {
                        return this.sendPacket("message", a, b, c),
                        this
                    }
                    ,
                    d.prototype.sendPacket = function(a, b, c, d) {
                        if ("function" == typeof b && (d = b,
                        b = void 0),
                        "function" == typeof c && (d = c,
                        c = null),
                        "closing" != this.readyState && "closed" != this.readyState) {
                            c = c || {},
                            c.compress = !1 !== c.compress;
                            var e = {
                                type: a,
                                data: b,
                                options: c
                            };
                            this.emit("packetCreate", e),
                            this.writeBuffer.push(e),
                            d && this.once("flush", d),
                            this.flush()
                        }
                    }
                    ,
                    d.prototype.close = function() {
                        function a() {
                            d.onClose("forced close"),
                            h("socket closing - telling transport to close"),
                            d.transport.close()
                        }
                        function b() {
                            d.removeListener("upgrade", b),
                            d.removeListener("upgradeError", b),
                            a()
                        }
                        function c() {
                            d.once("upgrade", b),
                            d.once("upgradeError", b)
                        }
                        if ("opening" == this.readyState || "open" == this.readyState) {
                            this.readyState = "closing";
                            var d = this;
                            this.writeBuffer.length ? this.once("drain", function() {
                                this.upgrading ? c() : a()
                            }) : this.upgrading ? c() : a()
                        }
                        return this
                    }
                    ,
                    d.prototype.onError = function(a) {
                        h("socket error %j", a),
                        d.priorWebsocketSuccess = !1,
                        this.emit("error", a),
                        this.onClose("transport error", a)
                    }
                    ,
                    d.prototype.onClose = function(a, b) {
                        if ("opening" == this.readyState || "open" == this.readyState || "closing" == this.readyState) {
                            h('socket close with reason: "%s"', a);
                            var c = this;
                            clearTimeout(this.pingIntervalTimer),
                            clearTimeout(this.pingTimeoutTimer),
                            this.transport.removeAllListeners("close"),
                            this.transport.close(),
                            this.transport.removeAllListeners(),
                            this.readyState = "closed",
                            this.id = null,
                            this.emit("close", a, b),
                            c.writeBuffer = [],
                            c.prevBufferLen = 0
                        }
                    }
                    ,
                    d.prototype.filterUpgrades = function(a) {
                        for (var b = [], c = 0, d = a.length; c < d; c++)
                            ~i(this.transports, a[c]) && b.push(a[c]);
                        return b
                    }
                }
                ).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {})
            }
            , {
                "./transport": 19,
                "./transports": 20,
                "component-emitter": 26,
                debug: 14,
                "engine.io-parser": 27,
                indexof: 32,
                parsejson: 36,
                parseqs: 37,
                parseuri: 38
            }],
            19: [function(a, b, c) {
                function d(a) {
                    this.path = a.path,
                    this.hostname = a.hostname,
                    this.port = a.port,
                    this.secure = a.secure,
                    this.query = a.query,
                    this.timestampParam = a.timestampParam,
                    this.timestampRequests = a.timestampRequests,
                    this.readyState = "",
                    this.agent = a.agent || !1,
                    this.socket = a.socket,
                    this.enablesXDR = a.enablesXDR,
                    this.pfx = a.pfx,
                    this.key = a.key,
                    this.passphrase = a.passphrase,
                    this.cert = a.cert,
                    this.ca = a.ca,
                    this.ciphers = a.ciphers,
                    this.rejectUnauthorized = a.rejectUnauthorized,
                    this.extraHeaders = a.extraHeaders
                }
                var e = a("engine.io-parser")
                  , f = a("component-emitter");
                b.exports = d,
                f(d.prototype),
                d.prototype.onError = function(a, b) {
                    var c = new Error(a);
                    return c.type = "TransportError",
                    c.description = b,
                    this.emit("error", c),
                    this
                }
                ,
                d.prototype.open = function() {
                    return "closed" != this.readyState && "" != this.readyState || (this.readyState = "opening",
                    this.doOpen()),
                    this
                }
                ,
                d.prototype.close = function() {
                    return "opening" != this.readyState && "open" != this.readyState || (this.doClose(),
                    this.onClose()),
                    this
                }
                ,
                d.prototype.send = function(a) {
                    if ("open" != this.readyState)
                        throw new Error("Transport not open");
                    this.write(a)
                }
                ,
                d.prototype.onOpen = function() {
                    this.readyState = "open",
                    this.writable = !0,
                    this.emit("open")
                }
                ,
                d.prototype.onData = function(a) {
                    var b = e.decodePacket(a, this.socket.binaryType);
                    this.onPacket(b)
                }
                ,
                d.prototype.onPacket = function(a) {
                    this.emit("packet", a)
                }
                ,
                d.prototype.onClose = function() {
                    this.readyState = "closed",
                    this.emit("close")
                }
            }
            , {
                "component-emitter": 26,
                "engine.io-parser": 27
            }],
            20: [function(a, b, c) {
                (function(b) {
                    function d(a) {
                        var c = !1
                          , d = !1
                          , h = !1 !== a.jsonp;
                        if (b.location) {
                            var i = "https:" == location.protocol
                              , j = location.port;
                            j || (j = i ? 443 : 80),
                            c = a.hostname != location.hostname || j != a.port,
                            d = a.secure != i
                        }
                        if (a.xdomain = c,
                        a.xscheme = d,
                        "open"in new e(a) && !a.forceJSONP)
                            return new f(a);
                        if (!h)
                            throw new Error("JSONP disabled");
                        return new g(a)
                    }
                    var e = a("xmlhttprequest-ssl")
                      , f = a("./polling-xhr")
                      , g = a("./polling-jsonp")
                      , h = a("./websocket");
                    c.polling = d,
                    c.websocket = h
                }
                ).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {})
            }
            , {
                "./polling-jsonp": 21,
                "./polling-xhr": 22,
                "./websocket": 24,
                "xmlhttprequest-ssl": 25
            }],
            21: [function(a, b, c) {
                (function(c) {
                    function d() {}
                    function e(a) {
                        f.call(this, a),
                        this.query = this.query || {},
                        h || (c.___eio || (c.___eio = []),
                        h = c.___eio),
                        this.index = h.length;
                        var b = this;
                        h.push(function(a) {
                            b.onData(a)
                        }),
                        this.query.j = this.index,
                        c.document && c.addEventListener && c.addEventListener("beforeunload", function() {
                            b.script && (b.script.onerror = d)
                        }, !1)
                    }
                    var f = a("./polling")
                      , g = a("component-inherit");
                    b.exports = e;
                    var h, i = /\n/g, j = /\\n/g;
                    g(e, f),
                    e.prototype.supportsBinary = !1,
                    e.prototype.doClose = function() {
                        this.script && (this.script.parentNode.removeChild(this.script),
                        this.script = null),
                        this.form && (this.form.parentNode.removeChild(this.form),
                        this.form = null,
                        this.iframe = null),
                        f.prototype.doClose.call(this)
                    }
                    ,
                    e.prototype.doPoll = function() {
                        var a = this
                          , b = document.createElement("script");
                        this.script && (this.script.parentNode.removeChild(this.script),
                        this.script = null),
                        b.async = !0,
                        b.src = this.uri(),
                        b.onerror = function(b) {
                            a.onError("jsonp poll error", b)
                        }
                        ;
                        var c = document.getElementsByTagName("script")[0];
                        c ? c.parentNode.insertBefore(b, c) : (document.head || document.body).appendChild(b),
                        this.script = b,
                        "undefined" != typeof navigator && /gecko/i.test(navigator.userAgent) && setTimeout(function() {
                            var a = document.createElement("iframe");
                            document.body.appendChild(a),
                            document.body.removeChild(a)
                        }, 100)
                    }
                    ,
                    e.prototype.doWrite = function(a, b) {
                        function c() {
                            d(),
                            b()
                        }
                        function d() {
                            if (e.iframe)
                                try {
                                    e.form.removeChild(e.iframe)
                                } catch (a) {
                                    e.onError("jsonp polling iframe removal error", a)
                                }
                            try {
                                var a = '<iframe src="javascript:0" name="' + e.iframeId + '">';
                                f = document.createElement(a)
                            } catch (a) {
                                f = document.createElement("iframe"),
                                f.name = e.iframeId,
                                f.src = "javascript:0"
                            }
                            f.id = e.iframeId,
                            e.form.appendChild(f),
                            e.iframe = f
                        }
                        var e = this;
                        if (!this.form) {
                            var f, g = document.createElement("form"), h = document.createElement("textarea"), k = this.iframeId = "eio_iframe_" + this.index;
                            g.className = "socketio",
                            g.style.position = "absolute",
                            g.style.top = "-1000px",
                            g.style.left = "-1000px",
                            g.target = k,
                            g.method = "POST",
                            g.setAttribute("accept-charset", "utf-8"),
                            h.name = "d",
                            g.appendChild(h),
                            document.body.appendChild(g),
                            this.form = g,
                            this.area = h
                        }
                        this.form.action = this.uri(),
                        d(),
                        a = a.replace(j, "\\\n"),
                        this.area.value = a.replace(i, "\\n");
                        try {
                            this.form.submit()
                        } catch (a) {}
                        this.iframe.attachEvent ? this.iframe.onreadystatechange = function() {
                            "complete" == e.iframe.readyState && c()
                        }
                        : this.iframe.onload = c
                    }
                }
                ).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {})
            }
            , {
                "./polling": 23,
                "component-inherit": 13
            }],
            22: [function(a, b, c) {
                (function(c) {
                    function d() {}
                    function e(a) {
                        if (i.call(this, a),
                        c.location) {
                            var b = "https:" == location.protocol
                              , d = location.port;
                            d || (d = b ? 443 : 80),
                            this.xd = a.hostname != c.location.hostname || d != a.port,
                            this.xs = a.secure != b
                        } else
                            this.extraHeaders = a.extraHeaders
                    }
                    function f(a) {
                        this.method = a.method || "GET",
                        this.uri = a.uri,
                        this.xd = !!a.xd,
                        this.xs = !!a.xs,
                        this.async = !1 !== a.async,
                        this.data = void 0 != a.data ? a.data : null,
                        this.agent = a.agent,
                        this.isBinary = a.isBinary,
                        this.supportsBinary = a.supportsBinary,
                        this.enablesXDR = a.enablesXDR,
                        this.pfx = a.pfx,
                        this.key = a.key,
                        this.passphrase = a.passphrase,
                        this.cert = a.cert,
                        this.ca = a.ca,
                        this.ciphers = a.ciphers,
                        this.rejectUnauthorized = a.rejectUnauthorized,
                        this.extraHeaders = a.extraHeaders,
                        this.create()
                    }
                    function g() {
                        for (var a in f.requests)
                            f.requests.hasOwnProperty(a) && f.requests[a].abort()
                    }
                    var h = a("xmlhttprequest-ssl")
                      , i = a("./polling")
                      , j = a("component-emitter")
                      , k = a("component-inherit")
                      , l = a("debug")("engine.io-client:polling-xhr");
                    b.exports = e,
                    b.exports.Request = f,
                    k(e, i),
                    e.prototype.supportsBinary = !0,
                    e.prototype.request = function(a) {
                        return a = a || {},
                        a.uri = this.uri(),
                        a.xd = this.xd,
                        a.xs = this.xs,
                        a.agent = this.agent || !1,
                        a.supportsBinary = this.supportsBinary,
                        a.enablesXDR = this.enablesXDR,
                        a.pfx = this.pfx,
                        a.key = this.key,
                        a.passphrase = this.passphrase,
                        a.cert = this.cert,
                        a.ca = this.ca,
                        a.ciphers = this.ciphers,
                        a.rejectUnauthorized = this.rejectUnauthorized,
                        a.extraHeaders = this.extraHeaders,
                        new f(a)
                    }
                    ,
                    e.prototype.doWrite = function(a, b) {
                        var c = "string" != typeof a && void 0 !== a
                          , d = this.request({
                            method: "POST",
                            data: a,
                            isBinary: c
                        })
                          , e = this;
                        d.on("success", b),
                        d.on("error", function(a) {
                            e.onError("xhr post error", a)
                        }),
                        this.sendXhr = d
                    }
                    ,
                    e.prototype.doPoll = function() {
                        l("xhr poll");
                        var a = this.request()
                          , b = this;
                        a.on("data", function(a) {
                            b.onData(a)
                        }),
                        a.on("error", function(a) {
                            b.onError("xhr poll error", a)
                        }),
                        this.pollXhr = a
                    }
                    ,
                    j(f.prototype),
                    f.prototype.create = function() {
                        var a = {
                            agent: this.agent,
                            xdomain: this.xd,
                            xscheme: this.xs,
                            enablesXDR: this.enablesXDR
                        };
                        a.pfx = this.pfx,
                        a.key = this.key,
                        a.passphrase = this.passphrase,
                        a.cert = this.cert,
                        a.ca = this.ca,
                        a.ciphers = this.ciphers,
                        a.rejectUnauthorized = this.rejectUnauthorized;
                        var b = this.xhr = new h(a)
                          , d = this;
                        try {
                            l("xhr open %s: %s", this.method, this.uri),
                            b.open(this.method, this.uri, this.async);
                            try {
                                if (this.extraHeaders) {
                                    b.setDisableHeaderCheck(!0);
                                    for (var e in this.extraHeaders)
                                        this.extraHeaders.hasOwnProperty(e) && b.setRequestHeader(e, this.extraHeaders[e])
                                }
                            } catch (a) {}
                            if (this.supportsBinary && (b.responseType = "arraybuffer"),
                            "POST" == this.method)
                                try {
                                    this.isBinary ? b.setRequestHeader("Content-type", "application/octet-stream") : b.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                                } catch (a) {}
                            "withCredentials"in b && (b.withCredentials = !0),
                            this.hasXDR() ? (b.onload = function() {
                                d.onLoad()
                            }
                            ,
                            b.onerror = function() {
                                d.onError(b.responseText)
                            }
                            ) : b.onreadystatechange = function() {
                                4 == b.readyState && (200 == b.status || 1223 == b.status ? d.onLoad() : setTimeout(function() {
                                    d.onError(b.status)
                                }, 0))
                            }
                            ,
                            l("xhr data %s", this.data),
                            b.send(this.data)
                        } catch (a) {
                            return void setTimeout(function() {
                                d.onError(a)
                            }, 0)
                        }
                        c.document && (this.index = f.requestsCount++,
                        f.requests[this.index] = this)
                    }
                    ,
                    f.prototype.onSuccess = function() {
                        this.emit("success"),
                        this.cleanup()
                    }
                    ,
                    f.prototype.onData = function(a) {
                        this.emit("data", a),
                        this.onSuccess()
                    }
                    ,
                    f.prototype.onError = function(a) {
                        this.emit("error", a),
                        this.cleanup(!0)
                    }
                    ,
                    f.prototype.cleanup = function(a) {
                        if (void 0 !== this.xhr && null !== this.xhr) {
                            if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = d : this.xhr.onreadystatechange = d,
                            a)
                                try {
                                    this.xhr.abort()
                                } catch (a) {}
                            c.document && delete f.requests[this.index],
                            this.xhr = null
                        }
                    }
                    ,
                    f.prototype.onLoad = function() {
                        var a;
                        try {
                            var b;
                            try {
                                b = this.xhr.getResponseHeader("Content-Type").split(";")[0]
                            } catch (a) {}
                            if ("application/octet-stream" === b)
                                a = this.xhr.response;
                            else if (this.supportsBinary)
                                try {
                                    a = String.fromCharCode.apply(null, new Uint8Array(this.xhr.response))
                                } catch (b) {
                                    for (var c = new Uint8Array(this.xhr.response), d = [], e = 0, f = c.length; e < f; e++)
                                        d.push(c[e]);
                                    a = String.fromCharCode.apply(null, d)
                                }
                            else
                                a = this.xhr.responseText
                        } catch (a) {
                            this.onError(a)
                        }
                        null != a && this.onData(a)
                    }
                    ,
                    f.prototype.hasXDR = function() {
                        return void 0 !== c.XDomainRequest && !this.xs && this.enablesXDR
                    }
                    ,
                    f.prototype.abort = function() {
                        this.cleanup()
                    }
                    ,
                    c.document && (f.requestsCount = 0,
                    f.requests = {},
                    c.attachEvent ? c.attachEvent("onunload", g) : c.addEventListener && c.addEventListener("beforeunload", g, !1))
                }
                ).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {})
            }
            , {
                "./polling": 23,
                "component-emitter": 26,
                "component-inherit": 13,
                debug: 14,
                "xmlhttprequest-ssl": 25
            }],
            23: [function(a, b, c) {
                function d(a) {
                    var b = a && a.forceBase64;
                    k && !b || (this.supportsBinary = !1),
                    e.call(this, a)
                }
                var e = a("../transport")
                  , f = a("parseqs")
                  , g = a("engine.io-parser")
                  , h = a("component-inherit")
                  , i = a("yeast")
                  , j = a("debug")("engine.io-client:polling");
                b.exports = d;
                var k = function() {
                    return null != new (a("xmlhttprequest-ssl"))({
                        xdomain: !1
                    }).responseType
                }();
                h(d, e),
                d.prototype.name = "polling",
                d.prototype.doOpen = function() {
                    this.poll()
                }
                ,
                d.prototype.pause = function(a) {
                    function b() {
                        j("paused"),
                        c.readyState = "paused",
                        a()
                    }
                    var c = this;
                    if (this.readyState = "pausing",
                    this.polling || !this.writable) {
                        var d = 0;
                        this.polling && (j("we are currently polling - waiting to pause"),
                        d++,
                        this.once("pollComplete", function() {
                            j("pre-pause polling complete"),
                            --d || b()
                        })),
                        this.writable || (j("we are currently writing - waiting to pause"),
                        d++,
                        this.once("drain", function() {
                            j("pre-pause writing complete"),
                            --d || b()
                        }))
                    } else
                        b()
                }
                ,
                d.prototype.poll = function() {
                    j("polling"),
                    this.polling = !0,
                    this.doPoll(),
                    this.emit("poll")
                }
                ,
                d.prototype.onData = function(a) {
                    var b = this;
                    j("polling got data %s", a);
                    var c = function(a, c, d) {
                        if ("opening" == b.readyState && b.onOpen(),
                        "close" == a.type)
                            return b.onClose(),
                            !1;
                        b.onPacket(a)
                    };
                    g.decodePayload(a, this.socket.binaryType, c),
                    "closed" != this.readyState && (this.polling = !1,
                    this.emit("pollComplete"),
                    "open" == this.readyState ? this.poll() : j('ignoring poll - transport state "%s"', this.readyState))
                }
                ,
                d.prototype.doClose = function() {
                    function a() {
                        j("writing close packet"),
                        b.write([{
                            type: "close"
                        }])
                    }
                    var b = this;
                    "open" == this.readyState ? (j("transport open - closing"),
                    a()) : (j("transport not open - deferring close"),
                    this.once("open", a))
                }
                ,
                d.prototype.write = function(a) {
                    var b = this;
                    this.writable = !1;
                    var c = function() {
                        b.writable = !0,
                        b.emit("drain")
                    }
                      , b = this;
                    g.encodePayload(a, this.supportsBinary, function(a) {
                        b.doWrite(a, c)
                    })
                }
                ,
                d.prototype.uri = function() {
                    var a = this.query || {}
                      , b = this.secure ? "https" : "http"
                      , c = "";
                    return !1 !== this.timestampRequests && (a[this.timestampParam] = i()),
                    this.supportsBinary || a.sid || (a.b64 = 1),
                    a = f.encode(a),
                    this.port && ("https" == b && 443 != this.port || "http" == b && 80 != this.port) && (c = ":" + this.port),
                    a.length && (a = "?" + a),
                    b + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + c + this.path + a
                }
            }
            , {
                "../transport": 19,
                "component-inherit": 13,
                debug: 14,
                "engine.io-parser": 27,
                parseqs: 37,
                "xmlhttprequest-ssl": 25,
                yeast: 45
            }],
            24: [function(a, b, c) {
                (function(c) {
                    function d(a) {
                        a && a.forceBase64 && (this.supportsBinary = !1),
                        this.perMessageDeflate = a.perMessageDeflate,
                        e.call(this, a)
                    }
                    var e = a("../transport")
                      , f = a("engine.io-parser")
                      , g = a("parseqs")
                      , h = a("component-inherit")
                      , i = a("yeast")
                      , j = a("debug")("engine.io-client:websocket")
                      , k = c.WebSocket || c.MozWebSocket
                      , l = k;
                    if (!l && "undefined" == typeof window)
                        try {
                            l = a("ws")
                        } catch (a) {}
                    b.exports = d,
                    h(d, e),
                    d.prototype.name = "websocket",
                    d.prototype.supportsBinary = !0,
                    d.prototype.doOpen = function() {
                        if (this.check()) {
                            var a = this.uri()
                              , b = {
                                agent: this.agent,
                                perMessageDeflate: this.perMessageDeflate
                            };
                            b.pfx = this.pfx,
                            b.key = this.key,
                            b.passphrase = this.passphrase,
                            b.cert = this.cert,
                            b.ca = this.ca,
                            b.ciphers = this.ciphers,
                            b.rejectUnauthorized = this.rejectUnauthorized,
                            this.extraHeaders && (b.headers = this.extraHeaders),
                            this.ws = k ? new l(a) : new l(a,void 0,b),
                            void 0 === this.ws.binaryType && (this.supportsBinary = !1),
                            this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0,
                            this.ws.binaryType = "buffer") : this.ws.binaryType = "arraybuffer",
                            this.addEventListeners()
                        }
                    }
                    ,
                    d.prototype.addEventListeners = function() {
                        var a = this;
                        this.ws.onopen = function() {
                            a.onOpen()
                        }
                        ,
                        this.ws.onclose = function() {
                            a.onClose()
                        }
                        ,
                        this.ws.onmessage = function(b) {
                            a.onData(b.data)
                        }
                        ,
                        this.ws.onerror = function(b) {
                            a.onError("websocket error", b)
                        }
                    }
                    ,
                    "undefined" != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent) && (d.prototype.onData = function(a) {
                        var b = this;
                        setTimeout(function() {
                            e.prototype.onData.call(b, a)
                        }, 0)
                    }
                    ),
                    d.prototype.write = function(a) {
                        function b() {
                            d.emit("flush"),
                            setTimeout(function() {
                                d.writable = !0,
                                d.emit("drain")
                            }, 0)
                        }
                        var d = this;
                        this.writable = !1;
                        for (var e = a.length, g = 0, h = e; g < h; g++)
                            !function(a) {
                                f.encodePacket(a, d.supportsBinary, function(f) {
                                    if (!k) {
                                        var g = {};
                                        if (a.options && (g.compress = a.options.compress),
                                        d.perMessageDeflate) {
                                            ("string" == typeof f ? c.Buffer.byteLength(f) : f.length) < d.perMessageDeflate.threshold && (g.compress = !1)
                                        }
                                    }
                                    try {
                                        k ? d.ws.send(f) : d.ws.send(f, g)
                                    } catch (a) {
                                        j("websocket closed before onclose event")
                                    }
                                    --e || b()
                                })
                            }(a[g])
                    }
                    ,
                    d.prototype.onClose = function() {
                        e.prototype.onClose.call(this)
                    }
                    ,
                    d.prototype.doClose = function() {
                        void 0 !== this.ws && this.ws.close()
                    }
                    ,
                    d.prototype.uri = function() {
                        var a = this.query || {}
                          , b = this.secure ? "wss" : "ws"
                          , c = "";
                        return this.port && ("wss" == b && 443 != this.port || "ws" == b && 80 != this.port) && (c = ":" + this.port),
                        this.timestampRequests && (a[this.timestampParam] = i()),
                        this.supportsBinary || (a.b64 = 1),
                        a = g.encode(a),
                        a.length && (a = "?" + a),
                        b + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + c + this.path + a
                    }
                    ,
                    d.prototype.check = function() {
                        return !(!l || "__initialize"in l && this.name === d.prototype.name)
                    }
                }
                ).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {})
            }
            , {
                "../transport": 19,
                "component-inherit": 13,
                debug: 14,
                "engine.io-parser": 27,
                parseqs: 37,
                ws: void 0,
                yeast: 45
            }],
            25: [function(a, b, c) {
                var d = a("has-cors");
                b.exports = function(a) {
                    var b = a.xdomain
                      , c = a.xscheme
                      , e = a.enablesXDR;
                    try {
                        if ("undefined" != typeof XMLHttpRequest && (!b || d))
                            return new XMLHttpRequest
                    } catch (a) {}
                    try {
                        if ("undefined" != typeof XDomainRequest && !c && e)
                            return new XDomainRequest
                    } catch (a) {}
                    if (!b)
                        try {
                            return new ActiveXObject("Microsoft.XMLHTTP")
                        } catch (a) {}
                }
            }
            , {
                "has-cors": 31
            }],
            26: [function(a, b, c) {
                function d(a) {
                    if (a)
                        return e(a)
                }
                function e(a) {
                    for (var b in d.prototype)
                        a[b] = d.prototype[b];
                    return a
                }
                b.exports = d,
                d.prototype.on = d.prototype.addEventListener = function(a, b) {
                    return this._callbacks = this._callbacks || {},
                    (this._callbacks[a] = this._callbacks[a] || []).push(b),
                    this
                }
                ,
                d.prototype.once = function(a, b) {
                    function c() {
                        d.off(a, c),
                        b.apply(this, arguments)
                    }
                    var d = this;
                    return this._callbacks = this._callbacks || {},
                    c.fn = b,
                    this.on(a, c),
                    this
                }
                ,
                d.prototype.off = d.prototype.removeListener = d.prototype.removeAllListeners = d.prototype.removeEventListener = function(a, b) {
                    if (this._callbacks = this._callbacks || {},
                    0 == arguments.length)
                        return this._callbacks = {},
                        this;
                    var c = this._callbacks[a];
                    if (!c)
                        return this;
                    if (1 == arguments.length)
                        return delete this._callbacks[a],
                        this;
                    for (var d, e = 0; e < c.length; e++)
                        if ((d = c[e]) === b || d.fn === b) {
                            c.splice(e, 1);
                            break
                        }
                    return this
                }
                ,
                d.prototype.emit = function(a) {
                    this._callbacks = this._callbacks || {};
                    var b = [].slice.call(arguments, 1)
                      , c = this._callbacks[a];
                    if (c) {
                        c = c.slice(0);
                        for (var d = 0, e = c.length; d < e; ++d)
                            c[d].apply(this, b)
                    }
                    return this
                }
                ,
                d.prototype.listeners = function(a) {
                    return this._callbacks = this._callbacks || {},
                    this._callbacks[a] || []
                }
                ,
                d.prototype.hasListeners = function(a) {
                    return !!this.listeners(a).length
                }
            }
            , {}],
            27: [function(a, b, c) {
                (function(b) {
                    function d(a, b) {
                        return b("b" + c.packets[a.type] + a.data.data)
                    }
                    function e(a, b, d) {
                        if (!b)
                            return c.encodeBase64Packet(a, d);
                        var e = a.data
                          , f = new Uint8Array(e)
                          , g = new Uint8Array(1 + e.byteLength);
                        g[0] = r[a.type];
                        for (var h = 0; h < f.length; h++)
                            g[h + 1] = f[h];
                        return d(g.buffer)
                    }
                    function f(a, b, d) {
                        if (!b)
                            return c.encodeBase64Packet(a, d);
                        var e = new FileReader;
                        return e.onload = function() {
                            a.data = e.result,
                            c.encodePacket(a, b, !0, d)
                        }
                        ,
                        e.readAsArrayBuffer(a.data)
                    }
                    function g(a, b, d) {
                        if (!b)
                            return c.encodeBase64Packet(a, d);
                        if (q)
                            return f(a, b, d);
                        var e = new Uint8Array(1);
                        return e[0] = r[a.type],
                        d(new u([e.buffer, a.data]))
                    }
                    function h(a, b, c) {
                        for (var d = new Array(a.length), e = m(a.length, c), f = 0; f < a.length; f++)
                            !function(a, c, e) {
                                b(c, function(b, c) {
                                    d[a] = c,
                                    e(b, d)
                                })
                            }(f, a[f], e)
                    }
                    var i = a("./keys")
                      , j = a("has-binary")
                      , k = a("arraybuffer.slice")
                      , l = a("base64-arraybuffer")
                      , m = a("after")
                      , n = a("utf8")
                      , o = navigator.userAgent.match(/Android/i)
                      , p = /PhantomJS/i.test(navigator.userAgent)
                      , q = o || p;
                    c.protocol = 3;
                    var r = c.packets = {
                        open: 0,
                        close: 1,
                        ping: 2,
                        pong: 3,
                        message: 4,
                        upgrade: 5,
                        noop: 6
                    }
                      , s = i(r)
                      , t = {
                        type: "error",
                        data: "parser error"
                    }
                      , u = a("blob");
                    c.encodePacket = function(a, c, f, h) {
                        "function" == typeof c && (h = c,
                        c = !1),
                        "function" == typeof f && (h = f,
                        f = null);
                        var i = void 0 === a.data ? void 0 : a.data.buffer || a.data;
                        if (b.ArrayBuffer && i instanceof ArrayBuffer)
                            return e(a, c, h);
                        if (u && i instanceof b.Blob)
                            return g(a, c, h);
                        if (i && i.base64)
                            return d(a, h);
                        var j = r[a.type];
                        return void 0 !== a.data && (j += f ? n.encode(String(a.data)) : String(a.data)),
                        h("" + j)
                    }
                    ,
                    c.encodeBase64Packet = function(a, d) {
                        var e = "b" + c.packets[a.type];
                        if (u && a.data instanceof b.Blob) {
                            var f = new FileReader;
                            return f.onload = function() {
                                var a = f.result.split(",")[1];
                                d(e + a)
                            }
                            ,
                            f.readAsDataURL(a.data)
                        }
                        var g;
                        try {
                            g = String.fromCharCode.apply(null, new Uint8Array(a.data))
                        } catch (b) {
                            for (var h = new Uint8Array(a.data), i = new Array(h.length), j = 0; j < h.length; j++)
                                i[j] = h[j];
                            g = String.fromCharCode.apply(null, i)
                        }
                        return e += b.btoa(g),
                        d(e)
                    }
                    ,
                    c.decodePacket = function(a, b, d) {
                        if ("string" == typeof a || void 0 === a) {
                            if ("b" == a.charAt(0))
                                return c.decodeBase64Packet(a.substr(1), b);
                            if (d)
                                try {
                                    a = n.decode(a)
                                } catch (a) {
                                    return t
                                }
                            var e = a.charAt(0);
                            return Number(e) == e && s[e] ? a.length > 1 ? {
                                type: s[e],
                                data: a.substring(1)
                            } : {
                                type: s[e]
                            } : t
                        }
                        var f = new Uint8Array(a)
                          , e = f[0]
                          , g = k(a, 1);
                        return u && "blob" === b && (g = new u([g])),
                        {
                            type: s[e],
                            data: g
                        }
                    }
                    ,
                    c.decodeBase64Packet = function(a, c) {
                        var d = s[a.charAt(0)];
                        if (!b.ArrayBuffer)
                            return {
                                type: d,
                                data: {
                                    base64: !0,
                                    data: a.substr(1)
                                }
                            };
                        var e = l.decode(a.substr(1));
                        return "blob" === c && u && (e = new u([e])),
                        {
                            type: d,
                            data: e
                        }
                    }
                    ,
                    c.encodePayload = function(a, b, d) {
                        function e(a) {
                            return a.length + ":" + a
                        }
                        function f(a, d) {
                            c.encodePacket(a, !!g && b, !0, function(a) {
                                d(null, e(a))
                            })
                        }
                        "function" == typeof b && (d = b,
                        b = null);
                        var g = j(a);
                        return b && g ? u && !q ? c.encodePayloadAsBlob(a, d) : c.encodePayloadAsArrayBuffer(a, d) : a.length ? void h(a, f, function(a, b) {
                            return d(b.join(""))
                        }) : d("0:")
                    }
                    ,
                    c.decodePayload = function(a, b, d) {
                        if ("string" != typeof a)
                            return c.decodePayloadAsBinary(a, b, d);
                        "function" == typeof b && (d = b,
                        b = null);
                        var e;
                        if ("" == a)
                            return d(t, 0, 1);
                        for (var f, g, h = "", i = 0, j = a.length; i < j; i++) {
                            var k = a.charAt(i);
                            if (":" != k)
                                h += k;
                            else {
                                if ("" == h || h != (f = Number(h)))
                                    return d(t, 0, 1);
                                if (g = a.substr(i + 1, f),
                                h != g.length)
                                    return d(t, 0, 1);
                                if (g.length) {
                                    if (e = c.decodePacket(g, b, !0),
                                    t.type == e.type && t.data == e.data)
                                        return d(t, 0, 1);
                                    if (!1 === d(e, i + f, j))
                                        return
                                }
                                i += f,
                                h = ""
                            }
                        }
                        return "" != h ? d(t, 0, 1) : void 0
                    }
                    ,
                    c.encodePayloadAsArrayBuffer = function(a, b) {
                        function d(a, b) {
                            c.encodePacket(a, !0, !0, function(a) {
                                return b(null, a)
                            })
                        }
                        if (!a.length)
                            return b(new ArrayBuffer(0));
                        h(a, d, function(a, c) {
                            var d = c.reduce(function(a, b) {
                                var c;
                                return c = "string" == typeof b ? b.length : b.byteLength,
                                a + c.toString().length + c + 2
                            }, 0)
                              , e = new Uint8Array(d)
                              , f = 0;
                            return c.forEach(function(a) {
                                var b = "string" == typeof a
                                  , c = a;
                                if (b) {
                                    for (var d = new Uint8Array(a.length), g = 0; g < a.length; g++)
                                        d[g] = a.charCodeAt(g);
                                    c = d.buffer
                                }
                                e[f++] = b ? 0 : 1;
                                for (var h = c.byteLength.toString(), g = 0; g < h.length; g++)
                                    e[f++] = parseInt(h[g]);
                                e[f++] = 255;
                                for (var d = new Uint8Array(c), g = 0; g < d.length; g++)
                                    e[f++] = d[g]
                            }),
                            b(e.buffer)
                        })
                    }
                    ,
                    c.encodePayloadAsBlob = function(a, b) {
                        function d(a, b) {
                            c.encodePacket(a, !0, !0, function(a) {
                                var c = new Uint8Array(1);
                                if (c[0] = 1,
                                "string" == typeof a) {
                                    for (var d = new Uint8Array(a.length), e = 0; e < a.length; e++)
                                        d[e] = a.charCodeAt(e);
                                    a = d.buffer,
                                    c[0] = 0
                                }
                                for (var f = a instanceof ArrayBuffer ? a.byteLength : a.size, g = f.toString(), h = new Uint8Array(g.length + 1), e = 0; e < g.length; e++)
                                    h[e] = parseInt(g[e]);
                                if (h[g.length] = 255,
                                u) {
                                    var i = new u([c.buffer, h.buffer, a]);
                                    b(null, i)
                                }
                            })
                        }
                        h(a, d, function(a, c) {
                            return b(new u(c))
                        })
                    }
                    ,
                    c.decodePayloadAsBinary = function(a, b, d) {
                        "function" == typeof b && (d = b,
                        b = null);
                        for (var e = a, f = [], g = !1; e.byteLength > 0; ) {
                            for (var h = new Uint8Array(e), i = 0 === h[0], j = "", l = 1; 255 != h[l]; l++) {
                                if (j.length > 310) {
                                    g = !0;
                                    break
                                }
                                j += h[l]
                            }
                            if (g)
                                return d(t, 0, 1);
                            e = k(e, 2 + j.length),
                            j = parseInt(j);
                            var m = k(e, 0, j);
                            if (i)
                                try {
                                    m = String.fromCharCode.apply(null, new Uint8Array(m))
                                } catch (a) {
                                    var n = new Uint8Array(m);
                                    m = "";
                                    for (var l = 0; l < n.length; l++)
                                        m += String.fromCharCode(n[l])
                                }
                            f.push(m),
                            e = k(e, j)
                        }
                        var o = f.length;
                        f.forEach(function(a, e) {
                            d(c.decodePacket(a, b, !0), e, o)
                        })
                    }
                }
                ).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {})
            }
            , {
                "./keys": 28,
                after: 6,
                "arraybuffer.slice": 7,
                "base64-arraybuffer": 9,
                blob: 10,
                "has-binary": 29,
                utf8: 44
            }],
            28: [function(a, b, c) {
                b.exports = Object.keys || function(a) {
                    var b = []
                      , c = Object.prototype.hasOwnProperty;
                    for (var d in a)
                        c.call(a, d) && b.push(d);
                    return b
                }
            }
            , {}],
            29: [function(a, b, c) {
                (function(c) {
                    function d(a) {
                        function b(a) {
                            if (!a)
                                return !1;
                            if (c.Buffer && c.Buffer.isBuffer(a) || c.ArrayBuffer && a instanceof ArrayBuffer || c.Blob && a instanceof Blob || c.File && a instanceof File)
                                return !0;
                            if (e(a)) {
                                for (var d = 0; d < a.length; d++)
                                    if (b(a[d]))
                                        return !0
                            } else if (a && "object" == typeof a) {
                                a.toJSON && (a = a.toJSON());
                                for (var f in a)
                                    if (Object.prototype.hasOwnProperty.call(a, f) && b(a[f]))
                                        return !0
                            }
                            return !1
                        }
                        return b(a)
                    }
                    var e = a("isarray");
                    b.exports = d
                }
                ).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {})
            }
            , {
                isarray: 33
            }],
            30: [function(a, b, c) {
                (function(c) {
                    function d(a) {
                        function b(a) {
                            if (!a)
                                return !1;
                            if (c.Buffer && c.Buffer.isBuffer && c.Buffer.isBuffer(a) || c.ArrayBuffer && a instanceof ArrayBuffer || c.Blob && a instanceof Blob || c.File && a instanceof File)
                                return !0;
                            if (e(a)) {
                                for (var d = 0; d < a.length; d++)
                                    if (b(a[d]))
                                        return !0
                            } else if (a && "object" == typeof a) {
                                a.toJSON && "function" == typeof a.toJSON && (a = a.toJSON());
                                for (var f in a)
                                    if (Object.prototype.hasOwnProperty.call(a, f) && b(a[f]))
                                        return !0
                            }
                            return !1
                        }
                        return b(a)
                    }
                    var e = a("isarray");
                    b.exports = d
                }
                ).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {})
            }
            , {
                isarray: 33
            }],
            31: [function(a, b, c) {
                try {
                    b.exports = "undefined" != typeof XMLHttpRequest && "withCredentials"in new XMLHttpRequest
                } catch (a) {
                    b.exports = !1
                }
            }
            , {}],
            32: [function(a, b, c) {
                var d = [].indexOf;
                b.exports = function(a, b) {
                    if (d)
                        return a.indexOf(b);
                    for (var c = 0; c < a.length; ++c)
                        if (a[c] === b)
                            return c;
                    return -1
                }
            }
            , {}],
            33: [function(a, b, c) {
                b.exports = Array.isArray || function(a) {
                    return "[object Array]" == Object.prototype.toString.call(a)
                }
            }
            , {}],
            34: [function(b, c, d) {
                (function(b) {
                    (function() {
                        function e(a, b) {
                            function c(a) {
                                if (c[a] !== q)
                                    return c[a];
                                var e;
                                if ("bug-string-char-index" == a)
                                    e = "a" != "a"[0];
                                else if ("json" == a)
                                    e = c("json-stringify") && c("json-parse");
                                else {
                                    var g, h = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                                    if ("json-stringify" == a) {
                                        var i = b.stringify
                                          , k = "function" == typeof i && t;
                                        if (k) {
                                            (g = function() {
                                                return 1
                                            }
                                            ).toJSON = g;
                                            try {
                                                k = "0" === i(0) && "0" === i(new d) && '""' == i(new f) && i(s) === q && i(q) === q && i() === q && "1" === i(g) && "[1]" == i([g]) && "[null]" == i([q]) && "null" == i(null) && "[null,null,null]" == i([q, s, null]) && i({
                                                    a: [g, !0, !1, null, "\0\b\n\f\r\t"]
                                                }) == h && "1" === i(null, g) && "[\n 1,\n 2\n]" == i([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == i(new j(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == i(new j(864e13)) && '"-000001-01-01T00:00:00.000Z"' == i(new j(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == i(new j(-1))
                                            } catch (a) {
                                                k = !1
                                            }
                                        }
                                        e = k
                                    }
                                    if ("json-parse" == a) {
                                        var l = b.parse;
                                        if ("function" == typeof l)
                                            try {
                                                if (0 === l("0") && !l(!1)) {
                                                    g = l(h);
                                                    var m = 5 == g.a.length && 1 === g.a[0];
                                                    if (m) {
                                                        try {
                                                            m = !l('"\t"')
                                                        } catch (a) {}
                                                        if (m)
                                                            try {
                                                                m = 1 !== l("01")
                                                            } catch (a) {}
                                                        if (m)
                                                            try {
                                                                m = 1 !== l("1.")
                                                            } catch (a) {}
                                                    }
                                                }
                                            } catch (a) {
                                                m = !1
                                            }
                                        e = m
                                    }
                                }
                                return c[a] = !!e
                            }
                            a || (a = i.Object()),
                            b || (b = i.Object());
                            var d = a.Number || i.Number
                              , f = a.String || i.String
                              , h = a.Object || i.Object
                              , j = a.Date || i.Date
                              , k = a.SyntaxError || i.SyntaxError
                              , l = a.TypeError || i.TypeError
                              , m = a.Math || i.Math
                              , n = a.JSON || i.JSON;
                            "object" == typeof n && n && (b.stringify = n.stringify,
                            b.parse = n.parse);
                            var o, p, q, r = h.prototype, s = r.toString, t = new j(-0xc782b5b800cec);
                            try {
                                t = -109252 == t.getUTCFullYear() && 0 === t.getUTCMonth() && 1 === t.getUTCDate() && 10 == t.getUTCHours() && 37 == t.getUTCMinutes() && 6 == t.getUTCSeconds() && 708 == t.getUTCMilliseconds()
                            } catch (a) {}
                            if (!c("json")) {
                                var u = c("bug-string-char-index");
                                if (!t)
                                    var v = m.floor
                                      , w = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]
                                      , x = function(a, b) {
                                        return w[b] + 365 * (a - 1970) + v((a - 1969 + (b = +(b > 1))) / 4) - v((a - 1901 + b) / 100) + v((a - 1601 + b) / 400)
                                    };
                                if ((o = r.hasOwnProperty) || (o = function(a) {
                                    var b, c = {};
                                    return (c.__proto__ = null,
                                    c.__proto__ = {
                                        toString: 1
                                    },
                                    c).toString != s ? o = function(a) {
                                        var b = this.__proto__
                                          , c = a in (this.__proto__ = null,
                                        this);
                                        return this.__proto__ = b,
                                        c
                                    }
                                    : (b = c.constructor,
                                    o = function(a) {
                                        var c = (this.constructor || b).prototype;
                                        return a in this && !(a in c && this[a] === c[a])
                                    }
                                    ),
                                    c = null,
                                    o.call(this, a)
                                }
                                ),
                                p = function(a, b) {
                                    var c, d, e, f = 0;
                                    (c = function() {
                                        this.valueOf = 0
                                    }
                                    ).prototype.valueOf = 0,
                                    d = new c;
                                    for (e in d)
                                        o.call(d, e) && f++;
                                    return c = d = null,
                                    f ? p = 2 == f ? function(a, b) {
                                        var c, d = {}, e = "[object Function]" == s.call(a);
                                        for (c in a)
                                            e && "prototype" == c || o.call(d, c) || !(d[c] = 1) || !o.call(a, c) || b(c)
                                    }
                                    : function(a, b) {
                                        var c, d, e = "[object Function]" == s.call(a);
                                        for (c in a)
                                            e && "prototype" == c || !o.call(a, c) || (d = "constructor" === c) || b(c);
                                        (d || o.call(a, c = "constructor")) && b(c)
                                    }
                                    : (d = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"],
                                    p = function(a, b) {
                                        var c, e, f = "[object Function]" == s.call(a), h = !f && "function" != typeof a.constructor && g[typeof a.hasOwnProperty] && a.hasOwnProperty || o;
                                        for (c in a)
                                            f && "prototype" == c || !h.call(a, c) || b(c);
                                        for (e = d.length; c = d[--e]; h.call(a, c) && b(c))
                                            ;
                                    }
                                    ),
                                    p(a, b)
                                }
                                ,
                                !c("json-stringify")) {
                                    var y = {
                                        92: "\\\\",
                                        34: '\\"',
                                        8: "\\b",
                                        12: "\\f",
                                        10: "\\n",
                                        13: "\\r",
                                        9: "\\t"
                                    }
                                      , z = function(a, b) {
                                        return ("000000" + (b || 0)).slice(-a)
                                    }
                                      , A = function(a) {
                                        for (var b = '"', c = 0, d = a.length, e = !u || d > 10, f = e && (u ? a.split("") : a); c < d; c++) {
                                            var g = a.charCodeAt(c);
                                            switch (g) {
                                            case 8:
                                            case 9:
                                            case 10:
                                            case 12:
                                            case 13:
                                            case 34:
                                            case 92:
                                                b += y[g];
                                                break;
                                            default:
                                                if (g < 32) {
                                                    b += "\\u00" + z(2, g.toString(16));
                                                    break
                                                }
                                                b += e ? f[c] : a.charAt(c)
                                            }
                                        }
                                        return b + '"'
                                    }
                                      , B = function(a, b, c, d, e, f, g) {
                                        var h, i, j, k, m, n, r, t, u, w, y, C, D, E, F, G;
                                        try {
                                            h = b[a]
                                        } catch (a) {}
                                        if ("object" == typeof h && h)
                                            if ("[object Date]" != (i = s.call(h)) || o.call(h, "toJSON"))
                                                "function" == typeof h.toJSON && ("[object Number]" != i && "[object String]" != i && "[object Array]" != i || o.call(h, "toJSON")) && (h = h.toJSON(a));
                                            else if (h > -1 / 0 && h < 1 / 0) {
                                                if (x) {
                                                    for (m = v(h / 864e5),
                                                    j = v(m / 365.2425) + 1970 - 1; x(j + 1, 0) <= m; j++)
                                                        ;
                                                    for (k = v((m - x(j, 0)) / 30.42); x(j, k + 1) <= m; k++)
                                                        ;
                                                    m = 1 + m - x(j, k),
                                                    n = (h % 864e5 + 864e5) % 864e5,
                                                    r = v(n / 36e5) % 24,
                                                    t = v(n / 6e4) % 60,
                                                    u = v(n / 1e3) % 60,
                                                    w = n % 1e3
                                                } else
                                                    j = h.getUTCFullYear(),
                                                    k = h.getUTCMonth(),
                                                    m = h.getUTCDate(),
                                                    r = h.getUTCHours(),
                                                    t = h.getUTCMinutes(),
                                                    u = h.getUTCSeconds(),
                                                    w = h.getUTCMilliseconds();
                                                h = (j <= 0 || j >= 1e4 ? (j < 0 ? "-" : "+") + z(6, j < 0 ? -j : j) : z(4, j)) + "-" + z(2, k + 1) + "-" + z(2, m) + "T" + z(2, r) + ":" + z(2, t) + ":" + z(2, u) + "." + z(3, w) + "Z"
                                            } else
                                                h = null;
                                        if (c && (h = c.call(b, a, h)),
                                        null === h)
                                            return "null";
                                        if ("[object Boolean]" == (i = s.call(h)))
                                            return "" + h;
                                        if ("[object Number]" == i)
                                            return h > -1 / 0 && h < 1 / 0 ? "" + h : "null";
                                        if ("[object String]" == i)
                                            return A("" + h);
                                        if ("object" == typeof h) {
                                            for (E = g.length; E--; )
                                                if (g[E] === h)
                                                    throw l();
                                            if (g.push(h),
                                            y = [],
                                            F = f,
                                            f += e,
                                            "[object Array]" == i) {
                                                for (D = 0,
                                                E = h.length; D < E; D++)
                                                    C = B(D, h, c, d, e, f, g),
                                                    y.push(C === q ? "null" : C);
                                                G = y.length ? e ? "[\n" + f + y.join(",\n" + f) + "\n" + F + "]" : "[" + y.join(",") + "]" : "[]"
                                            } else
                                                p(d || h, function(a) {
                                                    var b = B(a, h, c, d, e, f, g);
                                                    b !== q && y.push(A(a) + ":" + (e ? " " : "") + b)
                                                }),
                                                G = y.length ? e ? "{\n" + f + y.join(",\n" + f) + "\n" + F + "}" : "{" + y.join(",") + "}" : "{}";
                                            return g.pop(),
                                            G
                                        }
                                    };
                                    b.stringify = function(a, b, c) {
                                        var d, e, f, h;
                                        if (g[typeof b] && b)
                                            if ("[object Function]" == (h = s.call(b)))
                                                e = b;
                                            else if ("[object Array]" == h) {
                                                f = {};
                                                for (var i, j = 0, k = b.length; j < k; i = b[j++],
                                                ("[object String]" == (h = s.call(i)) || "[object Number]" == h) && (f[i] = 1))
                                                    ;
                                            }
                                        if (c)
                                            if ("[object Number]" == (h = s.call(c))) {
                                                if ((c -= c % 1) > 0)
                                                    for (d = "",
                                                    c > 10 && (c = 10); d.length < c; d += " ")
                                                        ;
                                            } else
                                                "[object String]" == h && (d = c.length <= 10 ? c : c.slice(0, 10));
                                        return B("", (i = {},
                                        i[""] = a,
                                        i), e, f, d, "", [])
                                    }
                                }
                                if (!c("json-parse")) {
                                    var C, D, E = f.fromCharCode, F = {
                                        92: "\\",
                                        34: '"',
                                        47: "/",
                                        98: "\b",
                                        116: "\t",
                                        110: "\n",
                                        102: "\f",
                                        114: "\r"
                                    }, G = function() {
                                        throw C = D = null,
                                        k()
                                    }, H = function() {
                                        for (var a, b, c, d, e, f = D, g = f.length; C < g; )
                                            switch (e = f.charCodeAt(C)) {
                                            case 9:
                                            case 10:
                                            case 13:
                                            case 32:
                                                C++;
                                                break;
                                            case 123:
                                            case 125:
                                            case 91:
                                            case 93:
                                            case 58:
                                            case 44:
                                                return a = u ? f.charAt(C) : f[C],
                                                C++,
                                                a;
                                            case 34:
                                                for (a = "@",
                                                C++; C < g; )
                                                    if ((e = f.charCodeAt(C)) < 32)
                                                        G();
                                                    else if (92 == e)
                                                        switch (e = f.charCodeAt(++C)) {
                                                        case 92:
                                                        case 34:
                                                        case 47:
                                                        case 98:
                                                        case 116:
                                                        case 110:
                                                        case 102:
                                                        case 114:
                                                            a += F[e],
                                                            C++;
                                                            break;
                                                        case 117:
                                                            for (b = ++C,
                                                            c = C + 4; C < c; C++)
                                                                (e = f.charCodeAt(C)) >= 48 && e <= 57 || e >= 97 && e <= 102 || e >= 65 && e <= 70 || G();
                                                            a += E("0x" + f.slice(b, C));
                                                            break;
                                                        default:
                                                            G()
                                                        }
                                                    else {
                                                        if (34 == e)
                                                            break;
                                                        for (e = f.charCodeAt(C),
                                                        b = C; e >= 32 && 92 != e && 34 != e; )
                                                            e = f.charCodeAt(++C);
                                                        a += f.slice(b, C)
                                                    }
                                                if (34 == f.charCodeAt(C))
                                                    return C++,
                                                    a;
                                                G();
                                            default:
                                                if (b = C,
                                                45 == e && (d = !0,
                                                e = f.charCodeAt(++C)),
                                                e >= 48 && e <= 57) {
                                                    for (48 == e && (e = f.charCodeAt(C + 1)) >= 48 && e <= 57 && G(),
                                                    d = !1; C < g && (e = f.charCodeAt(C)) >= 48 && e <= 57; C++)
                                                        ;
                                                    if (46 == f.charCodeAt(C)) {
                                                        for (c = ++C; c < g && (e = f.charCodeAt(c)) >= 48 && e <= 57; c++)
                                                            ;
                                                        c == C && G(),
                                                        C = c
                                                    }
                                                    if (101 == (e = f.charCodeAt(C)) || 69 == e) {
                                                        for (e = f.charCodeAt(++C),
                                                        43 != e && 45 != e || C++,
                                                        c = C; c < g && (e = f.charCodeAt(c)) >= 48 && e <= 57; c++)
                                                            ;
                                                        c == C && G(),
                                                        C = c
                                                    }
                                                    return +f.slice(b, C)
                                                }
                                                if (d && G(),
                                                "true" == f.slice(C, C + 4))
                                                    return C += 4,
                                                    !0;
                                                if ("false" == f.slice(C, C + 5))
                                                    return C += 5,
                                                    !1;
                                                if ("null" == f.slice(C, C + 4))
                                                    return C += 4,
                                                    null;
                                                G()
                                            }
                                        return "$"
                                    }, I = function(a) {
                                        var b, c;
                                        if ("$" == a && G(),
                                        "string" == typeof a) {
                                            if ("@" == (u ? a.charAt(0) : a[0]))
                                                return a.slice(1);
                                            if ("[" == a) {
                                                for (b = []; "]" != (a = H()); c || (c = !0))
                                                    c && ("," == a ? "]" == (a = H()) && G() : G()),
                                                    "," == a && G(),
                                                    b.push(I(a));
                                                return b
                                            }
                                            if ("{" == a) {
                                                for (b = {}; "}" != (a = H()); c || (c = !0))
                                                    c && ("," == a ? "}" == (a = H()) && G() : G()),
                                                    "," != a && "string" == typeof a && "@" == (u ? a.charAt(0) : a[0]) && ":" == H() || G(),
                                                    b[a.slice(1)] = I(H());
                                                return b
                                            }
                                            G()
                                        }
                                        return a
                                    }, J = function(a, b, c) {
                                        var d = K(a, b, c);
                                        d === q ? delete a[b] : a[b] = d
                                    }, K = function(a, b, c) {
                                        var d, e = a[b];
                                        if ("object" == typeof e && e)
                                            if ("[object Array]" == s.call(e))
                                                for (d = e.length; d--; )
                                                    J(e, d, c);
                                            else
                                                p(e, function(a) {
                                                    J(e, a, c)
                                                });
                                        return c.call(a, b, e)
                                    };
                                    b.parse = function(a, b) {
                                        var c, d;
                                        return C = 0,
                                        D = "" + a,
                                        c = I(H()),
                                        "$" != H() && G(),
                                        C = D = null,
                                        b && "[object Function]" == s.call(b) ? K((d = {},
                                        d[""] = c,
                                        d), "", b) : c
                                    }
                                }
                            }
                            return b.runInContext = e,
                            b
                        }
                        var f = "function" == typeof a && a.amd
                          , g = {
                            function: !0,
                            object: !0
                        }
                          , h = g[typeof d] && d && !d.nodeType && d
                          , i = g[typeof window] && window || this
                          , j = h && g[typeof c] && c && !c.nodeType && "object" == typeof b && b;
                        if (!j || j.global !== j && j.window !== j && j.self !== j || (i = j),
                        h && !f)
                            e(i, h);
                        else {
                            var k = i.JSON
                              , l = i.JSON3
                              , m = !1
                              , n = e(i, i.JSON3 = {
                                noConflict: function() {
                                    return m || (m = !0,
                                    i.JSON = k,
                                    i.JSON3 = l,
                                    k = l = null),
                                    n
                                }
                            });
                            i.JSON = {
                                parse: n.parse,
                                stringify: n.stringify
                            }
                        }
                        f && a(function() {
                            return n
                        })
                    }
                    ).call(this)
                }
                ).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {})
            }
            , {}],
            35: [function(a, b, c) {
                function d(a) {
                    if (a = "" + a,
                    !(a.length > 1e4)) {
                        var b = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(a);
                        if (b) {
                            var c = parseFloat(b[1]);
                            switch ((b[2] || "ms").toLowerCase()) {
                            case "years":
                            case "year":
                            case "yrs":
                            case "yr":
                            case "y":
                                return c * l;
                            case "days":
                            case "day":
                            case "d":
                                return c * k;
                            case "hours":
                            case "hour":
                            case "hrs":
                            case "hr":
                            case "h":
                                return c * j;
                            case "minutes":
                            case "minute":
                            case "mins":
                            case "min":
                            case "m":
                                return c * i;
                            case "seconds":
                            case "second":
                            case "secs":
                            case "sec":
                            case "s":
                                return c * h;
                            case "milliseconds":
                            case "millisecond":
                            case "msecs":
                            case "msec":
                            case "ms":
                                return c
                            }
                        }
                    }
                }
                function e(a) {
                    return a >= k ? Math.round(a / k) + "d" : a >= j ? Math.round(a / j) + "h" : a >= i ? Math.round(a / i) + "m" : a >= h ? Math.round(a / h) + "s" : a + "ms"
                }
                function f(a) {
                    return g(a, k, "day") || g(a, j, "hour") || g(a, i, "minute") || g(a, h, "second") || a + " ms"
                }
                function g(a, b, c) {
                    if (!(a < b))
                        return a < 1.5 * b ? Math.floor(a / b) + " " + c : Math.ceil(a / b) + " " + c + "s"
                }
                var h = 1e3
                  , i = 60 * h
                  , j = 60 * i
                  , k = 24 * j
                  , l = 365.25 * k;
                b.exports = function(a, b) {
                    return b = b || {},
                    "string" == typeof a ? d(a) : b.long ? f(a) : e(a)
                }
            }
            , {}],
            36: [function(a, b, c) {
                (function(a) {
                    var c = /^[\],:{}\s]*$/
                      , d = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g
                      , e = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g
                      , f = /(?:^|:|,)(?:\s*\[)+/g
                      , g = /^\s+/
                      , h = /\s+$/;
                    b.exports = function(b) {
                        return "string" == typeof b && b ? (b = b.replace(g, "").replace(h, ""),
                        a.JSON && JSON.parse ? JSON.parse(b) : c.test(b.replace(d, "@").replace(e, "]").replace(f, "")) ? new Function("return " + b)() : void 0) : null
                    }
                }
                ).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {})
            }
            , {}],
            37: [function(a, b, c) {
                c.encode = function(a) {
                    var b = "";
                    for (var c in a)
                        a.hasOwnProperty(c) && (b.length && (b += "&"),
                        b += encodeURIComponent(c) + "=" + encodeURIComponent(a[c]));
                    return b
                }
                ,
                c.decode = function(a) {
                    for (var b = {}, c = a.split("&"), d = 0, e = c.length; d < e; d++) {
                        var f = c[d].split("=");
                        b[decodeURIComponent(f[0])] = decodeURIComponent(f[1])
                    }
                    return b
                }
            }
            , {}],
            38: [function(a, b, c) {
                var d = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
                  , e = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
                b.exports = function(a) {
                    var b = a
                      , c = a.indexOf("[")
                      , f = a.indexOf("]");
                    -1 != c && -1 != f && (a = a.substring(0, c) + a.substring(c, f).replace(/:/g, ";") + a.substring(f, a.length));
                    for (var g = d.exec(a || ""), h = {}, i = 14; i--; )
                        h[e[i]] = g[i] || "";
                    return -1 != c && -1 != f && (h.source = b,
                    h.host = h.host.substring(1, h.host.length - 1).replace(/;/g, ":"),
                    h.authority = h.authority.replace("[", "").replace("]", "").replace(/;/g, ":"),
                    h.ipv6uri = !0),
                    h
                }
            }
            , {}],
            39: [function(a, b, c) {
                (function(b) {
                    var d = a("isarray")
                      , e = a("./is-buffer");
                    c.deconstructPacket = function(a) {
                        function b(a) {
                            if (!a)
                                return a;
                            if (e(a)) {
                                var f = {
                                    _placeholder: !0,
                                    num: c.length
                                };
                                return c.push(a),
                                f
                            }
                            if (d(a)) {
                                for (var g = new Array(a.length), h = 0; h < a.length; h++)
                                    g[h] = b(a[h]);
                                return g
                            }
                            if ("object" == typeof a && !(a instanceof Date)) {
                                var g = {};
                                for (var i in a)
                                    g[i] = b(a[i]);
                                return g
                            }
                            return a
                        }
                        var c = []
                          , f = a.data
                          , g = a;
                        return g.data = b(f),
                        g.attachments = c.length,
                        {
                            packet: g,
                            buffers: c
                        }
                    }
                    ,
                    c.reconstructPacket = function(a, b) {
                        function c(a) {
                            if (a && a._placeholder) {
                                return b[a.num]
                            }
                            if (d(a)) {
                                for (var e = 0; e < a.length; e++)
                                    a[e] = c(a[e]);
                                return a
                            }
                            if (a && "object" == typeof a) {
                                for (var f in a)
                                    a[f] = c(a[f]);
                                return a
                            }
                            return a
                        }
                        return a.data = c(a.data),
                        a.attachments = void 0,
                        a
                    }
                    ,
                    c.removeBlobs = function(a, c) {
                        function f(a, i, j) {
                            if (!a)
                                return a;
                            if (b.Blob && a instanceof Blob || b.File && a instanceof File) {
                                g++;
                                var k = new FileReader;
                                k.onload = function() {
                                    j ? j[i] = this.result : h = this.result,
                                    --g || c(h)
                                }
                                ,
                                k.readAsArrayBuffer(a)
                            } else if (d(a))
                                for (var l = 0; l < a.length; l++)
                                    f(a[l], l, a);
                            else if (a && "object" == typeof a && !e(a))
                                for (var m in a)
                                    f(a[m], m, a)
                        }
                        var g = 0
                          , h = a;
                        f(h),
                        g || c(h)
                    }
                }
                ).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {})
            }
            , {
                "./is-buffer": 41,
                isarray: 33
            }],
            40: [function(a, b, c) {
                function d() {}
                function e(a) {
                    var b = ""
                      , d = !1;
                    return b += a.type,
                    c.BINARY_EVENT != a.type && c.BINARY_ACK != a.type || (b += a.attachments,
                    b += "-"),
                    a.nsp && "/" != a.nsp && (d = !0,
                    b += a.nsp),
                    null != a.id && (d && (b += ",",
                    d = !1),
                    b += a.id),
                    null != a.data && (d && (b += ","),
                    b += l.stringify(a.data)),
                    k("encoded %j as %s", a, b),
                    b
                }
                function f(a, b) {
                    function c(a) {
                        var c = n.deconstructPacket(a)
                          , d = e(c.packet)
                          , f = c.buffers;
                        f.unshift(d),
                        b(f)
                    }
                    n.removeBlobs(a, c)
                }
                function g() {
                    this.reconstructor = null
                }
                function h(a) {
                    var b = {}
                      , d = 0;
                    if (b.type = Number(a.charAt(0)),
                    null == c.types[b.type])
                        return j();
                    if (c.BINARY_EVENT == b.type || c.BINARY_ACK == b.type) {
                        for (var e = ""; "-" != a.charAt(++d) && (e += a.charAt(d),
                        d != a.length); )
                            ;
                        if (e != Number(e) || "-" != a.charAt(d))
                            throw new Error("Illegal attachments");
                        b.attachments = Number(e)
                    }
                    if ("/" == a.charAt(d + 1))
                        for (b.nsp = ""; ++d; ) {
                            var f = a.charAt(d);
                            if ("," == f)
                                break;
                            if (b.nsp += f,
                            d == a.length)
                                break
                        }
                    else
                        b.nsp = "/";
                    var g = a.charAt(d + 1);
                    if ("" !== g && Number(g) == g) {
                        for (b.id = ""; ++d; ) {
                            var f = a.charAt(d);
                            if (null == f || Number(f) != f) {
                                --d;
                                break
                            }
                            if (b.id += a.charAt(d),
                            d == a.length)
                                break
                        }
                        b.id = Number(b.id)
                    }
                    if (a.charAt(++d))
                        try {
                            b.data = l.parse(a.substr(d))
                        } catch (a) {
                            return j()
                        }
                    return k("decoded %s as %j", a, b),
                    b
                }
                function i(a) {
                    this.reconPack = a,
                    this.buffers = []
                }
                function j(a) {
                    return {
                        type: c.ERROR,
                        data: "parser error"
                    }
                }
                var k = a("debug")("socket.io-parser")
                  , l = a("json3")
                  , m = (a("isarray"),
                a("component-emitter"))
                  , n = a("./binary")
                  , o = a("./is-buffer");
                c.protocol = 4,
                c.types = ["CONNECT", "DISCONNECT", "EVENT", "ACK", "ERROR", "BINARY_EVENT", "BINARY_ACK"],
                c.CONNECT = 0,
                c.DISCONNECT = 1,
                c.EVENT = 2,
                c.ACK = 3,
                c.ERROR = 4,
                c.BINARY_EVENT = 5,
                c.BINARY_ACK = 6,
                c.Encoder = d,
                c.Decoder = g,
                d.prototype.encode = function(a, b) {
                    if (k("encoding packet %j", a),
                    c.BINARY_EVENT == a.type || c.BINARY_ACK == a.type)
                        f(a, b);
                    else {
                        b([e(a)])
                    }
                }
                ,
                m(g.prototype),
                g.prototype.add = function(a) {
                    var b;
                    if ("string" == typeof a)
                        b = h(a),
                        c.BINARY_EVENT == b.type || c.BINARY_ACK == b.type ? (this.reconstructor = new i(b),
                        0 === this.reconstructor.reconPack.attachments && this.emit("decoded", b)) : this.emit("decoded", b);
                    else {
                        if (!o(a) && !a.base64)
                            throw new Error("Unknown type: " + a);
                        if (!this.reconstructor)
                            throw new Error("got binary data when not reconstructing a packet");
                        (b = this.reconstructor.takeBinaryData(a)) && (this.reconstructor = null,
                        this.emit("decoded", b))
                    }
                }
                ,
                g.prototype.destroy = function() {
                    this.reconstructor && this.reconstructor.finishedReconstruction()
                }
                ,
                i.prototype.takeBinaryData = function(a) {
                    if (this.buffers.push(a),
                    this.buffers.length == this.reconPack.attachments) {
                        var b = n.reconstructPacket(this.reconPack, this.buffers);
                        return this.finishedReconstruction(),
                        b
                    }
                    return null
                }
                ,
                i.prototype.finishedReconstruction = function() {
                    this.reconPack = null,
                    this.buffers = []
                }
            }
            , {
                "./binary": 39,
                "./is-buffer": 41,
                "component-emitter": 42,
                debug: 14,
                isarray: 33,
                json3: 34
            }],
            41: [function(a, b, c) {
                (function(a) {
                    function c(b) {
                        return a.Buffer && a.Buffer.isBuffer(b) || a.ArrayBuffer && b instanceof ArrayBuffer
                    }
                    b.exports = c
                }
                ).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {})
            }
            , {}],
            42: [function(a, b, c) {
                arguments[4][26][0].apply(c, arguments)
            }
            , {
                dup: 26
            }],
            43: [function(a, b, c) {
                function d(a, b) {
                    var c = [];
                    b = b || 0;
                    for (var d = b || 0; d < a.length; d++)
                        c[d - b] = a[d];
                    return c
                }
                b.exports = d
            }
            , {}],
            44: [function(b, c, d) {
                (function(b) {
                    !function(e) {
                        function f(a) {
                            for (var b, c, d = [], e = 0, f = a.length; e < f; )
                                b = a.charCodeAt(e++),
                                b >= 55296 && b <= 56319 && e < f ? (c = a.charCodeAt(e++),
                                56320 == (64512 & c) ? d.push(((1023 & b) << 10) + (1023 & c) + 65536) : (d.push(b),
                                e--)) : d.push(b);
                            return d
                        }
                        function g(a) {
                            for (var b, c = a.length, d = -1, e = ""; ++d < c; )
                                b = a[d],
                                b > 65535 && (b -= 65536,
                                e += u(b >>> 10 & 1023 | 55296),
                                b = 56320 | 1023 & b),
                                e += u(b);
                            return e
                        }
                        function h(a) {
                            if (a >= 55296 && a <= 57343)
                                throw Error("Lone surrogate U+" + a.toString(16).toUpperCase() + " is not a scalar value")
                        }
                        function i(a, b) {
                            return u(a >> b & 63 | 128)
                        }
                        function j(a) {
                            if (0 == (4294967168 & a))
                                return u(a);
                            var b = "";
                            return 0 == (4294965248 & a) ? b = u(a >> 6 & 31 | 192) : 0 == (4294901760 & a) ? (h(a),
                            b = u(a >> 12 & 15 | 224),
                            b += i(a, 6)) : 0 == (4292870144 & a) && (b = u(a >> 18 & 7 | 240),
                            b += i(a, 12),
                            b += i(a, 6)),
                            b += u(63 & a | 128)
                        }
                        function k(a) {
                            for (var b, c = f(a), d = c.length, e = -1, g = ""; ++e < d; )
                                b = c[e],
                                g += j(b);
                            return g
                        }
                        function l() {
                            if (t >= s)
                                throw Error("Invalid byte index");
                            var a = 255 & r[t];
                            if (t++,
                            128 == (192 & a))
                                return 63 & a;
                            throw Error("Invalid continuation byte")
                        }
                        function m() {
                            var a, b, c, d, e;
                            if (t > s)
                                throw Error("Invalid byte index");
                            if (t == s)
                                return !1;
                            if (a = 255 & r[t],
                            t++,
                            0 == (128 & a))
                                return a;
                            if (192 == (224 & a)) {
                                var b = l();
                                if ((e = (31 & a) << 6 | b) >= 128)
                                    return e;
                                throw Error("Invalid continuation byte")
                            }
                            if (224 == (240 & a)) {
                                if (b = l(),
                                c = l(),
                                (e = (15 & a) << 12 | b << 6 | c) >= 2048)
                                    return h(e),
                                    e;
                                throw Error("Invalid continuation byte")
                            }
                            if (240 == (248 & a) && (b = l(),
                            c = l(),
                            d = l(),
                            (e = (15 & a) << 18 | b << 12 | c << 6 | d) >= 65536 && e <= 1114111))
                                return e;
                            throw Error("Invalid UTF-8 detected")
                        }
                        function n(a) {
                            r = f(a),
                            s = r.length,
                            t = 0;
                            for (var b, c = []; !1 !== (b = m()); )
                                c.push(b);
                            return g(c)
                        }
                        var o = "object" == typeof d && d
                          , p = "object" == typeof c && c && c.exports == o && c
                          , q = "object" == typeof b && b;
                        q.global !== q && q.window !== q || (e = q);
                        var r, s, t, u = String.fromCharCode, v = {
                            version: "2.0.0",
                            encode: k,
                            decode: n
                        };
                        if ("function" == typeof a && "object" == typeof a.amd && a.amd)
                            a(function() {
                                return v
                            });
                        else if (o && !o.nodeType)
                            if (p)
                                p.exports = v;
                            else {
                                var w = {}
                                  , x = w.hasOwnProperty;
                                for (var y in v)
                                    x.call(v, y) && (o[y] = v[y])
                            }
                        else
                            e.utf8 = v
                    }(this)
                }
                ).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {})
            }
            , {}],
            45: [function(a, b, c) {
                "use strict";
                function d(a) {
                    var b = "";
                    do {
                        b = h[a % i] + b,
                        a = Math.floor(a / i)
                    } while (a > 0);return b
                }
                function e(a) {
                    var b = 0;
                    for (l = 0; l < a.length; l++)
                        b = b * i + j[a.charAt(l)];
                    return b
                }
                function f() {
                    var a = d(+new Date);
                    return a !== g ? (k = 0,
                    g = a) : a + "." + d(k++)
                }
                for (var g, h = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), i = 64, j = {}, k = 0, l = 0; l < i; l++)
                    j[h[l]] = l;
                f.encode = d,
                f.decode = e,
                b.exports = f
            }
            , {}]
        }, {}, [1])(1)
    });
    var v = {}
      , w = function() {
        Aa.fog = new THREE.FogExp2(14016995,.007),
        za.setClearColor(50687),
        ambientlight = new THREE.AmbientLight(12898018),
        Aa.add(ambientlight),
        v.sphere = new THREE.Mesh((new THREE.BufferGeometry).fromGeometry(new THREE.SphereGeometry(4e3)),C.sky),
        Aa.add(v.sphere),
        v.sphere.scale.y = .05,
        THREE.Water = function(a, b) {
            THREE.Mesh.call(this, a);
            var c = this;
            b = b || {};
            var d = void 0 !== b.textureWidth ? b.textureWidth : 512
              , e = void 0 !== b.textureHeight ? b.textureHeight : 512
              , f = void 0 !== b.alpha ? b.alpha : 1
              , g = void 0 !== b.time ? b.time : 0
              , h = void 0 !== b.waterNormals ? b.waterNormals : null
              , i = void 0 !== b.sunDirection ? b.sunDirection : new THREE.Vector3(.70707,.70707,0)
              , j = new THREE.Color(void 0 !== b.sunColor ? b.sunColor : 16777215)
              , k = new THREE.Color(void 0 !== b.waterColor ? b.waterColor : 8355711)
              , l = void 0 !== b.eye ? b.eye : new THREE.Vector3(0,0,0)
              , m = void 0 !== b.distortionScale ? b.distortionScale : 20
              , n = void 0 !== b.side ? b.side : THREE.FrontSide
              , o = void 0 !== b.fog && b.fog
              , p = (new THREE.Vector3,
            new THREE.Vector3,
            new THREE.Matrix4)
              , q = {
                minFilter: THREE.LinearFilter,
                magFilter: THREE.LinearFilter,
                format: THREE.RGBFormat,
                stencilBuffer: !1
            }
              , r = new THREE.WebGLRenderTarget(d,e,q);
            THREE.Math.isPowerOfTwo(d) && THREE.Math.isPowerOfTwo(e) || (r.texture.generateMipmaps = !1);
            var s = {
                uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.fog, THREE.UniformsLib.lights, {
                    normalSampler: {
                        value: null
                    },
                    mirrorSampler: {
                        value: null
                    },
                    alpha: {
                        value: 1
                    },
                    time: {
                        value: 0
                    },
                    size: {
                        value: 10
                    },
                    distortionScale: {
                        value: 0
                    },
                    textureMatrix: {
                        value: new THREE.Matrix4
                    },
                    sunColor: {
                        value: new THREE.Color(8355711)
                    },
                    sunDirection: {
                        value: new THREE.Vector3(0,.70707,0)
                    },
                    eye: {
                        value: new THREE.Vector3
                    },
                    waterColor: {
                        value: new THREE.Color(5592405)
                    }
                }]),
                vertexShader: ["uniform mat4 textureMatrix;", "uniform float time;", "varying vec4 mirrorCoord;", "varying vec4 worldPosition;", THREE.ShaderChunk.fog_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex, "void main() {", "\tmirrorCoord = modelMatrix * vec4( position, 1.0 );", "\tworldPosition = mirrorCoord.xyzw;", "\tmirrorCoord = textureMatrix * mirrorCoord;", "\tvec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );", "\tgl_Position = projectionMatrix * mvPosition;", THREE.ShaderChunk.fog_vertex, THREE.ShaderChunk.shadowmap_vertex, "}"].join("\n"),
                fragmentShader: ["uniform sampler2D mirrorSampler;", "uniform float alpha;", "uniform float time;", "uniform float size;", "uniform float distortionScale;", "uniform sampler2D normalSampler;", "uniform vec3 sunColor;", "uniform vec3 sunDirection;", "uniform vec3 eye;", "uniform vec3 waterColor;", "varying vec4 mirrorCoord;", "varying vec4 worldPosition;", "vec4 getNoise( vec2 uv ) {", "\tvec2 uv0 = ( uv / 103.0 ) + vec2(time / 17.0, time / 29.0);", "\tvec2 uv1 = uv / 107.0-vec2( time / -19.0, time / 31.0 );", "\tvec2 uv2 = uv / vec2( 8907.0, 9803.0 ) + vec2( time / 101.0, time / 97.0 );", "\tvec2 uv3 = uv / vec2( 1091.0, 1027.0 ) - vec2( time / 109.0, time / -113.0 );", "\tvec4 noise = texture2D( normalSampler, uv0 ) +", "\t\ttexture2D( normalSampler, uv1 ) +", "\t\ttexture2D( normalSampler, uv2 ) +", "\t\ttexture2D( normalSampler, uv3 );", "\treturn noise * 0.5 - 1.0;", "}", "void sunLight( const vec3 surfaceNormal, const vec3 eyeDirection, float shiny, float spec, float diffuse, inout vec3 diffuseColor, inout vec3 specularColor ) {", "\tvec3 reflection = normalize( reflect( sunDirection, surfaceNormal ) );", "\tfloat direction = max( 0.0, dot( eyeDirection, reflection ) );", "\tspecularColor -= pow( direction, shiny ) * sunColor * spec;", "\tdiffuseColor -= max( dot( sunDirection, surfaceNormal ), 0.0 ) * sunColor * diffuse;", "}", THREE.ShaderChunk.common, THREE.ShaderChunk.packing, THREE.ShaderChunk.bsdfs, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.lights_pars_begin, THREE.ShaderChunk.shadowmap_pars_fragment, THREE.ShaderChunk.shadowmask_pars_fragment, "void main() {", "\tvec4 noise = getNoise( worldPosition.xz * size );", "\tvec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );", "\tvec3 diffuseLight = vec3(0.0);", "\tvec3 specularLight = vec3(0.0);", "\tvec3 worldToEye = eye-worldPosition.xyz;", "\tvec3 eyeDirection = vec3( 0.7, 0.5, 0.9 );", "\tsunLight( surfaceNormal, eyeDirection, 100.0, 2.0, 0.5, diffuseLight, specularLight );", "\tfloat distance = length(worldToEye);", "\tvec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;", "\tvec3 reflectionSample = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ) );", "\tfloat theta = max( dot( eyeDirection, surfaceNormal ), 0.0 );", "\tfloat rf0 = 0.3;", "\tfloat reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );", "\tvec3 scatter = max( 0.0, dot( surfaceNormal, eyeDirection ) ) * waterColor;", "\tvec3 albedo = mix( ( sunColor * diffuseLight * 0.001 + scatter ) * getShadowMask(), ( vec3( 0.1 ) + reflectionSample * 0.9 + reflectionSample * specularLight ), reflectance);", "\tvec3 outgoingLight = albedo;", "\tgl_FragColor = vec4( outgoingLight, alpha );", THREE.ShaderChunk.tonemapping_fragment, THREE.ShaderChunk.fog_fragment, "}"].join("\n")
            }
              , t = new THREE.ShaderMaterial({
                fragmentShader: s.fragmentShader,
                vertexShader: s.vertexShader,
                uniforms: THREE.UniformsUtils.clone(s.uniforms),
                transparent: !1,
                lights: !0,
                side: n,
                fog: o
            });
            t.uniforms.mirrorSampler.value = r.texture,
            t.uniforms.textureMatrix.value = p,
            t.uniforms.alpha.value = f,
            t.uniforms.time.value = g,
            t.uniforms.normalSampler.value = h,
            t.uniforms.sunColor.value = j,
            t.uniforms.waterColor.value = k,
            t.uniforms.sunDirection.value = i,
            t.uniforms.distortionScale.value = m,
            t.uniforms.eye.value = l,
            c.material = t,
            c.onBeforeRender = function(a, b, c) {
                var d = a.getRenderTarget();
                a.setRenderTarget(r),
                a.clear(),
                a.setRenderTarget(d)
            }
        }
        ,
        THREE.Water.prototype = Object.create(THREE.Mesh.prototype),
        THREE.Water.prototype.constructor = THREE.Water,
        function() {
            light = new THREE.DirectionalLight(16381658,.5),
            light.position.set(0, 100, 0),
            Aa.add(light);
            var a = new THREE.PlaneBufferGeometry(6e3,6e3);
            water = new THREE.Water(a,{
                textureWidth: 512,
                textureHeight: 512,
                waterNormals: K.water,
                alpha: 1,
                sunDirection: light.position.clone().normalize(),
                sunColor: 16777215,
                waterColor: 9421810,
                distortionScale: 10,
                fog: void 0 !== Aa.fog
            }),
            water.rotation.x = -Math.PI / 2,
            Aa.add(water)
        }(),
        v.boundaryLeft = new THREE.Mesh(y.box,C.boundary),
        v.boundaryLeft.position.set(.5 * ka, 1.5, 0),
        v.boundaryLeft.scale.set(ka, .1, 3),
        Aa.add(v.boundaryLeft),
        v.boundaryRight = new THREE.Mesh(y.box,C.boundary),
        v.boundaryRight.position.set(.5 * ka, 1.5, ka),
        v.boundaryRight.scale.set(ka, .1, 3),
        Aa.add(v.boundaryRight),
        v.boundaryUp = new THREE.Mesh(y.box,C.boundary),
        v.boundaryUp.position.set(0, 1.5, .5 * ka),
        v.boundaryUp.scale.set(3, .1, ka),
        Aa.add(v.boundaryUp),
        v.boundaryDown = new THREE.Mesh(y.box,C.boundary),
        v.boundaryDown.position.set(ka, 1.5, .5 * ka),
        v.boundaryDown.scale.set(3, .1, ka),
        Aa.add(v.boundaryDown)
    }
      , x = function() {
        za && za.setSize(window.innerWidth, window.innerHeight),
        Ba && (Ba.aspect = window.innerWidth / window.innerHeight,
        Ba.updateProjectionMatrix())
    };
    window.addEventListener("resize", x, !1);
    var y = {
        box: new THREE.BoxBufferGeometry(1,1,1),
        sphere: new THREE.SphereBufferGeometry(.65),
        line: new THREE.Geometry,
        plane: new THREE.PlaneGeometry(2,2)
    }
      , z = {};
    z.player = y.box,
    z.boat = y.box,
    z.projectile = y.sphere,
    z.hook = y.plane,
    z.impact_water = y.sphere,
    z.islandradius = new THREE.CylinderBufferGeometry(.3,1,1,20,1);
    var A = function() {
        z.island = M.island.children[0].geometry,
        z.palm = M.island.children[1].geometry,
        z.dog_1 = M.dog_1.children[0].geometry,
        z.fishingrod = M.fishingrod.children[0].geometry,
        M.sloop.children[0].name = "sail",
        M.sloop.children[1].name = "body",
        M.sloop.children[2].name = "mast",
        M.bigship.children[0].name = "body",
        M.bigship.children[1].name = "mast",
        M.bigship.children[2].name = "sail",
        M.schooner.children[0].name = "body",
        M.schooner.children[1].name = "mast",
        M.schooner.children[2].name = "sail",
        M.vessel.children[0].name = "body",
        M.vessel.children[1].name = "mast",
        M.vessel.children[2].name = "sail",
        M.raft.children[1].name = "body",
        M.raft.children[0].name = "sail",
        M.trader.children[2].name = "body",
        M.trader.children[0].name = "sail",
        M.boat.children[2].name = "body",
        M.boat.children[0].name = "sail",
        M.destroyer.children[1].name = "body",
        M.destroyer.children[0].name = "sail",
        M.raft.getObjectByName("body").material = C.boat,
        M.raft.getObjectByName("sail").material = C.sail,
        M.trader.getObjectByName("body").material = C.boat,
        M.trader.getObjectByName("sail").material = C.sail,
        M.boat.getObjectByName("body").material = C.boat,
        M.boat.getObjectByName("sail").material = C.sailRed,
        M.destroyer.getObjectByName("body").material = C.boat,
        M.destroyer.getObjectByName("sail").material = C.sail,
        ua(),
        ya()
    }
      , B = function() {
        C.cannonball = new THREE.SpriteMaterial({
            map: K.cannonball,
            color: 16777215,
            fog: !0
        }),
        C.fishingrod = new THREE.MeshPhongMaterial({
            color: 16777215,
            map: K.props_diffuse1
        }),
        C.colorset = new THREE.MeshLambertMaterial({
            map: K.colorset,
            side: THREE.DoubleSide
        }),
        C.hook = new THREE.MeshLambertMaterial({
            map: K.hook,
            side: THREE.DoubleSide,
            transparent: !0
        }),
        C.colorset_captain = new THREE.MeshLambertMaterial({
            map: K.colorset,
            side: THREE.DoubleSide,
            emissive: 1842204
        }),
        C.transparentDetails = new THREE.MeshLambertMaterial({
            map: K.colorset,
            side: THREE.DoubleSide,
            opacity: .025,
            transparent: !0
        }),
        C.crate = new THREE.MeshLambertMaterial({
            map: K.crate
        }),
        C.chest = new THREE.MeshLambertMaterial({
            map: K.chest
        }),
        K.water.wrapS = K.water.wrapT = THREE.RepeatWrapping
    }
      , C = {};
    C.player = new THREE.MeshLambertMaterial({
        color: 16359458
    }),
    C.boat = new THREE.MeshLambertMaterial({
        color: 9064510
    }),
    C.boat.side = THREE.DoubleSide,
    C.sail = new THREE.MeshLambertMaterial({
        color: 16777215
    }),
    C.sail.side = THREE.DoubleSide,
    C.sailRed = new THREE.MeshLambertMaterial({
        color: 14242639
    }),
    C.sailRed.side = THREE.DoubleSide,
    C.splinter = new THREE.MeshLambertMaterial({
        color: 13479055,
        flatShading: !0
    }),
    C.projectile = new THREE.MeshPhongMaterial({
        color: 1972776,
        shininess: .9,
        flatShading: !0
    }),
    C.boundary = new THREE.MeshLambertMaterial({
        color: 11856895,
        flatShading: !0,
        opacity: .8,
        transparent: !0
    }),
    C.impact_water = new THREE.MeshBasicMaterial({
        color: 15331839,
        flatShading: !0,
        opacity: .9,
        transparent: !0
    }),
    C.islandradius = new THREE.MeshBasicMaterial({
        color: 12317695,
        flatShading: !1,
        opacity: .2,
        transparent: !0
    }),
    C.smoke_enemy = new THREE.MeshBasicMaterial({
        color: 16763594,
        flatShading: !0,
        opacity: .7,
        transparent: !0
    }),
    C.smoke_friendly = new THREE.MeshBasicMaterial({
        color: 13494015,
        flatShading: !0,
        opacity: .7,
        transparent: !0
    }),
    C.smoke_player = new THREE.MeshBasicMaterial({
        color: 14687774,
        flatShading: !0,
        opacity: .5,
        transparent: !0
    }),
    C.fishing_line = new THREE.MeshBasicMaterial({
        color: 0,
        flatShading: !0,
        opacity: .5,
        transparent: !0
    }),
    C.sky = new THREE.MeshBasicMaterial({
        color: 709114,
        side: THREE.BackSide
    });
    var D = {};
    D.myself = new THREE.Color(65280),
    D.player = new THREE.Color(16777215),
    D.captain = new THREE.Color(16711680);
    var E = {};
    E.modeloffsetCrab = new THREE.Vector3(0,.9,0),
    E.modeloffsetFishShellClam = new THREE.Vector3(0,.3,0),
    E.sizeEntity = new THREE.Vector3(1,1,1),
    E.sizePlayer = new THREE.Vector3(1,1,1),
    E.sizeProjectile = new THREE.Vector3(.3,.3,.3);
    var F = new THREE.TextureLoader
      , G = new THREE.FileLoader
      , H = new THREE.OBJLoader
      , I = new THREE.TGALoader
      , J = new THREE.MTLLoader
      , K = {}
      , L = {}
      , M = {}
      , N = {}
      , O = {};
    O.promises = [],
    O.compute = function(a) {
        return O.promises.push(new Promise(function(b, c) {
            a(),
            b()
        }
        )),
        O.promises[O.promises.length - 1]
    }
    ,
    O.loadTexture = function(a) {
        return O.promises.push(new Promise(function(b, c) {
            var d = a.split("/").pop().split(".")
              , e = d.pop()
              , f = d.pop();
            if ("tga" === e)
                return void I.load(a, function(a) {
                    K[f] = a,
                    b()
                });
            if ("mtl" === e) {
                var g = a.split("/");
                return g.pop(),
                g = g.join("/") + "/",
                J.setPath(g),
                void J.load(f + "." + e, function(a) {
                    a.preload(),
                    H.setMaterials(a),
                    b()
                })
            }
            F.load(a, function(c) {
                K[a.substring(a.lastIndexOf("/") + 1, a.length).replace(/\.[^/.]+$/, "")] = c,
                b()
            }, function(a) {}, function(a) {})
        }
        )),
        O.promises[O.promises.length - 1]
    }
    ,
    O.loadModel = function(a) {
        return O.promises.push(new Promise(function(b, c) {
            H.load(a, function(c) {
                M[a.substring(a.lastIndexOf("/") + 1, a.length).replace(/\.[^/.]+$/, "")] = c,
                b()
            })
        }
        )),
        O.promises[O.promises.length - 1]
    }
    ,
    O.loadObjWithMtl = function(a) {
        var b = new THREE.OBJLoader
          , c = new THREE.MTLLoader
          , d = a.split("/")
          , e = d.pop().split(".")
          , f = (e.pop(),
        e.pop());
        return d = d.join("/") + "/",
        O.promises.push(new Promise(function(e, g) {
            c.setPath(d),
            c.load(f + ".mtl", function(c) {
                c.preload(),
                b.setMaterials(c),
                b.load(a, function(b) {
                    M[a.substring(a.lastIndexOf("/") + 1, a.length).replace(/\.[^/.]+$/, "")] = b,
                    e()
                })
            })
        }
        )),
        O.promises[O.promises.length - 1]
    }
    ,
    O.loadShader = function(a) {
        return O.promises.push(new Promise(function(b, c) {
            G.load(a, function(c) {
                L[a.substring(a.lastIndexOf("/") + 1, a.length)] = c,
                b()
            })
        }
        )),
        O.promises[O.promises.length - 1]
    }
    ,
    O.loadJSON = function(a) {
        return O.promises.push(new Promise(function(b, c) {
            $.getJSON(a, function(c) {
                N[a.substring(a.lastIndexOf("/") + 1, a.length).replace(/\.[^/.]+$/, "")] = c,
                b()
            })
        }
        )),
        O.promises[O.promises.length - 1]
    }
    ,
    O.onFinish = function(a) {
        Promise.all(O.promises).then(function(b) {
            a && a()
        })
    }
    ;
    var P, Q = !1, R = !1, S = !1, T = !1, U = !1, V = !1, W = function(a) {
        var b = {
            is_unordered: !0,
            prevent_repeat: !0,
            prevent_default: !0
        };
        P = new window.keypress.Listener(document.getElementById("body"),b),
        $("input[type=text], input[type=number], input[type=password]").bind("focus", function() {
            P.stop_listening()
        }).bind("blur", function() {
            P.listen()
        }),
        document.onkeyup = function(a) {
            a = a || window.event,
            27 === a.keyCode ? Ca && (Ca.target = void 0) : 13 === a.keyCode ? $("#chat-message").is(":focus") ? $("#chat-message").blur() : $("#chat-message").focus() : 38 !== a.keyCode || $("#chat-message").is(":focus") || $("#crew-name-edit-input").is(":focus") ? 39 !== a.keyCode || $("#chat-message").is(":focus") || $("#crew-name-edit-input").is(":focus") ? 40 !== a.keyCode || $("#chat-message").is(":focus") || $("#crew-name-edit-input").is(":focus") ? 37 !== a.keyCode || $("#chat-message").is(":focus") || $("#crew-name-edit-input").is(":focus") ? 16 !== a.keyCode || $("#chat-message").is(":focus") || $("#crew-name-edit-input").is(":focus") || $("#player-leaderboard").hide() : Q = !1 : T = !1 : R = !1 : S = !1
        }
        ,
        Y()
    };
    document.onkeydown = function(a) {
        if (a = a || window.event,
        38 !== a.keyCode || $("#chat-message").is(":focus") || $("#clan-request").is(":focus") || $("#crew-name-edit-input").is(":focus"))
            if (39 !== a.keyCode || $("#chat-message").is(":focus") || $("#clan-request").is(":focus") || $("#crew-name-edit-input").is(":focus"))
                if (40 !== a.keyCode || $("#chat-message").is(":focus") || $("#clan-request").is(":focus") || $("#crew-name-edit-input").is(":focus"))
                    if (37 !== a.keyCode || $("#chat-message").is(":focus") || $("#clan-request").is(":focus") || $("#crew-name-edit-input").is(":focus"))
                        if ($("#chat-message").is(":focus") || $("#clan-request").is(":focus") || 49 !== a.keyCode && 97 !== a.keyCode || $("#crew-name-edit-input").is(":focus"))
                            if ($("#chat-message").is(":focus") || $("#clan-request").is(":focus") || 50 !== a.keyCode && 98 !== a.keyCode || $("#crew-name-edit-input").is(":focus"))
                                if (77 !== a.keyCode || $("#chat-message").is(":focus") || $("#clan-request").is(":focus") || $("#crew-name-edit-input").is(":focus"))
                                    if (16 !== a.keyCode || $("#chat-message").is(":focus") || $("#clan-request").is(":focus") || $("#crew-name-edit-input").is(":focus"))
                                        if (81 !== a.keyCode || $("#chat-message").is(":focus") || $("#clan-request").is(":focus") || $("#crew-name-edit-input").is(":focus"))
                                            if (188 !== a.keyCode || $("#chat-message").is(":focus") || $("#clan-request").is(":focus") || $("#crew-name-edit-input").is(":focus")) {
                                                if (51 === a.keyCode || 99 === a.keyCode) {
                                                    if (Pa.hideSuggestionBox && void 0 !== Ca && void 0 !== Ca.parent && 1 !== Ca.parent.netType && (ub.emit("purchase", {
                                                        type: 0,
                                                        id: "1"
                                                    }, function(a) {
                                                        a && console.warn(a)
                                                    }),
                                                    Ca.gold > 500)) {
                                                        GameAnalytics("addDesignEvent", "Game:Session:PurchasedBoat"),
                                                        $("#raft-shop-div").hide(),
                                                        $("#krew-div").show();
                                                        var b = document.getElementById("suggestion-ui").innerHTML
                                                          , c = $("#toggle-shop-modal-button").attr("data-content", b).data("bs.popover");
                                                        void 0 !== c && (c.setContent(),
                                                        $("#toggle-shop-modal-button").popover("hide"))
                                                    }
                                                } else if (a.keyCode >= 53 && a.keyCode <= 55 && Ca && Ca.geometry && !$("#chat-message").is(":focus") && !$("#clan-request").is(":focus") && !$("#make-deposit").is(":focus") && !$("#take-deposit").is(":focus")) {
                                                    var d = EXPERIENCEPOINTSCOMPONENT.keys[a.keyCode];
                                                    EXPERIENCEPOINTSCOMPONENT.clearStore().setStore(function(a) {
                                                        a.allocatedPoints[d] = 1,
                                                        EXPERIENCEPOINTSCOMPONENT.allocatePoints(function() {
                                                            Pa.updateUiExperience()
                                                        })
                                                    })
                                                }
                                            } else
                                                $("#show-chat").is(":visible") ? ($("#show-chat").hide(),
                                                $("#chat-div").show()) : ($("#show-chat").show(),
                                                $("#chat-div").hide());
                                        else
                                            $("#quests-modal").is(":visible") ? $("#quests-modal").hide() : document.getElementById("toggle-quest-button").click();
                                    else
                                        $("#player-leaderboard").show();
                                else
                                    $("#minimap-container").is(":visible") ? $("#minimap-container").hide() : $("#minimap-container").show();
                            else
                                Ca && Ca.geometry && 1 !== Ca.activeWeapon && (ub.emit("changeWeapon", 1),
                                Ca.isFishing = !1);
                        else
                            Ca && Ca.geometry && 0 !== Ca.activeWeapon && (ub.emit("changeWeapon", 0),
                            Ca.isFishing = !1);
                    else
                        Q = !0;
                else
                    T = !0;
            else
                R = !0;
        else
            S = !0
    }
    ;
    var X = function() {
        ub.emit("anchor"),
        Ja = 0,
        $("#docking-modal").hide(),
        $("#supply").tooltip("show"),
        "Labrador" === ca[Ca.parent.anchorIslandId].name && $("#toggle-bank-modal-button").removeClass("btn btn-md disabled toggle-shop-modal-button").addClass("btn btn-md enabled toggle-shop-modal-button").attr("data-tooltip", "Deposit or withdraw gold"),
        $("#toggle-shop-modal-button").removeClass("btn btn-md disabled toggle-shop-modal-button").addClass("btn btn-md enabled toggle-shop-modal-button"),
        $("#toggle-krew-list-modal-button").removeClass("btn btn-md disabled toggle-krew-list-modal-button").addClass("btn btn-md enabled toggle-krew-list-modal-button"),
        $("#exit-island-button").is(":visible") || $("#exit-island-button").show(),
        $("#recruiting-div").fadeIn("slow"),
        controls.unLockMouseLook()
    }
      , Y = function() {
        P.reset(),
        P.register_combo({
            keys: "w",
            on_keydown: function() {
                S = !0
            },
            on_release: function() {
                S = !1
            }
        }),
        P.register_combo({
            keys: "s",
            on_keydown: function() {
                T = !0
            },
            on_release: function() {
                T = !1
            }
        }),
        P.register_combo({
            keys: "d",
            on_keydown: function() {
                R = !0
            },
            on_release: function() {
                R = !1
            }
        }),
        P.register_combo({
            keys: "a",
            on_keydown: function() {
                Q = !0
            },
            on_release: function() {
                Q = !1
            }
        }),
        P.register_combo({
            keys: "k",
            on_keydown: function() {
                V = !0
            },
            on_release: function() {
                V = !1
            }
        }),
        P.register_combo({
            keys: "space",
            on_keydown: function() {
                U = !0,
                Ca.jump_count += 1,
                50 === Ca.jump_count && Pa.showCenterMessage("Jumping Hero! New quest available", 3)
            },
            on_release: function() {
                U = !1
            }
        }),
        P.register_combo({
            keys: "c",
            on_release: function() {
                Ca && Ca.parent && (1 !== Ca.parent.shipState && -1 !== Ca.parent.shipState || "Cancel (c)" !== bb.text() ? 3 === Ca.parent.shipState && hb() : (ub.emit("exitIsland"),
                $a.text("Countdown...")))
            }
        }),
        P.register_combo({
            keys: "z",
            on_release: function() {
                Ca && Ca.parent && (1 === Ca.parent.shipState || -1 === Ca.parent.shipState) && $("#docking-modal-button").hasClass("enabled") && X()
            }
        }),
        P.register_combo({
            keys: "tab",
            on_release: function() {
                zb ? $("#li-clan-chat").is(":visible") ? rb() : qb() : xb ? qb() : pb()
            }
        })
    }
      , Z = function() {
        var a = this
          , b = Math.PI / 2;
        this.blocker = document.getElementById("blocker"),
        this.locked = !1,
        this.lmb = !1,
        this.rmb = !1,
        this.cameraX = 0,
        this.cameraY = Math.PI,
        this.cameraZoom = 8,
        this.mouse = new THREE.Vector2,
        this.mouseOld = new THREE.Vector2,
        this.mouseElement = void 0,
        this.isMouseLookLocked = !1,
        this.lmbLastDownTime = 0,
        this.lastX = 0,
        this.lastY = 0,
        this.mouseMoveUnlocked = function(b) {
            a.mouseElement = b.target.getAttribute ? b.target.getAttribute("data-infopanel") : null,
            a.mouse.x = b.clientX / window.innerWidth * 2 - 1,
            a.mouse.y = -b.clientY / window.innerHeight * 2 + 1,
            _ || (a.lastX = b.x,
            a.lastY = b.y)
        }
        ,
        this.mouseMoveLocked = function(c) {
            c.preventDefault();
            var d = c.movementX || c.mozMovementX || c.webkitMovementX || 0
              , e = c.movementY || c.mozMovementY || c.webkitMovementY || 0;
            _ && (a.cameraY -= .0023 * d,
            a.cameraX -= .0016 * e),
            _ || (d = c.x - a.lastX,
            e = c.y - a.lastY,
            a.cameraY -= .0082 * d,
            a.cameraX -= .0064 * e,
            a.lastX = c.x,
            a.lastY = c.y),
            a.cameraX = Math.max(-b, Math.min(b, a.cameraX))
        }
        ,
        this.onMouseDown = function(b) {
            switch (b.button) {
            case 0:
                a.lmb = !0,
                this.lmbLastDownTime = performance.now();
                break;
            case 2:
                a.rmb = !0
            }
            Ca && (a.lmb || a.rmb) && b.target === za.domElement && a.lockMouseLook()
        }
        ,
        this.onMouseUp = function(b) {
            switch (b.button) {
            case 0:
                a.lmb = !1;
                break;
            case 2:
                a.rmb = !1
            }
            return !1
        }
        ,
        this.mouseWheelEvent = function(b) {
            if (b.target == za.domElement || b.target == document.body) {
                b.preventDefault();
                var c = b.wheelDelta ? b.wheelDelta : -b.detail;
                a.cameraZoom -= c > 0 ? 1 : -1,
                a.cameraZoom = Math.min(30, Math.max(a.cameraZoom, 3))
            }
        }
        ,
        _ ? document.addEventListener("mousemove", this.mouseMoveUnlocked, !1) : (this.locked = !0,
        document.addEventListener("mousemove", this.mouseMoveLocked, !1)),
        document.addEventListener("mousedown", this.onMouseDown),
        document.addEventListener("mouseup", this.onMouseUp),
        document.addEventListener("mousewheel", this.mouseWheelEvent),
        document.addEventListener("DOMMouseScroll", this.mouseWheelEvent),
        this.lockMouseLook = function() {
            if (_) {
                var a = document.body;
                a.requestPointerLock = a.requestPointerLock || a.mozRequestPointerLock || a.webkitRequestPointerLock,
                a.requestPointerLock()
            }
            this.isMouseLookLocked = !0
        }
        ,
        this.unLockMouseLook = function() {
            _ && (document.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock,
            document.exitPointerLock()),
            this.isMouseLookLocked = !1
        }
    };
    window.oncontextmenu = function() {
        return !1
    }
    ;
    var _ = "pointerLockElement"in document || "mozPointerLockElement"in document || "webkitPointerLockElement"in document;
    if (_) {
        var aa = document.body
          , ba = function(a) {
            document.pointerLockElement === aa || document.mozPointerLockElement === aa || document.webkitPointerLockElement === aa ? (controls.locked = !0,
            document.addEventListener("mousemove", controls.mouseMoveLocked, !1),
            document.removeEventListener("mousemove", controls.mouseMoveUnlocked, !1)) : (controls.locked = !1,
            document.addEventListener("mousemove", controls.mouseMoveUnlocked, !1),
            document.removeEventListener("mousemove", controls.mouseMoveLocked, !1))
        };
        document.addEventListener("pointerlockchange", ba, !1),
        document.addEventListener("mozpointerlockchange", ba, !1),
        document.addEventListener("webkitpointerlockchange", ba, !1)
    } else
        console.log("ERROR: Your browser does seems to not support the pointer lock API.");
    var ca = {}
      , da = {}
      , ea = {}
      , fa = {}
      , ha = {}
      , ia = {}
      , ja = {}
      , ka = 1700
      , la = function(a) {
        for (e in ca)
            ca.hasOwnProperty(e) && ca[e].tick(a)
    }
      , ma = function(a, b, c) {
        return (1 - c) * a + c * b
    }
      , na = function() {
        var a = new THREE.Frustum;
        return function(b, c) {
            return void 0 !== b.position && (c.updateMatrix(),
            c.updateMatrixWorld(),
            a.setFromMatrix((new THREE.Matrix4).multiplyMatrices(c.projectionMatrix, c.matrixWorldInverse)),
            a.containsPoint(b.position))
        }
    }();
    h.prototype.createProperties = function() {
        this.position = new THREE.Vector3(0,0,0),
        this.velocity = new THREE.Vector3(0,0,0),
        this.size = new THREE.Vector3(1,1,1),
        this.rotation = 0,
        this.collisionRadius = 1,
        this.parent = void 0,
        this.children = {},
        this.isNew = !0,
        this.netType = -1,
        this.sendSnap = !0,
        this.sendDelta = !0,
        this.sendCreationSnapOnDelta = !0,
        this.last = {},
        this.lastType = {},
        this.muted = [],
        this.modelscale = new THREE.Vector3(1,1,1),
        this.modeloffset = new THREE.Vector3(0,0,0),
        this.modelrotation = new THREE.Vector3(0,0,0),
        this.baseGeometry = void 0,
        this.baseMaterial = void 0
    }
    ,
    h.prototype.tick = function(a) {
        this.logic(a),
        this.position.x += this.velocity.x * a,
        this.position.z += this.velocity.z * a,
        this.clientlogic(a)
    }
    ,
    h.prototype.getSnap = function(a) {
        if (a || this.sendSnap) {
            void 0 === this.rotation && console.log(this);
            var b = {
                p: this.parent ? this.parent.id : void 0,
                n: this.netType,
                x: this.position.x.toFixed(2),
                y: this.position.y.toFixed(2),
                z: this.position.z.toFixed(2),
                r: (this.rotation || 0).toFixed(2),
                t: this.getTypeSnap()
            };
            if (0 == this.netType && this.isNew) {
                b.name = this.name,
                b.id = this.id;
                for (playerId in fa) {
                    var c = fa[playerId];
                    c && ca[playerId] && ca[playerId].setName(c)
                }
                this.isNew = !1
            }
            return b
        }
    }
    ,
    h.prototype.getDelta = function() {
        if (this.sendDelta || this.sendCreationSnapOnDelta) {
            if (this.sendCreationSnapOnDelta) {
                var a = this.getSnap(!0);
                return this.sendCreationSnapOnDelta = !1,
                a
            }
            var b = {
                p: this.deltaCompare("p", this.parent ? this.parent.id : void 0),
                n: this.deltaCompare("n", this.netType),
                x: this.deltaCompare("x", Number(this.position.x.toFixed(2))),
                y: this.deltaCompare("y", Number(this.position.y.toFixed(2))),
                z: this.deltaCompare("z", Number(this.position.z.toFixed(2))),
                r: this.deltaCompare("r", Number(this.rotation.toFixed(2))),
                t: this.getTypeDelta()
            };
            return oa(b) && (b = void 0),
            b
        }
    }
    ,
    h.prototype.parseSnap = function(a, b) {
        if (a.p && ca[a.p] && this.parent != ca[a.p]) {
            var c = ca[a.p]
              , d = this.parent;
            if (myPlayerId === b && c !== d && Pa.setActiveBtn(a.p),
            5 !== c.netType) {
                if (void 0 !== this.geometry && void 0 !== c.geometry && d && void 0 !== d.geometry)
                    var e = c.geometry.worldToLocal(d.geometry.localToWorld(this.geometry.position));
                else
                    var e = c.toLocal(this.worldPos());
                this.position.x = e.x,
                this.position.y = e.y,
                this.position.z = e.z
            }
            c.addChildren(this),
            c.geometry.add(this.geometry),
            this.geometry.position.set(this.position.x, this.position.y, this.position.z),
            1 === c.netType && (c.krewMembers[this.id] = this.geometry.children[0]),
            Ca && !1 === Ca.isCaptain && 5 === Ca.parent.netType && 5 === c.netType && void 0 !== d && 1 === d.netType && 1 === d.shipState && ($("#abandon-ship-button").hide(),
            Xa()),
            this.isPlayer && this.parent && !this.isCaptain && 1 === this.parent.netType && (3 === this.parent.shipState && ($("#exit-island-button").hide(),
            $("#invite-div").hide()),
            $("#abandon-ship-button").show())
        }
        void 0 !== a.t && this.parseTypeSnap(a.t),
        this.isPlayer || (void 0 !== a.x && (this.position.x = parseFloat(a.x)),
        void 0 !== a.y && (this.position.y = parseFloat(a.y)),
        void 0 !== a.z && (this.position.z = parseFloat(a.z)),
        void 0 !== a.r && (this.rotation = parseFloat(a.r))),
        void 0 !== a.del && (this.onDestroy(),
        delete ca[this.id],
        delete fa[this.id]),
        void 0 !== a.t && void 0 !== a.t.e && null !== a.t.e && (void 0 !== a.t.e.l && a.t.e.l != this.level && (this.level = parseInt(a.t.e.l)),
        this.isPlayer && (void 0 !== a.t.e.e && a.t.e.e != this.experience && (this.experience = parseInt(a.t.e.e),
        this.experienceNeedsUpdate = !0,
        this.updateExperience()),
        void 0 !== a.t.e.p.fr && a.t.e.p.fr != this.points.fireRate && (this.points.fireRate = parseInt(a.t.e.p.fr)),
        void 0 !== a.t.e.p.ds && a.t.e.p.ds != this.points.distance && (this.points.distance = parseInt(a.t.e.p.ds)),
        void 0 !== a.t.e.p.dm && a.t.e.p.dm != this.points.damage && (this.points.damage = parseInt(a.t.e.p.dm))))
    }
    ,
    h.prototype.addChildren = function(a) {
        this.children[a.id] = a,
        a.parent = this
    }
    ,
    h.prototype.hasChild = function(a) {
        for (key in this.children)
            if (this.children[key].id == a)
                return !0;
        return !1
    }
    ,
    h.prototype.deltaCompare = function(a, b) {
        if (this.last[a] !== b && this.muted.indexOf(a) < 0)
            return this.last[a] = b,
            b
    }
    ,
    h.prototype.deltaTypeCompare = function(a, b) {
        if (this.lastType[a] !== b)
            return this.lastType[a] = b,
            b
    }
    ,
    h.prototype.worldPos = function() {
        var a = new THREE.Vector3;
        return a.copy(this.position),
        void 0 !== this.parent && (a.applyAxisAngle(new THREE.Vector3(0,1,0), this.parent.rotation),
        a.add(this.parent.worldPos())),
        a
    }
    ,
    h.prototype.toLocal = function(a) {
        var b = new THREE.Vector3;
        return b.copy(a),
        b.sub(this.position),
        b.applyAxisAngle(new THREE.Vector3(0,1,0), -this.rotation),
        b
    }
    ,
    h.prototype.onDestroy = function() {
        if (void 0 != this.parent) {
            var a = this.parent;
            void 0 != a.children[this.id] && delete a.children[this.id]
        }
        this.onClientDestroy(),
        void 0 !== ha[this.id] && delete ha[this.id],
        void 0 !== ia[this.id] && delete ia[this.id]
    }
    ;
    var oa = function(a) {
        if (0 === Object.keys(a).length && a.constructor === Object)
            return !0;
        for (p in a)
            if (a.hasOwnProperty(p) && void 0 !== a[p])
                return !1;
        return !0
    }
      , pa = {
        rum: {
            drainRate: 0,
            cargoSpace: 5
        },
        coffee: {
            drainRate: 0,
            cargoSpace: 8
        },
        spice: {
            drainRate: 0,
            cargoSpace: 8
        },
        silk: {
            drainRate: 0,
            cargoSpace: 12
        }
    }
      , qa = function(a, b) {
        if (void 0 == ca[a]) {
            switch (b.n) {
            default:
                break;
            case 0:
                ca[a] = new m(b),
                a == myPlayerId && (Ca = ca[a],
                Ca.isPlayer = !0);
                break;
            case 1:
                ca[a] = new j(b.t.b);
                break;
            case 2:
                ca[a] = new s;
                break;
            case 3:
                ca[a] = new n(parseInt(b.t.a),parseFloat(b.x),parseFloat(b.z));
                break;
            case 4:
                ca[a] = new q(parseInt(b.t.s),parseFloat(b.x),parseFloat(b.z),parseInt(b.t.t));
                break;
            case 5:
                ca[a] = new r(parseInt(b.t.t),parseFloat(b.x),parseFloat(b.z),b.t);
                break;
            case 6:
                ca[a] = new Bot
            }
            void 0 !== ca[a] && (ca[a].id = e,
            ca[a].clientInit())
        }
        void 0 !== ca[a] && ca[a].parseSnap(b, a)
    }
      , ra = {
        0: {
            id: 0,
            name: "Wood Plank",
            hp: 25,
            turnspeed: 1,
            price: 501,
            maxKrewCapacity: 1,
            cargoSize: 50,
            baseheight: 1.4,
            width: 4,
            depth: 5.5,
            arcFront: 0,
            inertia: .1,
            radius: 5,
            speed: 6.5,
            labelHeight: 7,
            regeneration: 1,
            body: "raft",
            sail: void 0,
            scale: [1.2, 1, 1.5],
            offset: [0, -1, 0],
            rotation: [0, 0, 0]
        },
        1: {
            id: 1,
            image: '<img src="./assets/img/raft.png" style="height: 30px">',
            name: "Raft 1",
            hp: 75,
            turnspeed: 1.2,
            price: 500,
            maxKrewCapacity: 1,
            cargoSize: 200,
            baseheight: 1.4,
            width: 4,
            depth: 5.5,
            arcFront: .3,
            inertia: .1,
            radius: 5,
            speed: 6,
            labelHeight: 10,
            regeneration: 1,
            body: "raft",
            sail: "raft",
            scale: [1.7, 1.7, 1.7],
            offset: [0, -1, 0],
            rotation: [0, 0, 0]
        },
        2: {
            id: 2,
            image: '<img src="./assets/img/raft.png" style="height: 35px">',
            name: "Raft 2",
            hp: 150,
            turnspeed: 1,
            price: 1300,
            maxKrewCapacity: 2,
            cargoSize: 300,
            baseheight: 1.4,
            width: 4.5,
            depth: 6,
            arcFront: .3,
            inertia: .1,
            radius: 5,
            speed: 5.9,
            labelHeight: 10,
            regeneration: 1,
            body: "raft",
            sail: "raft",
            scale: [1.7, 1.7, 1.7],
            offset: [0, -1, 0],
            rotation: [0, 0, 0]
        },
        3: {
            id: 3,
            image: '<img src="./assets/img/raft.png" style="height: 40px">',
            name: "Raft 3",
            hp: 200,
            turnspeed: .9,
            price: 2400,
            maxKrewCapacity: 3,
            cargoSize: 400,
            baseheight: 1.4,
            width: 5,
            depth: 6.5,
            arcFront: .3,
            inertia: .1,
            radius: 5,
            speed: 5.8,
            labelHeight: 10,
            regeneration: 1,
            body: "raft",
            sail: "raft",
            scale: [1.7, 1.7, 1.7],
            offset: [0, -1, 0],
            rotation: [0, 0, 0]
        },
        4: {
            id: 4,
            image: '<img src="./assets/img/trader.png" style="height: 30px">',
            name: "Trader 1",
            hp: 400,
            turnspeed: .5,
            price: 4350,
            maxKrewCapacity: 4,
            cargoSize: 2e3,
            baseheight: 3,
            width: 7,
            depth: 12.5,
            arcFront: .3,
            inertia: .5,
            radius: 10,
            speed: 5.4,
            labelHeight: 12,
            regeneration: 1,
            body: "trader",
            sail: "trader",
            scale: [5.5, 5.5, 5.5],
            offset: [0, -4.5, 1],
            rotation: [0, 0, 0]
        },
        5: {
            id: 5,
            image: '<img src="./assets/img/boat.png" style="height: 30px">',
            name: "Boat 1",
            hp: 450,
            turnspeed: .7,
            price: 6900,
            maxKrewCapacity: 5,
            cargoSize: 500,
            baseheight: 3,
            width: 7,
            depth: 12.5,
            arcFront: .3,
            inertia: .5,
            radius: 10,
            speed: 5.8,
            labelHeight: 12,
            regeneration: 1,
            body: "boat",
            sail: "boat",
            scale: [5, 5, 5],
            offset: [0, -4.5, 1],
            rotation: [0, 0, 0]
        },
        6: {
            id: 6,
            image: '<img src="./assets/img/boat.png" style="height: 35px">',
            name: "Boat 2",
            hp: 600,
            turnspeed: .7,
            price: 11e3,
            maxKrewCapacity: 6,
            cargoSize: 600,
            baseheight: 3,
            width: 7,
            depth: 12.5,
            arcFront: .3,
            inertia: .5,
            radius: 10,
            speed: 5.9,
            labelHeight: 12,
            regeneration: 1,
            body: "boat",
            sail: "boat",
            scale: [5, 5, 5],
            offset: [0, -4.5, 1],
            rotation: [0, 0, 0]
        },
        7: {
            id: 7,
            image: '<img src="./assets/img/boat.png" style="height: 40px">',
            name: "Boat 3",
            hp: 750,
            turnspeed: .7,
            price: 16e3,
            maxKrewCapacity: 7,
            cargoSize: 700,
            baseheight: 3,
            width: 7,
            depth: 12.5,
            arcFront: .3,
            inertia: .5,
            radius: 10,
            speed: 6,
            labelHeight: 12,
            regeneration: 1,
            body: "boat",
            sail: "boat",
            scale: [5, 5, 5],
            offset: [0, -4.5, 1],
            rotation: [0, 0, 0]
        },
        8: {
            id: 8,
            image: '<img src="./assets/img/destroyer.png" style="height: 35px">',
            name: "Destroyer 1",
            hp: 1200,
            turnspeed: .7,
            price: 5e4,
            maxKrewCapacity: 12,
            cargoSize: 1e3,
            baseheight: 5,
            width: 11.5,
            depth: 26,
            arcFront: .1,
            inertia: 1,
            radius: 15,
            speed: 5.9,
            labelHeight: 21,
            regeneration: 1,
            body: "destroyer",
            sail: "destroyer",
            scale: [6, 6, 6],
            offset: [0, -8, 0],
            rotation: [0, 0, 0]
        },
        9: {
            id: 9,
            image: '<img src="./assets/img/destroyer.png" style="height: 40px">',
            name: "Destroyer 2",
            hp: 1800,
            turnspeed: .7,
            price: 8e4,
            maxKrewCapacity: 14,
            cargoSize: 1300,
            baseheight: 5,
            width: 11.5,
            depth: 26,
            arcFront: .1,
            inertia: 1,
            radius: 15,
            speed: 5.8,
            labelHeight: 21,
            regeneration: 1,
            body: "destroyer",
            sail: "destroyer",
            scale: [6, 6, 6],
            offset: [0, -8, 0],
            rotation: [0, 0, 0]
        },
        10: {
            id: 10,
            image: '<img src="./assets/img/destroyer.png" style="height: 45px">',
            name: "Destroyer 3",
            hp: 2600,
            turnspeed: .7,
            price: 13e4,
            maxKrewCapacity: 16,
            cargoSize: 1600,
            baseheight: 5,
            width: 11.5,
            depth: 26,
            arcFront: .1,
            inertia: 1,
            radius: 15,
            speed: 5.7,
            labelHeight: 21,
            regeneration: 1,
            body: "destroyer",
            sail: "destroyer",
            scale: [6, 6, 6],
            offset: [0, -8, 0],
            rotation: [0, 0, 0]
        },
        11: {
            id: 11,
            image: '<img src="./assets/img/baby_fancy.png" style="height: 35px">',
            name: "Baby Fancy",
            hp: 300,
            turnspeed: 1,
            price: 8e3,
            maxKrewCapacity: 3,
            cargoSize: 300,
            baseheight: 1.4,
            width: 4,
            depth: 6.5,
            arcFront: .3,
            inertia: .1,
            radius: 8,
            speed: 5.9,
            labelHeight: 10,
            regeneration: .5,
            body: "sloop",
            sail: "sloop",
            mast: "sloop",
            scale: [.15, .18, .12],
            offset: [0, 5.5, 0],
            rotation: [0, 0, 0],
            availableAt: ["Spain", "Brazil"]
        },
        12: {
            id: 12,
            image: '<img src="./assets/img/royal_fortune.png" style="height: 35px">',
            name: "Royal Fortune",
            hp: 1e3,
            turnspeed: .5,
            price: 7e4,
            maxKrewCapacity: 15,
            cargoSize: 1200,
            baseheight: 4,
            width: 10,
            depth: 26,
            arcFront: .3,
            inertia: .5,
            radius: 15,
            speed: 6,
            labelHeight: 12,
            regeneration: 1,
            body: "schooner",
            sail: "schooner",
            mast: "schooner",
            scale: [.15, .15, .15],
            offset: [2, 11.6, 3],
            rotation: [0, Math.PI / 2, 0],
            availableAt: ["Labrador", "Spain"]
        },
        13: {
            id: 13,
            image: '<img src="./assets/img/calm_spirit.png" style="height: 35px">',
            name: "Calm Spirit",
            hp: 1800,
            turnspeed: .7,
            price: 12e4,
            maxKrewCapacity: 18,
            cargoSize: 2e3,
            baseheight: 4,
            width: 10,
            depth: 30,
            arcFront: .3,
            inertia: .5,
            radius: 16,
            speed: 5.9,
            labelHeight: 12,
            regeneration: 1,
            body: "vessel",
            sail: "vessel",
            mast: "vessel",
            scale: [.1, .1, .1],
            offset: [1, 10, 5],
            rotation: [0, Math.PI / 2, 0],
            availableAt: ["Spain", "Guinea"]
        },
        14: {
            id: 14,
            image: '<img src="./assets/img/QBJ.png" style="height: 45px">',
            name: "Queen Barb's Justice",
            hp: 3e3,
            turnspeed: .7,
            price: 2e5,
            maxKrewCapacity: 20,
            cargoSize: 3e3,
            baseheight: 5,
            width: 8,
            depth: 38,
            arcFront: .1,
            inertia: 1,
            radius: 20,
            speed: 5.9,
            labelHeight: 21,
            regeneration: 1,
            body: "bigship",
            sail: "bigship",
            mast: "bigship",
            scale: [.1, .1, .1],
            offset: [1, 13.4, 1],
            rotation: [0, Math.PI / 2, 0],
            availableAt: ["Spain"]
        },
        15: {
            id: 15,
            image: '<img src="./assets/img/trader.png" style="height: 35px">',
            name: "Trader 2",
            hp: 500,
            turnspeed: .5,
            price: 11e3,
            maxKrewCapacity: 6,
            cargoSize: 4e3,
            baseheight: 3,
            width: 7,
            depth: 12.5,
            arcFront: .3,
            inertia: .5,
            radius: 10,
            speed: 5.5,
            labelHeight: 12,
            regeneration: 1,
            body: "trader",
            sail: "trader",
            scale: [5.5, 5.5, 5.5],
            offset: [0, -4.5, 1],
            rotation: [0, 0, 0],
            availableAt: ["Jamaica"]
        },
        16: {
            id: 16,
            image: '<img src="./assets/img/trader.png" style="height: 40px">',
            name: "Trader 3",
            hp: 750,
            turnspeed: .5,
            price: 3e4,
            maxKrewCapacity: 6,
            cargoSize: 6e3,
            baseheight: 3,
            width: 7,
            depth: 12.5,
            arcFront: .3,
            inertia: .5,
            radius: 10,
            speed: 5.5,
            labelHeight: 12,
            regeneration: 1,
            body: "trader",
            sail: "trader",
            scale: [5.5, 5.5, 5.5],
            offset: [0, -4.5, 1],
            rotation: [0, 0, 0],
            availableAt: ["Jamaica"]
        },
        17: {
            id: 17,
            image: '<img src="./assets/img/baby_fancy.png" style="height: 40px">',
            name: "Baby Fancy 2",
            hp: 500,
            turnspeed: 1,
            price: 4e4,
            maxKrewCapacity: 3,
            cargoSize: 400,
            baseheight: 1.4,
            width: 4.5,
            depth: 7,
            arcFront: .3,
            inertia: .1,
            radius: 8,
            speed: 5.8,
            labelHeight: 10,
            regeneration: .5,
            body: "sloop",
            sail: "sloop",
            mast: "sloop",
            scale: [.15, .18, .12],
            offset: [0, 5.5, 0],
            rotation: [0, 0, 0],
            availableAt: ["Jamaica"]
        },
        18: {
            id: 18,
            image: '<img src="./assets/img/royal_fortune.png" style="height: 40px">',
            name: "Royal Fortune 2",
            hp: 1300,
            turnspeed: .6,
            price: 11e4,
            maxKrewCapacity: 18,
            cargoSize: 1400,
            baseheight: 4,
            width: 10,
            depth: 26,
            arcFront: .3,
            inertia: .5,
            radius: 15,
            speed: 5.9,
            labelHeight: 12,
            regeneration: 1,
            body: "schooner",
            sail: "schooner",
            mast: "schooner",
            scale: [.15, .15, .15],
            offset: [2, 11.6, 3],
            rotation: [0, Math.PI / 2, 0],
            availableAt: ["Jamaica"]
        },
        19: {
            id: 19,
            image: '<img src="./assets/img/calm_spirit.png" style="height: 45px">',
            name: "Calm Spirit 2",
            hp: 2200,
            turnspeed: .7,
            price: 17e4,
            maxKrewCapacity: 20,
            cargoSize: 2600,
            baseheight: 4,
            width: 10,
            depth: 30,
            arcFront: .3,
            inertia: .5,
            radius: 16,
            speed: 5.8,
            labelHeight: 12,
            regeneration: 1,
            body: "vessel",
            sail: "vessel",
            mast: "vessel",
            scale: [.1, .1, .1],
            offset: [1, 10, 5],
            rotation: [0, Math.PI / 2, 0],
            availableAt: ["Jamaica"]
        },
        20: {
            id: 20,
            image: '<img src="./assets/img/QBJ.png" style="height: 50px">',
            name: "Queen Barb's Justice 2",
            hp: 4e3,
            turnspeed: .7,
            price: 35e4,
            maxKrewCapacity: 25,
            cargoSize: 4e3,
            baseheight: 5,
            width: 8,
            depth: 38,
            arcFront: .1,
            inertia: 1,
            radius: 20,
            speed: 5.8,
            labelHeight: 21,
            regeneration: 1,
            body: "bigship",
            sail: "bigship",
            mast: "bigship",
            scale: [.1, .1, .1],
            offset: [1, 13.4, 1],
            rotation: [0, Math.PI / 2, 0],
            availableAt: ["Jamaica"]
        }
    };
    j.prototype = new h,
    j.prototype.constructor = j,
    j.prototype.updateProps = function() {
        var a = 0;
        for (var b in this.children)
            if (void 0 !== ca[b] && void 0 !== ca[b].parent && ca[b].parent.id === this.id) {
                var c = this.children[b];
                c && 0 === c.netType && (a += 1)
            } else
                delete this.children[b];
        this.krewCount = a,
        0 === this.krewCount && ta(this)
    }
    ,
    j.prototype.setName = function(a) {
        var b = "";
        if (void 0 !== this.clan && "" !== this.clan && (b = "[" + this.clan + "] "),
        void 0 !== this.geometry) {
            if (void 0 === this.label) {
                this.label = new THREE.TextSprite({
                    textSize: 4,
                    redrawInterval: CONFIG.Labels.redrawInterval,
                    texture: {
                        text: b + a,
                        fontFamily: CONFIG.Labels.fontFamily
                    },
                    material: {
                        color: 12952444,
                        fog: !1
                    }
                }),
                this.label.name = "label",
                this.label.position.set(0, ra[this.shipclassId].labelHeight, 0);
                for (var c = this.geometry.children.length; c--; )
                    this.geometry.children[c].isTextSprite && "label" === this.geometry.children[c].name && this.geometry.remove(this.geometry.children[c]);
                this.geometry.add(this.label)
            }
            this.label.material.map.text = b + a,
            this.label.visible = Ca && Ca.parent && this.id !== Ca.parent.id && this[CONFIG.Labels.boats.useMethod]
        }
        this.crewName = a
    }
    ,
    j.prototype.logic = function(a) {
        this.position.x > ka && (this.position.x = ka),
        this.position.z > ka && (this.position.z = ka),
        this.position.x < 0 && (this.position.x = 0),
        this.position.z < 0 && (this.position.z = 0);
        var b = ca[this.captainId];
        void 0 !== b && void 0 !== this.crewName && (this.speed = ra[this.shipclassId].speed + parseFloat(b.movementSpeedBonus / 100));
        var c = new THREE.Vector3(0,0,this.speed);
        0 == this.shipState ? (this.rotation += void 0 !== b ? this.steering * a * .4 * (this.turnspeed + parseFloat(.05 * b.movementSpeedBonus / 100)) : this.steering * a * .4 * this.turnspeed,
        c.applyAxisAngle(new THREE.Vector3(0,1,0), this.rotation)) : c.set(0, 0, 0),
        this.velocity = c,
        this.leanvalue += (4 * this.steering - this.leanvalue) * a,
        this.rottimer += a,
        Ca && Ca.parent && this.sail && (this.sail.material.visible = this.id !== Ca.parent.id),
        Ca && Ca.parent && this.mast && (this.mast.material.visible = this.id !== Ca.parent.id),
        !this.body || 3 !== this.shipState && -1 !== this.shipState && 4 !== this.shipState ? (this.body.material.opacity = 1,
        this.sail && (this.sail.material.opacity = .9),
        this.mast && (this.mast.material.opacity = .9)) : (this.rottimer = 0,
        this.leanvalue = 0,
        this.body.material.opacity >= .5 && (this.body.material.opacity -= .0075),
        this.sail && this.sail.material.opacity >= .5 && (this.sail.material.opacity -= .0075),
        this.mast && this.mast.material.opacity >= .5 && (this.mast.material.opacity -= .0075)),
        this.geometry.rotation.x = Math.sin(.5 * this.rottimer + 3) * Math.sin(this.rottimer) * .05,
        this.geometry.rotation.z = .05 * Math.sin(1 * this.rottimer) - .08 * this.leanvalue,
        this.hp <= 0 && (Ca && Ca.parent == this && (THREE.SceneUtils.detach(Ba, Ba.parent, Aa),
        $("#shopping-modal").hide(),
        $("#show-shopping-modal-button").hide()),
        this.sinktimer += a,
        this.sinktimer > 4 && ta(this))
    }
    ,
    j.prototype.clientlogic = function() {
        this.position.y = this.getHeightAboveWater();
        var a = new THREE.Vector3(this.position.x,this.position.y,this.position.z);
        this.geometry.position.lerp(a, .8),
        this.geometry.rotation.y = ma(this.geometry.rotation.y, this.rotation, .5)
    }
    ,
    j.prototype.setShipClass = function(a) {
        this.shipclassId = a;
        var b = ra[a];
        this.maxHp = b.hp,
        this.hp = this.maxHp,
        this.turnspeed = b.turnspeed,
        this.maxKrewCapacity = b.maxKrewCapacity,
        this.size.set(b.width, b.height, b.depth),
        this.arcFront = b.arcFront,
        this.inertia = b.inertia,
        this.collisionRadius = b.radius,
        this.speed = b.speed,
        this.shipState = 2,
        this.changeBoatModel(this.shipclassId),
        void 0 != Ca && this == Ca.parent && (Pa.showCenterMessage("Ship upgraded to " + ra[this.shipclassId].name, 3),
        Pa.updateStore($(".btn-shopping-modal.active")))
    }
    ,
    j.prototype.getKrewOnBoard = function() {
        for (var a in this.children)
            this.children[a].parent && this.children[a].parent.id === this.id && (this.geometry.add(this.children[a].geometry),
            this.children[a].position.x = 0,
            this.children[a].position.y = 0,
            this.children[a].position.z = 0),
            void 0 !== this.children[a].parent && this.children[a].parent.id === this.id || delete this.children[a]
    }
    ,
    j.prototype.getTypeSnap = function() {
        return {
            h: this.hp,
            s: this.steering,
            c: this.shipclassId,
            u: this.supply,
            b: this.captainId,
            t: this.shipState,
            a: this.anchorIslandId,
            k: this.krewCount,
            e: this.speed,
            r: this.recruiting,
            l: this.isLocked,
            d: this.departureTime
        }
    }
    ,
    j.prototype.getTypeDelta = function() {
        var a = {
            h: this.deltaTypeCompare("h", this.hp),
            s: this.deltaTypeCompare("s", this.steering.toFixed(4)),
            c: this.deltaTypeCompare("c", this.shipclassId),
            u: this.deltaTypeCompare("u", this.supply),
            b: this.deltaTypeCompare("b", this.captainId),
            t: this.deltaTypeCompare("t", this.shipState),
            a: this.deltaTypeCompare("a", this.anchorIslandId),
            k: this.deltaTypeCompare("k", this.krewCount),
            e: this.deltaTypeCompare("e", this.speed),
            r: this.deltaTypeCompare("r", this.recruiting),
            l: this.deltaTypeCompare("l", this.isLocked),
            d: this.deltaTypeCompare("d", this.departureTime)
        };
        return oa(a) && (a = void 0),
        a
    }
    ,
    j.prototype.parseTypeSnap = function(a) {
        if (void 0 !== a.h && a.h != this.hp && (this.hp = parseInt(a.h)),
        void 0 !== a.s && (this.steering = parseFloat(a.s)),
        void 0 !== a.u) {
            var b = parseInt(a.u);
            if (Ca && this == Ca.parent && b != this.supply) {
                var c = b - this.supply;
                c > 1 && Pa.showCenterMessage("+ " + c + " supplies", 2)
            }
            this.supply = b
        }
        (void 0 !== a.c && a.c != this.shipclassId || void 0 == this.body) && this.setShipClass(a.c),
        void 0 !== a.a && a.a != this.anchorIslandId && (this.anchorIslandId = a.a),
        void 0 !== a.k && a.k != this.krewCount && (this.krewCount = a.k),
        void 0 !== a.b && this.captainId != a.b && (this.captainId = a.b),
        void 0 !== a.e && this.speed != a.e && (this.speed = parseInt(a.e)),
        void 0 !== a.r && this.recruiting != a.r && (this.recruiting = sa(a.r)),
        void 0 !== a.l && this.isLocked != a.r && (this.isLocked = sa(a.l)),
        void 0 !== a.d && this.departureTime != a.d && (this.departureTime = parseInt(a.d)),
        void 0 !== a.t && this.shipState != a.t && (this.shipState = parseInt(a.t),
        0 === this.shipState && this.getKrewOnBoard())
    }
    ,
    j.prototype.onDestroy = function() {
        this.children = {},
        h.prototype.onDestroy.call(this),
        da[this.id] && delete da[this.id]
    }
    ,
    j.prototype.getHeightAboveWater = function() {
        return ra[this.shipclassId].baseheight * (.2 + this.hp / this.maxHp * .8) - this.sinktimer
    }
    ,
    j.prototype.enterIsland = function(a) {
        0 === this.shipState && (this.shipState = 1),
        this.anchorIslandId = a
    }
    ,
    j.prototype.exitIsland = function() {
        if (this.shipState = 0,
        this.recruiting = !1,
        this.departureTime = 5,
        this.anchorIslandId) {
            this.rotation = g(this, ca[this.anchorIslandId]);
            var a = f(this.rotation);
            this.position.x = ca[this.anchorIslandId].position.x - a.x * (ca[this.anchorIslandId].dockRadius + 5),
            this.position.z = ca[this.anchorIslandId].position.z - a.y * (ca[this.anchorIslandId].dockRadius + 5)
        }
        this.anchorIslandId = void 0
    }
    ,
    j.prototype.exitMotherShip = function(a) {
        this.rotation = g(this, a);
        var b = f(this.rotation);
        this.position.x = a.position.x - b.x * (a.collisionRadius + 5),
        this.position.z = a.position.z - b.y * (a.collisionRadius + 5)
    }
    ,
    k.prototype.constructor = k,
    k.prototype.logic = function(a) {}
    ,
    m.prototype = new h,
    m.prototype.constructor = m,
    m.prototype.notifiscation = function() {
        for (var a in this.notifiscationHeap)
            this.notifiscationHeap[a].isNew ? (this.notifiscationHeap[a].sprite = new THREE.TextSprite({
                textSize: 1 === this.notifiscationHeap[a].type ? .6 : .9,
                redrawInterval: 10,
                texture: {
                    text: this.notifiscationHeap[a].text,
                    fontFamily: CONFIG.Labels.fontFamily
                },
                material: {
                    color: 1 === this.notifiscationHeap[a].type ? 16766720 : 6487808,
                    fog: !1,
                    opacity: 0
                }
            }),
            this.notifiscationHeap[a].sprite.position.set(3, 1, 0),
            this.geometry.add(this.notifiscationHeap[a].sprite),
            this.notifiscationHeap[a].isNew = !1) : (this.notifiscationHeap[a].sprite.position.y += .05,
            this.notifiscationHeap[a].sprite.position.y > 6 ? (this.geometry.remove(this.notifiscationHeap[a].sprite),
            delete this.notifiscationHeap[a]) : this.notifiscationHeap[a].sprite.position.y < 3 && (this.notifiscationHeap[a].sprite.material.opacity += .025))
    }
    ,
    m.prototype.updateExperience = function(a) {
        var b, c = this.experience, d = 0;
        "number" == typeof a && (c += this.pointsFormula.getExperience(a)),
        c > this.experienceNeededForLevels[this.experienceMaxLevel].total && (c = this.experienceNeededForLevels[this.experienceMaxLevel].total);
        for (b in this.experienceNeededForLevels) {
            if (c < this.experienceNeededForLevels[b].total)
                break;
            d = b
        }
        d = parseInt(d),
        this.level = d,
        this.experience = c,
        void 0 !== Pa && this.experienceNeedsUpdate && (Pa.updateUiExperience(),
        this.experienceNeedsUpdate = !1)
    }
    ,
    m.prototype.rotationOffset = -.45,
    m.prototype.logic = function(a) {
        this.oldCaptainState = this.isCaptain,
        this.isCaptain = this.parent && this.id === this.parent.captainId;
        var b = new THREE.Vector3(0,0,0);
        if (b.z = -this.walkForward,
        b.x = this.walkSideward,
        b.lengthSq() > 0 && b.normalize(),
        b.applyAxisAngle(new THREE.Vector3(0,1,0), this.rotation),
        this.velocity = b,
        this.velocity.x *= 3,
        this.velocity.z *= 3,
        this.parent && (5 !== this.parent.netType && 3 !== this.parent.shipState && -1 !== this.parent.shipState || (this.velocity.x *= 2,
        this.velocity.z *= 2),
        5 !== this.parent.netType && 3 !== this.parent.shipState && 2 !== this.parent.shipState && -1 !== this.parent.shipState && 4 !== this.parent.shipState && (this.position.x > this.parent.size.x / 2 && (this.position.x = this.parent.size.x / 2),
        this.position.z > this.parent.size.z / 2 && (this.position.z = this.parent.size.z / 2),
        this.position.x < -this.parent.size.x / 2 && (this.position.x = -this.parent.size.x / 2),
        this.position.z < -this.parent.size.z / 2 && (this.position.z = -this.parent.size.z / 2),
        this.parent.arcFront > 0 && this.position.z > 0))) {
            var c = this.parent.size.x / 2 - this.position.z * this.parent.arcFront;
            this.position.x > 0 ? this.position.x > c && (this.position.x = c) : this.position.x < -c && (this.position.x = -c)
        }
        if (this.cooldown > 0 && (this.cooldown -= a),
        !0 === this.use && this.cooldown <= 0) {
            var d = parseFloat((this.attackSpeedBonus + this.pointsFormula.getFireRate()) / 100);
            this.cooldown = 1 === this.activeWeapon ? 2 : (1.5 - d).toFixed(2)
        }
        this.isPlayer || (this.geometry.rotation.x = this.pitch + this.rotationOffset)
    }
    ,
    m.prototype.getTypeSnap = function() {
        return {
            f: this.walkForward,
            s: this.walkSideward,
            u: this.use,
            p: this.pitch,
            j: this.jumping,
            m: this.movementSpeedBonus,
            g: this.armorBonus,
            w: this.activeWeapon,
            c: this.checkedItemsList,
            d: this.itemId,
            o: this.ownsCannon,
            r: this.ownsFishingRod,
            v: this.availablePoints,
            e: {
                e: this.experience,
                p: {
                    fr: this.fireRate,
                    ds: this.distance,
                    dm: this.damage
                },
                l: this.level
            }
        }
    }
    ,
    m.prototype.getTypeDelta = function() {
        var a = {
            f: this.deltaTypeCompare("f", this.walkForward),
            s: this.deltaTypeCompare("s", this.walkSideward),
            u: this.deltaTypeCompare("u", this.use),
            p: this.deltaTypeCompare("p", this.pitch.toFixed(2)),
            j: this.deltaTypeCompare("j", this.jumping),
            w: this.deltaTypeCompare("w", this.activeWeapon),
            c: this.deltaTypeCompare("c", this.checkedItemsList),
            d: this.deltaTypeCompare("d", this.itemId),
            o: this.deltaTypeCompare("o", this.ownsCannon),
            r: this.deltaTypeCompare("r", this.ownsFishingRod),
            v: this.deltaTypeCompare("v", this.availablePoints)
        };
        return oa(a) && (a = void 0),
        a
    }
    ,
    m.prototype.setName = function(a) {
        var b = "";
        void 0 !== this.clan && "" !== this.clan && (b = "[" + this.clan + "] "),
        void 0 !== this.geometry && (void 0 === this.label && (this.label = new THREE.TextSprite({
            textSize: .7,
            redrawInterval: CONFIG.Labels.redrawInterval,
            texture: {
                text: b + a + " (lvl " + this.level + ")",
                fontFamily: CONFIG.Labels.fontFamily
            },
            material: {
                color: this.isPlayer ? D.myself : this.isCaptain ? D.captain : D.player,
                fog: !1
            }
        }),
        this.label.name = "label",
        this.label.position.set(0, 2, 0),
        this.geometry.add(this.label)),
        this.label.material.map.text = b + a + " (lvl " + this.level + ")",
        this.label.visible = Ca && Ca.parent && this.inRange && void 0 !== this.parent && (5 === this.parent.netType || this.parent.inRange)),
        this.name = a
    }
    ,
    m.prototype.getName = function() {
        return this.name
    }
    ,
    m.prototype.parseTypeSnap = function(a) {
        void 0 !== a.f && (this.walkForward = parseInt(a.f)),
        void 0 !== a.s && (this.walkSideward = parseInt(a.s)),
        void 0 !== a.u && (this.use = sa(a.u)),
        void 0 !== a.p && (this.pitch = parseFloat(a.p)),
        void 0 !== a.j && (this.jumping = parseInt(a.j)),
        void 0 !== a.m && (this.movementSpeedBonus = parseInt(a.m)),
        void 0 !== a.v && a.v !== this.availablePoints && (this.availablePoints = parseInt(a.v)),
        void 0 !== a.o && a.o !== this.ownsCannon && (this.ownsCannon = sa(a.o),
        void 0 !== Pa && Pa.updateStore($(".btn-shopping-modal.active"))),
        void 0 !== a.r && a.r !== this.ownsFishingRod && (this.ownsFishingRod = sa(a.r),
        void 0 !== Pa && Pa.updateStore($(".btn-shopping-modal.active"))),
        void 0 !== a.c && a.c !== this.checkedItemsList && (this.checkedItemsList = sa(a.c)),
        void 0 !== a.d && a.d != this.itemId && (this.itemId = parseInt(a.d),
        void 0 !== Pa && Pa.updateStore($(".btn-shopping-modal.active"))),
        void 0 !== a.w && a.w !== this.activeWeapon && (this.activeWeapon = parseInt(a.w),
        this.changeWeapon()),
        void 0 === a.f && void 0 === a.s && void 0 === a.u && void 0 === a.p || (this.lastMoved = new Date)
    }
    ,
    m.prototype.onDestroy = function() {
        h.prototype.onDestroy.call(this),
        this === Ca && (Ca = void 0),
        this.parent && (delete this.parent.children[this.id],
        1 === this.parent.netType && (this.parent.updateProps(),
        0 === Object.keys(this.parent.children).length && ta(this.parent))),
        ea[this.id] && delete ea[this.id]
    }
    ,
    m.prototype.setPlayerBody = function(a) {
        a = a || 0;
        var b = wa[a];
        this.playerBody = b.body.clone(),
        this.playerBody.scale.set(b.scale.x, b.scale.y, b.scale.z),
        this.playerBody.position.set(b.offset.x, b.offset.y, b.offset.z),
        this.playerBody.rotation.set(b.rotation.x, b.rotation.y, b.rotation.z),
        this.geometry.add(this.playerBody),
        this.weapon = M.cannon.clone(),
        this.weapon.scale.set(.05, .05, .05),
        this.weapon.position.set(0, 0, -.4),
        this.weapon.rotation.set(0, 0, 0),
        this.weapon.name = "body",
        this.geometry.add(this.weapon),
        this.captainHat = M.hat_pirate.clone(),
        this.captainHat.scale.set(.4, .4, .4),
        this.captainHat.position.set(0, 25, 0),
        this.captainHat.name = "captainHat"
    }
    ,
    m.prototype.crossHair = function() {
        this.crosshair = new THREE.TextSprite({
            textSize: .0365,
            redrawInterval: 10,
            texture: {
                text: "+",
                fontFamily: CONFIG.Labels.fontFamily
            },
            material: {
                color: 65280,
                fog: !1
            }
        })
    }
    ,
    m.prototype.changeWeapon = function() {
        if (this.weapon && 0 === this.activeWeapon)
            this.geometry.remove(this.weapon),
            this.weapon = M.cannon.clone(),
            this.weapon.scale.set(.05, .05, .05),
            this.weapon.position.set(0, .1, -.4),
            this.weapon.rotation.set(0, 0, 0),
            this.weapon.name = "body",
            this.geometry.add(this.weapon);
        else if (this.weapon && 1 === this.activeWeapon) {
            this.geometry.remove(this.weapon);
            var a = new THREE.Mesh(z.fishingrod,C.fishingrod);
            this.weapon = a.clone(),
            this.weapon.scale.set(.03, .03, .03),
            this.weapon.position.set(0, .1, -.2),
            this.weapon.rotation.set(0, Math.PI, 0),
            this.weapon.name = "body",
            this.geometry.add(this.weapon)
        }
    }
    ;
    var sa = function(a) {
        return !0 === a || "true" === a
    };
    n.prototype = new h,
    n.prototype.constructor = n,
    n.prototype.logic = function(a) {
        this.timeout -= .8 * a,
        this.timeout <= 0 && ta(this)
    }
    ,
    n.prototype.clientlogic = function(a) {
        if (0 == this.impactType) {
            this.geometry.position.set(this.position.x, this.position.y, this.position.z),
            this.geometry.scale.y = 5 * (this.timeout < .5 ? sb.easeOutQuad(2 * this.timeout) : 1 - sb.easeInQuint(2 * (this.timeout - .5)));
            var b = sb.easeOutQuad(this.timeout);
            this.geometry.scale.x = 1.5 - b,
            this.geometry.scale.z = 1.5 - b
        }
    }
    ,
    n.prototype.getTypeSnap = function() {
        return {
            a: this.impactType
        }
    }
    ,
    n.prototype.getTypeDelta = function() {
        if (!this.spawnPacket)
            return this.spawnPacket = !0,
            this.getTypeSnap()
    }
    ,
    n.prototype.parseTypeSnap = function(a) {
        void 0 !== a.a && (this.impactType = parseFloat(a.a))
    }
    ,
    q.prototype = new h,
    q.prototype.constructor = q,
    q.prototype.randomTime = function(a, b) {
        return 1e3 * (Math.floor(Math.random() * (b - a)) + a)
    }
    ,
    q.prototype.logic = function(a) {}
    ,
    q.prototype.timeCounters = {},
    q.prototype.dockedLogic = function() {
        void 0 === this.timeCounters.dockedLogic ? this.timeCounters.dockedLogic = {
            time: performance.now(),
            previousTime: performance.now()
        } : this.timeCounters.dockedLogic.time = performance.now(),
        this.timeCounters.dockedLogic.time - this.timeCounters.dockedLogic.previousTime > 2e3 && (this.timeCounters.dockedLogic.previousTime = this.timeCounters.dockedLogic.time,
        requestAnimationFrame(function() {
            for (var a in ca) {
                var b = ca[a];
                if (4 === b.netType && (2 === b.type || 3 === b.type)) {
                    var c, d, e, f = new THREE.Raycaster, g = [], h = {
                        object: void 0,
                        height: 100
                    }, i = 0, j = 0;
                    if (ca) {
                        d = new THREE.Vector3(0,-1,0),
                        c = b.geometry.position.clone(),
                        c.set(c.x, 100, c.z),
                        f.set(c, d);
                        for (var k in ca)
                            5 === ca[k].netType && g.push(ca[k].geometry.children[0]);
                        if (e = f.intersectObjects(g),
                        e.length > 0) {
                            for (; i < e.length; i++)
                                e[i].distance < h.height && (h = {
                                    height: e[i].distance,
                                    object: e[i].object
                                });
                            j = 100 - h.height
                        }
                        b.position.y = j,
                        b.actualY = j,
                        b.geometry.position.setY(j)
                    }
                }
            }
        }))
    }
    ,
    q.prototype.clientlogic = function(a) {
        if (this.floattimer += 3 * a,
        this.geometry.rotation.x += a * this.rotationspeed,
        this.geometry.rotation.z += a * this.rotationspeed,
        1 == this.picking && ca[this.pickerId]) {
            if (ca[this.pickerId].geometry) {
                var b = ca[this.pickerId].geometry.getWorldPosition();
                0 !== this.type && 4 !== this.type || (this.geometry.translateOnAxis(this.geometry.worldToLocal(b), .05),
                this.geometry.scale.set(this.geometry.scale.x - .05, this.geometry.scale.y - .05, this.geometry.scale.z - .05)),
                1 === this.type && (this.catchingFish ? this.geometry.translateOnAxis(this.geometry.worldToLocal(b), .05) : this.geometry.position.y += .5,
                this.geometry.position.y >= 20 && (this.catchingFish = !0),
                this.geometry.scale.set(this.geometry.scale.x - .009, this.geometry.scale.y - .009, this.geometry.scale.z - .009)),
                2 === this.type && (this.geometry.translateOnAxis(this.geometry.worldToLocal(b), .05),
                this.geometry.scale.set(this.geometry.scale.x - .05, this.geometry.scale.y - .05, this.geometry.scale.z - .05),
                void 0 !== ca[this.pickerId] && ca[this.pickerId].gold > 500 && (!ca[this.pickerId].ownsCannon || !ca[this.pickerId].ownsFishingRod || void 0 !== ca[this.pickerId].parent && 1 != ca[this.pickerId].parent.netType) && (Pa.hideSuggestionBox = !1)),
                3 === this.type && (this.geometry.translateOnAxis(this.geometry.worldToLocal(b), .05),
                this.geometry.scale.set(this.geometry.scale.x - .05, this.geometry.scale.y - .05, this.geometry.scale.z - .05),
                void 0 !== ca[this.pickerId] && ca[this.pickerId].gold > 500 && (!ca[this.pickerId].ownsCannon || !ca[this.pickerId].ownsFishingRod || void 0 !== ca[this.pickerId].parent && 1 != ca[this.pickerId].parent.netType) && (Pa.hideSuggestionBox = !1))
            }
        } else
            this.type,
            2 !== this.type && 3 !== this.type || this.dockedLogic(),
            3 === this.type && void 0 !== this.geometry && (Math.round(this.geometry.position.x) === Math.round(this.position.x) && Math.round(this.geometry.position.z) === Math.round(this.position.z) || (this.geometry.lookAt(this.position.x, this.actualY || this.position.y, this.position.z),
            Math.round(this.geometry.position.x) !== Math.round(this.position.x) && this.geometry.position.setX(ma(this.geometry.position.x, this.position.x, .01)),
            Math.round(this.geometry.position.z) !== Math.round(this.position.z) && this.geometry.position.setZ(ma(this.geometry.position.z, this.position.z, .01))))
    }
    ,
    q.prototype.setName = function() {
        void 0 !== this.geometry && (void 0 === this.label && (this.label = new THREE.TextSprite({
            textSize: 3,
            redrawInterval: CONFIG.Labels.redrawInterval,
            texture: {
                text: this.id,
                fontFamily: CONFIG.Labels.fontFamily
            },
            material: {
                color: D.player,
                fog: !1
            }
        }),
        this.label.name = "label",
        this.label.position.set(0, 3, 0),
        this.geometry.add(this.label)),
        this.label.material.map.text = this.id)
    }
    ,
    q.prototype.getTypeSnap = function() {
        return {
            s: this.pickupSize,
            p: this.picking,
            i: this.pickerId,
            t: this.type
        }
    }
    ,
    q.prototype.getTypeDelta = function() {
        if (1 != this.type) {
            var a = {
                s: this.deltaTypeCompare("s", this.pickupSize),
                p: this.deltaTypeCompare("p", this.picking),
                i: this.deltaTypeCompare("i", this.pickerId),
                t: this.deltaTypeCompare("t", this.type)
            };
            return oa(a) && (a = void 0),
            a
        }
        if (!this.spawnPacket)
            return this.spawnPacket = !0,
            this.getTypeSnap()
    }
    ,
    q.prototype.parseTypeSnap = function(a) {
        void 0 !== a.s && a.s != this.pickupSize && (this.pickupSize = parseInt(a.s)),
        void 0 !== a.p && a.p != this.picking && (this.picking = sa(a.p)),
        void 0 !== a.i && a.i != this.pickerId && (this.pickerId = a.i),
        void 0 !== a.t && a.t != this.type && (this.type = parseInt(a.t))
    }
    ,
    q.prototype.onDestroy = function() {
        h.prototype.onDestroy.call(this),
        ja[this.id] && delete ja[this.id]
    }
    ,
    r.prototype = new h,
    r.prototype.constructor = r,
    r.prototype.setName = function(a) {
        void 0 !== this.geometry && (void 0 === this.label && (this.label = new THREE.TextSprite({
            textSize: 12,
            redrawInterval: CONFIG.Labels.redrawInterval,
            texture: {
                text: a,
                fontFamily: CONFIG.Labels.fontFamily
            },
            material: {
                color: 6198824,
                fog: !1
            }
        }),
        this.label.name = "label",
        this.label.position.set(0, 42, 0),
        this.geometry.add(this.label)),
        this.label.material.map.text = a,
        this.label.visible = this.inRange),
        this.name = a
    }
    ,
    r.prototype.getTypeSnap = function() {
        return {
            t: this.landmarkType,
            name: this.name,
            dockRadius: this.dockRadius
        }
    }
    ,
    r.prototype.parseTypeSnap = function(a) {
        void 0 !== a.t && (this.pickupSize = parseInt(a.t))
    }
    ,
    r.prototype.clientlogic = function(a) {
        this.wavetimer += a;
        var b = .5 + .5 * Math.sin(this.wavetimer);
        water.position.y = .1 + .5 * b
    }
    ,
    r.prototype.logic = function(a) {
        this.dockType
    }
    ,
    r.prototype.isWithinDockingRadius = function(a, b) {
        return c({
            x: a,
            z: b
        }, this.position) < this.dockRadius - 2
    }
    ,
    s.prototype = new h,
    s.prototype.constructor = s,
    s.prototype.logic = function(a) {
        if ("" === this.shooterid || void 0 === ca[this.shooterid] || void 0 !== ca[this.shooterid] && -1 != this.type && this.type != ca[this.shooterid].activeWeapon)
            return this.impact && (this.impact.destroy = !0),
            void ta(this);
        if (void 0 !== ca[this.shooterid] && 0 == ca[this.shooterid].use && (ca[this.shooterid].isFishing = !1),
        this.position.y >= 0 && (this.velocity.y -= 25 * a,
        this.position.y += this.velocity.y * a),
        void 0 !== ca[this.shooterid] && void 0 !== ca[this.shooterid].parent) {
            var b = ca[this.shooterid].worldPos();
            if (void 0 !== ca[this.shooterid].parent && 5 === ca[this.shooterid].parent.netType)
                b.z.toFixed(2) != this.shooterStartPos.z.toFixed(2) && b.x.toFixed(2) != this.shooterStartPos.x.toFixed(2) && (this.reel = !0,
                ca[this.shooterid].isFishing = !1);
            else {
                b.distanceTo(this.shooterStartPos) >= 40 && (this.reel = !0,
                ca[this.shooterid].isFishing = !1)
            }
        }
        if (this.position.y < 10) {
            this.position.y < 0 && (this.reel || "" === this.shooterid || void 0 === ca[this.shooterid] || 1 == ca[this.shooterid].use || 0 === ca[this.shooterid].activeWeapon || this.position.x > ka || this.position.z > ka || this.position.x < 0 || this.position.z < 0 ? (this.impact && (this.impact.destroy = !0),
            ta(this)) : (this.velocity.x = 0,
            this.velocity.z = 0,
            ca[this.shooterid].isFishing = !0))
        }
        this.airtime += a
    }
    ,
    s.prototype.clientlogic = function(a) {
        var b = ca[this.shooterid];
        if ((void 0 === b || b && b.parent && b.parent.hp <= 0) && (Aa.remove(this.geometry),
        void 0 !== this.line && (Aa.remove(this.line),
        this.line.geometry.dispose())),
        b && 1 == this.setProjectileModel) {
            if (Aa.remove(this.geometry),
            0 === b.activeWeapon)
                this.geometry = new THREE.Sprite(C.cannonball);
            else if (1 === b.activeWeapon) {
                this.baseGeometry = z.hook,
                this.baseMaterial = C.hook;
                var c = y.line.clone();
                if (c.vertices.push(this.startPoint),
                c.vertices.push(this.endPoint),
                this.line = new THREE.Line(c,new THREE.MeshBasicMaterial({
                    color: 0
                })),
                ia[this.id] = this.line,
                this.line.frustumCulled = !1,
                ca[this.shooterid].weapon) {
                    var d = new THREE.Box3;
                    d.setFromObject(ca[this.shooterid].weapon),
                    this.startPoint.set(d.max.x - .5, d.max.y, d.max.z - .5)
                }
                Aa.add(this.line),
                this.geometry = new THREE.Mesh(this.baseGeometry,this.baseMaterial)
            }
            ha[this.id] = this.geometry,
            Aa.add(this.geometry),
            this.setProjectileModel = !1
        }
        if (this.geometry.position.set(this.position.x, this.position.y, this.position.z),
        this.line) {
            if (b && b.weapon) {
                var d = new THREE.Box3;
                d.setFromObject(ca[this.shooterid].weapon),
                this.startPoint.set(d.max.x - .5, d.max.y, d.max.z - .5)
            }
            this.endPoint.set(this.position.x, this.position.y, this.position.z),
            this.line.geometry.verticesNeedUpdate = !0,
            this.geometry.rotation.y += 1.5 * a
        } else if (b && 0 === b.activeWeapon && (this.particletimer -= a,
        this.particletimer < 0)) {
            var e = Ca && this.shooterid == Ca.id
              , f = Ca && Ca.parent && Ca.parent.children[this.shooterid];
            this.particletimer = .04,
            vb({
                vx: 0,
                vy: 0,
                vz: 0,
                x: this.position.x,
                z: this.position.z,
                y: this.position.y,
                w: e ? .7 : .4,
                h: e ? .7 : .4,
                d: e ? .7 : .4,
                gravity: 0,
                duration: 2,
                rotaSpeed: 5 * Math.random(),
                sizeSpeed: -1.8,
                material: e ? C.smoke_player : f ? C.smoke_friendly : C.smoke_enemy,
                geometry: y.box
            })
        }
    }
    ,
    s.prototype.getTypeDelta = function() {
        if (!this.spawnPacket)
            return this.spawnPacket = !0,
            this.getTypeSnap()
    }
    ,
    s.prototype.parseTypeSnap = function(a) {
        void 0 !== a.vx && (this.velocity.x = parseFloat(a.vx)),
        void 0 !== a.vy && (this.velocity.y = parseFloat(a.vy)),
        void 0 !== a.vz && (this.velocity.z = parseFloat(a.vz)),
        void 0 !== a.x && (this.position.x = parseFloat(a.x)),
        void 0 !== a.z && (this.position.z = parseFloat(a.z)),
        void 0 !== a.y && (this.position.y = parseFloat(a.y)),
        void 0 !== a.i && a.i != this.shooterid && (this.shooterid = a.i),
        void 0 !== a.r && a.r != this.reel && (this.reel = sa(a.r)),
        void 0 !== a.sx && (this.shooterStartPos.x = parseFloat(a.sx)),
        void 0 !== a.sz && (this.shooterStartPos.z = parseFloat(a.sz))
    }
    ,
    h.prototype.clientInit = function() {
        this.createBody()
    }
    ,
    h.prototype.createBody = function() {
        this.geometry = new THREE.Object3D,
        Aa.add(this.geometry),
        this.geometry.rotation.order = "YXZ",
        this.baseGeometry && (this.body = new THREE.Mesh(this.baseGeometry,this.baseMaterial),
        this.body.scale.set(this.modelscale.x, this.modelscale.y, this.modelscale.z),
        this.body.position.set(this.modeloffset.x, this.modeloffset.y, this.modeloffset.z),
        this.body.rotation.set(this.modelrotation.x, this.modelrotation.y, this.modelrotation.z),
        this.geometry.add(this.body),
        this.geometry.position.x = this.position.x,
        this.geometry.position.y = this.position.y,
        this.geometry.position.z = this.position.z),
        this.baseModel && (this.body = this.baseModel.clone(),
        this.body.scale.set(this.modelscale.x, this.modelscale.y, this.modelscale.z),
        this.body.position.set(this.modeloffset.x, this.modeloffset.y, this.modeloffset.z),
        this.body.rotation.set(this.modelrotation.x, this.modelrotation.y, this.modelrotation.z),
        this.geometry.add(this.body),
        this.geometry.position.x = this.position.x,
        this.geometry.position.y = this.position.y,
        this.geometry.position.z = this.position.z),
        this.isPlayer && (Ba.parent && Ba.parent.remove(Ba),
        Ba.position.set(0, 1, 5),
        Ba.rotation.z = 0,
        Ba.rotation.y = 0,
        Ba.rotation.x = -.4,
        this.geometry.add(Ba),
        this.geometry.add(this.crosshair)),
        0 === this.netType && this.setPlayerBody(),
        this.clientlogic(0)
    }
    ,
    h.prototype.onClientDestroy = function() {
        this.parent && this.parent.geometry.remove(this.geometry),
        Aa.remove(this.geometry),
        void 0 !== this.line && (Aa.remove(this.line),
        this.line.geometry.dispose())
    }
    ,
    h.prototype.clientlogic = function(a) {
        this.geometry.position.set(this.position.x, this.position.y, this.position.z),
        this.geometry.rotation.y = this.rotation
    }
    ;
    var ta = function(a) {
        ca.hasOwnProperty(a.id) && (a.onDestroy(),
        delete ca[a.id])
    }
      , ua = function() {
        for (var a in ra) {
            var b = ra[a];
            void 0 !== M[b.body] && (b.body = M[b.body].getObjectByName("body")),
            void 0 !== b.sail && void 0 !== M[b.sail] && (b.sail = M[b.sail].getObjectByName("sail")),
            void 0 !== b.mast && void 0 !== M[b.mast] && (b.mast = M[b.mast].getObjectByName("mast"))
        }
    };
    j.prototype.changeBoatModel = function(a) {
        void 0 !== this.geometry && void 0 !== ra[a] && (this.body && this.geometry.remove(this.body),
        this.sail && this.geometry.remove(this.sail),
        this.mast && this.geometry.remove(this.mast),
        this.body = ra[a].body.clone(),
        this.body.material = ra[a].body.material.clone(),
        this.body.material.transparent = !0,
        this.body.scale.set(ra[a].scale[0], ra[a].scale[1], ra[a].scale[2]),
        this.body.position.set(ra[a].offset[0], ra[a].offset[1], ra[a].offset[2]),
        this.body.rotation.set(ra[a].rotation[0], ra[a].rotation[1], ra[a].rotation[2]),
        this.geometry.add(this.body),
        ra[a].sail && (this.sail = ra[a].sail.clone(),
        this.sail.material = ra[a].sail.material.clone(),
        this.sail.material.transparent = !0,
        this.sail.scale.set(ra[a].scale[0], ra[a].scale[1], ra[a].scale[2]),
        this.sail.position.set(ra[a].offset[0], ra[a].offset[1], ra[a].offset[2]),
        this.sail.rotation.set(ra[a].rotation[0], ra[a].rotation[1], ra[a].rotation[2]),
        this.geometry.add(this.sail)),
        ra[a].mast && (this.mast = ra[a].mast.clone(),
        this.mast.material = ra[a].mast.material.clone(),
        this.mast.material.transparent = !0,
        this.mast.scale.set(ra[a].scale[0], ra[a].scale[1], ra[a].scale[2]),
        this.mast.position.set(ra[a].offset[0], ra[a].offset[1], ra[a].offset[2]),
        this.mast.rotation.set(ra[a].rotation[0], ra[a].rotation[1], ra[a].rotation[2]),
        this.geometry.add(this.mast)))
    }
    ,
    j.prototype.docking = function(a) {
        this.shipclassId,
        Ca && Ca.parent
    }
    ;
    var va = (new Z,
    Date.now(),
    0)
      , wa = []
      , xa = new THREE.Raycaster
      , ya = function() {
        C.dog_1 = new THREE.MeshPhongMaterial({
            color: 16777215,
            map: K.dog_diffuse
        }),
        wa.push({
            body: new THREE.Mesh(z.dog_1,C.dog_1),
            scale: new THREE.Vector3(.04,.04,.04),
            offset: new THREE.Vector3(0,-.4,.8),
            rotation: new THREE.Vector3(.4,Math.PI,0)
        })
    };
    m.prototype.timeCounters = {},
    m.prototype.namesLogic = function() {
        if (this.isPlayer) {
            void 0 === this.timeCounters.namesLogic ? this.timeCounters.namesLogic = {
                time: performance.now(),
                previousTime: performance.now()
            } : this.timeCounters.namesLogic.time = performance.now(),
            this.timeCounters.namesLogic.time - this.timeCounters.namesLogic.previousTime > 200 && (this.timeCounters.namesLogic.previousTime = this.timeCounters.namesLogic.time,
            requestAnimationFrame(function() {
                var a = Ba.getWorldPosition();
                for (var b in ca)
                    if (0 === ca[b].netType || 1 === ca[b].netType || 5 === ca[b].netType) {
                        var d = c(a, ca[b].geometry.getWorldPosition())
                          , e = CONFIG.Labels.distanceMultiplier[ca[b].netType];
                        ca[b].inRange = d <= e,
                        CONFIG.setProperties.inVision && (ca[b].inVision = ca[b].inRange && na(ca[b], Ba)),
                        0 === ca[b].netType && ca[b].setName(ca[b].name),
                        1 === ca[b].netType && ca[b].setName(ca[b].crewName),
                        ca[b].netType > 1 && ca[b].setName(ca[b].name)
                    }
            }))
        }
    }
    ,
    m.prototype.dockedLogic = function() {
        if (this.isPlayer) {
            var a = this;
            if (void 0 === this.timeCounters.dockedLogic ? this.timeCounters.dockedLogic = {
                time: performance.now(),
                previousTime: performance.now()
            } : this.timeCounters.dockedLogic.time = performance.now(),
            this.timeCounters.dockedLogic.time - this.timeCounters.dockedLogic.previousTime > 50) {
                this.timeCounters.dockedLogic.previousTime = this.timeCounters.dockedLogic.time;
                var b, c, d, e = [], f = {
                    object: void 0,
                    height: 100
                }, g = 0, h = 0;
                if (a.parent && ca) {
                    if (c = new THREE.Vector3(0,-1,0),
                    b = a.geometry.getWorldPosition().clone(),
                    b.set(b.x, 100, b.z),
                    xa.set(b, c),
                    a.parent && (a.parent.anchorIslandId && ca[a.parent.anchorIslandId] && (e.push(ca[a.parent.anchorIslandId].geometry.children[0]),
                    ca[a.parent.anchorIslandId].palm && e.push(ca[a.parent.anchorIslandId].palm)),
                    void 0 !== ca[a.parent.id] && (5 === ca[a.parent.id].netType && (e.push(ca[a.parent.id].geometry.children[0]),
                    ca[a.parent.id].palm && e.push(ca[a.parent.id].palm)),
                    1 === ca[a.parent.id].netType && void 0 !== ca[a.parent.id].mast && e.push(ca[a.parent.id].geometry.getObjectByName("body")))),
                    d = xa.intersectObjects(e),
                    d.length > 0) {
                        for (; g < d.length; g++)
                            d[g].distance < f.height && (f = {
                                height: d[g].distance,
                                object: d[g].object
                            });
                        h = 100 - f.height
                    }
                    f.object && "body" === f.object.name && (h -= ra[ca[a.parent.id].shipclassId].baseheight,
                    right = a.position.x < 0,
                    halfWidth = ra[ca[a.parent.id].shipclassId].width / 2,
                    0 !== a.position.x && (a.isCaptain ? h += Math.abs(ca[a.parent.id].leanvalue / 2) : right ? h -= ca[a.parent.id].leanvalue / 2 * (Math.abs(a.position.x) / halfWidth) : h += ca[a.parent.id].leanvalue / 2 * (Math.abs(a.position.x) / halfWidth))),
                    f.object && "body" !== f.object.name && void 0 !== ca[a.parent.id] && 1 === ca[a.parent.id].netType && (h -= ra[ca[a.parent.id].shipclassId].baseheight),
                    a.position.y = h
                }
            }
        }
    }
    ,
    m.prototype.clientlogic = function(a) {
        if (this.isPlayer && !oa(this.notifiscationHeap) && this.notifiscation(),
        this.namesLogic(),
        this.isPlayer) {
            if (this.walkForward = 0,
            this.walkSideward = 0,
            S && (this.walkForward = 1),
            T && (this.walkForward = -1),
            R && (this.walkSideward = 1),
            Q && (this.walkSideward = -1),
            this.jumping = U ? 1 : 0,
            1 != this.state || $("#game-over-modal").is(":visible") || $("#game-over-modal").modal("show"),
            2 == this.state && (Ba.position.set(0, 1, 5),
            Ba.rotation.z = 0,
            Ba.rotation.y = 0,
            Ba.rotation.x = -.4,
            this.geometry.add(Ba),
            this.state = 0),
            Ba.parent == this.geometry) {
                var b = .2 - Math.max(controls.cameraX, .2);
                this.geometry.rotation.x = ma(this.geometry.rotation.x, Math.min(1, Math.max(-1, controls.cameraX + this.rotationOffset)), .8),
                this.rotation = controls.cameraY;
                var c = new THREE.Vector3(Ba.position.x,2 + Math.min(8, Math.max(0, 10 * controls.cameraX)),8 + 8 * b);
                Ba.position.lerp(c, 1),
                Ba.rotation.x = ma(Ba.rotation.x, b, 1),
                this.pitch = controls.cameraX,
                this.crosshair.position.x = Ba.position.x,
                this.crosshair.position.y = Ba.position.y + .01,
                this.crosshair.position.z = Ba.position.z - .3
            }
            controls.isMouseLookLocked ? this.use = controls.lmb : this.use = !1
        }
        if (1 == this.jumping && this.tryJump(),
        this.jumpVel -= 80 * a,
        this.jump += this.jumpVel * a,
        this.jump < 0 && (this.jump = 0),
        this.isPlayer && this.parent && (3 === this.parent.shipState || 2 === this.parent.shipState || -1 === this.parent.shipState || 4 === this.parent.shipState || 5 === this.parent.netType)) {
            Pa.updateKrewList(),
            Pa.hideSuggestionBox || !$("#shopping-modal").is(":visible") && Ca.gold > 500 && $("#earn-gold").is(":visible") && $("#earn-gold").hide();
            var d = ca[this.parent.anchorIslandId || this.parent.id]
              , e = new THREE.Vector3(0,0,0);
            if (5 === this.parent.netType) {
                var f = this.geometry.position.clone();
                e.y = f.y;
                var g = f.distanceTo(e);
                d.dockRadius - 2 < g && (f.lerp(e, 1 - (d.dockRadius - 2) / g),
                this.position.x = f.x,
                this.position.z = f.z)
            }
            if (1 === this.parent.netType) {
                var h = ca[this.parent.id]
                  , f = this.geometry.getWorldPosition().clone();
                f = d.geometry.worldToLocal(f),
                e.y = f.y;
                var g = f.distanceTo(e);
                d.dockRadius - 2 < g && (f.lerp(e, 1 - (d.dockRadius - 2.5) / g),
                f = d.geometry.localToWorld(f),
                f = h.geometry.worldToLocal(f),
                this.position.x = f.x,
                this.position.z = f.z)
            }
        }
        this.dockedLogic(),
        this.geometry.position.set(this.position.x, this.position.y + this.jump, this.position.z),
        this.geometry.rotation.y = this.rotation,
        void 0 !== this.weapon && (1 == this.activeWeapon ? (this.weapon.rotation.x += a * this.rodRotationSpeed,
        this.weapon.rotation.x > .75 && (this.weapon.rotation.x = 0)) : this.weapon.rotation.x = .1 - this.rotationOffset),
        this.isCaptain != this.oldCaptainState && (this.parent && this.isPlayer && !this.isCaptain && (Pa.showCenterMessage("You are not the captain anymore!", 4, 4e3),
        3 === this.parent.shipState || 4 === this.parent.shipState || -1 === this.parent.shipState ? ($("#toggle-shop-modal-button").removeClass("btn btn-md disabled toggle-shop-modal-button").addClass("btn btn-md enabled toggle-shop-modal-button"),
        $("#toggle-krew-list-modal-button").removeClass("btn btn-md disabled toggle-krew-list-modal-button").addClass("btn btn-md enabled toggle-krew-list-modal-button"),
        $("#exit-island-button").hide(),
        $("#toggle-invite-link-button").show(),
        $("#quests-button").show()) : 1 === this.parent.shipState && $("#docking-modal").hide(),
        $("#abandon-ship-button").show()),
        this.parent && this.isPlayer && this.isCaptain && (Pa.showCenterMessage("You are the captain now!", 4, 4e3),
        va = 0,
        3 === this.parent.shipState || 4 === this.parent.shipState || -1 === this.parent.shipState ? ($("#toggle-shop-modal-button").removeClass("btn btn-md disabled toggle-shop-modal-button").addClass("btn btn-md enabled toggle-shop-modal-button"),
        $("#toggle-krew-list-modal-button").removeClass("btn btn-md disabled toggle-krew-list-modal-button").addClass("btn btn-md enabled toggle-krew-list-modal-button"),
        $("#exit-island-button").show(),
        $("#toggle-invite-link-button").show(),
        $("#quests-button").show()) : 1 === this.parent.shipState && $("#docking-modal").show(),
        $("#abandon-ship-button").hide()),
        this.isCaptain ? (this.playerBody.add(this.captainHat),
        void 0 !== this.label && (this.label.material.color = this.isPlayer ? D.myself : this.isCaptain ? D.captain : D.player)) : (this.playerBody.remove(this.playerBody.getObjectByName("captainHat")),
        void 0 !== this.label && (this.label.material.color = this.isPlayer ? D.myself : this.isCaptain ? D.captain : D.player)))
    }
    ,
    m.prototype.tryJump = function(a) {
        this.jumpVel > 0 || this.jump > 0 || (this.jumpVel = 16)
    }
    ;
    !function(a) {
        var b = hyperapp.h
          , c = {
            boats: []
        }
          , d = {
            boats: function() {
                return function(a) {
                    var b, c, d = [];
                    if ("object" == typeof ca && null !== ca)
                        for (b in ca)
                            c = ca[b],
                            La ? Ca && c && c.anchorIslandId && 4 === c.shipState && !0 === c.recruiting && !0 !== c.isLocked && (1 === Ca.parent.netType && c.anchorIslandId === Ca.parent.anchorIslandId || c.anchorIslandId === Ca.parent.id) && d.push(c) : Ca && c && c.anchorIslandId && (3 === c.shipState || 2 === c.shipState || -1 === c.shipState || 4 === c.shipState) && !0 === c.recruiting && (1 == Ca.parent.netType && c.anchorIslandId == Ca.parent.anchorIslandId || c.anchorIslandId == Ca.parent.id) && (d.push(c),
                            $("#docked-krews-count").html(d.length));
                    return d.sort(function(a, b) {
                        return a.departureTime === b.departureTime ? a.id < b.id ? -1 : a.id == b.id ? 0 : 1 : a.departureTime - b.departureTime
                    }),
                    0 == d.length && $("#toggle-krew-list-modal-button").popover("hide"),
                    {
                        boats: d
                    }
                }
            }
        }
          , e = function(a, c) {
            return b("div", {}, [b("table", {
                class: "table table-sm"
            }, [b("thead", {
                class: "thead-inverse"
            }, [b("tr", {}, [b("th", {}, "Krew Name"), b("th", {}, "Capacity"), b("th")])]), b("tbody", {}, a.boats.map(function(a) {
                if (void 0 !== Ca && void 0 !== Ca.parent && void 0 !== a && void 0 !== ca[a.captainId]) {
                    a.id;
                    return $(document).on("click", "#" + a.id, function() {
                        var b = a.id;
                        void 0 !== ca[b] && ca[b].maxKrewCapacity != ca[b].krewCount && ca[b].captainId !== myPlayerId && ub.emit("joinKrew", b, function(a) {
                            0 === a && ($("#exit-island-button").hide(),
                            $("#toggle-invite-link-button").hide(),
                            $("#invite-div").hide(),
                            $("#departure-modal").is(":visible") && $("#departure-modal").hide(),
                            GameAnalytics("addDesignEvent", "Game:Session:JoinedBoat"),
                            $("#krew-div").show(),
                            $("#abandon-ship-button").show())
                        })
                    }),
                    b("tr", {
                        key: a.id
                    }, [b("td", {}, [a.crewName + "(" + ra[a.shipclassId].name + ")", b("br"), b("small", {}, 4 == a.shipState ? "Departing in " + Math.round(a.departureTime) + " seconds" : "")]), b("td", {}, a.krewCount + "/" + ra[a.shipclassId].maxKrewCapacity), b("td", {}, a.id === Ca.parent.id ? "My Krew" : b("button", {
                        id: a.id,
                        class: "btn btn-primary btn-md",
                        role: "button",
                        disabled: void 0 === ca[a.id] || ca[a.id].maxKrewCapacity == ca[a.id].krewCount || ca[a.id].captainId === myPlayerId
                    }, "Join"))])
                }
            }))])])
        };
        a.KREWLISTCOMPONENT = hyperapp.app(c, d, e, document.getElementById("krews-list")),
        a.DEPARTINGKREWLISTCOMPONENT = hyperapp.app(c, d, e, document.getElementById("departing-krews-list"))
    }(window),
    function(a) {
        var b = {
            $shoppingList: $("#shopping-item-list")
        }
          , c = {
            getList: function() {
                c.removeListeners().clearStore().setStore(function() {
                    c.setContent().setListeners()
                })
            },
            removeListeners: function() {
                return void 0 !== b.$html && (b.$html.children().off(),
                b.$html.off()),
                c
            },
            clearStore: function() {
                return Object.assign(b, {
                    goodsPrice: {},
                    goods: {},
                    cargo: 0,
                    cargoUsed: 0,
                    gold: 0,
                    $html: void 0,
                    inventory: {},
                    stock: {}
                }),
                c
            },
            setStore: function(a) {
                Ca && Ca.parent && (5 == Ca.parent.netType || 1 !== Ca.parent.shipState && 0 !== Ca.parent.shipState) && ub.emit("getGoodsStore", function(c, d) {
                    c && console.warn(c),
                    c || Object.assign(b, d),
                    a && a.call && a()
                })
            },
            setContent: function() {
                var a = $('<div class="stock"/>');
                return 0 === Object.keys(b.goodsPrice).length && Ca.parent && 1 !== Ca.parent.netType && a.append('<div class="col-xs-12 trading"><h5 class="text-warning">You must own a ship, or join a krew before buying supplies</h5></div>'),
                Object.keys(b.goodsPrice).length > 0 && (a.append(c.getInventory()),
                a.append(c.getGoods())),
                b.$html = a,
                b.$shoppingList.html(b.$html),
                c
            },
            setListeners: function() {
                $("input[type=range]").each(function() {
                    inputRange($(this))
                });
                for (var a in b.inventory)
                    c.setInputRangeListeners(b.inventory[a], a, "sell");
                for (var a in b.stock)
                    c.setInputRangeListeners(b.stock[a], a, "buy");
                return c
            },
            setInputRangeListeners: function(a, d, e) {
                var f = a.find(".btn-" + e)
                  , g = a.find(".ui-slider")
                  , h = g.find(".ui-slider-handle")
                  , i = {
                    create: function() {
                        h.text(g.slider("value"))
                    },
                    slide: function(a, c) {
                        h.text(c.value);
                        var g = +c.value * b.goodsPrice[d]
                          , i = "sell" === e ? "+" : "-";
                        f.html((g > 0 ? i : "") + g)
                    }
                };
                if ("sell" === e && (i.max = b.goods[d]),
                "buy" === e) {
                    var j = parseInt(b.gold / b.goodsPrice[d])
                      , k = (b.cargo - b.cargoUsed) / pa[d].cargoSpace;
                    j > k && (j = k),
                    j = Math.floor(j),
                    i.max = j
                }
                g.slider(i),
                f.one("click", function(a) {
                    a.preventDefault(),
                    GameAnalytics("addDesignEvent", "Game:Session:Trade"),
                    g.slider("value") > 0 && ub.emit("buy-goods", {
                        quantity: g.slider("value"),
                        action: e,
                        good: d
                    }, function(a, b) {
                        a && console.log(a),
                        a || (Ca.gold = b.gold,
                        Ca.goods = b.goods),
                        c.getList()
                    })
                })
            },
            getInventory: function() {
                var a, c, d = "";
                d += '<div class="col-xs-12 col-sm-6 trading">',
                d += "    <h6>Your ship's cargo " + b.cargoUsed + "/" + b.cargo + "</h6>",
                d += '    <table class="table table-sm">',
                d += "        <thead><tr><th>Name</th><th>Quantity</th><th></th><th>Sell</th></tr></thead>",
                d += "        <tbody></tbody>",
                d += "    </table>",
                d += "    <br>",
                d += "</div>",
                a = $(d),
                c = a.find("tbody");
                for (var e in b.goods)
                    if (b.goods[e] > 0 && void 0 !== b.goodsPrice[e]) {
                        var f = "";
                        f += "<tr>",
                        f += "    <td>",
                        f += "        " + e,
                        f += "        <label>$" + b.goodsPrice[e] + " each</label>",
                        f += "        <label>" + pa[e].cargoSpace + " cargo</label>",
                        f += "    </td>",
                        f += "    <td>",
                        f += '        <div class="ui-slider" style="margin-top: 10px">',
                        f += '            <div class="ui-slider-handle" style="width: 3em;height: 1.6em;top: 50%;margin-top: -.8em;text-align: center;line-height: 1.6em;"></div>',
                        f += "        </div>",
                        f += "    </td>",
                        f += '    <td style="padding-top: 5px">' + b.goods[e] + "</td>",
                        f += "    <td>",
                        f += '        <button class="btn btn-success btn-sm btn-sell">0</button>',
                        f += "    </td>",
                        f += "</tr>",
                        b.inventory[e] = $(f),
                        c.append(b.inventory[e])
                    }
                return a
            },
            getGoods: function() {
                var a, c, d = "";
                d += '<div class="col-xs-12 col-sm-6 trading">',
                d += "    <h6>Merchant</h6>",
                d += '    <table class="table table-sm">',
                d += "        <thead><tr><th>Name</th><th>Quantity</th><th></th><th>Buy</th></tr></thead>",
                d += "        <tbody></tbody>",
                d += "    </table>",
                d += "    <br>",
                d += "</div>",
                a = $(d),
                c = a.find("tbody");
                for (var e in b.goodsPrice)
                    if (void 0 !== b.goods[e]) {
                        var f = parseInt(b.gold / b.goodsPrice[e])
                          , g = (b.cargo - b.cargoUsed) / pa[e].cargoSpace
                          , h = "";
                        f > g && (f = g),
                        f = Math.floor(f),
                        h += "<tr>",
                        h += "    <td>",
                        h += "        " + e,
                        h += "        <label>$" + b.goodsPrice[e] + " each</label>",
                        h += "        <label>" + pa[e].cargoSpace + " cargo</label>",
                        h += "    </td>",
                        h += "    <td>",
                        h += '        <div class="ui-slider" style="margin-top: 10px">',
                        h += '            <div class="ui-slider-handle" style="width: 3em;height: 1.6em;top: 50%;margin-top: -.8em;text-align: center;line-height: 1.6em;"></div>',
                        h += "        </div>",
                        h += "    </td>",
                        h += '    <td style="padding-top: 5px">' + f + "</td>",
                        h += "    <td>",
                        h += '        <button class="btn btn-success btn-sm btn-buy">0</button>',
                        h += "    </td>",
                        h += "</tr>",
                        b.stock[e] = $(h),
                        c.append(b.stock[e])
                    }
                return a
            }
        };
        a.GOODSCOMPONENT = c
    }(window),
    function(a) {
        var b = {
            $shoppingList: $("#shopping-item-list")
        }
          , c = {
            keys: {
                53: "fireRate",
                54: "distance",
                55: "damage"
            },
            getList: function() {
                if (void 0 === Ca || void 0 === Ca.parent)
                    return void console.warn("Ooops, it seems you don't have a boat.");
                c.removeListeners().clearStore().setStore(function() {
                    c.setContent().setListeners()
                })
            },
            removeListeners: function() {
                return void 0 !== b.$html && (b.$html.children().off(),
                b.$html.off()),
                c
            },
            clearStore: function() {
                return Object.assign(b, {
                    $html: void 0,
                    points: {},
                    originalPoints: 0,
                    availablePoints: 0,
                    usedPoints: 0,
                    allocatedPoints: {},
                    pointsTr: {},
                    experience: Ca ? Ca.experience : 0
                }),
                c
            },
            setStore: function(a) {
                ub.emit("getExperiencePoints", function(c, d) {
                    if (c)
                        return void console.warn(c);
                    Object.assign(b, d),
                    Ca && (Ca.experience = d.experience,
                    Ca.points = d.points);
                    for (var e in b.points)
                        b.allocatedPoints[e] = 0;
                    b.originalPoints = b.availablePoints,
                    a && a.call && a(b)
                })
            },
            setContent: function() {
                var a = $("<div/>");
                return a.append(c.getPointsList()),
                0 === b.originalPoints && a.find(".btn-allocate-points").attr("disabled", !0),
                b.$html = a,
                b.$shoppingList.html(b.$html),
                c
            },
            setListeners: function() {
                var a, d = b.$html.find(".btn-allocate-points");
                $("input[type=range]").each(function() {
                    inputRange($(this))
                });
                for (a in b.pointsTr)
                    c.setInputRangeListeners(b.pointsTr[a], a);
                return d.one("click", function(a) {
                    a.preventDefault(),
                    c.allocatePoints(function() {
                        c.getList()
                    })
                }),
                c
            },
            allocatePoints: function(a) {
                ub.emit("allocatePoints", b.allocatedPoints, function(b) {
                    b && console.log(b),
                    "function" == typeof a && a()
                })
            },
            setInputRangeListeners: function(a, d) {
                var e = a.find("input");
                e.on("change input", function() {
                    c.updateAvailablePoints();
                    var a = parseInt(e.val()) - b.points[d];
                    a <= 0 && (a = 0),
                    a > b.allocatedPoints[d] + b.availablePoints && (a = b.allocatedPoints[d] + b.availablePoints),
                    b.availablePoints <= 0 && a >= b.allocatedPoints[d] && (a = b.allocatedPoints[d]),
                    b.allocatedPoints[d] = a,
                    a += b.points[d],
                    e.val(a),
                    updateInputRange(e),
                    c.updateAvailablePoints(),
                    b.$html.find("h6").html("Available points: " + b.originalPoints + '<span class="float-right">Points left: ' + b.availablePoints + "</span>"),
                    Pa.updateUiExperience()
                }).trigger("change")
            },
            updateAvailablePoints: function() {
                b.usedPoints = 0;
                for (var a in b.allocatedPoints)
                    b.usedPoints += b.allocatedPoints[a];
                return b.availablePoints = b.originalPoints - b.usedPoints,
                c
            },
            getPointsList: function() {
                var a, c, d = "";
                d += "<div>",
                d += "    <h6>Available points: " + b.originalPoints + '<span class="float-right">Points left: ' + b.availablePoints + "</span></h6>",
                d += '    <table class="table table-sm">',
                d += "        <thead><tr><th>Name</th><th>Quantity</th></tr></thead>",
                d += "        <tbody></tbody>",
                d += "    </table>",
                d += '    <button class="btn btn-primary float-right btn-allocate-points">Allocate points</button>',
                d += "</div>",
                a = $(d),
                c = a.find("tbody");
                for (var e in b.points) {
                    var f = "";
                    f += "<tr>",
                    f += "    <td>" + e + "</td>",
                    f += "    <td>",
                    f += '        <div class="range-group">',
                    f += '            <input type="range" min="0" max="50" step="1" value="' + b.points[e] + '">',
                    f += "            <output></output>",
                    f += "        </div>",
                    f += "    </td>",
                    f += "</tr>",
                    b.pointsTr[e] = $(f),
                    c.append(b.pointsTr[e])
                }
                return a
            },
            checkButtonTab: function() {
                c.clearStore().setStore(function(a) {
                    var b = $("#experience-points");
                    if (a.originalPoints > 0)
                        return void b.show(0);
                    b.hide(0)
                })
            }
        };
        a.EXPERIENCEPOINTSCOMPONENT = c
    }(window);
    var za, Aa, Ba, Ca, Da, Ea, Fa, Ga, Ha, Ia, Ja = 0, Ka = 0, La = (document.createElement("div"),
    !1), Ma = 0, Na = performance.now(), Oa = window.location.href.replace(/\?.*/, "").replace(/#.*/, "").replace(/\/$/, ""), Pa = {
        isLoggedIn: !1,
        hideSuggestionBox: !1,
        serverList: {},
        setListeners: function() {
            var a = $("#crew-name")
              , b = $("#crew-name-edit-button")
              , c = (a.add(b),
            $("#crew-name-edit-input"))
              , d = $("#crew-name-form")
              , e = this;
            b.on("click", function() {
                b.addClass("hidden"),
                e.leadersUiConfiguration.active && (a.addClass("hidden"),
                e.leadersUiConfiguration.editingName = !0,
                c.val(a.html()).removeClass("hidden"))
            }),
            d.on("submit", function(d) {
                if (e.leadersUiConfiguration.editingName = !1,
                a.removeClass("hidden"),
                c.addClass("hidden"),
                e.leadersUiConfiguration.active) {
                    b.removeClass("hidden");
                    var f = c.val().trim().slice(0, 20);
                    f.length > 0 && !f.includes("⚔") && (Da.setName(f),
                    a.text(Da.crewName),
                    ub.emit("updateKrewName", Da.crewName))
                }
                c.val(""),
                d.preventDefault()
            }),
            c.on("keyup", function(a) {
                var b = $(this)
                  , c = b.val();
                c.trim().length > 20 && b.val(c.slice(0, 20))
            }),
            $(".toggle-shop-modal-button").on("click", function() {
                $("#toggle-shop-modal-button").hasClass("enabled") && ($("#shopping-modal").is(":visible") ? $("#shopping-modal").hide() : (Pa.closeAllPagesExcept("#shopping-modal"),
                Pa.hideSuggestionBox = !0,
                Pa.updateStore($(".btn-shopping-modal.active")),
                $("#toggle-shop-modal-button").popover("hide"),
                $("#shopping-modal").show()))
            }),
            $(".toggle-krew-list-modal-button").on("click", function() {
                $("#toggle-krew-list-modal-button").hasClass("enabled") && ($("#krew-list-modal").is(":visible") ? $("#krew-list-modal").hide() : (Pa.closeAllPagesExcept("#krew-list-modal"),
                Pa.hideSuggestionBox = !0,
                Pa.updateStore($(".btn-shopping-modal.active")),
                $("#toggle-shop-modal-button").popover("hide"),
                $("#krew-list-modal").show()))
            }),
            $(".toggle-bank-modal-button").on("click", function() {
                $("#toggle-bank-modal-button").hasClass("enabled") && ($("#bank-modal").is(":visible") ? $("#bank-modal").hide() : (Pa.closeAllPagesExcept("#bank-modal"),
                $("#bank-modal").show(),
                $("#successTakeDepoMess").hide(),
                $("#successMakeDepoMess").hide(),
                $("#errorMakeDepoMess").hide(),
                $("#errorTakeDepoMess").hide(),
                mb()))
            }),
            $("#toggle-map-button").on("click", function() {
                $("#minimap-container").is(":visible") ? $("#minimap-container").hide() : $("#minimap-container").show()
            }),
            $(".toggle-ship-status-button").on("click", function() {
                $("#ship-status-modal").is(":visible") ? $("#ship-status-modal").hide() : (Pa.closeAllPagesExcept("#ship-status-button"),
                Pa.showShipStatus(),
                $("#ship-status-modal").show(),
                !0 !== Ca.isCaptain ? $("#lock-krew-label").hide() : ($("#lock-krew-label").show(),
                !0 !== Da.isLocked ? ($("#lock-krew-button").prop("checked", !1),
                $("#lock-krew-text").removeClass("lock-text-error").addClass("lock-text-info").text("Lock krew...")) : ($("#lock-krew-button").prop("checked", !0),
                $("#lock-krew-text").removeClass("lock-text-info").addClass("lock-text-error").text("Unlock krew..."))))
            }),
            $("#ship-status").on("click", function() {
                Pa.showShipStatus()
            }),
            $("#clan-management").on("click", function() {
                $("#clan-management").addClass("active"),
                $("#ship-status").removeClass("active"),
                !0 === Ca.isLoggedIn ? (Pa.setClanData(),
                $("#clan-management-container").is(":visible") || ($("#clan-management-container").show(),
                $("#ship-status-container").hide(),
                Pa.setClanData("force"))) : ($("#ship-status-container").hide(),
                $("#notLoggedIn-container").show())
            }),
            $("#leave-clan-button").on("click", function() {
                ub.emit("clan", "leave", function(a) {
                    !0 === a && (Pa.showCenterMessage("You successfully left the clan", 3, 5e3),
                    Pa.setClanData("force"))
                }),
                Ca.clan = "",
                Pa.setClanData()
            }),
            $("#request-clan-button").on("click", function() {
                $("#clan-table").hide(),
                $("#clan-request-table").show(),
                $("#view-clan-button").show()
            }),
            $("#view-clan-button").on("click", function() {
                $("#clan-table").show(),
                $("#clan-request-table").hide(),
                $("#view-clan-button").hide()
            }),
            $("#clan-request").on("click", function() {
                Pa.hideAllClanErrors()
            }),
            $("#join-clan-button").on("click", function() {
                Pa.hideAllClanErrors();
                var a = $("#clan-request").val();
                !0 !== t(a) ? $("#errorInput").show() : a.length < 1 || a.length > 4 ? $("#errorLength").show() : Ca.clanRequest && "" !== Ca.clanRequest || ub.emit("clan", {
                    action: "join",
                    id: a
                }, function(b) {
                    !0 === b ? (Ca.clanRequest = a,
                    Pa.showCenterMessage("Your request was sent to the clan leader(s)", 3, 5e3),
                    Pa.setClanData("force")) : 404 === b ? $("#error404").show() : $("#errorUndefined").show()
                })
            }),
            $("#create-clan-button").on("click", function() {
                Pa.hideAllClanErrors();
                var a = $("#clan-request").val();
                !0 !== t(a) ? $("#errorInput").show() : a.length < 1 || a.length > 4 ? $("#errorLength").show() : ub.emit("clan", {
                    action: "create",
                    id: a
                }, function(b) {
                    !0 === b ? (Pa.showCenterMessage("You successfully created your own clan", 3, 5e3),
                    Ca.clan = a,
                    Ca.clanLeader = !0,
                    Pa.setClanData("force")) : 409 === b ? $("#errorExists").show() : 403 === b ? $("#errorUnauthorized").show() : $("#errorUndefined").show()
                })
            }),
            $("#clan-table").on("click", function(a) {
                var b = a.target.getAttribute("data-event")
                  , c = a.target.getAttribute("data-id");
                "promote-clan" === b ? (ub.emit("clan", {
                    action: "promote",
                    id: c
                }, function(a) {
                    !0 === a ? (Pa.setClanData("force"),
                    Pa.showCenterMessage("You promoted " + c + " to be a clan leader", 3, 5e3)) : Pa.showCenterMessage("Promoting " + c + " to be a clan leader FAILED", 1, 5e3)
                }),
                Pa.setClanData()) : "kick-clan" === b && ub.emit("clan", {
                    action: "kick",
                    id: c
                }, function(a) {
                    !0 === a ? (Pa.setClanData("force"),
                    Pa.showCenterMessage("You kicked " + c + " from the clan", 4, 5e3)) : Pa.showCenterMessage("Kicking " + c + " from your clan FAILED", 1, 5e3)
                })
            }),
            $("#clan-request-table").on("click", function(a) {
                var b = a.target.getAttribute("data-event")
                  , c = a.target.getAttribute("data-id");
                "accept-request" === b ? ub.emit("clan", {
                    action: "accept",
                    id: c
                }, function(a) {
                    !0 === a && (Pa.setClanData("force"),
                    Pa.showCenterMessage("You accepted " + c + " to join the clan", 4, 5e3))
                }) : "decline-request" === b && ub.emit("clan", {
                    action: "decline",
                    id: c
                }, function(a) {
                    !0 === a && (Pa.setClanData("force"),
                    Pa.showCenterMessage("You declined " + c + " to join the clan", 4, 5e3))
                })
            }),
            $("#player-request-table").on("click", function(a) {
                "cancel-request" === a.target.getAttribute("data-event") && Ca.clanRequest && "" !== Ca.clanRequest && ub.emit("clan", {
                    action: "cancel-request",
                    id: Ca.clanRequest
                }, function(a) {
                    !0 === a && (Ca.clanRequest = "",
                    Pa.setClanData("force"),
                    Pa.showCenterMessage("Your request has been cancelled", 4, 5e3))
                })
            }),
            $("#minimap").on("click", function(a) {
                if (Na < performance.now() - 5e3) {
                    Na = performance.now();
                    var b = 9.4 * (void 0 == a.offsetX ? a.layerX : a.offsetX) - 94
                      , c = 9.4 * (void 0 == a.offsetY ? a.layerY : a.offsetY) - 94;
                    ub.emit("addMarker", {
                        x: b,
                        y: c
                    })
                }
            }),
            $("#krew-list").on("click", function(a) {
                var b = a.target.getAttribute("data-event");
                if ("kick" == b) {
                    var c = a.target.getAttribute("data-id");
                    "string" == typeof c && c.length > 0 && (ub.emit("bootMember", c),
                    $(a.target).closest(".player-list-item").remove(),
                    $("#buy-goods").hasClass("active") && GOODSCOMPONENT.getList())
                } else if ("transfer" == b) {
                    var c = a.target.getAttribute("data-id");
                    "string" == typeof c && c.length > 0 && (ub.emit("transferShip", c),
                    $("#buy-goods").hasClass("active") && GOODSCOMPONENT.getList())
                }
            })
        },
        updateUiExperience: function() {
            var a = $(".level-up-button");
            a.off(),
            EXPERIENCEPOINTSCOMPONENT.clearStore().setStore(function(b) {
                b.originalPoints > 0 && (a.show(0),
                a.one("click", function() {
                    var a = $(this)
                      , c = a.attr("data-attribute");
                    b.allocatedPoints[c] = 1,
                    EXPERIENCEPOINTSCOMPONENT.allocatePoints(function() {
                        Pa.updateUiExperience()
                    })
                })),
                b.originalPoints <= 0 && a.hide(0);
                var c, d, e, f, g = $("#experience-bar"), h = g.find("div"), i = $(".experience-attribute-fireRate"), j = $(".experience-attribute-damage"), k = $(".experience-attribute-distance"), l = Ca.experience, m = parseInt(Ca.level);
                c = m + 1,
                d = Ca.experienceNeededForLevels[m].total,
                e = Ca.experienceNeededForLevels[c].total,
                f = parseInt((l - d) / (e - d) * 100),
                g.attr("data-info", "Level " + m),
                i.find("span").html(Ca.points.fireRate),
                j.find("span").html(Ca.points.damage),
                k.find("span").html(Ca.points.distance),
                m === Ca.experienceMaxLevel ? h.attr("style", "width: 100%") : h.attr("style", "width: " + f + "%")
            })
        },
        showCenterMessage: function(a, b, c) {
            var d = "";
            switch (b) {
            case void 0:
                d = "info";
                break;
            case 1:
                d = "danger";
                break;
            case 3:
                d = "success";
                break;
            case 4:
                d = "info"
            }
            GrowlNotification.notify({
                description: a,
                closeTimeout: void 0 === c ? 4e3 : c,
                position: "top-center",
                animationOpen: "slide-in",
                animationClose: "fade-out",
                type: d,
                imageVisible: !0,
                imageCustom: "../assets/img/" + d + "-new.png"
            })
        },
        showAdminMessage: function(a) {
            GrowlNotification.notify({
                title: "Message from admin:",
                description: a,
                closeTimeout: 8e3,
                position: "top-center",
                animationOpen: "slide-in",
                animationClose: "fade-out",
                type: "info",
                imageVisible: !0,
                imageCustom: "../assets/img/info-new.png"
            })
        },
        showKillMessage: function(a) {
            GrowlNotification.notify({
                description: a,
                closeTimeout: 5e3,
                position: "top-right",
                animationOpen: "slide-in",
                animationClose: "fade-out",
                type: "danger",
                imageVisible: !0,
                imageCustom: "../assets/img/cannon32x32.png"
            })
        },
        showDamageMessage: function(a, b) {
            switch (b) {
            case void 0:
            case 1:
                color = "#a94442";
                break;
            case 2:
                color = "#3c763d"
            }
            var c = $("<div/>", {
                class: "text-xs-center",
                text: a,
                style: "color: " + color
            }).delay(3e3).fadeOut("slow");
            $("#center-div div").length > 3 && $("#center-div div:last-child").remove(),
            $("#center-div").prepend(c)
        },
        showAdinplay: function() {
            var a = Date.now()
              , b = localStorage.getItem("lastAdTime")
              , c = a - b;
            console.log("Time since last ad: " + c / 1e3 + "s"),
            0 != b && void 0 != b && c > 3e5 ? (console.log("Showing ad"),
            localStorage.setItem("lastAdTime", a),
            adplayer && adplayer.startPreRoll()) : (null != b && void 0 !== b || localStorage.setItem("lastAdTime", 1),
            console.log("Last ad recent. Not showing ad"))
        },
        showAdinplayCentered: function() {
            "undefined" != typeof adplayer && adEnabled ? adplayerCentered.startPreRoll() : console.log("adplayer is not defined")
        },
        getShips: function(a) {
            Ca && 1 !== Ca.parent.shipState && 0 !== Ca.parent.shipState && ub.emit("getShips", function(b, c) {
                b && console.warn(b);
                var d = $("<div/>", {
                    style: "font-size: 15px;text-align: center;"
                })
                  , e = '<table class="table ship-table">';
                e += '<thead class="thead-inverse">',
                e += "<tr>",
                e += "<th> Ship Image </th>",
                e += "<th> Ship Type </th>",
                e += "<th> HP</th>",
                e += "<th> Max Capacity </th>",
                e += "<th> Max Cargo </th>",
                e += "<th> Speed </th>",
                e += "<th> Price </th>",
                e += "<th> Buy </th>",
                e += "</tr>",
                e += "</thead>",
                e += "<tbody></tbody>",
                e += "</table>",
                $shopContainer = $(e),
                $tbody = $shopContainer.find("tbody");
                for (var f in c) {
                    var g = c[f];
                    if (0 != g.id) {
                        var h = "<tr>";
                        h += "<td>" + g.image + "</td>",
                        h += "<td>" + g.name + "</td>",
                        h += "<td>" + g.hp + "</td>",
                        h += "<td>" + g.maxKrewCapacity + "</td>",
                        h += "<td>" + g.cargoSize + "</td>",
                        h += "<td>" + g.speed + "</td>",
                        h += "<td>" + g.price + "</td>",
                        h += "<td></td>",
                        h += "</tr>";
                        var i = $(h);
                        $tbody.append(i);
                        var j = $("<button/>", {
                            id: g.id,
                            class: "btn btn-primary btn-sm",
                            role: "button",
                            disabled: void 0 !== Da && g.id == Da.shipclassId && Da.captainId == myPlayerId || !0 !== g.purchasable,
                            html: void 0 !== Da && g.id == Da.shipclassId && Da.captainId == myPlayerId ? "Purchased" : "Buy"
                        }).on("click", function() {
                            $("#abandon-existing-krew").is(":visible") && $("#abandon-existing-krew").hide();
                            var a = $(this).attr("id");
                            void 0 !== Ca && (Ca.position.x = 0,
                            Ca.position.z = 0),
                            ub.emit("purchase", {
                                type: 0,
                                id: a
                            }, function(a) {
                                var b = ["04", "05", "06", "07", "015", "016"]
                                  , c = ["08", "09", "010", "012", "013", "018", "019"]
                                  , d = ["014", "020"];
                                b.includes(a) && ($("#shopping-modal").hide(),
                                $("#completed-quest-table").append($("#other-quest-2").last()),
                                $("#completed-quest-table .quest-progress").html('<i class="icofont icofont-check-circled"></i>'),
                                $("#other-quest-3").show()),
                                c.includes(a) && ($("#shopping-modal").hide(),
                                $("#completed-quest-table").append($("#other-quest-3").last()),
                                $("#completed-quest-table .quest-progress").html('<i class="icofont icofont-check-circled"></i>'),
                                $("#other-quest-4").show()),
                                d.includes(a) && ($("#shopping-modal").hide(),
                                $("#completed-quest-table").append($("#other-quest-4").last()),
                                $("#completed-quest-table .quest-progress").html('<i class="icofont icofont-check-circled"></i>'))
                            }),
                            $("#krew-div").show(),
                            void 0 !== Ca && void 0 !== Ca.parent && 1 !== Ca.parent.netType && (GameAnalytics("addDesignEvent", "Game:Session:PurchasedBoat"),
                            $("#raft-shop-div").hide(),
                            La && $("#toggle-krew-list-modal-button").popover("show"),
                            Pa.hideSuggestionBox || $("#toggle-shop-modal-button").popover("show"))
                        });
                        i.find("td").eq(7).append(j)
                    }
                }
                d.append($shopContainer),
                "function" == typeof a && a(d)
            })
        },
        getItems: function(a) {
            1 !== Ca.parent.shipState && 0 !== Ca.parent.shipState && ub.emit("getItems", function(b, c) {
                b && console.warn(b);
                var d = $("<div/>")
                  , e = '<table class="table">';
                e += '<thead class="thead-inverse">',
                e += "<tr>",
                e += "<th> Item Name </th>",
                e += "<th> Description </th>",
                e += "<th> Price </th>",
                e += "<th> Buy Item </th>",
                e += "</tr>",
                e += "</thead>",
                e += "<tbody></tbody>",
                e += "</table>",
                $shopContainer = $(e),
                $tbody = $shopContainer.find("tbody");
                for (i in c) {
                    var f = c[i];
                    11 !== f.id || !(Ca.overall_kills < 10 || Ca.overall_cargo < 1e5) && Ca.shipsSank && Ca.overall_cargo ? 14 === f.id && !0 === Ca.statsReset && (f.purchasable = !1) : f.purchasable = !1;
                    var g = "<tr>";
                    g += "<td>" + f.name + "</td>",
                    g += "<td>" + f.Description + "</td>",
                    g += "<td>" + f.price + "</td>",
                    g += "<td></td>",
                    g += "</tr>";
                    var h = $(g);
                    $tbody.append(h);
                    var j = $("<button/>", {
                        id: f.id,
                        class: "btn btn-primary btn-sm",
                        role: "button",
                        disabled: !!(Ca && Ca.itemId == f.id || !0 !== f.purchasable),
                        html: Ca && Ca.itemId == f.id ? "Equipped" : "Buy"
                    }).on("click", function() {
                        var a = $(this).attr("id");
                        ub.emit("purchase", {
                            type: 1,
                            id: a
                        }, function(a) {
                            "14" === a && (Pa.updateUiExperience(),
                            $("#shopping-modal").hide(),
                            Ca.statsReset = !0)
                        })
                    });
                    h.find("td").eq(3).append(j)
                }
                d.append($shopContainer),
                "function" == typeof a && a(d)
            })
        },
        updateKrewList: function(a, b) {
            a = a || 5;
            var c = performance.now()
              , d = performance.now();
            return function() {
                (c = performance.now()) - d > 1e3 / a && (d = c,
                "function" == typeof b && requestAnimationFrame(b.bind(this)))
            }
        }(2, function() {
            KREWLISTCOMPONENT.boats(),
            DEPARTINGKREWLISTCOMPONENT.boats()
        }),
        updateStore: function(a) {
            var b = this
              , c = $("#shopping-item-list")
              , d = a.attr("id");
            return c.html(""),
            EXPERIENCEPOINTSCOMPONENT.checkButtonTab(),
            "buy-ships" === d ? (void 0 !== Ca && void 0 !== Ca.parent && Ca.parent.captainId != Ca.id && 1 == Ca.parent.netType && $("#abandon-existing-krew").show(),
            void b.getShips(function(a) {
                c.html(a)
            })) : "buy-items" === d ? ($("#abandon-existing-krew").is(":visible") && $("#abandon-existing-krew").hide(),
            void b.getItems(function(a) {
                c.html(a)
            })) : "buy-goods" === d ? ($("#abandon-existing-krew").is(":visible") && $("#abandon-existing-krew").hide(),
            void GOODSCOMPONENT.getList()) : "experience-points" === d ? ($("#abandon-existing-krew").is(":visible") && $("#abandon-existing-krew").hide(),
            void EXPERIENCEPOINTSCOMPONENT.getList()) : void 0
        },
        getInviteLink: function() {
            return "www.krew.io/?sid=" + $("#server-list").val() + "&bid=" + Da.id
        },
        updateShipStats: function(a) {
            if (Ca && Ca.parent && 1 === Ca.parent.netType) {
                $(".ship-hp").html(Ca.parent.hp),
                $(".ship-max-hp").html(Ca.parent.maxHp),
                $("#ship-name").html(ra[Da.shipclassId].name),
                $(".ship-speed").html(Ca.parent.speed);
                var b = ra[Da.shipclassId].cargoSize;
                $("#supply").html(Da.supply),
                $("#cargo-size").html(b),
                $(".ship-krew-count").html(a.krewCount),
                $(".ship-max-capacity").html(ra[Da.shipclassId].maxKrewCapacity)
            } else
                $(".ship-hp").html(""),
                $(".ship-max-hp").html(""),
                $("#ship-name").html(""),
                $("#supply").html(""),
                $("#cargo-size").html(""),
                $(".ship-krew-count").html(""),
                $(".ship-max-capacity").html(""),
                $(".ship-speed").html("/")
        },
        checkGoldDelta: function(a) {
            if (deltaGold = a - Ka,
            Ka = a,
            deltaGold > 0) {
                if (Ca.notifiscationHeap[Math.random().toString(36).substring(6, 10)] = {
                    text: "+ " + deltaGold + " Gold!",
                    type: 1,
                    isNew: !0
                },
                $("#gold").hasClass("glow-gold-plus") || 0 != Ma || ($("#gold").addClass("glow-gold-plus"),
                Ma = 1,
                setTimeout(function() {
                    $("#gold").removeClass("glow-gold-plus"),
                    Ma = 0
                }, 3500)),
                a > 99999 && a < 999999)
                    var b = Math.floor(a / 1e3) + " K";
                else
                    b = a > 999999 ? Math.floor(a / 1e3) / 1e3 + " M" : a;
                $(".my-gold").text(b)
            } else if (deltaGold < 0) {
                if ($("#gold").hasClass("glow-gold-minus") || 0 != Ma || ($("#gold").addClass("glow-gold-minus"),
                Ma = 1,
                setTimeout(function() {
                    $("#gold").removeClass("glow-gold-minus"),
                    Ma = 0
                }, 3500)),
                a > 99999 && a < 999999)
                    var b = Math.floor(a / 1e3) + " K";
                else
                    b = a > 999999 ? Math.floor(a / 1e3) / 1e3 + " M" : a;
                $(".my-gold").text(b)
            }
        },
        checkScoreDelta: function(a) {
            deltaScore = a - Ja,
            deltaScore > 0 && (this.showDamageMessage("+ " + parseFloat(deltaScore).toFixed(1) + " hit", 2),
            Ja = a)
        },
        setActiveBtn: function(a) {
            "" !== Ca.clan && void 0 !== Ca.clan && $("#li-clan-chat").show(),
            5 === ca[a].netType ? ($("#toggle-krew-list-modal-button").removeClass().addClass("btn btn-md enabled toggle-krew-list-modal-button"),
            $("#toggle-shop-modal-button").removeClass().addClass("btn btn-md enabled toggle-shop-modal-button"),
            "Labrador" === ca[a].name ? $("#toggle-bank-modal-button").removeClass().addClass("btn btn-md enabled toggle-shop-modal-button").attr("data-tooltip", "Deposit or withdraw gold") : $("#toggle-bank-modal-button").removeClass().addClass("btn btn-md disabled toggle-bank-modal-button").attr("data-tooltip", "Bank is available at Labrador")) : 1 === ca[a].netType && 3 === ca[a].shipState && ($("#toggle-krew-list-modal-button").removeClass().addClass("btn btn-md enabled toggle-krew-list-modal-button"),
            $("#toggle-shop-modal-button").removeClass().addClass("btn btn-md enabled toggle-shop-modal-button"),
            "Labrador" === ca[ca[a].anchorIslandId].name ? $("#toggle-bank-modal-button").removeClass().addClass("btn btn-md enabled toggle-shop-modal-button").attr("data-tooltip", "Deposit or withdraw gold") : $("#toggle-bank-modal-button").removeClass().addClass("btn btn-md disabled toggle-bank-modal-button").attr("data-tooltip", "Bank is available at Labrador"))
        },
        closeAllPagesExcept: function(a) {
            allPagesId = ["#help-modal", "#bank-modal", "#krew-list-modal", "#shopping-modal", "#quests-modal", "#ship-status-modal"];
            for (var b = 0; b < allPagesId.length; b++)
                a !== allPagesId[b] && $(allPagesId[b]).hide()
        },
        setBankData: function(a) {
            if (a.warn)
                $("#bankContainer").hide(),
                $("#nabankContainer").show();
            else {
                if ($("#bankContainer").show(),
                $("#nabankContainer").hide(),
                $("#my-deposits").text(a.my),
                a.total >= 1e3 && a.total.toString().length <= 6) {
                    var b = Math.floor(a.total / 1e3) + " K";
                    $("#total-deposits").text(b)
                } else
                    a.total.toString().length >= 7 ? (b = Math.floor(a.total / 1e3) / 1e3 + " M",
                    $("#total-deposits").text(b)) : (b = a.total,
                    $("#total-deposits").text(b));
                $("#make-deposit").attr({
                    max: Ca.gold
                }),
                $("#take-deposit").attr({
                    max: a.my
                })
            }
        },
        setClanData: function(a) {
            if (void 0 !== Ca.clan && "" !== Ca.clan || Ca.clanRequest && "" !== Ca.clanRequest)
                if (Ca.clanRequest && "" !== Ca.clanRequest) {
                    $("#clan-name").text("You already requested to join a clan"),
                    $("#yes-clan").hide(),
                    $("#no-clan").hide(),
                    $("#request-clan").show();
                    var b = $("#player-request-table");
                    b.html("<tr><th>Request</th><th>Action</th></tr>");
                    var c = "<tr><td>" + Ca.clanRequest + '</td><td><div data-tooltip="Cancel request" data-tooltip-location="bottom" style="display: inline-block"><i data-event="cancel-request" class="icofont icofont-close btn btn-danger clan-button"></i></div></td></tr>';
                    b.append(c)
                } else
                    $("#clan-name").text("Your clan: [" + Ca.clan + "]"),
                    $("#yes-clan").show(),
                    $("#request-clan").hide(),
                    $("#no-clan").hide(),
                    $("#request-clan-button").hide(),
                    $("#yes-clan").is(":visible") && "force" !== a || ub.emit("clan", "get-data", function(a) {
                        var b = $("#clan-table")
                          , c = "<tr><th>Player name</th><th>Clan Role</th>" + (!0 === Ca.clanLeader || !0 === Ca.clanOwner ? "<th>Action</th>" : "") + "</tr>";
                        b.html(c);
                        for (var d in a.clanLeader) {
                            if (a.clanLeader[d] === a.clanOwner)
                                var e = "<tr><td>" + a.clanLeader[d] + "</td><td>OWNER</td></tr>";
                            else
                                e = "<tr><td>" + a.clanLeader[d] + "</td><td>LEADER</td>" + (!0 === Ca.clanOwner ? '<td><div data-tooltip="Kick from clan" data-tooltip-location="top" style="display: inline-block"><i data-event="kick-clan" data-id="' + a.clanLeader[d] + '" class="icofont icofont-delete btn btn-danger clan-button"></i></div></td>' : "") + "</tr>";
                            b.append(e)
                        }
                        for (var f in a.clanMembers)
                            if (!a.clanLeader.includes(a.clanMembers[f])) {
                                var g = "<tr><td>" + a.clanMembers[f] + "</td><td>MEMBER</td>" + (!0 === Ca.clanOwner ? '<td><div data-tooltip="Promote to clan leader" data-tooltip-location="top" style="display: inline-block"><i data-event="promote-clan" data-id="' + a.clanMembers[f] + '" class="icofont icofont-arrow-up btn btn-success clan-button"></i></div><div data-tooltip="Kick from clan" data-tooltip-location="top" style="display: inline-block"><i data-event="kick-clan" data-id="' + a.clanMembers[f] + '" class="icofont icofont-delete btn btn-danger clan-button"></i></div></td>' : !0 === Ca.clanLeader ? '<td><div data-tooltip="Kick from clan" data-tooltip-location="top" style="display: inline-block"><i data-event="kick-clan" data-id="' + a.clanMembers[f] + '" class="icofont icofont-delete btn btn-danger clan-button"></i></div></td>' : "") + "</tr>";
                                b.append(g)
                            }
                        var h = $("#request-clan-button");
                        if ((!0 === Ca.clanLeader || !0 === Ca.clanOwner) && ($("#request-clan-button").show(),
                        h.show(),
                        a.clanRequests)) {
                            a.clanRequests.length > 0 ? h.removeClass("btn-warning disabled").addClass("btn-success").text("View requests (" + a.clanRequests.length + ")") : 0 === a.clanRequests.length && h.removeClass("btn-success").addClass("btn-warning disabled").text("View requests (" + a.clanRequests.length + ")");
                            var i = $("#clan-request-table");
                            i.html("<tr><th>Player name</th><th>Action</th></tr>");
                            for (var j in a.clanRequests) {
                                var k = "<tr><td>" + a.clanRequests[j] + '<td><div data-tooltip="Accept request" data-tooltip-location="bottom" style="display: inline-block"><i data-event="accept-request" data-id="' + a.clanRequests[j] + '" class="icofont icofont-check btn btn-success clan-button"></i></div><div data-tooltip="Reject request" data-tooltip-location="bottom" style="display: inline-block"><i data-event="decline-request" data-id="' + a.clanRequests[j] + '" class="icofont icofont-close btn btn-danger clan-button"></i></div></td></tr>';
                                i.append(k)
                            }
                        }
                    });
            else
                $("#clan-name").text("You don't have any clan yet"),
                $("#yes-clan").hide(),
                $("#request-clan").hide(),
                $("#no-clan").show(),
                Pa.hideAllClanErrors()
        },
        hideAllClanErrors: function() {
            $("#errorInput").hide(),
            $("#errorLength").hide(),
            $("#error404").hide(),
            $("#errorExists").hide(),
            $("#errorUndefined").hide(),
            $("#errorUnauthorized").hide()
        },
        showShipStatus: function() {
            $("#clan-management").removeClass("active"),
            $("#ship-status").addClass("active"),
            $("#notLoggedIn-container").hide(),
            $("#ship-status-container").is(":visible") || ($("#ship-status-container").show(),
            $("#clan-management-container").hide())
        },
        updateLeaderboard: function(a) {
            var b = a.players
              , c = a.boats;
            if (Ca && Ca.parent && ca) {
                if (ca && (Ca = ca[myPlayerId],
                Da = ca[Ca.parent.id]),
                a.boats.length > 0)
                    for (f in a.boats)
                        a.boats[f] && a.boats[f].id === Da.id && (Da.overall_kills = a.boats[f].ok,
                        Da.overall_cargo = a.boats[f].oc);
                c.forEach(function(a) {
                    void 0 !== ca[a.id] && ca[a.id].setName(a.cN)
                });
                var d = c.filter(function(a) {
                    if (Da)
                        return a.id === Da.id
                }).pop();
                if (Da && d) {
                    this.leadersUiConfiguration.active = d.cI === Ca.id,
                    this.updateLeadersUi();
                    var e = 0;
                    for (var f in d.players)
                        e += d.players[f].cargoUsed;
                    $(".ship-cargo").html(e + "/" + ra[Da.shipclassId].cargoSize),
                    $(".my-krew-name").text(Da.crewName)
                } else
                    $(".ship-cargo").html("/"),
                    $(".my-krew-name").html("Join a krew or buy a ship").css("fontSize", 17);
                b.sort(function(a, b) {
                    return b.g - a.g
                });
                var g = b.slice(0, 15)
                  , h = 0
                  , i = g.length
                  , j = b.length + " players"
                  , k = $('<div id="player-leaderbord-data"/>');
                if (Ca)
                    for (; h < 15 && h < i; h++) {
                        var l = g[h].sS
                          , m = g[h].d
                          , n = g[h].l
                          , o = void 0 !== g[h].c && "" !== g[h].c ? "[" + g[h].c + "]" : "";
                        if (g[h].s >= 1050 && g[h].s.length <= 6)
                            var p = Math.floor((g[h].s - 50) / 1e3) + " K";
                        else
                            p = g[h].s - 50;
                        if (g[h].g >= 1e3 && g[h].g.toString().length <= 6)
                            var q = Math.floor(g[h].g / 1e3) + " K";
                        else
                            q = g[h].g.toString().length >= 7 ? Math.floor(g[h].g / 1e3) / 1e3 + " M" : g[h].g;
                        var r = $('<div style="max-width: 100%; grid-column: 1;"' + (g[h].id === Ca.id ? ' class="text-success"' : "") + ">" + (h + 1) + '.</div><div style="grid-column: 2"><span class="playerName' + (g[h].id === Ca.id ? ' text-success"' : '"') + '" style="margin-left:2px;font-size: 13px"></span></div><div style="grid-column: 3"><span' + (g[h].id === Ca.id ? ' class="text-success"' : "") + ">" + o + '</span></div><div style="grid-column: 4"><span' + (g[h].id === Ca.id ? ' class="text-success"' : "") + ">" + n + '</span></div><div style="grid-column: 5"><span' + (g[h].id === Ca.id ? ' class="text-success"' : "") + ">" + l + '</span></div><div style="grid-column: 6"><span' + (g[h].id === Ca.id ? ' class="text-success"' : "") + ">" + m + '</span></div><div style="grid-column: 7"><span' + (g[h].id === Ca.id ? ' class="text-success"' : "") + ">" + p + '</span></div><div style="grid-column: 8; text-align: right"><span' + (g[h].id === Ca.id ? ' class="text-success"' : "") + ">" + q + "</span></div>");
                        r.find(".playerName").text(g[h].n),
                        k.append(r)
                    }
                $("#playerScoreData").html(k),
                $("#player-count").html(j),
                a.boats.sort(function(a, b) {
                    return b.g - a.g
                });
                var s = a.boats.slice(0, 10)
                  , t = $('<div id="leaderboard-data-div"/>')
                  , u = 0
                  , v = s.length;
                if (Da)
                    for (; u < 10 && u < v; u++) {
                        var w = a.boats.length + " boats"
                          , x = s[u].ok
                          , y = s[u].oc
                          , o = void 0 !== s[u].c && "" !== s[u].c ? "[" + s[u].c + "]" : ""
                          , z = s[u].oql;
                        if (s[u].g >= 1e3 && s[u].g.toString().length <= 6)
                            var A = Math.floor(s[u].g / 1e3) + " K";
                        else
                            A = s[u].g.toString().length >= 7 ? Math.floor(s[u].g / 1e3) / 1e3 + " M" : s[u].g;
                        var B = $("<div" + (s[u].id === Da.id ? ' class="text-success grid-left"' : ' class="grid-left"') + ">" + o + '</div><div style="max-width: 100%;"' + (s[u].id === Da.id ? ' class="text-success grid-middle"' : ' class="grid-middle"') + '><span class=\'krewName\' style=\'margin-left:2px;font-size: 13px\'></span></div><div class="grid-middle"><img id="img1" src="./assets/img/medal_' + (y >= 15e4 ? "gold" : y >= 5e4 ? "silver" : "bronze") + '.png"' + (y >= 12e3 ? ' style="height: 17px"' : 'style="height: 17px; display:none"') + '><img id="img2" src="./assets/img/medal_' + (x >= 50 ? "gold" : x >= 20 ? "silver" : "bronze") + '.png"' + (x >= 10 ? ' style="height: 17px"' : 'style="height: 17px; display:none"') + '><img id="img3" src="./assets/img/medal_' + (3 === z ? "gold" : 2 === z ? "silver" : "bronze") + '.png"' + (z > 0 ? ' style="height: 17px"' : 'style="height: 17px; display:none"') + "></div><div" + (s[u].id === Da.id ? ' class="text-success grid-right"' : ' class="grid-right"') + ">" + A + "</div>");
                        B.find(".krewName").text(s[u].cN),
                        t.append(B)
                    }
                $("#leaderboard-data").html(t),
                $("#boat-count").html(w);
                var C = []
                  , D = 0
                  , E = $("<div/>");
                for (f in b)
                    void 0 !== ca[b[f].id] && ca[b[f].id].setName(b[f].n),
                    Da && b[f].pI === Da.id && C.push({
                        key: f,
                        value: b[f]
                    });
                C.sort(function(a, b) {
                    return a.value.s - b.value.s
                });
                for (f in C) {
                    var F = C[f].value
                      , G = F.n
                      , H = '<div class="player-list-item">';
                    if (H += G + (F.id === myPlayerId ? " (ME)" : ""),
                    F.id !== myPlayerId && !0 === Ca.isCaptain && (H += '<span class="btn btn-danger btn-kick-player float-sm-right" data-event="kick" data-id="' + F.id + '"><i data-event="kick" data-id="' + F.id + '" class="icofont icofont-delete"></i></span><span class="btn btn-warning btn-transfer-ship float-sm-right" data-event="transfer" data-id="' + F.id + '"><i data-event="transfer" data-id="' + F.id + '" class="icofont icofont-ship-wheel"></i></span>'),
                    H += '<span class="float-sm-right">',
                    F.id === myPlayerId && void 0 !== Ca.goods) {
                        for (var I in Ca.goods)
                            Ca.goods[I] > 0 && (H += " " + Ca.goods[I] + " " + I);
                        H += ' <i class="text-warning icofont icofont-cube"></i> ' + F.cU
                    } else
                        H += ' <i class="text-warning icofont icofont-cube"></i> ' + F.cU;
                    H += "</span>",
                    H += "</div>",
                    $playerDiv = $(H),
                    Da.captainId === F.id && $playerDiv.prepend($("<span/>", {
                        class: "icofont icofont-ship-wheel text-warning",
                        text: " "
                    })),
                    F.id === myPlayerId && ($playerDiv.addClass("text-success"),
                    this.checkGoldDelta(F.g),
                    Ca.clan = F.c,
                    Ca.clanLeader = F.cL,
                    Ca.clanOwner = F.cO,
                    Ca.clanRequest = F.cR,
                    Ca.gold = parseInt(F.g),
                    Ca.score = parseInt(F.s),
                    Ca.shipsSank = parseInt(F.sS),
                    Ca.overall_cargo = parseInt(F.oc)),
                    E.append($playerDiv),
                    D++
                }
                Da && this.updateShipStats({
                    krewCount: D
                }),
                $("#krew-list").html(E)
            }
        },
        getKrewioData: function(a) {
            var b = this;
            return a && $.ajaxSetup({
                headers: {
                    Token: a
                }
            }),
            $.get(Oa + "/get_krewiodata").then(function(a) {
                if ("error" === a.status)
                    return void $("#login-with-moddio-button").attr("disabled", !1).show().on("click", function() {
                        return $("#login-with-moddio-modal").modal("show"),
                        !1
                    });
                Pa.isLoggedIn = !0;
                var c = a.data;
                $("#logged-in").html("You are logged in as <b>" + c.name + "</b>").show(),
                $("#login-link").attr("href", "/logout").html("Logout").show(),
                b.token = a.data.token
            })
        },
        setSpawnPlace: function() {
            return spawn = $("#spawn-selection").val(),
            spawn
        },
        updateServerList: function() {
            var a = this;
            $.ajax({
                url: Oa + "/get_servers",
                data: {
                    gameId: "59a714c837cc44805415df18"
                },
                dataType: "jsonp",
                type: "GET",
                success: function(b) {
                    Pa.servers = b;
                    var c = !1;
                    $("#server-list").html("");
                    var d, e = 0;
                    for (d in b) {
                        var f = b[d];
                        e++;
                        var g = $("<option/>", {
                            html: "Server " + e + " (" + f.playerCount + "/" + Ab + ")",
                            value: d
                        });
                        $("#server-list").append(g),
                        !c && f.playerCount < Ab && ($("#server-list").val(d),
                        c = !0)
                    }
                    var h = a.getUrlVars();
                    h.sid && $("#server-list").val(h.sid)
                }
            })
        },
        createWallOfFame: function() {
            $.get("wall-of-fame", function(a, b) {
                if ("success" === b) {
                    var c = "";
                    for (var d in a) {
                        var e = a[d].highscore
                          , f = "" !== a[d].clan ? "[" + a[d].clan + "]" : "";
                        e >= 1e3 && e.toString().length <= 6 ? e = e / 1e3 + " K" : e.toString().length >= 7 && (e = Math.floor(e / 1e3) / 1e3 + " M"),
                        c = 0 == d ? '<tr><td class="rank">' + (parseInt(d) + 1) + '</td><td class="top-1">' + a[d].playerName + '</td><td class="top-1">' + f + '</td><td class="top-1">' + e + "</td></tr>" : d <= 2 ? '<tr><td class="rank">' + (parseInt(d) + 1) + '</td><td class="top-2-3">' + a[d].playerName + '</td><td class="top-2-3">' + f + '</td><td class="top-2-3">' + e + "</td></tr>" : d <= 9 ? '<tr><td class="rank">' + (parseInt(d) + 1) + "</td><td>" + a[d].playerName + "</td><td>" + f + "</td><td>" + e + "</td></tr>" : '<tr class="top20" style="display:none"><td class="rank">' + (parseInt(d) + 1) + "</td><td>" + a[d].playerName + "</td><td>" + f + "</td><td>" + e + "</td></tr>",
                        $("#wall-of-fame-table").append(c)
                    }
                }
            })
        },
        setQualitySettings: function() {
            $("#quality-list").html("");
            var a = $("<option/>", {
                html: "High Quality (slow)",
                value: 3
            });
            $("#quality-list").append(a),
            a = $("<option/>", {
                html: "Medium Quality (fast)",
                value: 2
            }),
            $("#quality-list").append(a),
            a = $("<option/>", {
                html: "Low Quality (faster)",
                value: 1
            }),
            $("#quality-list").append(a)
        },
        getUrlVars: function() {
            var a = {};
            window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(b, c, d) {
                a[c] = d
            });
            return a
        },
        leadersUiConfiguration: {
            editingName: !1,
            active: !1
        },
        updateLeadersUi: function() {
            var a = $("#crew-name-edit-button");
            this.leadersUiConfiguration.active && !this.leadersUiConfiguration.editingName ? a.removeClass("hidden") : a.addClass("hidden")
        },
        LoadingWheel: function(a) {
            "show" === a ? $("#loading-wheel").show() : $("#loading-wheel").hide()
        }
    }, Qa = 10, Ra = !1, Sa = {}, Ta = !1, Ua = document.createElement("div");
    Ua.innerHTML = "&nbsp;",
    Ua.className = "adsbox",
    document.body.appendChild(Ua),
    window.setTimeout(function() {
        0 === Ua.offsetHeight && (Ta = !0),
        Ua.remove(),
        Ta && ($("#KRW_krew-io_300x250_2").parent().html('<img src="./assets/img/251sbb.jpg" alt="" style="width: 100%"/>'),
        $("#div-gpt-ad-1491569839954-0").parent().html('<img src="./assets/img/251s91.jpg" alt="" style="width: 100%"/>'),
        $("#disable-adblock-message").show())
    }, 1e3),
    void 0 === UA || UA.isFirefox() || UA.isMobile() || $("#we-play-better-on-firefox").show();
    var Va = function() {
        var a = CanvasMap(document.getElementById("minimap"), ka, ka);
        a.useRadians = !0,
        a.zoom = .9;
        var b = ka / 2
          , c = performance.now()
          , d = {
            x: a.text({
                x: b,
                y: b,
                text: "+",
                fill: "rgba(84,48,13,0.7)",
                size: 260,
                baseline: "middle"
            }),
            n: a.text({
                x: b,
                y: b - 300,
                text: "N",
                fill: "rgba(84,48,13,0.7)",
                size: 160,
                baseline: "middle"
            }),
            s: a.text({
                x: b,
                y: b + 300,
                text: "S",
                fill: "rgba(84,48,13,0.7)",
                size: 160,
                baseline: "middle"
            }),
            w: a.text({
                x: b - 300,
                y: b,
                text: "W",
                fill: "rgba(84,48,13,0.7)",
                size: 160,
                baseline: "middle"
            }),
            e: a.text({
                x: b + 300,
                y: b,
                text: "E",
                fill: "rgba(84,48,13,0.7)",
                size: 160,
                baseline: "middle"
            }),
            boundary: a.rect({
                x: 0,
                y: 0,
                width: ka,
                height: ka,
                stroke: {
                    color: "rgba(84,48,13,1)",
                    width: 8
                }
            })
        };
        a.add(d.x).add(d.n).add(d.s).add(d.w).add(d.e).add(d.boundary);
        var e = function() {
            if (performance.now() - c > 1e3 / 24) {
                if (void 0 === ca && (a.elements = {}),
                void 0 !== ca) {
                    for (var b in a.elements)
                        5 !== a.elements[b].netType && 0 !== a.elements[b].netType && 4 !== a.elements[b].netType || void 0 !== ca[b] || a.remove(a.elements[b]);
                    for (var b in ca)
                        5 === ca[b].netType && void 0 === a.elements[b] && a.add(a.point({
                            x: ca[b].position.x,
                            y: ca[b].position.z,
                            r: ca[b].dockRadius,
                            fill: "green",
                            id: b,
                            netType: 5
                        })).add(a.text({
                            x: ca[b].position.x,
                            y: ca[b].position.z - 120,
                            text: ca[b].name,
                            fill: "rgba(84,48,13,1)",
                            font: "serif",
                            id: b + "-label",
                            size: 140
                        })),
                        4 === ca[b].netType && 4 === ca[b].type && void 0 === a.elements[b] && a.add(a.text({
                            x: ca[b].position.x,
                            y: ca[b].position.z,
                            text: "x",
                            fill: "rgba(204, 10, 10, 1)",
                            font: "sans-serif",
                            id: b,
                            size: 140,
                            netType: 4
                        }));
                    for (var b in Sa)
                        void 0 === a.elements[b] && a.add(a.point({
                            x: Sa[b].x,
                            y: Sa[b].y,
                            r: 30,
                            d: .5,
                            id: b,
                            creatTime: performance.now(),
                            fill: "rgba(255, 0, 0, 0.5)"
                        })),
                        void 0 !== a.elements[b] && (a.elements[b].creatTime < performance.now() - 1e4 ? (a.remove(a.elements[b]),
                        delete Sa[b]) : (a.elements[b].r = a.elements[b].r + 5 * Math.sin(a.elements[b].d),
                        a.elements[b].d += .2))
                }
                if (Ca && Ca.geometry) {
                    var d = Ca.geometry.getWorldPosition()
                      , e = Ca.parent && 1 === Ca.parent.netType && 0 === Ca.parent.shipState ? Ca.parent.geometry.getWorldRotation().y + Math.PI : Ca.geometry.getWorldRotation().y;
                    e *= -1,
                    void 0 === a.elements[Ca.id] && a.add(a.triangle({
                        x: Ca.position.x,
                        y: Ca.position.z,
                        size: 60,
                        rotation: e,
                        fill: "white",
                        stroke: {
                            color: "black",
                            width: 15
                        },
                        id: Ca.id,
                        netType: 0
                    })),
                    void 0 !== a.elements[Ca.id] && (a.elements[Ca.id].x = d.x,
                    a.elements[Ca.id].y = d.z,
                    a.elements[Ca.id].rotation = e)
                }
                a.draw(),
                c = performance.now()
            }
        };
        return a.update = e,
        a
    };
    setInterval(function() {
        gb()
    }, 1e3),
    setInterval(function() {
        db()
    }, 9e4);
    window.logoutUser = function() {
        $.ajax({
            type: "GET",
            url: "/logout",
            success: function() {
                window.location = "/"
            }
        })
    }
    ,
    window.userLogin = function(a) {
        a && a.preventDefault();
        var b = {
            username: $("#username").val().trim(),
            password: $("#password").val()
        };
        $.ajax({
            type: "POST",
            url: Oa + "/login",
            data: b,
            headers: {
                accept: "application/json"
            },
            success: function(a) {
                "success" === a.response ? (document.cookie = "loginToken=" + a.message.token,
                document.cookie = "username=" + b.username,
                Pa.getKrewioData(a.message.token).then(function() {
                    $("#login-with-moddio-modal").modal("hide"),
                    $("#login-with-moddio-button").hide(),
                    $("#play-button").removeClass("btn-success").addClass("btn-warning").text("Play as " + b.username)
                }),
                (Db.includes(b.username) || Cb.includes(b.username)) && $("#chat-message").attr("maxlength", "120")) : $("#login-error").addClass("d-block").text(a.message)
            },
            async: !1
        })
    }
    ;
    var Wa = function() {
        var a = Va();
        za = new THREE.WebGLRenderer({
            antialias: !0
        }),
        document.body.appendChild(za.domElement),
        controls = new Z,
        W(),
        Aa = new THREE.Scene,
        Ba = new THREE.PerspectiveCamera(75,1.8,.1,1e4),
        Ba.position.set(0, 10, 0),
        Ea = new THREE.Raycaster,
        w(),
        x(),
        Fa = za.domElement,
        Ga = Fa.getContext("webgl2"),
        Ga || (Ga = Fa.getContext("experimental-webgl")),
        Ha = Ga.canvas.width,
        Ia = Ga.canvas.height,
        lastFrameTime = performance.now();
        var b = function() {
            var c = performance.now();
            water.material.uniforms.time.value += 1 / 60;
            var d = Math.min((c - lastFrameTime) / 1e3, .1);
            lastFrameTime = c,
            la(d),
            wb(d),
            a.update(),
            requestAnimationFrame(b),
            za.clear(),
            za.render(Aa, Ba)
        };
        b()
    }
      , Xa = function() {
        $("#toggle-shop-modal-button").removeClass("btn btn-md disabled toggle-shop-modal-button").addClass("btn btn-md enabled toggle-shop-modal-button"),
        $("#toggle-krew-list-modal-button").removeClass("btn btn-md disabled toggle-krew-list-modal-button").addClass("btn btn-md enabled toggle-krew-list-modal-button"),
        "Labrador" === ca[Ca.parent.anchorIslandId].name && $("#toggle-bank-modal-button").removeClass("btn btn-md disabled toggle-shop-modal-button").addClass("btn btn-md enabled toggle-shop-modal-button").attr("data-tooltip", "Deposit or withdraw gold"),
        $("#exit-island-button").hide(),
        Pa.updateStore($(".btn-shopping-modal.active")),
        Pa.updateKrewList()
    }
      , Ya = function(a) {
        a.captainId == myPlayerId && Ca && Ca.parent && 2 != Ca.parent.shipState && $("#docking-modal").show(),
        $("#toggle-shop-modal-button").hasClass("enabled") && $("#docking-modal").hide()
    }
      , Za = $("#docking-modal-button")
      , $a = Za.find("span")
      , _a = $(".port-name")
      , ab = $("#cancel-exit-button")
      , bb = ab.find("span")
      , cb = $("#docking-modal")
      , db = function() {
        Aa.traverse(function(a) {
            if (a instanceof THREE.Mesh)
                for (o in ha) {
                    var b = ha[o];
                    b == a && (Aa.remove(a),
                    delete ha[o])
                }
            if (a instanceof THREE.Line)
                for (l in ia) {
                    var c = ia[l];
                    c == a && (Aa.remove(a),
                    ia[l].geometry.dispose(),
                    delete ia[l])
                }
        })
    }
      , eb = function(a) {
        var b = a + "";
        return b.length < 2 ? "0" + b : b
    }
      , fb = 0
      , gb = function() {
        if (++fb,
        $("#seconds").html(eb(fb % 60)),
        $("#minutes").html(eb(parseInt(fb % 3600 / 60))),
        $("#hours").html(eb(parseInt(fb / 3600))),
        Ca && Ca.parent) {
            if (-1 === Ca.parent.shipState || 3 === Ca.parent.shipState)
                return Za.removeClass("btn btn-primary disabled btn-lg").addClass("btn btn-primary enabled btn-lg"),
                _a.text(ca[Ca.parent.anchorIslandId].name),
                $a.text("Countdown..."),
                void bb.text("Sail (c)");
            5 == Ca.parent.netType && (_a.text(Ca.parent.name),
            cb.is(":visible") && (cb.hide(),
            Xa())),
            cb.hasClass("initial") && cb.removeClass("initial").find("#you-are-docked-message").remove(),
            1 !== Ca.parent.shipState && (Qa = 8),
            1 === Ca.parent.shipState && (8 === Qa && ub.emit("dock"),
            bb.text("Cancel (c)"),
            0 !== Qa && Qa > 0 ? $a.text("Docking in " + Qa + " seconds") : ($a.text("Dock (z)"),
            Za.removeClass("btn btn-primary disabled btn-lg").addClass("btn btn-primary enabled btn-lg")),
            Qa--),
            4 === Ca.parent.shipState && ($("#docking-modal").hide(),
            $("#departure-modal").is(":visible") || $("#departure-modal").show(0),
            $("#cancel-departure-button").find("span").text((Ca && Ca.isCaptain ? "Departing in " : "Krew departing in ") + ca[Ca.id].parent.departureTime + " seconds")),
            (!Ca.isCaptain && 4 !== Ca.parent.shipState || Ca.isCaptain && 0 === Ca.parent.shipState) && $("#departure-modal").is(":visible") && $("#departure-modal").hide()
        }
    }
      , hb = function() {
        Ca && ca[Ca.id] && ca[Ca.id].parent && ($("#docking-modal").hide(),
        this.departureCounter = this.departureCounter || 0,
        ub.emit("departure", this.departureCounter),
        this.departureCounter += 1,
        this.departureCounter > 2 && (this.departureCounter = 0))
    }
      , ib = function(a) {
        controls.lockMouseLook(),
        a.captainId == myPlayerId && ($("#docking-modal").hide(),
        $("#departure-modal").hide()),
        La = !1,
        Pa.hideSuggestionBox = !0,
        $("#toggle-bank-modal-button").removeClass("btn btn-md enabled toggle-shop-modal-button").addClass("btn btn-md disabled toggle-shop-modal-button").attr("data-tooltip", "Bank is available at Labrador"),
        $("#exit-island-button").hide(),
        $("#shopping-modal").hide(),
        $("#krew-list-modal").hide(),
        Pa.updateStore($(".btn-shopping-modal.active")),
        $("#docking-modal-button").removeClass("btn btn-primary enabled btn-lg").addClass("btn btn-primary disabled btn-lg"),
        $("#toggle-shop-modal-button").removeClass("btn btn-md enabled toggle-shop-modal-button").addClass("btn btn-md disabled toggle-shop-modal-button"),
        $("#toggle-krew-list-modal-button").removeClass("btn btn-md enabled toggle-krew-list-modal-button").addClass("btn btn-md disabled toggle-krew-list-modal-button")
    }
      , jb = function() {
        Eb($("#server-list").val()),
        Pa.setQualitySettings(),
        $("#quality-list").val(2),
        $("#quality-list").trigger("change")
    }
      , kb = function() {
        ub.emit("chat message", {
            message: $("#chat-message").val(),
            recipient: yb ? "local" : xb ? "clan" : "global"
        }),
        $("#chat-message").val("").focus()
    }
      , lb = function() {
        var a = +$("#make-deposit").val()
          , b = parseInt($("#my-deposits").text()) + a;
        a <= Ca.gold && b <= 15e4 ? (ub.emit("bank", {
            deposit: a
        }),
        $("#make-deposit").val("").focus(),
        $("#successMakeDepoMess").show(),
        $("#errorMakeDepoMess").hide(),
        $("#successTakeDepoMess").hide(),
        $("#errorTakeDepoMess").hide(),
        $("#errorFullDepoMess").hide()) : b > 15e4 ? ($("#errorFullDepoMess").show(),
        $("#successMakeDepoMess").hide(),
        $("#errorMakeDepoMess").hide(),
        $("#successTakeDepoMess").hide(),
        $("#errorTakeDepoMess").hide()) : ($("#errorMakeDepoMess").show(),
        $("#successMakeDepoMess").hide(),
        $("#successTakeDepoMess").hide(),
        $("#errorTakeDepoMess").hide(),
        $("#errorFullDepoMess").hide())
    }
      , mb = function() {
        ub.emit("bank")
    }
      , nb = function() {
        var a = +$("#take-deposit").val();
        a <= +$("#my-deposits").text() ? (ub.emit("bank", {
            takedeposit: a
        }),
        $("#take-deposit").val("").focus(),
        $("#successTakeDepoMess").show(),
        $("#successMakeDepoMess").hide(),
        $("#errorMakeDepoMess").hide(),
        $("#errorTakeDepoMess").hide(),
        $("#errorFullDepoMess").hide()) : ($("#errorTakeDepoMess").show(),
        $("#successTakeDepoMess").hide(),
        $("#successMakeDepoMess").hide(),
        $("#errorMakeDepoMess").hide(),
        $("#errorFullDepoMess").hide())
    }
      , ob = function(a, b) {
        FB.login(function(c) {
            var d = c.authResponse.accessToken;
            c.authResponse && (FB.api("/me", "get", {
                access_token: d
            }, function(a) {}),
            FB.ui({
                method: "share_open_graph",
                action_type: "og.shares",
                action_properties: JSON.stringify({
                    object: {
                        "og:url": "http://" + b,
                        "og:title": "Krew.io",
                        "og:description": a,
                        "og:image": "http://krew.io/assets/img/logo.png"
                    }
                })
            }))
        }, {
            scope: "publish_actions"
        })
    };
    $(document).ready(function() {
        function a() {
            adplayer = new aipPlayer({
                AD_WIDTH: 960,
                AD_HEIGHT: 540,
                AD_FULLSCREEN: !0,
                PREROLL_ELEM: document.getElementById("preroll"),
                AIP_COMPLETE: function() {},
                AIP_REMOVE: function() {}
            }),
            window.adplayerCentered = new aipPlayer({
                AD_WIDTH: 560,
                AD_HEIGHT: 315,
                AD_FULLSCREEN: !1,
                PREROLL_ELEM: document.getElementById("preroll-centered"),
                AIP_COMPLETE: function() {},
                AIP_REMOVE: function() {}
            })
        }
        O.loadObjWithMtl("./assets/models/cannon/cannon.obj"),
        O.loadObjWithMtl("./assets/models/hat_pirate.obj"),
        O.loadObjWithMtl("./assets/models/ships/bigship.obj"),
        O.loadObjWithMtl("./assets/models/ships/schooner.obj"),
        O.loadObjWithMtl("./assets/models/ships/sloop.obj"),
        O.loadObjWithMtl("./assets/models/ships/vessel.obj"),
        O.loadObjWithMtl("./assets/models/fish.obj"),
        O.loadObjWithMtl("./assets/models/shell.obj"),
        O.loadObjWithMtl("./assets/models/crab.obj"),
        O.loadObjWithMtl("./assets/models/clam.obj"),
        O.loadObjWithMtl("./assets/models/chest.obj"),
        O.loadModel("./assets/models/ships/raft.obj"),
        O.loadModel("./assets/models/ships/trader.obj"),
        O.loadModel("./assets/models/ships/boat.obj"),
        O.loadModel("./assets/models/ships/destroyer.obj"),
        O.loadModel("./assets/models/island.obj"),
        O.loadModel("./assets/models/dogs/dog_1.obj"),
        O.loadModel("./assets/models/fishingrod.obj"),
        O.loadTexture("./assets/models/colorset.png"),
        O.loadTexture("./assets/models/hook.png"),
        O.loadTexture("./assets/models/dogs/dog_diffuse.tga"),
        O.loadTexture("./assets/models/props_diffuse1.tga"),
        O.loadTexture("./assets/img/water.jpg"),
        O.loadTexture("./assets/img/cannonball.png"),
        O.loadTexture("./assets/img/crate.jpg"),
        O.loadTexture("./assets/models/tex_chest.png"),
        O.onFinish(function() {
            ga("create", "UA-88411681-1", "auto");
            var a = document.cookie.split("; ");
            for (var b in a)
                if (a[b].startsWith("_ga="))
                    var c = a[b].substring(4);
            sessionCookie = c,
            A(),
            B(),
            Wa(),
            Ra = !0,
            Pa.getKrewioData().then(function() {
                $("#play-button").text("Play as guest").attr("disabled", !1)
            })
        }),
        $("#show-more").on("click", function() {
            $("#show-more").text().indexOf("Show more") > -1 ? ($(".top20").show(),
            $("#show-more").html('<i class="icofont icofont-medal"></i> Show less')) : ($(".top20").hide(),
            $("#show-more").html('<i class="icofont icofont-medal"></i> Show more'))
        }),
        $("#chat-message").on("keyup", function() {
            var a = $(this)
              , b = a.val();
            b.trim().length > 150 && a.val(b.slice(0, 150))
        }),
        $("#play-button").on("click", function() {
            GameAnalytics("addDesignEvent", "Game:Session:ClickedPlayButton"),
            Ra && (jb(),
            Pa.LoadingWheel("show"))
        }).text("Loading...").attr("disabled", !0),
        $("#play-again-button").on("click", function() {
            Ra && (Pa.showAdinplayCentered(),
            fb = 0,
            ub.emit("respawn"),
            Ca.itemId = void 0,
            Ca.state = 2,
            $("#toggle-shop-modal-button").removeClass("btn btn-md enabled toggle-shop-modal-button").addClass("btn btn-md disabled toggle-shop-modal-button"),
            $("#toggle-krew-list-modal-button").removeClass("btn btn-md enabled toggle-krew-list-modal-button").addClass("btn btn-md disabled toggle-krew-list-modal-button"),
            $("#toggle-bank-modal-button").removeClass("btn btn-md enabled toggle-shop-modal-button").addClass("btn btn-md disabled toggle-shop-modal-button").attr("data-tooltip", "Bank is available at Labrador"))
        }),
        $("#share-link").on("click", function() {
            ob("I just had an amazing game of krew.io and my score was " + Ja, "krew.io/"),
            Pa.showAdinplayCentered(),
            fb = 0,
            ub.emit("respawn"),
            Ca.state = 2,
            Ca.itemId = void 0,
            $("#toggle-shop-modal-button").removeClass("btn btn-md enabled toggle-shop-modal-button").addClass("btn btn-md disabled toggle-shop-modal-button"),
            $("#toggle-krew-list-modal-button").removeClass("btn btn-md enabled toggle-krew-list-modal-button").addClass("btn btn-md disabled toggle-krew-list-modal-button"),
            $("#toggle-bank-modal-button").removeClass("btn btn-md enabled toggle-shop-modal-button").addClass("btn btn-md disabled toggle-shop-modal-button").attr("data-tooltip", "Bank is available at Labrador"),
            Pa.updateStore($(".btn-shopping-modal.active")),
            $("#krew-list-modal").show(),
            Pa.updateKrewList()
        }),
        $("#quality-list").on("change", function() {
            switch (parseInt($("#quality-list").val())) {
            case 1:
                if (void 0 !== Ga) {
                    var a = Ha / 2.5
                      , b = Ia / 2.5;
                    Ga.canvas.height = b,
                    Ga.canvas.width = a,
                    Ga.viewport(0, 0, a, a),
                    za.setSize(a, a, !1)
                }
                break;
            case 2:
                if (void 0 !== Ga) {
                    var a = Ha / 1.45
                      , b = Ia / 1.45;
                    Ga.canvas.height = b,
                    Ga.canvas.width = a,
                    Ga.viewport(0, 0, a, b),
                    za.setSize(a, a, !1)
                }
                break;
            case 3:
                if (void 0 !== Ga) {
                    var a = Ha
                      , b = Ia;
                    Ga.canvas.height = b,
                    Ga.canvas.width = a,
                    Ga.viewport(0, 0, a, b),
                    za.setSize(a, a, !1)
                }
            }
        }),
        $("#share-invite-link").on("click", function() {
            var a = Pa.getInviteLink();
            ob("Join my krew!", a)
        }),
        Pa.setListeners(),
        $(window).on("unload", function() {
            ub && ub.close()
        }),
        $("#chat-message").on("keypress", function(a) {
            13 == a.keyCode && kb()
        }),
        $("#make-deposit").on("keypress", function(a) {
            13 == a.keyCode && lb()
        }),
        $("#take-deposit").on("keypress", function(a) {
            13 == a.keyCode && nb()
        }),
        Pa.updateServerList(),
        Pa.createWallOfFame(),
        $("#send-message-button").on("click", function() {
            kb()
        }),
        Gb().sid && Gb().bid && ($("#invite-is-used").show(),
        $("#select-server").hide(),
        $("#select-spawn").hide()),
        $("#crew_count, #ship_health, #food").slider(),
        $("#crew_count").on("slide", function(a) {
            $("#crew_count_val").text(a.value)
        }),
        $("#ship_health").on("slide", function(a) {
            $("#ship_health_val").text(a.value)
        }),
        $("#hide-shopping-modal-button").on("click", function() {
            $("#shopping-modal").fadeOut(),
            3 == Da.shipState && $("#show-shopping-modal-button").fadeIn()
        }),
        $("#show-shopping-modal-button").on("click", function() {
            $("#shopping-modal").fadeIn()
        });
        var b = $(".btn-shopping-modal");
        b.each(function() {
            var a = $(this);
            a.on("click", function() {
                b.removeClass("active"),
                a.addClass("active"),
                Pa.updateStore(a)
            })
        }),
        $("#docking-modal-button").on("click", function() {
            $("#docking-modal-button").hasClass("enabled") && (Ca && Ca.parent && (ub.emit("anchor"),
            b.eq(2).trigger("click"),
            "Labrador" === ca[Ca.parent.anchorIslandId].name && $("#toggle-bank-modal-button").removeClass("btn btn-md disabled toggle-shop-modal-button").addClass("btn btn-md enabled toggle-shop-modal-button").attr("data-tooltip", "Deposit or withdraw gold"),
            1 != Ca.parent.netType || $("#exit-island-button").is(":visible") || $("#exit-island-button").show()),
            Ja = 0,
            controls.unLockMouseLook(),
            $("#docking-modal").hide(),
            $("#supply").tooltip("show"),
            $("#toggle-shop-modal-button").removeClass("btn btn-md disabled toggle-shop-modal-button").addClass("btn btn-md enabled toggle-shop-modal-button"),
            $("#toggle-krew-list-modal-button").removeClass("btn btn-md disabled toggle-krew-list-modal-button").addClass("btn btn-md enabled toggle-krew-list-modal-button"),
            Pa.updateStore($(".btn-shopping-modal.active")),
            $("#recruiting-div").fadeIn("slow"))
        }),
        $("#login-modal").modal({
            show: !0,
            backdrop: "static",
            keyboard: !1
        }),
        $(".modal-custom").on("show.bs.modal", function(a) {
            setTimeout(function() {
                $(".modal-backdrop").addClass("modal-backdrop-custom"),
                $(".modal-custom").removeClass("modal-open")
            })
        }),
        $("#game-over-modal").modal({
            show: !1,
            backdrop: "static",
            keyboard: !1
        }),
        $("#chat-global").on("click", function() {
            pb()
        }),
        $("#chat-local").on("click", function() {
            qb()
        }),
        $("#chat-clan").on("click", function() {
            rb()
        }),
        $("#hide-chat").on("click", function() {
            $("#show-chat").show(),
            $("#chat-div").hide()
        }),
        $("#show-chat").on("click", function() {
            $("#show-chat").hide(),
            $("#chat-div").show()
        }),
        $("#toggle-invite-link-button").on("click", function() {
            $("#invite-div").is(":visible") ? $("#invite-div").hide() : ($("#invite-link").val(Pa.getInviteLink()),
            $("#invite-div").show())
        }),
        $("#exit-island-button").on("click", function() {
            hb()
        }),
        $("#toggle-help-button").on("click", function() {
            $("#help-modal").is(":visible") ? $("#help-modal").hide() : (Pa.closeAllPagesExcept("#help-modal"),
            $("#help-modal").show())
        }),
        $("#close-help-button").on("click", function() {
            $("#help-modal").hide()
        }),
        $("#close-bank-button").on("click", function() {
            $("#bank-modal").hide()
        }),
        $("#btn-make-deposit").on("click", function() {
            lb()
        }),
        $("#btn-take-deposit").on("click", function() {
            nb()
        }),
        $("#toggle-quest-button").on("click", function() {
            $("#quests-modal").is(":visible") ? $("#quests-modal").hide() : (ub.emit("get-stats", function(a) {
                var b = JSON.parse(a);
                $(".pirate-progress").text(b.shipsSank),
                $(".crew-pirate-progress").text(b.overall_kills),
                b.shipsSank >= 1 && ($("#completed-quest-table").append($("#pirate-quest-1").last()),
                $("#completed-quest-table .quest-progress").html('<i class="icofont icofont-check-circled"></i>'),
                $("#pirate-quest-2").show(),
                $("#crew-pirate-quest-1").show()),
                b.shipsSank >= 5 && ($("#completed-quest-table").append($("#pirate-quest-2").last()),
                $("#completed-quest-table .quest-progress").html('<i class="icofont icofont-check-circled"></i>'),
                $("#pirate-quest-3").show()),
                b.shipsSank >= 10 && ($("#completed-quest-table").append($("#pirate-quest-3").last()),
                $("#completed-quest-table .quest-progress").html('<i class="icofont icofont-check-circled"></i>'),
                $("#pirate-quest-4").show()),
                b.shipsSank >= 20 && ($("#completed-quest-table").append($("#pirate-quest-4").last()),
                $("#completed-quest-table .quest-progress").html('<i class="icofont icofont-check-circled"></i>')),
                b.overall_kills >= 10 && ($("#completed-quest-table").append($("#crew-pirate-quest-1").last()),
                $("#completed-quest-table .quest-progress").html('<i class="icofont icofont-check-circled"></i>'),
                $("#crew-pirate-quest-2").show()),
                b.overall_kills >= 20 && ($("#completed-quest-table").append($("#crew-pirate-quest-2").last()),
                $("#completed-quest-table .quest-progress").html('<i class="icofont icofont-check-circled"></i>'),
                $("#crew-pirate-quest-3").show()),
                b.overall_kills >= 50 && ($("#completed-quest-table").append($("#crew-pirate-quest-3").last()),
                $("#completed-quest-table .quest-progress").html('<i class="icofont icofont-check-circled"></i>')),
                $(".trade-progress").text(b.overall_cargo),
                $(".crew-trade-progress").text(b.crew_overall_cargo),
                b.overall_cargo >= 1e3 && ($("#completed-quest-table").append($("#trade-quest-1").last()),
                $("#completed-quest-table .quest-progress").html('<i class="icofont icofont-check-circled"></i>'),
                $("#trade-quest-2").show(),
                $("#crew-trade-quest-1").show()),
                b.overall_cargo >= 6e3 && ($("#completed-quest-table").append($("#trade-quest-2").last()),
                $("#completed-quest-table .quest-progress").html('<i class="icofont icofont-check-circled"></i>'),
                $("#trade-quest-3").show()),
                b.overall_cargo >= 15e3 && ($("#completed-quest-table").append($("#trade-quest-3").last()),
                $("#completed-quest-table .quest-progress").html('<i class="icofont icofont-check-circled"></i>'),
                $("#trade-quest-4").show()),
                b.overall_cargo >= 3e4 && ($("#completed-quest-table").append($("#trade-quest-4").last()),
                $("#completed-quest-table .quest-progress").html('<i class="icofont icofont-check-circled"></i>')),
                b.crew_overall_cargo >= 12e3 && ($("#completed-quest-table").append($("#crew-trade-quest-1").last()),
                $("#completed-quest-table .quest-progress").html('<i class="icofont icofont-check-circled"></i>'),
                $("#crew-trade-quest-2").show()),
                b.crew_overall_cargo >= 5e4 && ($("#completed-quest-table").append($("#crew-trade-quest-2").last()),
                $("#completed-quest-table .quest-progress").html('<i class="icofont icofont-check-circled"></i>'),
                $("#crew-trade-quest-3").show()),
                b.crew_overall_cargo >= 15e4 && ($("#completed-quest-table").append($("#crew-trade-quest-3").last()),
                $("#completed-quest-table .quest-progress").html('<i class="icofont icofont-check-circled"></i>')),
                $("#other-progress-1").text(Ca.jump_count),
                Ca.jump_count >= 50 && ($("#completed-quest-table").append($("#other-quest-1").last()),
                $("#completed-quest-table .quest-progress").html('<i class="icofont icofont-check-circled"></i>'),
                $("#other-quest-2").show())
            }),
            Pa.closeAllPagesExcept("#quests-modal"),
            $("#quests-modal").show())
        }),
        $("#close-quests-button").on("click", function() {
            $("#quests-modal").css("display", "none")
        }),
        $("#cancel-exit-button").on("click", function() {
            "Cancel (c)" === bb.text() && (ub.emit("exitIsland"),
            $a.text("Countdown..."))
        }),
        $("#abandon-ship-button").on("click", function() {
            if (!(Da.hp <= 0)) {
                if (Ca.goods && (3 === Da.shipState || 4 === Da.shipState))
                    for (var a in Ca.goods)
                        Ca.goods[a] > 0 && ub.emit("buy-goods", {
                            quantity: Ca.goods[a],
                            action: "sell",
                            good: a
                        }, function(a, b) {
                            a && console.log(a),
                            a || (Ca.gold = b.gold,
                            Ca.goods = b.goods)
                        });
                ub.emit("abandonShip"),
                $("#abandon-ship-button").hide(),
                void 0 !== Da && (3 === Da.shipState || -1 === Da.shipState || 4 === Da.shipState ? ($("#supply").tooltip("show"),
                $("#toggle-shop-modal-button").removeClass("btn btn-md disabled toggle-shop-modal-button").addClass("btn btn-md enabled toggle-shop-modal-button"),
                $("#toggle-krew-list-modal-button").removeClass("btn btn-md disabled toggle-krew-list-modal-button").addClass("btn btn-md enabled toggle-krew-list-modal-button"),
                "Labrador" === ca[Ca.parent.anchorIslandId].name && $("#toggle-bank-modal-button").removeClass("btn btn-md disabled toggle-shop-modal-button").addClass("btn btn-md enabled toggle-shop-modal-button").attr("data-tooltip", "Deposit or withdraw gold"),
                Pa.updateStore($(".btn-shopping-modal.active"))) : 1 === Da.shipState && $("#docking-modal").show())
            }
        }),
        $("#lock-krew-button").on("click", function() {
            $("#lock-krew-button").is(":checked") ? ($("#lock-krew-text").removeClass("lock-text-info").addClass("lock-text-error").text("Unlock krew..."),
            ub.emit("lock-krew", !0)) : ($("#lock-krew-text").removeClass("lock-text-error").addClass("lock-text-info").text("Lock krew..."),
            ub.emit("lock-krew", !1))
        }),
        localStorage.setItem("lastAdTime", Date.now() - 1e7);
        var c = c || {};
        c.cmd = c.cmd || [],
        c.cmd.display = c.cmd.display || [],
        c.cmd.display.push(function() {
            aipDisplayTag.display("KRW_krew-io_300x250_2")
        }),
        c.gdprShowConsentTool = !0,
        c.gdprShowConsentToolButton = !0,
        a()
    }),
    $("#global-chat-alert").hide();
    var pb = function() {
        $("#chat-global").addClass("active"),
        $("#chat-local").removeClass("active"),
        $("#chat-clan").removeClass("active"),
        $(".global-chat").show(),
        $(".local-chat").hide(),
        $(".clan-chat").hide(),
        xb = !1,
        yb = !1,
        zb = !0,
        $("#global-chat-alert").hide(),
        $("#chat-history").scrollTop(function() {
            return this.scrollHeight
        })
    }
      , qb = function() {
        $("#chat-global").removeClass("active"),
        $("#chat-clan").removeClass("active"),
        $("#chat-local").addClass("active"),
        $(".global-chat").hide(),
        $(".clan-chat").hide(),
        $(".local-chat").show(),
        xb = !1,
        yb = !0,
        zb = !1,
        $("#local-chat-alert").hide(),
        $("#chat-history").scrollTop(function() {
            return this.scrollHeight
        })
    }
      , rb = function() {
        $("#chat-global").removeClass("active"),
        $("#chat-local").removeClass("active"),
        $("#chat-clan").addClass("active"),
        $(".global-chat").hide(),
        $(".local-chat").hide(),
        $(".clan-chat").show(),
        xb = !0,
        yb = !1,
        zb = !1,
        $("#clan-chat-alert").hide(),
        $("#chat-history").scrollTop(function() {
            return this.scrollHeight
        })
    }
      , sb = {
        linear: function(a) {
            return a
        },
        easeInQuad: function(a) {
            return a * a
        },
        easeOutQuad: function(a) {
            return a * (2 - a)
        },
        easeInOutQuad: function(a) {
            return a < .5 ? 2 * a * a : (4 - 2 * a) * a - 1
        },
        easeInCubic: function(a) {
            return a * a * a
        },
        easeOutCubic: function(a) {
            return --a * a * a + 1
        },
        easeInOutCubic: function(a) {
            return a < .5 ? 4 * a * a * a : (a - 1) * (2 * a - 2) * (2 * a - 2) + 1
        },
        easeInQuart: function(a) {
            return a * a * a * a
        },
        easeOutQuart: function(a) {
            return 1 - --a * a * a * a
        },
        easeInOutQuart: function(a) {
            return a < .5 ? 8 * a * a * a * a : 1 - 8 * --a * a * a * a
        },
        easeInQuint: function(a) {
            return a * a * a * a * a
        },
        easeOutQuint: function(a) {
            return 1 + --a * a * a * a * a
        },
        easeInOutQuint: function(a) {
            return a < .5 ? 16 * a * a * a * a * a : 1 + 16 * --a * a * a * a * a
        }
    }
      , tb = [];
    u.prototype.tick = function(a) {
        this.vy -= this.gravity * a,
        this.geometry.position.set(this.geometry.position.x + this.vx * a, this.geometry.position.y + this.vy * a, this.geometry.position.z + this.vz * a),
        this.geometry.rotation.set(this.geometry.rotation.x + this.rotaSpeed * a, this.geometry.rotation.y + this.rotaSpeed * a, this.geometry.rotation.z + this.rotaSpeed * a),
        this.globalscale += this.sizeSpeed * a,
        this.geometry.scale.set(this.w * this.globalscale, this.h * this.globalscale, this.d * this.globalscale),
        this.timeleft -= a,
        (this.timeleft <= 0 || this.globalscale <= 0) && (Aa.remove(this.geometry),
        this.deleteMe = !0)
    }
    ;
    var ub, vb = function(a) {
        !Ca || !Ca.parent || Math.pow(a.x - Ca.parent.position.x, 2) + Math.pow(a.z - Ca.parent.position.z, 2) > 1e4 || tb.push(new u(a))
    }, wb = function(a) {
        for (var b = tb.length; b--; )
            tb[b].tick(a),
            tb[b].deleteMe && tb.splice(b, 1)
    }, xb = (document.location.host,
    !1), yb = !1, zb = !0, Ab = 100, Bb = void 0, Cb = ["LeoLeoLeo", "LeoLeoLeo2", "harderman", "ITSDABOMB"], Db = ["Speedy_Sloth", "Sj"], Eb = function(a) {
        if (void 0 == ub) {
            Gb().pid && Pa.serverList[Gb().pid] && (a = Gb().pid);
            var b = Pa.servers[a];
            "localhost" == window.location.hostname && (b = {
                ip: "http://localhost",
                port: "2001"
            });
            var c = b.ip;
            80 !== parseInt(b.port) && (c += ":" + b.port),
            ub = io(c),
            Fb(),
            $("#game-ui").show(),
            $("#login-modal").modal("hide")
        }
    }, Fb = function() {
        ub.on("handshake", function(a) {
            $(window).on("beforeunload", function() {
                return "Do you really want to leave your ship and lose your progress?"
            }),
            Hb(),
            Ca = void 0,
            myPlayerId = a.socketId,
            ub.emit("createPIayer", {
                boatId: Gb().bid,
                token: Pa.token,
                spawn: Pa.setSpawnPlace(),
                cookie: sessionCookie
            }),
            fb = 0,
            ub.on("startGame", function() {
                Pa.LoadingWheel("hide"),
                Pa.showCenterMessage("Use WASD to move. Click to shoot/fish. Use 1 & 2 to switch weapons.", 4, 15e3)
            }),
            ub.on("playerNames", function(a) {
                fa = a
            }),
            ub.on("s", function(a) {
                a = JSON.parse(LZString.decompress(a));
                for (e in a)
                    qa(e, a[e])
            }),
            ub.on("disconnect", Hb),
            ub.on("end", Ib),
            ub.on("scores", function(a) {
                a = JSON.parse(LZString.decompress(a)),
                Pa.updateLeaderboard(a)
            }),
            ub.on("setBankData", function(a) {
                Pa.setBankData(a)
            }),
            ub.on("updateKrewsList", function() {
                Pa.updateKrewList()
            }),
            ub.on("cargoUpdated", function() {
                $("#buy-goods").hasClass("active") && GOODSCOMPONENT.getList()
            }),
            ub.on("enterIsland", function(a) {
                Ya(a)
            }),
            ub.on("showIslandMenu", function() {
                Xa()
            }),
            ub.on("exitIsland", function(a) {
                ib(a)
            }),
            ub.on("showAdinplayCentered", function() {
                Pa.showAdinplayCentered()
            }),
            ub.on("departureWarning", function() {
                $("#toggle-krew-list-modal-button").hasClass("enabled") && ($("#toggle-krew-list-modal-button").addClass("glowing"),
                setTimeout(function() {
                    $("#toggle-krew-list-modal-button").removeClass("glowing")
                }, 5e3))
            }),
            ub.on("showCenterMessage", function(a, b, c) {
                Pa && Pa.showCenterMessage && Pa.showCenterMessage(a, b || 3, c),
                a.startsWith("Achievement trading") && $("#shopping-modal").hide()
            }),
            ub.on("showKillMessage", function(a) {
                Pa && Pa.showKillMessage && Pa.showKillMessage(a)
            }),
            ub.on("showDamageMessage", function(a, b) {
                Pa && Pa.showDamageMessage && Pa.showDamageMessage(a, b)
            }),
            ub.on("showAdminMessage", function(a) {
                Pa && Pa.showAdminMessage && Pa.showAdminMessage(a)
            }),
            ub.on("levelUpdate", function(a) {
                void 0 !== ca[a.id] && 0 === ca[a.id].netType && (ca[a.id].level = a.level,
                a.id === myPlayerId && (Ca.updateExperience(),
                Ca.notifiscationHeap[Math.random().toString(36).substring(6, 10)] = {
                    text: "Level Up!",
                    type: 2,
                    isNew: !0
                }))
            }),
            ub.on("clanMarker", function(a) {
                var b = Math.random().toString(36).substring(6, 10);
                Sa[b] = a
            }),
            void 0 !== Bb && (clearInterval(Bb),
            Bb = void 0);
            Bb = setInterval(function() {
                Ca && (a = Ca.getDelta()) && ub.emit("u", a)
            }, 100)
        }),
        ub.on("chat message", function(a) {
            if (Ca && Ca.parent && (Ca.parent.hasChild(a.playerId) || "global" === a.recipient || "local" === a.recipient || "clan" === a.recipient) && void 0 !== ca[a.playerId]) {
                var b = 1 === Ca.parent.netType && Ca.parent.hasChild(a.playerId)
                  , c = a.playerId === myPlayerId
                  , d = "" !== Ca.clan && void 0 !== Ca.clan && Ca.clan === ca[a.playerId].clan && !c
                  , e = "global-chat"
                  , f = Cb.includes(a.playerName)
                  , g = Db.includes(a.playerName)
                  , h = $("#chat-history");
                e = "global" === a.recipient ? "global-chat" : "local" === a.recipient ? "local-chat" : "clan-chat";
                var i = $("<div/>", {
                    text: (f ? "[admin] " : g ? "[mod] " : "") + a.playerName + ": " + a.message,
                    class: e + " text-" + (f || g ? "mod-color" : d ? "clan-color" : c || b ? c ? "success" : ca[a.playerId].isCaptain ? "danger" : "info" : "white")
                });
                messageTypes = ["clan-chat", "local-chat", "global-chat"];
                for (var j = 0; j < messageTypes.length; j++) {
                    var k = messageTypes[j];
                    messageCount = $("." + k).length,
                    messageCount > 15 && $("." + k).first().remove()
                }
                "global" !== a.recipient || zb || ($("#global-chat-alert").show(),
                i.hide()),
                "local" !== a.recipient || yb || ($("#local-chat-alert").show(),
                i.hide()),
                "clan" !== a.recipient || xb || ($("#clan-chat-alert").show(),
                i.hide());
                var l = !1;
                $(h).scrollTop() + $(h).innerHeight() >= $(h)[0].scrollHeight && (l = !0),
                h.append(i),
                !0 === l && h.scrollTop(function() {
                    return this.scrollHeight
                })
            }
        })
    }, Gb = function() {
        var a = {};
        window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(b, c, d) {
            a[c] = d
        });
        return a
    }, Hb = function() {
        for (e in ca)
            ca.hasOwnProperty(e) && ca[e].onDestroy();
        ca = {},
        Ca = void 0
    }, Ib = function(a, b, c, d) {
        controls.unLockMouseLook(),
        $(".local-chat").remove(),
        $("#game-over-modal").modal("show"),
        Jb(a, b, c, d),
        Ca.state = 1
    }, Jb = function(a, b, c, d) {
        $("#total-score").html(Ja),
        $("#total-damage").html(Ja),
        $("#total-gold-collected").html(a.toFixed(0)),
        $("#total-shots-fired").html(b),
        $("#total-shots-hit").html(c),
        $("#accuracy").html(Math.round(c / b * 100)),
        $("#total-ships-sank").html(d),
        $("#supplies-cut").html((.3 * a).toFixed(0)),
        $("#docking-modal").is(":visible") && $("#docking-modal").hide()
    }
}(window, document);
