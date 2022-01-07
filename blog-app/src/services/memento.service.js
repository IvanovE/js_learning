class MementoService {
  constructor() {
    this.mementos = {};
  }

  add(key, memento) {
    this.mementos[key] = memento;
  }

  get(key) {
    return this.mementos[key];
  }
}

export const memento = new MementoService()
