function preload() {

}
function setup() {
    video = createCapture(VIDEO);
    video.size(397, 298);
    canvas = createCanvas(397, 298);
    video.hide();
}
function draw() {
    canvas.center();
    image(video, 0, 0, 397, 298)
}