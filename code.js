onEvent("screenbutton", "click", function() {
    setScreen("screen2");
  });
  
  onEvent("button2", "click", function() {
    setScreen("screen1");
  });
  
  var dates = getColumn("COVID-19 Cases per US State", "Date");
  var states = getColumn("COVID-19 Cases per US State", "State");
  var cases = getColumn("COVID-19 Cases per US State", "Total Confirmed Cases");
  var deaths = getColumn("COVID-19 Cases per US State", "Total Deaths");
  
  function CaseDeath(DateInput,TypeInput, StateInput) {
    
    for(var i = 0; i<=dates.length; i++) {
    
  
      if(DateInput==dates[i]&&TypeInput=="Cases") {
      
        var indexvalues = [];
        indexvalues+=i;
            
          if(states[indexvalues] == StateInput) {
        
            setProperty("outputbox","text",cases[indexvalues]);
  
      }
  
    }
    
    
      else if(DateInput==dates[i]&&TypeInput=="Deaths") {
      
        var deathindexvalues = [];
        deathindexvalues+=i;
    
          if(states[deathindexvalues] == StateInput) {
          
         
            setProperty("outputbox","text",deaths[deathindexvalues]);
        }
    }
  }
    
  }
  
  
  onEvent("CaseButton", "click", function(event) {
     
    CaseDeath(getProperty("dateinput","text"), getProperty("CaseInput","text"),  getProperty("stateinput","text"));
    
   });
   
  
