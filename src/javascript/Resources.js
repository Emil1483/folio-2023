import * as THREE from 'three'

import Loader from './Utils/Loader.js'
import EventEmitter from './Utils/EventEmitter.js'

// Matcaps
import matcapBeigeSource from '../models/matcaps/beige.png'
import matcapBlackSource from '../models/matcaps/black.png'
import matcapOrangeSource from '../models/matcaps/orange.png'
import matcapRedSource from '../models/matcaps/red.png'
import matcapWhiteSource from '../models/matcaps/white.png'
import matcapGreenSource from '../models/matcaps/green.png'
import matcapBrownSource from '../models/matcaps/brown.png'
import matcapGraySource from '../models/matcaps/gray.png'
import matcapEmeraldGreenSource from '../models/matcaps/emeraldGreen.png'
import matcapPurpleSource from '../models/matcaps/purple.png'
import matcapBlueSource from '../models/matcaps/blue.png'
import matcapYellowSource from '../models/matcaps/yellow.png'
import matcapMetalSource from '../models/matcaps/metal.png'
// import matcapGoldSource from '../models/matcaps/gold.png'

// Textures
import whiteboardSource from '../models/crossroads/static/Whiteboard.jpg'

// Intro
import introStaticBaseSource from '../models/intro/static/base.glb'
import introStaticCollisionSource from '../models/intro/static/collision.glb'
import introStaticFloorShadowSource from '../models/intro/static/floorShadow.png'

import introInstructionsLabelsSource from '../models/intro/instructions/labels.glb'
import introInstructionsArrowsSource from '../models/intro/instructions/arrows.png'
import introInstructionsControlsSource from '../models/intro/instructions/controls.png'
import introInstructionsOtherSource from '../models/intro/instructions/other.png'

import introArrowKeyBaseSource from '../models/intro/arrowKey/base.glb'
import introArrowKeyCollisionSource from '../models/intro/arrowKey/collision.glb'

import introEBaseSource from '../models/intro/e/base.glb'
import introECollisionSource from '../models/intro/e/collision.glb'

import introMBaseSource from '../models/intro/m/base.glb'
import introMCollisionSource from '../models/intro/m/collision.glb'

import introICollisionSource from '../models/intro/i/collision.glb'
import introIBaseSource from '../models/intro/i/base.glb'

import introLCollisionSource from '../models/intro/l/collision.glb'
import introLBaseSource from '../models/intro/l/base.glb'

import introDCollisionSource from '../models/intro/d/collision.glb'
import introDBaseSource from '../models/intro/d/base.glb'

import introJCollisionSource from '../models/intro/j/collision.glb'
import introJBaseSource from '../models/intro/j/base.glb'

import introUCollisionSource from '../models/intro/u/collision.glb'
import introUBaseSource from '../models/intro/u/base.glb'

import introPCollisionSource from '../models/intro/p/collision.glb'
import introPBaseSource from '../models/intro/p/base.glb'

import introVCollisionSource from '../models/intro/v/collision.glb'
import introVBaseSource from '../models/intro/v/base.glb'

import introI2CollisionSource from '../models/intro/i2/collision.glb'
import introI2BaseSource from '../models/intro/i2/base.glb'

import introKCollisionSource from '../models/intro/k/collision.glb'
import introKBaseSource from '../models/intro/k/base.glb'

// Crossroads
import crossroadsStaticFloorShadowSource from '../models/crossroads/static/floorShadow.png'
import crossroadsStaticBaseSource from '../models/crossroads/static/base.glb'
import crossroadsStaticCollisionSource from '../models/crossroads/static/collision.glb'

// Car cyber truck
import carCyberTruckChassisSource from '../models/car/cyberTruck/chassis.glb'
import carCyberTruckWheelSource from '../models/car/cyberTruck/wheel.glb'
import carCyberTruckBackLightsBrakeSource from '../models/car/cyberTruck/backLightsBrake.glb'
import carCyberTruckBackLightsReverseSource from '../models/car/cyberTruck/backLightsReverse.glb'
import carCyberTruckAntenaSource from '../models/car/cyberTruck/antena.glb'

// Projects
import projectsBoardStructureSource from '../models/projects/board/structure.glb'
import projectsBoardCollisionSource from '../models/projects/board/collision.glb'
import projectsBoardStructureFloorShadowSource from '../models/projects/board/floorShadow.png'
import projectsBoardPlaneSource from '../models/projects/board/plane.glb'

import projectsDistinctionsAwwwardsBaseSource from '../models/projects/distinctions/awwwards/base.glb'
import projectsDistinctionsAwwwardsCollisionSource from '../models/projects/distinctions/awwwards/collision.glb'
import projectsDistinctionsFWABaseSource from '../models/projects/distinctions/fwa/base.glb'
import projectsDistinctionsFWACollisionSource from '../models/projects/distinctions/fwa/collision.glb'
import projectsDistinctionsCSSDABaseSource from '../models/projects/distinctions/cssda/base.glb'
import projectsDistinctionsCSSDACollisionSource from '../models/projects/distinctions/cssda/collision.glb'

import projectsOppkjoringFloorSource from '../models/projects/oppkjoring/floorTexture.png'
import projectsTingsFloorSource from '../models/projects/tings/floorTexture.png'
import projectsYamuntuFloorSource from '../models/projects/yamuntu/floorTexture.png'
import projectsCleverFloorSource from '../models/projects/clever/floorTexture.png'
import projectsAlarmFloorSource from '../models/projects/alarm/floorTexture.png'

// Information
import informationStaticBaseSource from '../models/information/static/base.glb'
import informationStaticCollisionSource from '../models/information/static/collision.glb'
import informationStaticFloorShadowSource from '../models/information/static/floorShadow.png'

import informationShipBaseSource from '../models/information/ship/base.glb'
import informationShipCollisionSource from '../models/information/ship/collision.glb'

import informationContactGooglePlayLabelSource from '../models/information/static/contactGooglePlayLabel.png'
import informationContactGithubLabelSource from '../models/information/static/contactGithubLabel.png'
import informationContactLinkedinLabelSource from '../models/information/static/contactLinkedinLabel.png'
import informationContactMailLabelSource from '../models/information/static/contactMailLabel.png'

import informationActivitiesSource from '../models/information/static/activities.png'

// Playground
import playgroundStaticFloorShadowSource from '../models/playground/static/floorShadow.png'
import playgroundStaticBaseSource from '../models/playground/static/base.glb'
import playgroundStaticCollisionSource from '../models/playground/static/collision.glb'

// Brick
import brickBaseSource from '../models/brick/base.glb'
import brickCollisionSource from '../models/brick/collision.glb'

// Horn
import hornBaseSource from '../models/horn/base.glb'
import hornCollisionSource from '../models/horn/collision.glb'

// // Distinction A
// import distinctionAStaticFloorShadowSource from '../models/distinctionA/static/floorShadow.png'
// import distinctionAStaticBaseSource from '../models/distinctionA/static/base.glb'
// import distinctionAStaticCollisionSource from '../models/distinctionA/static/collision.glb'

// // Distinction B
// import distinctionBStaticFloorShadowSource from '../models/distinctionB/static/floorShadow.png'
// import distinctionBStaticBaseSource from '../models/distinctionB/static/base.glb'
// import distinctionBStaticCollisionSource from '../models/distinctionB/static/collision.glb'

// // Distinction C
// import distinctionCStaticFloorShadowSource from '../models/distinctionC/static/floorShadow.png'
// import distinctionCStaticBaseSource from '../models/distinctionC/static/base.glb'
// import distinctionCStaticCollisionSource from '../models/distinctionC/static/collision.glb'

// // Cone
// import coneBaseSource from '../models/cone/base.glb'
// import coneCollisionSource from '../models/cone/collision.glb'

// // Awwwards trophy
// import awwwardsTrophyBaseSource from '../models/awwwardsTrophy/base.glb'
// import awwwardsTrophyCollisionSource from '../models/awwwardsTrophy/collision.glb'

// Awwwards trophy
import webbyTrophyBaseSource from '../models/webbyTrophy/base.glb'
import webbyTrophyCollisionSource from '../models/webbyTrophy/collision.glb'

// Lemon
import lemonBaseSource from '../models/lemon/base.glb'
import lemonCollisionSource from '../models/lemon/collision.glb'

// Bowling ball
import bowlingBallBaseSource from '../models/bowlingBall/base.glb'
import bowlingBallCollisionSource from '../models/bowlingBall/collision.glb'

// Bowling pin
import bowlingPinBaseSource from '../models/bowlingPin/base.glb'
import bowlingPinCollisionSource from '../models/bowlingPin/collision.glb'

// Area
import areaKeyEnterSource from '../models/area/keyEnter.png'
import areaEnterSource from '../models/area/enter.png'
import areaOpenSource from '../models/area/open.png'
import areaResetSource from '../models/area/reset.png'
import areaQuestionMarkSource from '../models/area/questionMark.png'

// Tiles
import tilesABaseSource from '../models/tiles/a/base.glb'
import tilesACollisionSource from '../models/tiles/a/collision.glb'

import tilesBBaseSource from '../models/tiles/b/base.glb'
import tilesBCollisionSource from '../models/tiles/b/collision.glb'

import tilesCBaseSource from '../models/tiles/c/base.glb'
import tilesCCollisionSource from '../models/tiles/c/collision.glb'

import tilesDBaseSource from '../models/tiles/d/base.glb'
import tilesDCollisionSource from '../models/tiles/d/collision.glb'

import tilesEBaseSource from '../models/tiles/e/base.glb'
import tilesECollisionSource from '../models/tiles/e/collision.glb'

// Konami
import konamiLabelSource from '../models/konami/label.png'
import konamiLabelTouchSource from '../models/konami/label-touch.png'

export default class Resources extends EventEmitter {
    constructor() {
        super()

        this.loader = new Loader()
        this.items = {}

        this.loader.load([
            // Matcaps
            { name: 'matcapBeige', source: matcapBeigeSource, type: 'texture' },
            { name: 'matcapBlack', source: matcapBlackSource, type: 'texture' },
            { name: 'matcapOrange', source: matcapOrangeSource, type: 'texture' },
            { name: 'matcapRed', source: matcapRedSource, type: 'texture' },
            { name: 'matcapWhite', source: matcapWhiteSource, type: 'texture' },
            { name: 'matcapGreen', source: matcapGreenSource, type: 'texture' },
            { name: 'matcapBrown', source: matcapBrownSource, type: 'texture' },
            { name: 'matcapGray', source: matcapGraySource, type: 'texture' },
            { name: 'matcapEmeraldGreen', source: matcapEmeraldGreenSource, type: 'texture' },
            { name: 'matcapPurple', source: matcapPurpleSource, type: 'texture' },
            { name: 'matcapBlue', source: matcapBlueSource, type: 'texture' },
            { name: 'matcapYellow', source: matcapYellowSource, type: 'texture' },
            { name: 'matcapMetal', source: matcapMetalSource, type: 'texture' },
            // { name: 'matcapGold', source: matcapGoldSource, type: 'texture' },

            // Textures
            { name: "whiteboard", source: whiteboardSource, type: 'texture' },

            // Intro
            { name: 'introStaticBase', source: introStaticBaseSource },
            { name: 'introStaticCollision', source: introStaticCollisionSource },
            { name: 'introStaticFloorShadow', source: introStaticFloorShadowSource, type: 'texture' },

            { name: 'introInstructionsLabels', source: introInstructionsLabelsSource },
            { name: 'introInstructionsArrows', source: introInstructionsArrowsSource, type: 'texture' },
            { name: 'introInstructionsControls', source: introInstructionsControlsSource, type: 'texture' },
            { name: 'introInstructionsOther', source: introInstructionsOtherSource, type: 'texture' },

            { name: 'introArrowKeyBase', source: introArrowKeyBaseSource },
            { name: 'introArrowKeyCollision', source: introArrowKeyCollisionSource },

            { name: 'introEBase', source: introEBaseSource },
            { name: 'introECollision', source: introECollisionSource },

            { name: 'introMBase', source: introMBaseSource },
            { name: 'introMCollision', source: introMCollisionSource },

            { name: 'introIBase', source: introIBaseSource },
            { name: 'introICollision', source: introICollisionSource },

            { name: 'introLBase', source: introLBaseSource },
            { name: 'introLCollision', source: introLCollisionSource },

            { name: 'introDBase', source: introDBaseSource },
            { name: 'introDCollision', source: introDCollisionSource },

            { name: 'introJBase', source: introJBaseSource },
            { name: 'introJCollision', source: introJCollisionSource },

            { name: 'introUBase', source: introUBaseSource },
            { name: 'introUCollision', source: introUCollisionSource },

            { name: 'introPBase', source: introPBaseSource },
            { name: 'introPCollision', source: introPCollisionSource },

            { name: 'introVBase', source: introVBaseSource },
            { name: 'introVCollision', source: introVCollisionSource },

            { name: 'introI2Base', source: introI2BaseSource },
            { name: 'introI2Collision', source: introI2CollisionSource },

            { name: 'introKBase', source: introKBaseSource },
            { name: 'introKCollision', source: introKCollisionSource },

            // Intro
            { name: 'crossroadsStaticBase', source: crossroadsStaticBaseSource },
            { name: 'crossroadsStaticCollision', source: crossroadsStaticCollisionSource },
            { name: 'crossroadsStaticFloorShadow', source: crossroadsStaticFloorShadowSource, type: 'texture' },

            // Car CyberTruck
            { name: 'carCyberTruckChassis', source: carCyberTruckChassisSource },
            { name: 'carCyberTruckWheel', source: carCyberTruckWheelSource },
            { name: 'carCyberTruckBackLightsBrake', source: carCyberTruckBackLightsBrakeSource },
            { name: 'carCyberTruckBackLightsReverse', source: carCyberTruckBackLightsReverseSource },
            { name: 'carCyberTruckAntena', source: carCyberTruckAntenaSource },

            // Project
            { name: 'projectsBoardStructure', source: projectsBoardStructureSource },
            { name: 'projectsBoardCollision', source: projectsBoardCollisionSource },
            { name: 'projectsBoardStructureFloorShadow', source: projectsBoardStructureFloorShadowSource, type: 'texture' },
            { name: 'projectsBoardPlane', source: projectsBoardPlaneSource },

            { name: 'projectsDistinctionsAwwwardsBase', source: projectsDistinctionsAwwwardsBaseSource },
            { name: 'projectsDistinctionsAwwwardsCollision', source: projectsDistinctionsAwwwardsCollisionSource },
            { name: 'projectsDistinctionsFWABase', source: projectsDistinctionsFWABaseSource },
            { name: 'projectsDistinctionsFWACollision', source: projectsDistinctionsFWACollisionSource },
            { name: 'projectsDistinctionsCSSDABase', source: projectsDistinctionsCSSDABaseSource },
            { name: 'projectsDistinctionsCSSDACollision', source: projectsDistinctionsCSSDACollisionSource },

            { name: 'projectsOppkjoringFloor', source: projectsOppkjoringFloorSource, type: 'texture' },
            { name: 'projectsTingsFloor', source: projectsTingsFloorSource, type: 'texture' },
            { name: 'projectsYamuntuFloor', source: projectsYamuntuFloorSource, type: 'texture' },
            { name: 'projectsCleverFloor', source: projectsCleverFloorSource, type: 'texture' },
            { name: 'projectsAlarmFloor', source: projectsAlarmFloorSource, type: 'texture' },

            // Information
            { name: 'informationStaticBase', source: informationStaticBaseSource },
            { name: 'informationStaticCollision', source: informationStaticCollisionSource },
            { name: 'informationStaticFloorShadow', source: informationStaticFloorShadowSource, type: 'texture' },

            { name: 'informationShipBase', source: informationShipBaseSource },
            { name: 'informationShipCollision', source: informationShipCollisionSource },

            { name: 'informationContactGooglePlayLabel', source: informationContactGooglePlayLabelSource, type: 'texture' },
            { name: 'informationContactGithubLabel', source: informationContactGithubLabelSource, type: 'texture' },
            { name: 'informationContactLinkedinLabel', source: informationContactLinkedinLabelSource, type: 'texture' },
            { name: 'informationContactMailLabel', source: informationContactMailLabelSource, type: 'texture' },

            { name: 'informationActivities', source: informationActivitiesSource, type: 'texture' },

            // Playground
            { name: 'playgroundStaticBase', source: playgroundStaticBaseSource },
            { name: 'playgroundStaticCollision', source: playgroundStaticCollisionSource },
            { name: 'playgroundStaticFloorShadow', source: playgroundStaticFloorShadowSource, type: 'texture' },

            // Brick
            { name: 'brickBase', source: brickBaseSource },
            { name: 'brickCollision', source: brickCollisionSource },

            // Horn
            { name: 'hornBase', source: hornBaseSource },
            { name: 'hornCollision', source: hornCollisionSource },

            // // Distinction A
            // { name: 'distinctionAStaticBase', source: distinctionAStaticBaseSource },
            // { name: 'distinctionAStaticCollision', source: distinctionAStaticCollisionSource },
            // { name: 'distinctionAStaticFloorShadow', source: distinctionAStaticFloorShadowSource, type: 'texture' },

            // // Distinction B
            // { name: 'distinctionBStaticBase', source: distinctionBStaticBaseSource },
            // { name: 'distinctionBStaticCollision', source: distinctionBStaticCollisionSource },
            // { name: 'distinctionBStaticFloorShadow', source: distinctionBStaticFloorShadowSource, type: 'texture' },

            // // Distinction C
            // { name: 'distinctionCStaticBase', source: distinctionCStaticBaseSource },
            // { name: 'distinctionCStaticCollision', source: distinctionCStaticCollisionSource },
            // { name: 'distinctionCStaticFloorShadow', source: distinctionCStaticFloorShadowSource, type: 'texture' },

            // // Cone
            // { name: 'coneBase', source: coneBaseSource },
            // { name: 'coneCollision', source: coneCollisionSource },

            // // Awwwards trophy
            // { name: 'awwwardsTrophyBase', source: awwwardsTrophyBaseSource },
            // { name: 'awwwardsTrophyCollision', source: awwwardsTrophyCollisionSource },

            // Webby trophy
            { name: 'webbyTrophyBase', source: webbyTrophyBaseSource },
            { name: 'webbyTrophyCollision', source: webbyTrophyCollisionSource },

            // Lemon
            { name: 'lemonBase', source: lemonBaseSource },
            { name: 'lemonCollision', source: lemonCollisionSource },

            // Bownling ball
            { name: 'bowlingBallBase', source: bowlingBallBaseSource },
            { name: 'bowlingBallCollision', source: bowlingBallCollisionSource },

            // Bownling ball
            { name: 'bowlingPinBase', source: bowlingPinBaseSource },
            { name: 'bowlingPinCollision', source: bowlingPinCollisionSource },

            // Areas
            { name: 'areaKeyEnter', source: areaKeyEnterSource, type: 'texture' },
            { name: 'areaEnter', source: areaEnterSource, type: 'texture' },
            { name: 'areaOpen', source: areaOpenSource, type: 'texture' },
            { name: 'areaReset', source: areaResetSource, type: 'texture' },
            { name: 'areaQuestionMark', source: areaQuestionMarkSource, type: 'texture' },

            // Tiles
            { name: 'tilesABase', source: tilesABaseSource },
            { name: 'tilesACollision', source: tilesACollisionSource },

            { name: 'tilesBBase', source: tilesBBaseSource },
            { name: 'tilesBCollision', source: tilesBCollisionSource },

            { name: 'tilesCBase', source: tilesCBaseSource },
            { name: 'tilesCCollision', source: tilesCCollisionSource },

            { name: 'tilesDBase', source: tilesDBaseSource },
            { name: 'tilesDCollision', source: tilesDCollisionSource },

            { name: 'tilesEBase', source: tilesEBaseSource },
            { name: 'tilesECollision', source: tilesECollisionSource },

            // Konami
            { name: 'konamiLabel', source: konamiLabelSource, type: 'texture' },
            { name: 'konamiLabelTouch', source: konamiLabelTouchSource, type: 'texture' },

            // // Egg
            // { name: 'eggBase', source: eggBaseSource },
            // { name: 'eggCollision', source: eggCollisionSource },
        ])

        this.loader.on('fileEnd', (_resource, _data) => {
            this.items[_resource.name] = _data

            // Texture
            if (_resource.type === 'texture') {
                const texture = new THREE.Texture(_data)
                texture.needsUpdate = true

                this.items[`${_resource.name}Texture`] = texture
            }

            // Trigger progress
            this.trigger('progress', [this.loader.loaded / this.loader.toLoad])
        })

        this.loader.on('end', () => {
            // Trigger ready
            this.trigger('ready')
        })
    }
}
