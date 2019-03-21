class AbstractModel implements Model {

    image: HTMLImageElement;
    x: number;
    y: number;
    width: number;
    height: number;

    constructor(imageSrc: string, x: number, y: number) {
        this.image = new Image();
        this.image.src = imageSrc;
        this.x = x;
        this.y = y;
        this.width = this.image.width;
        this.height = this.image.height;
    }

    draw(): void {

    }

    collide(model: Model): boolean {
        return false;
    }

}