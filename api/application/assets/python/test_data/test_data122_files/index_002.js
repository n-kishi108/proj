/*
   This JavaScript code was generated by Jemplate, the JavaScript
   Template Toolkit. Any changes made to this file will be lost the next
   time the templates are compiled.

   Copyright 2006 - Ingy d旦t Net - All rights reserved.
*/

if (typeof(Jemplate) == 'undefined')
    throw('Jemplate.js must be loaded before any Jemplate template files');

Jemplate.templateMap['data_chat_list.tpl'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
//line 14 "data_chat_list.tpl"
if (stash.get(['list', 0, 'size', 0]) > 0) {
output += '\n  ';
//line 11 "data_chat_list.tpl"

// FOREACH 
(function() {
    var list = stash.get('list');
    list = new Jemplate.Iterator(list);
    var retval = list.get_first();
    var value = retval[0];
    var done = retval[1];
    var oldloop;
    try { oldloop = stash.get('loop') } finally {}
    stash.set('loop', list);
    try {
        while (! done) {
            stash.data['obj'] = value;
output += '\n    <div class="circle_chat_textbox">\n      <div class="circle_chat_text_name">\n        <span class="circle_chat_text_time">';
//line 5 "data_chat_list.tpl"
output += stash.get(['obj', 0, 'registtime', 0]);
output += '</span>\n        ';
//line 6 "data_chat_list.tpl"
if (stash.get(['obj', 0, 'url_mypage', 0])) {
output += '<a href="';
//line 6 "data_chat_list.tpl"
output += stash.get(['obj', 0, 'url_mypagel', 0]);
output += '">';
}

//line 6 "data_chat_list.tpl"
output += stash.get(['obj', 0, 'nick_name', 0]);
output += 'さん';
//line 6 "data_chat_list.tpl"
if (stash.get(['obj', 0, 'url_mypage', 0])) {
output += '</a>';
}

output += '\n        ';
//line 7 "data_chat_list.tpl"
if (stash.get(['obj', 0, 'is_admin', 0]) == 1) {
output += '<a href="javascript:void(0);" onclick="javascript:zoome.page.circle.index.data_chat_delete(';
//line 7 "data_chat_list.tpl"
output += stash.get(['obj', 0, 'id', 0]);
output += ');"><img alt="削除" src="/img/btn_delete.gif" width="48" height="16" align="absmiddle" /></a>';
}

output += '\n      </div>\n      <div class="circle_chat_text_text">';
//line 9 "data_chat_list.tpl"
output += stash.get(['obj', 0, 'body', 0]);
output += '</div>\n    </div>\n  ';;
            retval = list.get_next();
            value = retval[0];
            done = retval[1];
        }
    }
    catch(e) {
        throw(context.set_error(e, output));
    }
    stash.set('loop', oldloop);
})();

output += '\n';
}
else {
output += '\n  <div class="circle_error_message">まだ書き込みがありません。</div>\n';
}

output += '\n';
    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

