const Card = require("../models/Card")

class CardService {

    get() {
        const query = Card.find({}).exec();

        return query
    }

    
    getById(id) {
        const query = Card.findById({ _id: id }).exec();

        return query;
    }

    
    add(data) {
        const addCard = new Card({
          name: data.name,
          img: data.img
        });
    
        return addCard.save();
      }

}

module.exports = CardService;