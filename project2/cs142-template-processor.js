"use strict";

function Cs142TemplateProcessor(template) {
    this.template = template;
}

Cs142TemplateProcessor.prototype.fillIn = function (dictionary) {

    var result = this.template;

    for (var key in dictionary) {
        
        if (Object.prototype.hasOwnProperty.call(dictionary, key)) {

            var placeholder = "{{" + key + "}}";

            while (result.includes(placeholder)) {

                result = result.replace(placeholder, dictionary[key]);

            }
        }
    }

    return result;

};