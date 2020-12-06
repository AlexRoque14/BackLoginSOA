
var Openpay = require('openpay');
var openpay = new Openpay('me15vds5kqqjohdwmnyo', 'sk_a9dc548021124ee8af2eaeda3c4a68c6');
openpay.setProductionReady(false);

const open = async (request , response) => {
    try {

        let{card_number , name , last_name, email, ey , em , cvv2 , amount} = request.body;
        
        var chargeRequest = {
            'method' : 'card',
            'amount' : amount,
            'description' : 'Cargo inicial a mi cuenta',
            'order_id' : 'oid-00051',
            'customer' : {
                 'name' : name,
                 'last_name' : last_name,
                 'phone_number' : '4423456723',
                 'email' : email
            },
           'send_email' : true,
           'confirm' : false,
           'redirect_url' : 'http://www.openpay.mx/index.html'
         }

         openpay.charges.create(chargeRequest, function(error, charge) {
            if(charge){
                console.log(charge)
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
