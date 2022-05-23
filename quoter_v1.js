


onload = init;

function init() {
    var onclick = clickUpdates();
    var btn = document.getElementById("btn");
    btn.addEventListener("click", onclick, false);
}
var count = 0;
function clickUpdates() {
    
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
        
        switch(count) {
            case 0:
            if (getID() == "" || getOD() == "" || getLength() == "" || getQuantity() == "" || getMaterial() == "" || getLeadtime() == "") {
            	alert("Please Fill All fields");
              return;
            }
            var idone = document.getElementById("1-id");
            idone.value=getID();
            var odone = document.getElementById("1-od");
            odone.value=getOD();
            var lengthone = document.getElementById("1-length");
            lengthone.value=getLength();
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
			
	    document.getElementById("next").style.display = block;
            
         		resetID();
            resetOD();
            resetLength();
            resetQuantity();
            resetMaterial();
            resetLeadtime();
            resetPrice();
            r();
            resetNotes();
            
            break;
            case 1:
            if (getID() == "" || getOD() == "" || getLength() == "" || getQuantity() == "" || getMaterial() == "" || getLeadtime() == "") {
            	alert("Please fill All fields");
              return;
            }
            
            var idtwo = document.getElementById("2-id");
            idtwo.value=getID();
            var odtwo = document.getElementById("2-od");
            odtwo.value=getOD();
            var lengthtwo = document.getElementById("2-length");
            lengthtwo.value=getLength();
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
          	resetID();
            resetOD();
            resetLength();
            resetQuantity();
            resetMaterial();
            resetLeadtime();
            resetPrice();
            r();
            resetNotes();
            break;
            case 2:
            if (getID() == "" || getOD() == "" || getLength() == "" || getQuantity() == "" || getMaterial() == "" || getLeadtime() == "") {
            	alert("Please fill All fields");
              return;
            }
            
            var idthree = document.getElementById("3-id");
            idthree.value=getID();
            var odthree = document.getElementById("3-od");
            odthree.value=getOD();
            var lengththree = document.getElementById("3-length");
            lengththree.value=getLength();
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
            resetID();
            resetOD();
            resetLength();
            resetQuantity();
            resetMaterial();
            resetLeadtime();
            resetPrice();
            r();
            resetNotes();
            break;
            case 3:
            if (getID() == "" || getOD() == "" || getLength() == "" || getQuantity() == "" || getMaterial() == "" || getLeadtime() == "") {
            	alert("Please fill All fields");
              return;
            }
           
            var idfour = document.getElementById("4-id");
            idfour.value=getID();
            var odfour = document.getElementById("4-od");
            odfour.value=getOD();
            var lengthfour = document.getElementById("4-length");
            lengthfour.value=getLength();
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
            resetID();
            resetOD();
            resetLength();
            resetQuantity();
            resetMaterial();
            resetLeadtime();
            resetPrice();
            r();
            resetNotes();
            break;
            case 4:
            if (getID() == "" || getOD() == "" || getLength() == "" || getQuantity() == "" || getMaterial() == "" || getLeadtime() == "") {
            	alert("Please fill All fields");
              return;
            }
            
            var idfive = document.getElementById("5-id");
            idfive.value=getID();
            var odfive = document.getElementById("5-od");
            odfive.value=getOD();
            var lengthfive = document.getElementById("5-length");
            lengthfive.value=getLength();
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
            resetID();
            resetOD();
            resetLength();
            resetQuantity();
            resetMaterial();
            resetLeadtime();
            resetPrice();
            r();
            resetNotes();
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





	$( ".readonly" ).attr('readonly', 'readonly');
