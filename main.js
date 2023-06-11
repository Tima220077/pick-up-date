
// old local

  const textEl = document.getElementById("pEl")
  const deadlineInp = document.getElementById("deadline")

  function changeDate(){
    
    let local = ""
    
    

    let x = setInterval(function(){
    
    local = deadlineInp.valueAsDate
    let currentime = new Date().getTime()
    let distance = local - currentime
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000)

    textEl.innerHTML = "Local: " + days + "days " + hours + "hours " + minutes + "minutes " + seconds + "seconds"
    })
  }
