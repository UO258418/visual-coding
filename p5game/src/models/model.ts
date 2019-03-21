interface Model {

    draw(): void;
    collide(model: Model): boolean;

}