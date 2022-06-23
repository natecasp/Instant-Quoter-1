


onload = init;

function init() {
    var onclick = clickUpdates();
    var btn = document.getElementById("btn");
    btn.addEventListener("click", onclick, false);
    var next = document.getElementById("next");
    next.disabled = true;
    document.getElementById("odRef").checked = true;
    document.getElementById("od-tolerance").innerText = "REF";
}

var count = 0;
function clickUpdates() {
  
    var innerdiameter = document.getElementById("ID").value;
    var outerdiameter = document.getElementById("OD").value;
  
  
    if (innerdiameter <=.1){var idtolerance = "±0.001\"";}
    if ((innerdiameter >=.101)&&(innerdiameter<=.2)){var idtolerance = "±0.002\"";}
    if ((innerdiameter >=.201)&&(innerdiameter<=.3)){var idtolerance = "±0.003\"";}
    if (innerdiameter >=.301){var idtolerance = "±0.005\"";}
    var checkIdRef = document.getElementById("idRef").checked;
    if (checkIdRef == true){
    	var idtolerance = "REF";
    }
  
    if (outerdiameter <=.1){var odtolerance = "±0.001\"";}
    if ((outerdiameter >=.101)&&(outerdiameter<=.2)){var odtolerance = "±0.002\"";}
    if ((outerdiameter >=.201)&&(outerdiameter<=.3)){var odtolerance = "±0.003\"";}
    if (outerdiameter >=.301){var odtolerance = "±0.005\"";}
    var checkOdRef = document.getElementById("odRef").checked;
    if (checkOdRef==true){
    	var odtolerance = "REF";
    }
  
    if (innerdiameter <=.1){var wttolerance = "±0.001\"";}
    if ((innerdiameter >=.101)&&(innerdiameter<=.2)){var wttolerance = "±0.002\"";}
    if ((innerdiameter >=.201)&&(innerdiameter<=.3)){var wttolerance = "±0.003\"";}
    if (innerdiameter >=.301){var wttolerance = "±0.004\"";}
    var checkWtRef = document.getElementById("wtRef").checked;
    if (checkWtRef==true){
    	var wttolerance = "REF";
    }
  
  
  
  
  
    var next = function() {
        function getID(){
          return document.getElementById("ID").value;
        }
        function resetID(){
          return document.getElementById("ID").value = "";
        }
        function getOD(){
          return document.getElementById("OD").value;
        }
        function resetOD(){
          return document.getElementById("OD").value = "";
        }
        function getWT(){
          return ((getOD() - getID())/2);
        }
        function getLength(){
          return document.getElementById("Length").value;
        }
        function resetLength(){
          return document.getElementById("Length").value = "";
        }
        function getQuantity(){
          return document.getElementById("Quantity").value;
        }
        function resetQuantity(){
          return document.getElementById("Quantity").value = "";
        }
        function getMaterial(){
          var resin = document.getElementById("Material").value;
          var grade = document.getElementById("Grade").value;
          var additive = document.getElementById("Additive").value;
          var finalValue =  resin + " " + grade + " "+ additive;
          
          return finalValue;
        }
        
        function resetMaterial(){
          var resin = document.getElementById("Material").value = "Select Material...";
          var grade = document.getElementById("Grade").value = "Select Grade...";
          var additive = document.getElementById("Additive").value = "Select Additive...";
        }
        
        function getLeadtime(){
          return document.getElementById("Leadtime").value;
        }
        function resetLeadtime(){
          return document.getElementById("Leadtime").value = 0;
        }
        function getPrice(){
          return document.getElementById("Total-Price").value;
        }	
        function resetPrice(){
          return document.getElementById("Total-Price").value = "";
        }
        function r() {
        	document.getElementById("wall-thickness").innerText = "-";
          document.getElementById("totalamount").innerText = "";
          document.getElementById("amount").innerText = "";
        }
        function getNotes(){
          return document.getElementById("notes").value;
        }
        function resetNotes(){
          return document.getElementById("notes").value = "";
        }
        function getSpool(){
          return document.getElementById("spool").checked;
        }
        function resetSpool(){
          return document.getElementById("spool").checked = false;
        }
        
        switch(count) {
            case 0:
                var getResin = document.getElementById("Material").value;
                var getGrade = document.getElementById("Grade").value;
                var getAdditive = document.getElementById("Additive").value;
            if (getID() == "" || getOD() == "" || getLength() == "" || getQuantity() == "" || getResin == "Select Material..." || getGrade =="Select Grade..." || getAdditive =="Select Additive..." || getLeadtime() == "") {
            	alert("Please Fill All fields");
              return;
            }
            var idone = document.getElementById("1-id");
            idone.value=getID() + idtolerance;
            var odone = document.getElementById("1-od");
            odone.value=getOD() + odtolerance;
            var wtone = document.getElementById("1-wt");
            wtone.value = getWT() + wttolerance;
            var lengthone = document.getElementById("1-length");
            lengthone.value=getLength() + "±.100\"";
            var quantityone = document.getElementById("1-quantity");
            quantityone.value=getQuantity();
            var materialone = document.getElementById("1-material");
            materialone.value=getMaterial();
            var leadtimeone = document.getElementById("1-leadtime");
            leadtimeone.value = getLeadtime();
            var priceone = document.getElementById("1-price");
            priceone.value = getPrice();
            var noteone = document.getElementById("1-notes");
            noteone.value = getNotes();
            var spoolone = document.getElementById("1-spool");
            spoolone.value = getSpool();
			
	        document.getElementById("next").style.display = "block";
            document.getElementById("next").disabled = false;
            
         	resetID();
            resetOD();
            resetLength();
            resetQuantity();
            resetMaterial();
            resetLeadtime();
            resetPrice();
            r();
            resetNotes();
            resetSpool();
            
            break;
            case 1:
                var getResin = document.getElementById("Material").value;
                var getGrade = document.getElementById("Grade").value;
                var getAdditive = document.getElementById("Additive").value;
            if (getID() == "" || getOD() == "" || getLength() == "" || getQuantity() == "" || getResin == "Select Material..." || getGrade =="Select Grade..." || getAdditive =="Select Additive..." || getLeadtime() == "") {
            	alert("Please fill All fields");
              return;
            }
            
            var idtwo = document.getElementById("2-id");
            idtwo.value=getID() + idtolerance;
            var odtwo = document.getElementById("2-od");
            odtwo.value=getOD() + odtolerance;
            var wttwo = document.getElementById("2-wt");
            wttwo.value = getWT() + wttolerance;
            var lengthtwo = document.getElementById("2-length");
            lengthtwo.value=getLength() + "±.100\"";
            var quantitytwo = document.getElementById("2-quantity");
            quantitytwo.value=getQuantity();
            var materialtwo = document.getElementById("2-material");
            materialtwo.value=getMaterial();
            var leadtimetwo = document.getElementById("2-leadtime");
            leadtimetwo.value=getLeadtime();
            var pricetwo = document.getElementById("2-price");
            pricetwo.value=getPrice();
            var noteone = document.getElementById("2-notes");
            noteone.value = getNotes();
            var spooltwo = document.getElementById("2-spool");
            spooltwo.value = getSpool();
            
          	resetID();
            resetOD();
            resetLength();
            resetQuantity();
            resetMaterial();
            resetLeadtime();
            resetPrice();
            r();
            resetNotes();
            resetSpool();
            break;
            case 2:
                var getResin = document.getElementById("Material").value;
                var getGrade = document.getElementById("Grade").value;
                var getAdditive = document.getElementById("Additive").value;
            if (getID() == "" || getOD() == "" || getLength() == "" || getQuantity() == "" || getResin == "Select Material..." || getGrade =="Select Grade..." || getAdditive =="Select Additive..." || getLeadtime() == "") {
            	alert("Please fill All fields");
              return;
            }
            
            var idthree = document.getElementById("3-id");
            idthree.value=getID() + idtolerance;
            var odthree = document.getElementById("3-od");
            odthree.value=getOD() + odtolerance;
            var wtthree = document.getElementById("3-wt");
            wtthree.value = getWT() + wttolerance;
            var lengththree = document.getElementById("3-length");
            lengththree.value=getLength() + "±.100\"";
            var quantitythree = document.getElementById("3-quantity");
            quantitythree.value=getQuantity();
            var materialthree = document.getElementById("3-material");
            materialthree.value=getMaterial();
            var leadtimethree = document.getElementById("3-leadtime");
            leadtimethree.value=getLeadtime();
            var pricethree = document.getElementById("3-price");
            pricethree.value=getPrice();
            var noteone = document.getElementById("3-notes");
            noteone.value = getNotes();
            var spoolthree = document.getElementById("3-spool");
            spoolthree.value = getSpool();
            resetID();
            resetOD();
            resetLength();
            resetQuantity();
            resetMaterial();
            resetLeadtime();
            resetPrice();
            r();
            resetNotes();
            resetSpool();
            break;
            case 3:
                var getResin = document.getElementById("Material").value;
                var getGrade = document.getElementById("Grade").value;
                var getAdditive = document.getElementById("Additive").value;
            if (getID() == "" || getOD() == "" || getLength() == "" || getQuantity() == "" || getResin == "Select Material..." || getGrade =="Select Grade..." || getAdditive =="Select Additive..." || getLeadtime() == "") {
            	alert("Please fill All fields");
              return;
            }
           
            var idfour = document.getElementById("4-id");
            idfour.value=getID() + idtolerance;
            var odfour = document.getElementById("4-od");
            odfour.value=getOD() + odtolerance;
            var wtfour = document.getElementById("4-wt");
            wtfour.value = getWT() + wttolerance;
            var lengthfour = document.getElementById("4-length");
            lengthfour.value=getLength() + "±.100\"";
            var quantityfour = document.getElementById("4-quantity");
            quantityfour.value=getQuantity();
            var materialfour = document.getElementById("4-material");
            materialfour.value=getMaterial();
            var leadtimefour = document.getElementById("4-leadtime");
            leadtimefour.value=getLeadtime();
            var pricefour = document.getElementById("4-price");
            pricefour.value=getPrice();
            var noteone = document.getElementById("4-notes");
            noteone.value = getNotes();
            var spoolfour = document.getElementById("4-spool");
            spoolfour.value = getSpool();
            resetID();
            resetOD();
            resetLength();
            resetQuantity();
            resetMaterial();
            resetLeadtime();
            resetPrice();
            r();
            resetNotes();
            resetSpool();
            break;
            case 4:
                var getResin = document.getElementById("Material").value;
                var getGrade = document.getElementById("Grade").value;
                var getAdditive = document.getElementById("Additive").value;
            if (getID() == "" || getOD() == "" || getLength() == "" || getQuantity() == "" || getResin == "Select Material..." || getGrade =="Select Grade..." || getAdditive =="Select Additive..." || getLeadtime() == "") {
            	alert("Please fill All fields");
              return;
            }
            
            var idfive = document.getElementById("5-id");
            idfive.value=getID() + idtolerance;
            var odfive = document.getElementById("5-od");
            odfive.value=getOD() + odtolerance;
            var wtfive = document.getElementById("5-wt");
            wtfive.value = getWT() + wttolerance;
            var lengthfive = document.getElementById("5-length");
            lengthfive.value=getLength() + "±.100\"";
            var quantityfive = document.getElementById("5-quantity");
            quantityfive.value=getQuantity();
            var materialfive = document.getElementById("5-material");
            materialfive.value=getMaterial();
            var leadtimefive = document.getElementById("5-leadtime");
            leadtimefive.value=getLeadtime();
            var pricefive = document.getElementById("5-price");
            pricefive.value=getPrice();
            var noteone = document.getElementById("5-notes");
            noteone.value = getNotes();
            var spoolfive = document.getElementById("5-spool");
            spoolfive.value = getSpool();
            resetID();
            resetOD();
            resetLength();
            resetQuantity();
            resetMaterial();
            resetLeadtime();
            resetPrice();
            r();
            resetNotes();
            resetSpool();
            if ((count>=4)&&(idfive=="")) {
         			count = 4;
        		 }
            break;
            case 5:
            
            alert("If you would like to add more extrusions, please submit a separate quote. Thanks!");
            break;
            case 6:
            
           
            break;
            default:
            break;
            
            if (document.getElementById("ID").value.length = 0) {
            		$('btn').attr('disabled', true);
            }
            	
        
        }
        count = count<7?count+1:7;
       
    }
    
    return next;
}





    
