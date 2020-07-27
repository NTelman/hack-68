$('#button_get_data').on('click', function() {
      $.ajax({
        type: 'GET',
        url: 'https://q2zt1aosf3.execute-api.us-east-1.amazonaws.com/prod/job-entries',
        success: function(data){
          $('#job_data_returned').html('');
          data.Items.forEach(function(JobsItem){
            $('#job_data_returned').append('<p id="bolded-title">' + JobsItem.JobName + ' - ' + JobsItem.JobDescription + '</p>' + '<p>' + JobsItem.JobLevel + '</br>' + JobsItem.JobReq + '</br>' + JobsItem.JobLocation + '</p>');
          })
        }
      });
      return false;
    });