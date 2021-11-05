// File : 02_app_demo.js
//
//


// The questions array represents the model of the applications. 
// In the demo code the model is hard-coded; However, in 
// a real application the model will be loaded from a RESTFUL API.

document.addEventListener('DOMContentLoaded', () => {
  fetch_data(1);
});

 const fetch_data = async () => {
  const data = await fetch("https://my-json-server.typicode.com/walterlow52/CUS-1172-Project-3/db")
  const module = await data.json()
  //const html_element = template_view(module, '#view_intro')
   display(module);
  }
  
  function display(module) {
    let quiz_text = module.questions[6].question;
    let quiz_type = module.questions[6].type;
    let quiz_answer = module.questions[6].answer;
    let quiz_options = module.questions[6].choices;
    let HTMLstring = `<h3> ${quiz_text} <br> </h3> <h4> Type: ${quiz_type} <br> answer: ${quiz_answer} <br> ${quiz_options} </h4>`;
    document.querySelector("#showdata").innerHTML = HTMLstring;
  }

// appState, keep information about the State of the application.
const appState = {
    current_view : "#intro_view",
    current_question : -1,
    current_model : {}
}

//
// start_app: begin the applications.
//

document.addEventListener('DOMContentLoaded', () => {
  // Set the state
  appState.current_view =  "#intro_view";
  appState.current_model = {
    action : "start_app"
  }
  update_view(appState);

  //
  // EventDelegation - handle all events of the widget
  //

  document.querySelector("#widget_view").onclick = (e) => {
      handle_widget_event(e)
  }
});



function handle_widget_event(e) {

  if (appState.current_view == "#intro_view"){
    if (e.target.dataset.action == "start_app") {

        // Update State (current model + state variables)
        appState.current_question = 0
        appState.current_model = fetch_data[appState.current_question];
        // process the appState, based on question type update appState.current_view
        setQuestionView(appState);
       
        // Now that the state is updated, update the view.

        update_view(appState);
    }
  }

  // Handle the answer event.
  if (appState.current_view == "#question_view_true_false") {

    if (e.target.dataset.action == "answer") {
       // Controller - implement logic.
       isCorrect = check_user_response(e.target.dataset.answer, appState.current_model);
     
       // Update the state.
       appState.current_question =   appState.current_question + 1;
       appState.current_model = questions[appState.current_question];
       setQuestionView(appState);
     
       // Update the view.  
       update_view(appState);

     }
   }

   // Handle answer event for  text questions.
   if (appState.current_view == "#question_view_text_input") {
       if (e.target.dataset.action == "submit") {
     
           user_response = document.querySelector(`#${appState.current_model.answerFieldId}`).value;
           isCorrect = check_user_response(e.target.dataset.answer, appState.current_model);
           updateQuestion(appState)
           //appState.current_question =   appState.current_question + 1;
           //appState.current_model = questions[appState.current_question];
           setQuestionView(appState);
           update_view(appState);
       }
    }

    // Handle answer event for  text questions.
    if (appState.current_view == "#end_view") {
        if (e.target.dataset.action == "start_again") {
          appState.current_view =  "#intro_view";
          appState.current_model = {
            action : "start_app"
          }
          update_view(appState);

        }
      }

 } // end of hadnle_widget_event


function check_user_response(user_answer, model) {
  if (user_answer == model.correctAnswer) {
    return true;
  }
  return false;
}

function updateQuestion(appState) {
    if (appState.current_question < questions.length-1) {
      appState.current_question =   appState.current_question + 1;
      appState.current_model = questions[appState.current_question];
    }
    else {
      appState.current_question = -2;
      appState.current_model = {};
    }
}

function setQuestionView(appState) {
  if (appState.current_question == -2) {
    appState.current_view  = "#end_view";
    return
  }

  if (fetch_data.module == "true_false")
    appState.current_view = "#question_view_true_false";
  else if (fetch_data[appState.current_model] == "text") {
    appState.current_view = "#question_view_text_input";
  }
}

function update_view(appState) {

  const html_element = render_widget(appState.current_model, appState.current_view)
  document.querySelector("#widget_view").innerHTML = html_element;
}
//

const render_widget = (model,view) => {
  // Get the template HTML
  template_source = document.querySelector(view).innerHTML
  // Handlebars compiles the above source into a template
  var template = Handlebars.compile(template_source);

  // apply the model to the template.
  var html_widget_element = template({...model,...appState})

  return html_widget_element
}
