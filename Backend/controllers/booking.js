const Booking = require("../models/Booking");

exports.sendBookingController = async (req,res,next) => {
    try{
        // Fetch the Necessary Information from Req.body (i.e, Frontend)
        const {firstName, lastName, email, phone, time, date} = req.body;

        // Perform Validation
        if(!firstName || !lastName || !email || !phone || !date || !time) {
            return res.status(403).json({
                success:false,
                message:'Please Complete the Seat Booking Form!',
            });
        }

        const AddInfo = await Booking.create({firstName, lastName, email, phone, time, date});

        console.log(AddInfo);

        res.status(200).json({
            success:true,
            message:"Booking Request Sent Successfully!"
        })
    }
    catch(error){
        console.log(error.message);
        return  res.status(500).json({
            success:false,
            message:error.message,
        })
    }
    next();
}