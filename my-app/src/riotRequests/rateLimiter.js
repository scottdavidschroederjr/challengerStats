//slow down requests when rate limit is hit
async function rateLimitWait (dataReturned, URL, testAttribute = "metadata") {

    if (dataReturned[testAttribute] === undefined) {
      console.log(URL)
      console.log(dataReturned)
  
      //short time out of two seconds to wait out (20 requests every 1 second) limit 
      await new Promise(resolve => setTimeout(resolve, 5000));
      var response = await fetch(URL)
      let failedRequest = await response.json()
  
      if (failedRequest[testAttribute] === undefined){
      console.log("Rate limit reached. Please wait one moment.")
      await new Promise(resolve => setTimeout(resolve, 120000));
      console.log("Thank you for waiting.")
  
        //long time out of two and a half minutes to wait out (100 requests every 2 minutes) limit
        response = await fetch(URL)
        failedRequest = await response.json()
  
  
        //for complete failure of API to get data
        if (failedRequest[testAttribute] === undefined){
          console.log("Request error. Try again later.")
          return failedRequest
        }
  
        else{
          return failedRequest
        }
      }
      else {
        return failedRequest
      } 
    }
    else {
      return dataReturned
    }
  }

module.exports = {rateLimitWait}