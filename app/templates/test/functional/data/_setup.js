/*global module:true*/

"use strict";
module.exports = {
  simpleSpec: {

  },
  lifeStorySpec: {
    "view": ['formExample']
  }
  <% if (customSpec === "Yes") { %>
  ,landingSpec: {
        "view": ['landing']
    }
  <% } %>
};
