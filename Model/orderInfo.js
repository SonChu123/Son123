import {Model,BasicModel,ObjectModel} from 'objectmodel';
import 'es6-symbol/implement';



// nguoi gui
class CustomerSender extends ObjectModel ({
    customer_id:Number,
    name:String,
    phone: Number,
    MS_Thue: Number,
    email:String,
})
{
    get fullInfo(){return'${this.name} ${this.phone} ${this.MSThue} ${this.email}'}
}
//nguoi nhan
const CustomerRecover= new ObjectModel({
    name:String,
    phone:Number,
    address:String,
})
//hang hoa
const Comodity = new ObjectModel ({
    Img: String,
    vehicle_size: Number,
    weight:Number,
    amount:Number,
    type_comdity: String,
})
//tai xe
const Driver = new ObjectModel({
    driver_id: Number,
    name: String,
    _birth :Number,
    identity_number:Number,//so CMT
    phone:Number,
    address: String,
    email:String,
    amount: Number,
    imgLicense:String, //bang lai xe
})
//phuong tien
const Transport = new Object({
    vehicleSize: Number,
    vehicleType: String,
    licensePlate:String, //bien so xe
    IMG_Registrasion: String, //giay to xe
    
})


// export class oderInfo extends Model({ 
//     from: String,
//     to: String ,
//     time: String ,
//     items:String,
//     weight:Number,
//     tempvehicleType: String,
//     vehicleSize:String,
//     amount:Number
// })
// {
//     get fullOder(){ return `${this.from} ${this.to} ${this.time}${this.items}${this.weight}${this.tempvehicleType}${this.vehicleSize}${this.amount}`; }
// }