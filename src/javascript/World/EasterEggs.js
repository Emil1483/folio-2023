import * as THREE from 'three'

export default class EasterEggs {
    constructor(_options) {
        // Options
        this.resources = _options.resources
        this.car = _options.car
        this.walls = _options.walls
        this.objects = _options.objects
        this.materials = _options.materials
        this.areas = _options.areas
        this.config = _options.config
        this.physics = _options.physics

        this.container = new THREE.Object3D()
        this.container.matrixAutoUpdate = false

        this.setKonamiCode()
    }

    setKonamiCode() {
        this.konamiCode = {}
        this.konamiCode.x = - 60
        this.konamiCode.y = - 100
        this.konamiCode.sequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight']

        if (!this.config.touch) {
            this.konamiCode.sequence.push('b', 'a')
        }

        this.konamiCode.keyIndex = 0
        this.konamiCode.latestKeys = []
        this.konamiCode.count = 0

        // Label
        if (this.config.touch) {
            this.konamiCode.labelTexture = this.resources.items.konamiLabelTouchTexture
        }
        else {
            this.konamiCode.labelTexture = this.resources.items.konamiLabelTexture
        }

        this.konamiCode.labelTexture.magFilter = THREE.NearestFilter
        this.konamiCode.labelTexture.minFilter = THREE.LinearFilter
        this.konamiCode.label = new THREE.Mesh(new THREE.PlaneBufferGeometry(8, 8 / 16), new THREE.MeshBasicMaterial({ transparent: true, depthWrite: false, color: 0xffffff, alphaMap: this.konamiCode.labelTexture }))
        this.konamiCode.label.position.x = this.konamiCode.x + 5
        this.konamiCode.label.position.y = this.konamiCode.y
        this.konamiCode.label.matrixAutoUpdate = false
        this.konamiCode.label.updateMatrix()
        this.container.add(this.konamiCode.label)

        // Lemon option
        this.konamiCode.lemonOption = {
            base: this.resources.items.lemonBase.scene,
            collision: this.resources.items.lemonCollision.scene,
            offset: new THREE.Vector3(0, 0, 0),
            rotation: new THREE.Euler(Math.PI * 0.5, - Math.PI * 0.3, 0),
            duplicated: true,
            shadow: { sizeX: 1.2, sizeY: 1.8, offsetZ: - 0.15, alpha: 0.35 },
            mass: 0.5,
            sleep: true,
            soundName: 'woodHit'
        }

        // First lemon
        this.objects.add({
            ...this.konamiCode.lemonOption,
            offset: new THREE.Vector3(this.konamiCode.x, this.konamiCode.y, 0.4)
        })

        this.konamiCode.testInput = (_input) => {
            this.konamiCode.latestKeys.push(_input)

            if (this.konamiCode.latestKeys.length > this.konamiCode.sequence.length) {
                this.konamiCode.latestKeys.shift()
            }

            if (this.konamiCode.sequence.toString() === this.konamiCode.latestKeys.toString()) {
                this.konamiCode.count++

                for (let i = 0; i < Math.pow(3, this.konamiCode.count); i++) {
                    window.setTimeout(() => {
                        const x = this.car.chassis.object.position.x + (Math.random() - 0.5) * 10
                        const y = this.car.chassis.object.position.y + (Math.random() - 0.5) * 10

                        this.objects.add({
                            ...this.konamiCode.lemonOption,
                            offset: new THREE.Vector3(x, y, 10),
                            rotation: new THREE.Euler(Math.random() * Math.PI * 2, Math.random() * Math.PI * 2, Math.random() * Math.PI * 2),
                            sleep: false
                        })

                    }, i * 50)
                }
            }
        }

        /**
         * Keyboard handling
         */
        window.addEventListener('keydown', (_event) => {
            this.konamiCode.testInput(_event.key)
        })

        /**
         * Touch handling
         */
        this.konamiCode.touch = {}
        this.konamiCode.touch.x = 0
        this.konamiCode.touch.y = 0

        this.konamiCode.touch.touchstart = (_event) => {
            window.addEventListener('touchend', this.konamiCode.touch.touchend)

            this.konamiCode.touch.x = _event.changedTouches[0].clientX
            this.konamiCode.touch.y = _event.changedTouches[0].clientY
        }
        this.konamiCode.touch.touchend = (_event) => {
            window.removeEventListener('touchend', this.konamiCode.touch.touchend)

            const endX = _event.changedTouches[0].clientX
            const endY = _event.changedTouches[0].clientY
            const deltaX = endX - this.konamiCode.touch.x
            const deltaY = endY - this.konamiCode.touch.y
            const distance = Math.hypot(deltaX, deltaY)

            if (distance > 30) {
                const angle = Math.atan2(deltaY, deltaX)
                let direction = null

                if (angle < - Math.PI * 0.75) {
                    direction = 'ArrowLeft'
                }
                else if (angle < - Math.PI * 0.25) {
                    direction = 'ArrowUp'
                }
                else if (angle < Math.PI * 0.25) {
                    direction = 'ArrowRight'
                }
                else if (angle < Math.PI * 0.75) {
                    direction = 'ArrowDown'
                }
                else {
                    direction = 'ArrowLeft'
                }

                this.konamiCode.testInput(direction)
            }
        }
        window.addEventListener('touchstart', this.konamiCode.touch.touchstart)
    }
}
