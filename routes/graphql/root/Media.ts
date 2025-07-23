import mongoose from "mongoose";
import config from "../../../config";
import { MediaModel } from "../../../database";
import { UserDocument } from "../../../types";

const authMedia = context => {
    const user = context.user as (UserDocument | null);
    return config.dev || context.apitoken || (user && user.role <= 1 && (user.role === 0));
}

export default {
    media: async ({ id }, context) => {
        if(authMedia(context)) {
            const query : any = {};

            if(id && mongoose.Types.ObjectId.isValid(id)) query._id = id;
    
            if(!Object.keys(query).length) return false;
            try {
                return await MediaModel.findOne(query);
            } catch (err) { console.log(err); throw new Error("internal server error.");  }
        } else throw new Error("No Permession");
    },
    medias: async ({ order, max, skip, search, type }, context) => {
        if(authMedia(context)) {
            const order2 = order === "OLDEST" ? 1 :  -1;
            const max2 = max || 20;
            const skip2 = skip || 0;
            const query : any = {};
    
            if(search) query.name = new RegExp(search, "i");
            if(type) query.type = type;
    
            try {
                return await MediaModel.find(query).sort({ date: order2 }).skip(skip2).limit(max2);
            } catch(err) { console.log(err); throw new Error("internal server error.") }
        } else throw new Error("No Permession");
    },
    mediaLength: async ({ search, type }, context) => {
        if(authMedia(context)) {
            const query : any = {};

            if(search) query.title = new RegExp(search, "i");
            if(type) query.type = type;
    
            return await MediaModel.count(query);
        } else throw new Error("No Permession");
    }
}