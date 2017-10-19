const GenericService = require('./service.js')

function Controller(model) {
    this.model = model
    this.service = new GenericService(this.model)

    this.index = (req, res) => {
        return res.json({ msg: this.service.findAll() })
    }

}

module.exports = Controller
