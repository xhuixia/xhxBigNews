

$(function(){
        // jeDate始化
        jeDate("#testico", {
           theme: { bgcolor: "#00A680", pnColor: "#00DDAA" },
           isinitVal: true,//默认显示当前日期
           format: 'YYYY-MM-DD'
       });
       //  tinymce初始化
       tinymce.init({
           selector: '#mytextarea',
           language: 'zh_CN',
           directionality: 'ltl',
           browser_spellcheck: true,
           contextmenu: false,
           plugins: [
               "advlist autolink lists link image charmap print preview anchor",
               "searchreplace visualblocks code fullscreen",
               "insertdatetime media table contextmenu paste imagetools wordcount",
               "code"
           ],
           toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | code",
       });
       
       })