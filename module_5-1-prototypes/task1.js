function Laptop(model, ssd, withFloppyDriver) {
    // this = {}
    this.model = model;
    this.ssd = ssd;
    this.withFloppyDriver = withFloppyDriver;
    this.isFloppyDriverOpen = false;

    this.toggleFloppyDriver = function () {
        if (this.withFloppyDriver) {
            if (this.isFloppyDriverOpen) { // true
                this.isFloppyDriverOpen = !this.isFloppyDriverOpen; // false
                console.log('You have closed the floppy driver');
            } else {
                this.isFloppyDriverOpen = !this.isFloppyDriverOpen; // true
                console.log('You have opened the floppy driver');
            }
        } else {
            console.log('You don\'t have a floppy driver!');
        }
    }
}

const asus = new Laptop('AsusX75V', 512, true);
const hp = new Laptop('HP750', 125, false)

asus.toggleFloppyDriver();
asus.toggleFloppyDriver();
asus.toggleFloppyDriver();
