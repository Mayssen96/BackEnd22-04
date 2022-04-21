
const roleSchema = require('../models/userrole');
const userSchema = require('../models/usermodels')
const bcrypt = require('bcrypt');

async function init(){
    const listrole = ['user','admin','gestionnaire'];
    try {
        const role = await roleSchema.find();
       
        if(role.length == 0){
            listrole.map(async (el) => {
                const newRole = new roleSchema({
                    name:el
                })
                 
                
                await newRole.save();
                console.log(`${el} is created`)
            })
        } 
        // find in collection role there is administrator
        const userIsAdmin = await roleSchema.findOne({name:'admin'})
    
       // find by id role a user with role is admin
        const isAdmin = await userSchema.findOne({role:[userIsAdmin._id]});
        if(!isAdmin){
            const newAdmin = await new userSchema({
                firstname:'admin',
                lastname:'admin',
                email:'admin@admin.com',
                role:[userIsAdmin._id],
                password:bcrypt.hashSync(process.env.admin_password,10),
                cin:'123456798',
            })
            await newAdmin.save();
            console.log('you added a admin for your website')
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = init;