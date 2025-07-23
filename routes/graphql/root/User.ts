import mongoose from "mongoose";
import config from "../../../config";
import { UserModel } from "../../../database";
import { UserDocument } from "../../../types";

const authUser = context => {
    const user = context.user as (UserDocument | null);
    return config.dev || (user && user.role <= 1 && (user.role === 0));
}

export default {
    user: async ({ id, name }, context) => {
        if(authUser(context)) {
            const user = context.user as UserDocument;
            const query : any = {};

            if(id && mongoose.Types.ObjectId.isValid(id)) query._id = id;
            if(name) query.name = name;
    
            if(!Object.keys(query).length) return false;
            try {
                return await UserModel.findOne({ ...query, role: { $gt: Math.min(user.role) } });
            } catch (err) { console.log(err); throw new Error("internal server error.");  }
        } else throw new Error("No Permession");
    },
    users: async ({ order, max, skip, role }, context) => {
        if(authUser(context)) {
            const user = context.user as UserDocument;
            const order2 = order === "OLDEST" ? 1 :  -1;
            const max2 = max || 20;
            const skip2 = skip || 0;
            const query : any = {};
            const minRole = Math.min(user.role)
    
            try {
                const roleFilter = (role && role >= minRole) ? { role } : { role: { $gt: Math.min(user.role) } };

                return await UserModel.find({ ...query, ...roleFilter }).sort({ date: order2 }).skip(skip2).limit(max2);
            } catch(err) { console.log(err); throw new Error("internal server error.") }
        } else throw new Error("No Permession");
    },
    usersCount: async ({  }, context) => {
        if(authUser(context)) {
            const user = context.user as UserDocument;
            const query : any = {};
            
            return await UserModel.count({ ...query, role: { $gt: Math.min(user.role) } });
        } else throw new Error("No Permession");
    }
}