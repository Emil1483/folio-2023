import * as THREE from 'three'
import Project from './Project'
import TweenLite from 'gsap/TweenLite'

import projectsOppkjoringSlideASources from '../../../models/projects/oppkjoring/slideA.jpg'
import projectsOppkjoringSlideBSources from '../../../models/projects/oppkjoring/slideB.jpg'

import projectsTingsSlideASources from '../../../models/projects/tings/slideA.jpg'
import projectsTingsSlideBSources from '../../../models/projects/tings/slideB.jpg'

import projectsYamuntuSlideASources from '../../../models/projects/yamuntu/slideA.jpg'
import projectsYamuntuSlideBSources from '../../../models/projects/yamuntu/slideB.jpg'

import projectsCleverSlideASources from '../../../models/projects/clever/slideA.jpg'
import projectsCleverSlideBSources from '../../../models/projects/clever/slideB.jpg'

import projectsAlarmSlideASources from '../../../models/projects/alarm/slideA.jpg'
import projectsAlarmSlideBSources from '../../../models/projects/alarm/slideB.jpg'

export default class ProjectsSection {
    constructor(_options) {
        // Options
        this.time = _options.time
        this.resources = _options.resources
        this.camera = _options.camera
        this.passes = _options.passes
        this.objects = _options.objects
        this.areas = _options.areas
        this.zones = _options.zones
        this.tiles = _options.tiles
        this.debug = _options.debug
        this.x = _options.x
        this.y = _options.y

        // Debug
        if (this.debug) {
            this.debugFolder = this.debug.addFolder('projects')
            this.debugFolder.open()
        }

        // Set up
        this.items = []

        this.interDistance = 24
        this.positionRandomess = 5
        this.projectHalfWidth = 9

        this.container = new THREE.Object3D()
        this.container.matrixAutoUpdate = false
        this.container.updateMatrix()

        this.setGeometries()
        this.setMeshes()
        this.setList()
        this.setZone()

        // Add all project from the list
        for (const _options of this.list) {
            this.add(_options)
        }
    }

    setGeometries() {
        this.geometries = {}
        this.geometries.floor = new THREE.PlaneBufferGeometry(16, 8)
    }

    setMeshes() {
        this.meshes = {}

        // this.meshes.boardStructure = this.objects.getConvertedMesh(this.resources.items.projectsBoardStructure.scene.children, { floorShadowTexture: this.resources.items.projectsBoardStructureFloorShadowTexture })
        this.resources.items.areaOpenTexture.magFilter = THREE.NearestFilter
        this.resources.items.areaOpenTexture.minFilter = THREE.LinearFilter
        this.meshes.boardPlane = this.resources.items.projectsBoardPlane.scene.children[0]
        this.meshes.areaLabel = new THREE.Mesh(new THREE.PlaneBufferGeometry(2, 0.5), new THREE.MeshBasicMaterial({ transparent: true, depthWrite: false, color: 0xffffff, alphaMap: this.resources.items.areaOpenTexture }))
        this.meshes.areaLabel.matrixAutoUpdate = false
    }

    setList() {
        this.list = [
            {
                name: 'oppkjoring.com',
                imageSources:
                    [
                        projectsOppkjoringSlideASources,
                        projectsOppkjoringSlideBSources,
                    ],
                floorTexture: this.resources.items.projectsOppkjoringFloorTexture,
                link:
                {
                    href: 'https://www.oppkjoring.com/',
                    x: - 4.8,
                    y: - 4.5,
                    halfExtents:
                    {
                        x: 3.2,
                        y: 1.5
                    }
                },
                widthOffset: -5,
            },
            {
                name: 'Tings',
                imageSources:
                    [
                        projectsTingsSlideASources,
                        projectsTingsSlideBSources,
                    ],
                floorTexture: this.resources.items.projectsTingsFloorTexture,
                link:
                {
                    href: 'https://www.tings.com/',
                    x: - 4.8,
                    y: - 2,
                    halfExtents:
                    {
                        x: 3.2,
                        y: 1.5
                    }
                },
                widthOffset: -5,
            },
            {
                name: 'yamuntu',
                imageSources:
                    [
                        projectsYamuntuSlideASources,
                        projectsYamuntuSlideBSources,
                    ],
                floorTexture: this.resources.items.projectsYamuntuFloorTexture,
                link:
                {
                    href: 'https://www.yamuntu.com/',
                    x: - 4.8,
                    y: - 2.5,
                    halfExtents:
                    {
                        x: 3.2,
                        y: 1.5
                    }
                },
                widthOffset: -5,
            },
            {
                name: 'Clever',
                imageSources:
                    [
                        projectsCleverSlideASources,
                        projectsCleverSlideBSources,
                    ],
                floorTexture: this.resources.items.projectsCleverFloorTexture,
                link:
                {
                    href: 'https://clever.fm/',
                    x: - 4.8,
                    y: - 2.5,
                    halfExtents:
                    {
                        x: 3.2,
                        y: 1.5
                    }
                },
                widthOffset: -5,
            },
            {
                name: 'Alarm',
                imageSources:
                    [
                        projectsAlarmSlideASources,
                        projectsAlarmSlideBSources,
                    ],
                floorTexture: this.resources.items.projectsAlarmFloorTexture,
                link:
                {
                    href: 'https://github.com/Emil1483/alarm',
                    x: - 4.8,
                    y: - 5,
                    halfExtents:
                    {
                        x: 3.2,
                        y: 1.5
                    }
                },
                widthOffset: -5,
            },
        ]
    }

    setZone() {
        const totalWidth = this.list.length * (this.interDistance / 2)

        const zone = this.zones.add({
            position: { x: this.x + totalWidth - this.projectHalfWidth - 6, y: this.y },
            halfExtents: { x: totalWidth, y: 12 },
            data: { cameraAngle: 'projects' }
        })

        zone.on('in', (_data) => {
            this.camera.angle.set(_data.cameraAngle)
            TweenLite.to(this.passes.horizontalBlurPass.material.uniforms.uStrength.value, 2, { x: 0 })
            TweenLite.to(this.passes.verticalBlurPass.material.uniforms.uStrength.value, 2, { y: 0 })
        })

        zone.on('out', () => {
            this.camera.angle.set('default')
            TweenLite.to(this.passes.horizontalBlurPass.material.uniforms.uStrength.value, 2, { x: this.passes.horizontalBlurPass.strength })
            TweenLite.to(this.passes.verticalBlurPass.material.uniforms.uStrength.value, 2, { y: this.passes.verticalBlurPass.strength })
        })
    }

    add(_options) {
        let totalWidthOffset = 0
        for (const project of this.items) {
            totalWidthOffset += project.widthOffset
        }

        const x = this.x + this.items.length * this.interDistance + totalWidthOffset
        let y = this.y
        if (this.items.length > 0) {
            y += (Math.random() - 0.5) * this.positionRandomess
        }

        const widthOffset = _options.widthOffset || 0

        // Create project
        const project = new Project({
            time: this.time,
            widthOffset: widthOffset,
            resources: this.resources,
            objects: this.objects,
            areas: this.areas,
            geometries: this.geometries,
            meshes: this.meshes,
            debug: this.debugFolder,
            x: x,
            y: y,
            ..._options
        })

        this.container.add(project.container)

        // Add tiles
        if (this.items.length >= 1) {
            const previousProject = this.items[this.items.length - 1]
            const start = new THREE.Vector2(previousProject.x + this.projectHalfWidth + previousProject.widthOffset, previousProject.y)
            const end = new THREE.Vector2(project.x - this.projectHalfWidth, project.y)
            const delta = end.clone().sub(start)
            this.tiles.add({
                start: start,
                delta: delta
            })
        }

        // Save
        this.items.push(project)
    }
}
