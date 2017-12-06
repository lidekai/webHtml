(function($){
	$.extend({
		getProjectData:function(){//表格
            var getDiv = document.getElementById( "dataTableProject");
            for(var i=0;i<projectData.length;i++){
		            var createTr =document.createElement("tr");
		            createTr.setAttribute("class","gradeX");
		            createTr.setAttribute("value",projectData[i].projectId);

		            var createTdFirst=document.createElement("td");
		            createTdFirst.setAttribute("class","text-center");
		            createTdFirst.innerHTML=projectData[i].projectName;
		            createTr.appendChild(createTdFirst);

		            var createTdSecond=document.createElement("td");
		            createTdSecond.setAttribute("class","text-center");

		            var createSpan=document.createElement("span");
					createSpan.setAttribute("class","btn btn-warning btn-xs eyeWorkflowInProject");
					createSpan.setAttribute("data-toggle","modal");
		            createSpan.setAttribute("data-target","#eyeWorkflowInProject");
					createSpan.innerHTML=projectData[i].node.length;
					createTdSecond.appendChild(createSpan);

		            createTr.appendChild(createTdSecond);

		            var createTdThird=document.createElement("td");
		            createTdThird.setAttribute("class","text-center");
		            createTdThird.innerHTML=projectData[i].createTime;
		            createTr.appendChild(createTdThird);

		            var createTdForth=document.createElement("td");
		            createTdForth.setAttribute("class","text-center");
		            createTdForth.innerHTML=projectData[i].version;
		            createTr.appendChild(createTdForth);

		            var createTdFifth=document.createElement("td");
		            createTdFifth.setAttribute("class","text-center");
		            createTdFifth.innerHTML=projectData[i].descriptionState;
		            createTr.appendChild(createTdFifth);

		            var createTdSixth=document.createElement("td");
		            createTdSixth.setAttribute("class","text-center");
		            createTdSixth.innerHTML=projectData[i].time;
		            createTr.appendChild(createTdSixth);

		            var createTdSeventh=document.createElement("td");
		            createTdSeventh.setAttribute("class","text-center");
		            createTdSeventh.innerHTML=projectData[i].projectResults;
		            createTr.appendChild(createTdSeventh);

		            var createTdEighth=document.createElement("td");
		            createTdEighth.setAttribute("class","text-center");

		            	var creatButtonFirst =document.createElement("button");
		            	creatButtonFirst.setAttribute("class","btn btn-info btn-xs editProject");
		            	createTdEighth.appendChild(creatButtonFirst);

		            	var creatiFirst =document.createElement("i");
		            	creatiFirst.setAttribute("class","fa fa-pencil-square");
		            	creatiFirst.innerHTML="&nbsp;&nbsp;修改";
		            	creatButtonFirst.appendChild(creatiFirst);


		            	var creatButtonSecond =document.createElement("button");
		            	creatButtonSecond.setAttribute("class","btn btn-success btn-xs eyeProject");
		            	creatButtonSecond.setAttribute("data-toggle","modal");
		            	creatButtonSecond.setAttribute("data-target","#eyeProject");
		            	createTdEighth.appendChild(creatButtonSecond);

		            	var creatiSecond =document.createElement("i");
		            	creatiSecond.setAttribute("class","fa fa-eye");
		            	creatiSecond.innerHTML="&nbsp;&nbsp;查看";
		            	creatButtonSecond.appendChild(creatiSecond);


		            	var creatButtonThird =document.createElement("button");
		            	creatButtonThird.setAttribute("class","btn btn-danger btn-xs delectProjectWork");
		            	createTdEighth.appendChild(creatButtonThird);

		            	var creatiThird =document.createElement("i");
		            	creatiThird.setAttribute("class","fa fa-trash");
		            	creatiThird.innerHTML="&nbsp;&nbsp;删除";
		            	creatButtonThird.appendChild(creatiThird);

		            createTr.appendChild(createTdEighth);
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
		},
		showProjectWorkflowALL:function(){//模态框展现所有数据
			$("#dataTableProject").on("click",".eyeWorkflowInProject",function(){
				$("#eyeWorkflowInProject > div > div > div.modal-header > h4").empty('');
				$("#eyeWorkflowInProject > div > div > div.modal-header > small").empty('');
				$("#vertical-timeline").empty('');
				var parentProjectId=$(this).parent().parent().attr("value");
				var backgroundColor=new Array("blue-bg","navy-bg","lazur-bg","yellow-bg","red-bg","black-bg");
				for(var i=0;i<projectData.length;i++){
					if(parentProjectId==projectData[i].projectId){
						$("#eyeWorkflowInProject > div > div > div.modal-header > h4").html(projectData[i].workflowName);
						$("#eyeWorkflowInProject > div > div > div.modal-header > small").html(projectData[i].nodeDescription);
						var tgc=0;
						if(projectData[i].node.length!=0){
							var getDiv = document.getElementById( "vertical-timeline");
							for(var j=0;j<projectData[i].node.length;j++){
									var createDivModel =document.createElement("div");
									createDivModel.setAttribute("class","vertical-timeline-block");

									var createDivModelFirst =document.createElement("div");
									createDivModelFirst.setAttribute("class","vertical-timeline-icon "+backgroundColor[tgc]);
									var createDivModelFirstI =document.createElement("i");
									createDivModelFirstI.setAttribute("class","text-center");
									createDivModelFirstI.innerHTML=j+1;
									createDivModelFirst.appendChild(createDivModelFirstI);
									createDivModel.appendChild(createDivModelFirst);

									var createDivModelSecond =document.createElement("div");
									createDivModelSecond.setAttribute("class","vertical-timeline-content");
									var createH2 =document.createElement("h2");
									createH2.setAttribute("class","font-bold");
									createH2.innerHTML=projectData[i].node[j].workflowName;
									createDivModelSecond.appendChild(createH2);

									var createP =document.createElement("p");
									createP.innerHTML=projectData[i].node[j].nodeDescription;
									createDivModelSecond.appendChild(createP);

									createDivModel.appendChild(createDivModelSecond);
									getDiv.appendChild(createDivModel);
									tgc++;
									if(tgc==backgroundColor.length)
										tgc=0;
							}

						}
					}
				}
			})
		},
		delectProjectWorkflow:function(){//删除数据
			$("#dataTableProject").on("click",".delectProjectWork",function(){
				$(this).parent().parent().remove();
				var l=$("#dataTableProject > tr").length;
				if(l==0){
				var getDiv = document.getElementById( "dataTableProject");

		        var createTr =document.createElement("tr");
		        createTr.setAttribute("class","odd");

		        var createTd=document.createElement("td");
		        createTd.setAttribute("class","dataTables_empty");
		        createTd.setAttribute("valign","top");
		        createTd.setAttribute("colspan","8");
		        createTd.innerHTML="No data available in table";
		        createTr.appendChild(createTd);

		        getDiv.appendChild(createTr);
		        $("#DataTables_Table_0_paginate").remove();
		        $("#DataTables_Table_0_wrapper > div:nth-child(3)").remove();
		        $("#DataTables_Table_0_info").remove();
		        $("#DataTables_Table_0_wrapper > div.html5buttons > div").remove();
				}
			})
		},
		eyeProjectInf:function(){//查看详细信息

		}
	})
})(jQuery)

$(document).ready(function(){
	$.getProjectData();
	$.showProjectWorkflowALL();
	$.delectProjectWorkflow();
	$.eyeProjectInf();
})