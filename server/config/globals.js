/**
 * @author A.Sivatharan
 * created on 14.03.2018
 */

module.exports = {
    validation: function(value) {
        if (value == '' || value == undefined){
            return true
        }
    },
    jwt:{
        secret:"siva",
        expiresIn: 120
    }
}