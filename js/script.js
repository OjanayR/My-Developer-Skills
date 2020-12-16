// IPO - Input Process Output

// Constants and Variables (State)
let skills;

// Cached Element Reference
const $button = $('button');
const $ul = $('ul');
const $input = $('input');
const $li = $('li');


// Event Listeners
$button.on('click', handleAddSkill);
$ul.on('click', handleDelete);


// Functions
init();

function init() {
    skills = [];
    render();
}

function handleAddSkill() {
   // store the value from the input tag inside a local variable
   const skill = $input.val();
   // check to make sure we have skill data
   if (skill) {
       // create the UI for a skill
       const $skill = $(`<li><span> X </span>${skill}</li>`)
       $skill.click(function(event) {
        console.log('testing delete');
        $(event.currentTarget).parent().remove();
  });

        // push the skill UI into the skills list
       skills.push($skill);
       // clear the input tag's value
       $input.val('');
       // call render()
       render()
   } else return;
}

function handleDelete() {
    alert('Elements inside of ul tag clicked');
}

function render() {
// Take the list of skills in the skills array and add them to the UI
if(!skills) $ul.css('margin-bottom', '30px');
else $ul.css('margin-bottom', '0px');
$ul.html(skills);
}

