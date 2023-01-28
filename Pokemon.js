class Pokemon {
    name = '';
    pv = 0;
    pvMax = 0;
    a1 = '';
    a2 = '';
    a3 = '';
    a4 = '';
    attaque = 0;
    vitesse = 0;
    defense = 0;
    experience = 0;
    niveau = 0;

    

    constructor(name) {
        this.name = name
        this.pv = this.setPv()
        this.pvMax = this.setPv()
        this.a1 = this.setA1()
        this.a2 = this.setA2()
        this.a3 = this.setA3()
        this.a4 = this.setA4()
    }

    setConfig() {
        let config
        if (this.name == 'bulbizarre') {
            config = {
                "a1" : "charge",
                "a2" : "griffre",
                "a3" : "fouet lianes",
                "a4" : "griffre",
                "type" : "feuille",
                "pv" : 45,
                "attaque" : 49,
                "defense" : 49,
                "vitesse" : 45
            };
        }
        if (this.name == 'salameche') {
            config = {
                "a1" : "griffre",
                "a2" : "griffre",
                "a3" : "flammèche",
                "a4" : "griffre",
                "type": "feu",
                "pv" : 39,
                "attaque" : 52,
                "defense" : 43,
                "vitesse" : 65
            };
        }
        if (this.name == 'carapuce') {
            config = {
                "a1" : "charge",
                "a2" : "griffre",
                "a3" : "pistolet à o",
                "a4" : "griffre",
                "type" : "eau",
                "pv" : 44,
                "attaque": 48,
                "defense" : 65,
                "vitesse" : 43
            };
        }
        return config;
    } 

    setPv() {
        let config = this.setConfig();
        this.pv = config["pv"];
        return this.pv;
    }

    setA1() {
        let config = this.setConfig();
        this.a1 = config["a1"];
        return this.a1;
    }

    setA2() {
        let config = this.setConfig();
        this.a2 = config["a2"];
        return this.a2;
    }

    setA3() {
        let config = this.setConfig();
        this.a3 = config["a3"];
        return this.a3;
    }

    setA4() {
        let config = this.setConfig();
        this.a4 = config["a4"];
        return this.a4;
    }

    setExperience(new_exp) {
        this.experience = this.experience + new_exp;
        console.log(this.experience);
    }

    setNewPv(pv_lose) {
        this.pv = this.pv - pv_lose;
        return this.pv;
    }

}