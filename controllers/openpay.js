
var Openpay = require('openpay');
var openpay = new Openpay('me15vds5kqqjohdwmnyo', 'sk_a9dc548021124ee8af2eaeda3c4a68c6', [ isProduction ]);

const open = async (request , response) => {
    try {

        let{card_number , name , ey , em , cvv2 , amount} = request.body;
        
        var newCharge = {
            "method": "card",
            "card": {
              "card_number": card_number,
              "holder_name": name,
              "expiration_year": ey,
              "expiration_month": em,
              "cvv2": cvv2,
            },
            "amount" : amount,
            "description" : "Compra de boleto de avión.",
            "order_id" : "oid-00721"
          };

          openpay.charges.create(newCharge, function (error, body){
            if(body){
                console.log(body)
            }else{
                console.log(error)
            }
          });

          
        return response.json({
            ok: true
        });

    } catch (error) {
        console.log(error)
        return response.status(500).json({
            ok: false,
            error
        });
    }

}

module.exports = {
    open
}
