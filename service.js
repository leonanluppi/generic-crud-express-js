function GenericService(model) {
    this.model = model
}

GenericService.prototype.findAll = function() {
    return this.model.find()
}

module.exports = GenericService