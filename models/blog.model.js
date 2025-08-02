const { link } = require("fs-extra")
const { StringField, ModelField } =require("../utils/fields")
const { template } = require("lodash")

module.exports = {
    edit:true,
    name:"blog",
    primary:"title",
    i18n:true,
    draft:true,
    props:{
        title:StringField({validate:{required:true}}),
        image:ModelField({model:"media",validate:{required:true}}),
        categorie:StringField(),
        date:StringField({type:"date"})
    },
    preview:{
        input:{
            name:"title",
            image:"image"
        },
        table:"title image categorie date"
    },
    pages:{
        link:"/blogs",
        domain:"main",
        template:"blog"
    }
}