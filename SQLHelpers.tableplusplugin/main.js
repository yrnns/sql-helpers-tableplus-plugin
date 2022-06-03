'use strict';

var join = function(context) {
    // Get table in opening tab
    var queryEditor = context.currentQueryEditor();
    if (queryEditor == null) {
        context.alert('Error', 'No SQL Editor');
        return;
    }
    var range = queryEditor.currentSelectedRange();
    var statement = queryEditor.currentSelectedString();
    var formattedStatement =statement.replace(/\s/g, ", ");
    queryEditor.replaceStringInRange(formattedStatement, range);
};

global.join = join;


var joinWithQuotes = function(context) {
    // Get table in opening tab
    var queryEditor = context.currentQueryEditor();
    if (queryEditor == null) {
        context.alert('Error', 'No SQL Editor');
        return;
    }
    var range = queryEditor.currentSelectedRange();
    var statement = queryEditor.currentSelectedString();
    var formattedStatement ="'" + statement.replace(/\s/g, "', '") + "'";
    queryEditor.replaceStringInRange(formattedStatement, range);
};

global.joinWithQuotes = joinWithQuotes;