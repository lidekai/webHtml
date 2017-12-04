(function($){
	$.extend({
		getProjectData:function(){//表格
			var getDiv = document.getElementById( "dataTableWorkflow");
            for(var i=0;i<getWorkflowData.length;i++){
		            	var createTr =document.createElement("tr");
		            	createTr.setAttribute("class","gradeX");
		            	createTr.setAttribute("value",getWorkflowData[i].workflowId);

		            	var createTdFirst=document.createElement("td");
		            	createTdFirst.setAttribute("class","text-center");
		            	createTdFirst.innerHTML=getWorkflowData[i].workflowName;
		            	createTr.appendChild(createTdFirst);

		            	var createTdSecond =document.createElement("td");
		            	createTdSecond.setAttribute("class","text-center");
		            	createTdSecond.innerHTML=getWorkflowData[i].node.length;
		            	createTr.appendChild(createTdSecond);

		            	var createTdThird =document.createElement("td");
		            	createTdThird.setAttribute("class","text-center");

		            	var creatButtonFirst =document.createElement("button");
		            	creatButtonFirst.setAttribute("class","btn btn-info btn-xs editWorkflow");
		            	createTdThird.appendChild(creatButtonFirst);

		            	var creatiFirst =document.createElement("i");
		            	creatiFirst.setAttribute("class","fa fa-pencil-square");
		            	creatiFirst.innerHTML="&nbsp;&nbsp;修改";
		            	creatButtonFirst.appendChild(creatiFirst);


		            	var creatButtonSecond =document.createElement("button");
		            	creatButtonSecond.setAttribute("class","btn btn-success btn-xs eyeWorkflow");
		            	createTdThird.appendChild(creatButtonSecond);

		            	var creatiSecond =document.createElement("i");
		            	creatiSecond.setAttribute("class","fa fa-eye");
		            	creatiSecond.setAttribute("data-toggle","modal");
		            	creatiSecond.setAttribute("data-target","#eyeWorkflow");
		            	creatiSecond.innerHTML="&nbsp;&nbsp;查看";
		            	creatButtonSecond.appendChild(creatiSecond);


		            	var creatButtonThird =document.createElement("button");
		            	creatButtonThird.setAttribute("class","btn btn-danger btn-xs delectWorkflow");
		            	createTdThird.appendChild(creatButtonThird);

		            	var creatiThird =document.createElement("i");
		            	creatiThird.setAttribute("class","fa fa-trash");
		            	creatiThird.innerHTML="&nbsp;&nbsp;删除";
		            	creatButtonThird.appendChild(creatiThird);

		            	createTr.appendChild(createTdThird);

		            	getDiv.appendChild(createTr);
            }
			$('.dataTables-example').DataTable({
                pageLength: 25,
                responsive: true,
                dom: '<"html5buttons"B>lTfgitp',
                buttons: [
                    { extend: 'copy'},
                    {extend: 'csv'},
                    {extend: 'excel', title: 'ExampleFile'},
                    {extend: 'pdf', title: 'ExampleFile'},

                    {extend: 'print',
                     customize: function (win){
                            $(win.document.body).addClass('white-bg');
                            $(win.document.body).css('font-size', '10px');

                            $(win.document.body).find('table')
                                    .addClass('compact')
                                    .css('font-size', 'inherit');
                    }
                    }
                ]

            });
		}
	})
})(jQuery)

$(document).ready(function(){
	$.getProjectData();
})