$('#jobbutton').on('click', function(){
      $.ajax({
        type: 'GET',
        url: 'https://0z8ncm8i54.execute-api.us-east-1.amazonaws.com/prod/match',
        data: JSON.stringify({"skillValue": document.getElementById('skillstoinput')}),
        contentType: "application/json",
        success: function(data){
          $('#jobreturn').append('<p>' + data.Item.JobName + '</p>');
        }
    });
});