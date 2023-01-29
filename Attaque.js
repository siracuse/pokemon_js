class Attaque {
    name = '';
    power = 0;

    constructor (name) {
        this.name = name;
        this.power = this.setPower()
    }


    setConfig() {
        let config;
        if (this.name == 'charge') {
            config = {
                'power' : 40,
                'type' : 'normal',
                'precision': 100
            }
        }
        if (this.name == 'fouet lianes') {
            config = {
                'power' : 45,
                'type': 'plante',
                'precision' : 100
            }
        }
        if (this.name == 'griffre') {
            config = {
                'power' : 40,
                'normal': 'normal',
                'precision': 100
            }
        }
        if (this.name == 'flammèche') {
            config = {
                'power' : 40,
                'type' : 'feu',
                'precision': 100
            }
        }
        if (this.name == 'pistolet à o') {
            config = {
                'power' : 40,
                'type': 'eau',
                'precision': 100
            }
        }
        return config;
    }

    setPower() {
        let config = this.setConfig();
        this.power = config['power'];
        return this.power;
    }
}