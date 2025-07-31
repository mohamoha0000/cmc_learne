const { StringField, ModelField } =require("../utils/fields")

module.exports = {
    edit:true,
    name:"portfolio",
    primary:"title",
    i18n:true,
    draft:true,
    props:{
        title:StringField({validate:{required:true}}),
        key:StringField(),
        image:ModelField({model:"media",validate:{required:true}}),
        categorie:StringField()
    },
    preview:{
        input:{
            name:"title",
            image:"image"
        },
        table:"title image categorie"
    }
}