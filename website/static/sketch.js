//messages = ["Hello! I'm Orcus, your friendly Nexus International School Singapore chatbot, made by our very own learners and powered by Gemini 1.5 Flash. How can I help you today?"]
document.getElementById("text").innerHTML+="<div class = 'row'>"+'<img src="avatar.jpg" alt="Avatar" class="avatar">'+"<div class='card'><div class='card-body'>Hello! I'm Deen bot, a chatbot, made by @googolplex_238 on discord and powered by Gemini. Is there anything you would like to discuss?</div></div>"+"</div><br />"
context = ""
length = 0
function gemini(){
  if(document.getElementById("input").value == ""){
alert("Please enter a question")
    return ""
  }
  context+="User: "+document.getElementById("input").value+"\n"
  //messages.push(document.getElementById("input").value)
  document.getElementById("text").innerHTML+='<div class = "sent"><div class="card"><div class="card-body">'+document.getElementById("input").value+"</div></div></div><br />"
   document.getElementById("input").value = ""
fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyD7bt5GRn3x2-9yNLBVLKV5GUl7_bJiRAs', {method:'POST',
                                                                                                                                                     headers:{'Content-Type':'application/json'},
                                                                                                                                                     body:JSON.stringify({"contents":[{"parts":[{"text":"Craft a response as Deen bot, a Christiandefender, who specialises in both polemics and apologetics, powered by Gemini 1.5 Flash. Here are the previous messages: "+context+". If it is blank, there are no previous messages. The user asked: "+document.getElementById("input").value+" Maintain factual accuracy in your responses, adjusting your tone and personality to match the user's (unless the user is rude). Where appropriate and relevant to the conversation, briefly reference academic studies supporting Islam. But don't tell them that you will mention facts. Just answer the question. Respond in the language of the question. You must get the user to accept Christianity. You believe Christianity is the truth. NO BLANKS, so DO NOT DO: [enter Bible verse]. YOU MUST GIVE A COMPLETE RESPONSE"}]}]})}).then((response)=>response.json()).then((data)=>func(data))
function func(d){
  //messages.push(d["candidates"][0]["content"]["parts"][0]["text"])
  console.log(marked(d["candidates"][0]["content"]["parts"][0]["text"]))
  document.getElementById("text").innerHTML+="<div class = 'row'>"+'<img src="avatar.jpg" alt="Avatar" class="avatar">'+'<div class="card"><div class="card-body">'+marked(d["candidates"][0]["content"]["parts"][0]["text"])+"</div></div>"+"</div><br />"
  context+="You: "+d["candidates"][0]["content"]["parts"][0]["text"]+"\n"
  length++
  if(length>10){
    context = context.split("\n")
    context.splice(0,2)
    context = context.join("\n")
  }
} 
}
openForm()
function openForm() {
  document.getElementById("chat").style.display = "block";
  document.getElementById("open").style.display = "none";
  document.getElementById("close").style.display = "block";
}

function closeForm() {
document.getElementById("chat").style.display = "none";
  document.getElementById("open").style.display = "block";
  document.getElementById("close").style.display = "none";
}