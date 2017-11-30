(function($){
	$.extend({
		addInputChild:function(){//新增子流程
			$(".addInput").click(function(){
	            var getDiv = document.getElementById( "workflow");
	            var createDivIbox =document.createElement("div");
	            createDivIbox.setAttribute("class","ibox float-e-margins inputSoming");

	            var createDiv =document.createElement("div");
	            createDiv.setAttribute("class","input-group");
	            createDivIbox.appendChild(createDiv);

	            var createInput =document.createElement("input");
	            createInput.setAttribute("type","text");
	            createInput.setAttribute("class","form-control");
	            createInput.setAttribute("placeholder","流程节点名称");
	            createDiv.appendChild(createInput);

	            var createSpan =document.createElement("span");
	            createSpan.setAttribute("class","input-group-btn");
	            createDiv.appendChild(createSpan);

	            var createButtonFile =document.createElement("button");
	            createButtonFile.setAttribute("class","btn btn-info group-btn fileText");
	            createButtonFile.setAttribute("type","button");
	            createButtonFile.setAttribute("title","描述");
	            createSpan.appendChild(createButtonFile);


	            var createIFile =document.createElement("i");
	            createIFile.setAttribute("class","fa fa-chevron-up");
	            createButtonFile.appendChild(createIFile);

	            var createButtonTrash =document.createElement("button");
	            createButtonTrash.setAttribute("class","btn btn-danger group-btn delectThis");
	            createButtonTrash.setAttribute("type","button");
	            createButtonTrash.setAttribute("title","删除");
	            createSpan.appendChild(createButtonTrash);

	            var createITrash =document.createElement("i");
	            createITrash.setAttribute("class","fa fa-trash");
	            createButtonTrash.appendChild(createITrash);

	            var createTextarea =document.createElement("textarea");
	            createTextarea.setAttribute("class","form-control fText");
	            createTextarea.setAttribute("placeholder","描述");
	            createTextarea.setAttribute("rows","6");

	            createDivIbox.appendChild(createTextarea);
	            getDiv.appendChild(createDivIbox);

			});
		},
		delectChild:function(){//删除节点
			$("#workflow").on("click",".delectThis",function(){
				$(this).parent().parent().parent('.inputSoming').remove();
		  	});
		},
		fileTextEdit:function(){//收拉描述
			$("#workflow").on("click",".fileText",function(){
		        $(this).closest('div .ibox').children('.fText').slideToggle(200);
		        $(this).find('i').toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
			})
		},
		dataTableWorkflow:function(){//流程的数据展现
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
		            	creatiFirst.setAttribute("class","fa fa-paste");
		            	creatiFirst.innerHTML="修改";
		            	creatButtonFirst.appendChild(creatiFirst);


		            	var creatButtonSecond =document.createElement("button");
		            	creatButtonSecond.setAttribute("class","btn btn-success btn-xs eyeWorkflow");
		            	createTdThird.appendChild(creatButtonSecond);

		            	var creatiSecond =document.createElement("i");
		            	creatiSecond.setAttribute("class","fa fa-eye");
		            	creatiSecond.setAttribute("data-toggle","modal");
		            	creatiSecond.setAttribute("data-target","#eyeWorkflow");
		            	creatiSecond.innerHTML="查看";
		            	creatButtonSecond.appendChild(creatiSecond);


		            	var creatButtonThird =document.createElement("button");
		            	creatButtonThird.setAttribute("class","btn btn-danger btn-xs delectWorkflow");
		            	createTdThird.appendChild(creatButtonThird);

		            	var creatiThird =document.createElement("i");
		            	creatiThird.setAttribute("class","fa fa-trash");
		            	creatiThird.innerHTML="删除";
		            	creatButtonThird.appendChild(creatiThird);

		            	createTr.appendChild(createTdThird);

		            	getDiv.appendChild(createTr);
            	}
	           	$('.dataTables-example').DataTable({
	                pageLength: 25,
	                responsive: true,
	            });
		},
		showWorkflowALL:function(){//模态框展现所有数据
			$("#dataTableWorkflow").on("click",".eyeWorkflow",function(){
				$("#eyeWorkflow > div > div > div.modal-header > h4").empty('');
				$("#eyeWorkflow > div > div > div.modal-header > small").empty('');
				$("#vertical-timeline").empty('');
				var parentWorkflowId=$(this).parent().parent().attr("value");
				var backgroundColor=new Array("blue-bg","navy-bg","lazur-bg","yellow-bg","red-bg","black-bg");
				for(var i=0;i<getWorkflowData.length;i++){
					if(parentWorkflowId==getWorkflowData[i].workflowId){
						$("#eyeWorkflow > div > div > div.modal-header > h4").html(getWorkflowData[i].workflowName);
						$("#eyeWorkflow > div > div > div.modal-header > small").html(getWorkflowData[i].nodeDescription);
						var tgc=0;
						if(getWorkflowData[i].node.length!=0){
							var getDiv = document.getElementById( "vertical-timeline");
							for(var j=0;j<getWorkflowData[i].node.length;j++){
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
									createH2.innerHTML=getWorkflowData[i].node[j].workflowName;
									createDivModelSecond.appendChild(createH2);

									var createP =document.createElement("p");
									createP.innerHTML=getWorkflowData[i].node[j].nodeDescription;
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
		editWorkflowALL:function(){//修改流程信息
			$("#dataTableWorkflow").on("click",".editWorkflow",function(){
				var parentId=$(this).parent().parent().attr("value");
				var nodeNum;
				var t=1;
				$("#workflow > div > div > input").empty('');
				$("#workflow > div > textarea").empty('');
				for(var i=0;i<getWorkflowData.length;i++){
					if(parentId==getWorkflowData[i].workflowId){
						var childNum=getWorkflowData[i].node.length==0?"div":"div:nth-child("+t+")";
						$("#workflow > "+childNum+" > div > input").val(getWorkflowData[i].workflowName);
						$("#workflow > "+childNum+"> textarea").val(getWorkflowData[i].nodeDescription);
						for(var j=0;j<getWorkflowData[i].node.length;j++){
							$(".addInput").click();
							t++;
							var child="div:nth-child("+t+")";
							$("#workflow > "+child+" > div > input").val(getWorkflowData[i].node[j].workflowName);
							$("#workflow > "+child+"> textarea").val(getWorkflowData[i].node[j].nodeDescription);
						}
					}
				}
			})
		}
	})
})(jQuery)

$(document).ready(function(){
	$.addInputChild();
	$.delectChild();
	$.fileTextEdit();
	$.dataTableWorkflow();
	$.showWorkflowALL();
	$.editWorkflowALL();

})