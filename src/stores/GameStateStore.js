import { action, computed, makeObservable, observable } from "mobx";

class GameStateStore {
    envs = [];

    constructor() {
        makeObservable(this, {
            envs: observable,
            createEnv: action,
            updateEnv: action,
            getFeaturesByEnv: action
        });
    }
    
    createEnv(envName) {
      let env = {id: this.envs.length, name: envName, features: 0};
      this.envs.push(env);
    }

    updateEnv(id) {
        let envIndex = this.envs.findIndex((current) => current.id === id);
        this.envs[envIndex].features += 1;
    }

    getFeaturesByEnv(id) {
        return this.envs.filter((current) => {return current.id === id ? current.features : 0})
    }
}

export default GameStateStore;